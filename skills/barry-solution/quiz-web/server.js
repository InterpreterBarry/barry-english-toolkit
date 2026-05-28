// Barry English Toolkit Quiz Web — MIT-style open source
// Standalone local server for spaced-repetition vocabulary quiz.
// Reads Fancy Vocab from ~/.barry-english/fancy-vocab.md

const http = require('node:http');
const https = require('node:https');
const fs = require('node:fs');
const net = require('node:net');
const path = require('node:path');
const os = require('node:os');
const { spawn } = require('node:child_process');

// ========== CONFIG ==========
const HOME_DIR = path.join(os.homedir(), '.barry-english');
const FANCY_VOCAB = path.join(HOME_DIR, 'fancy-vocab.md');
const PORT_FILE = path.join(HOME_DIR, '.quiz-port');
const TTS_TMP = path.join(os.tmpdir(), 'barry-quiz-tts');

const DIR = __dirname;
const INDEX_HTML = path.join(DIR, 'index.html');

const START_PORT = 3456;

// ========== ENSURE HOME DIR ==========
function ensureHomeDir() {
  if (!fs.existsSync(HOME_DIR)) {
    fs.mkdirSync(HOME_DIR, { recursive: true });
  }
  if (!fs.existsSync(TTS_TMP)) {
    try { fs.mkdirSync(TTS_TMP, { recursive: true }); } catch (e) {}
  }
}

// ========== VOCAB PARSER ==========
function parseFancyVocab() {
  if (!fs.existsSync(FANCY_VOCAB)) return [];
  const raw = fs.readFileSync(FANCY_VOCAB, 'utf8');
  const lines = raw.split('\n');
  const vocab = [];
  const seen = new Set();
  let inTable = false;
  let colMap = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith('|') && line.toLowerCase().includes('expression') && line.toLowerCase().includes('example')) {
      inTable = true;
      const headers = line.split('|').map(h => h.trim().toLowerCase()).filter(h => h);
      colMap = {};
      headers.forEach((h, idx) => {
        if (h === 'expression') colMap.en = idx;
        else if (h === 'chinese') colMap.cn = idx;
        else if (h === 'example') colMap.ex = idx;
        else if (h === 'ipa') colMap.ipa = idx;
        else if (h === 'english meaning') colMap.engMeaning = idx;
      });
      continue;
    }
    if (inTable && /^\|[\s\-|]+\|$/.test(line)) continue;
    if (inTable && line.startsWith('|') && colMap) {
      const rawCells = line.split('|');
      const dataCells = rawCells.slice(1, rawCells.length - 1).map(c => c.trim());
      if (dataCells.length >= 3) {
        const en = dataCells[colMap.en] || '';
        const cn = dataCells[colMap.cn] || '';
        const ex = dataCells[colMap.ex] || '';
        const ipa = (colMap.ipa !== undefined && dataCells[colMap.ipa]) ? dataCells[colMap.ipa] : '';
        const engMeaning = (colMap.engMeaning !== undefined && dataCells[colMap.engMeaning]) ? dataCells[colMap.engMeaning] : '';
        if (en && cn && ex && !seen.has(en.toLowerCase())) {
          seen.add(en.toLowerCase());
          vocab.push({ en, cn, ex, ipa, engMeaning });
        }
      }
    }
    if (inTable && !line.startsWith('|') && line !== '') {
      inTable = false;
      colMap = null;
    }
  }
  return vocab;
}

function parseFancyVocabSessions() {
  if (!fs.existsSync(FANCY_VOCAB)) return [];
  const raw = fs.readFileSync(FANCY_VOCAB, 'utf8');
  const lines = raw.split('\n');
  const sessions = [];
  const MONTHS = { january:'01', february:'02', march:'03', april:'04', may:'05', june:'06', july:'07', august:'08', september:'09', october:'10', november:'11', december:'12' };
  const DATE_RE = /^###\s+(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{1,2}),\s+(\d{4})\s*[—–-]\s*(.*)/i;

  let foundational = { id: 'vs_foundational', title: 'Foundational Vocabulary', date: null, cards: [], cardCount: 0 };
  let currentSession = foundational;
  let inTable = false;
  let colMap = null;

  function slugify(text, maxLen) {
    return text.toLowerCase()
      .replace(/[“”‘’"'*]/g, '')
      .replace(/[^a-z0-9]+/g, '_')
      .replace(/^_|_$/g, '')
      .substring(0, maxLen || 24);
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith('### ')) {
      inTable = false;
      colMap = null;
      const dateMatch = line.match(DATE_RE);
      if (dateMatch) {
        const mm = MONTHS[dateMatch[1].toLowerCase()];
        const dd = dateMatch[2].length < 2 ? '0' + dateMatch[2] : dateMatch[2];
        const yyyy = dateMatch[3];
        const dateStr = yyyy + '-' + mm + '-' + dd;
        const titlePart = dateMatch[4].trim();
        const shortMonth = dateMatch[1].substring(0, 3);
        const displayTitle = shortMonth + ' ' + parseInt(dateMatch[2]) + ' — ' + titlePart;
        const sid = 'vs_' + dateStr + '_' + slugify(titlePart);
        currentSession = { id: sid, title: displayTitle, date: dateStr, cards: [], cardCount: 0 };
        sessions.push(currentSession);
      }
      continue;
    }
    if (line.startsWith('|') && line.toLowerCase().includes('expression') && line.toLowerCase().includes('example')) {
      inTable = true;
      const headers = line.split('|').map(h => h.trim().toLowerCase()).filter(h => h);
      colMap = {};
      headers.forEach((h, idx) => {
        if (h === 'expression') colMap.en = idx;
        else if (h === 'chinese') colMap.cn = idx;
        else if (h === 'example') colMap.ex = idx;
        else if (h === 'ipa') colMap.ipa = idx;
        else if (h === 'english meaning') colMap.engMeaning = idx;
      });
      continue;
    }
    if (inTable && /^\|[\s\-|]+\|$/.test(line)) continue;
    if (inTable && line.startsWith('|') && colMap) {
      const rawCells = line.split('|');
      const dataCells = rawCells.slice(1, rawCells.length - 1).map(c => c.trim());
      if (dataCells.length >= 3) {
        const en = dataCells[colMap.en] || '';
        const cn = dataCells[colMap.cn] || '';
        const ex = dataCells[colMap.ex] || '';
        const ipa = (colMap.ipa !== undefined && dataCells[colMap.ipa]) ? dataCells[colMap.ipa] : '';
        const engMeaning = (colMap.engMeaning !== undefined && dataCells[colMap.engMeaning]) ? dataCells[colMap.engMeaning] : '';
        if (en && cn && ex) {
          const isDup = currentSession.cards.some(c => c.front.toLowerCase() === en.toLowerCase());
          if (!isDup) {
            currentSession.cards.push({ front: en, back: cn, ipa, example: ex, engMeaning });
          }
        }
      }
    }
    if (inTable && !line.startsWith('|') && line !== '') {
      inTable = false;
      colMap = null;
    }
  }

  sessions.forEach(s => { s.cardCount = s.cards.length; });
  foundational.cardCount = foundational.cards.length;
  sessions.sort((a, b) => (b.date || '').localeCompare(a.date || ''));
  if (foundational.cards.length > 0) sessions.push(foundational);
  return sessions;
}

// ========== HTTP HELPERS ==========
function sendJson(res, code, obj) {
  res.writeHead(code, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(obj));
}

// ========== TTS HELPERS ==========
// Generate a temp file path for TTS output (.wav) and clean up old ones occasionally
let _ttsCleanupCounter = 0;
function ttsTmpPath(ext) {
  _ttsCleanupCounter++;
  if (_ttsCleanupCounter > 100) {
    _ttsCleanupCounter = 0;
    try {
      const files = fs.readdirSync(TTS_TMP);
      const cutoff = Date.now() - 60 * 60 * 1000; // 1 hour
      files.forEach(f => {
        try {
          const p = path.join(TTS_TMP, f);
          const st = fs.statSync(p);
          if (st.mtimeMs < cutoff) fs.unlinkSync(p);
        } catch (e) {}
      });
    } catch (e) {}
  }
  return path.join(TTS_TMP, 'tts_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8) + '.' + (ext || 'wav'));
}

function commandExists(cmd) {
  return new Promise(resolve => {
    const which = process.platform === 'win32' ? 'where' : 'which';
    const p = spawn(which, [cmd]);
    p.on('error', () => resolve(false));
    p.on('close', code => resolve(code === 0));
  });
}

function runCmd(cmd, args, opts) {
  return new Promise((resolve, reject) => {
    const p = spawn(cmd, args, opts || {});
    let stderr = '';
    p.stderr && p.stderr.on('data', d => { stderr += d.toString(); });
    p.on('error', err => reject(err));
    p.on('close', code => {
      if (code === 0) resolve();
      else reject(new Error('Exit ' + code + (stderr ? ': ' + stderr.slice(0, 200) : '')));
    });
  });
}

async function systemTTS(text, accent) {
  // accent: 'british' | 'american' (default 'british')
  const platform = process.platform;
  const safeText = String(text || '').slice(0, 400);
  if (!safeText) throw new Error('empty text');

  if (platform === 'darwin') {
    // macOS: `say` is built-in
    const voice = accent === 'american' ? 'Samantha' : 'Daniel';
    const out = ttsTmpPath('aiff');
    await runCmd('say', ['-v', voice, '-o', out, safeText]);
    return { path: out, mime: 'audio/aiff' };
  } else if (platform === 'win32') {
    // Windows PowerShell SAPI
    const out = ttsTmpPath('wav');
    const ps = `Add-Type -AssemblyName System.Speech; ` +
      `$s = New-Object System.Speech.Synthesis.SpeechSynthesizer; ` +
      `$voices = $s.GetInstalledVoices(); ` +
      `$pref = '${accent === 'american' ? 'en-US' : 'en-GB'}'; ` +
      `foreach ($v in $voices) { if ($v.VoiceInfo.Culture.Name -eq $pref) { $s.SelectVoice($v.VoiceInfo.Name); break } } ` +
      `$s.SetOutputToWaveFile('${out.replace(/'/g, "''")}'); ` +
      `$s.Speak([string]'${safeText.replace(/'/g, "''")}'); ` +
      `$s.Dispose()`;
    await runCmd('powershell', ['-NoProfile', '-Command', ps]);
    return { path: out, mime: 'audio/wav' };
  } else {
    // Linux: try espeak-ng, then espeak
    const haveNg = await commandExists('espeak-ng');
    const haveEs = haveNg ? false : await commandExists('espeak');
    if (!haveNg && !haveEs) {
      const err = new Error('espeak not installed');
      err.code = 'ESPEAK_MISSING';
      throw err;
    }
    const out = ttsTmpPath('wav');
    const voice = accent === 'american' ? 'en-us' : 'en-gb';
    const bin = haveNg ? 'espeak-ng' : 'espeak';
    await runCmd(bin, ['-v', voice, '-w', out, safeText]);
    return { path: out, mime: 'audio/wav' };
  }
}

function googleTTS(text, lang) {
  const tlMap = { 'en-GB': 'en-GB', 'en-US': 'en-US', 'en': 'en' };
  const tl = tlMap[lang] || 'en';
  const q = encodeURIComponent(String(text || '').slice(0, 200));
  return 'https://translate.googleapis.com/translate_tts?ie=UTF-8&tl=' + tl + '&client=tw-ob&q=' + q;
}

// ========== ROUTER ==========
async function handle(req, res) {
  try {
    const urlPath = req.url.split('?')[0];

    // Static index.html
    if (req.method === 'GET' && (urlPath === '/' || urlPath === '/index.html')) {
      const html = fs.readFileSync(INDEX_HTML, 'utf8');
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(html);
      return;
    }

    // Vocab feed
    if (req.method === 'GET' && urlPath === '/api/vocab') {
      const vocab = parseFancyVocab();
      sendJson(res, 200, { vocab, count: vocab.length });
      return;
    }
    if (req.method === 'GET' && urlPath === '/api/vocab/sessions') {
      const sessions = parseFancyVocabSessions();
      sendJson(res, 200, { sessions, count: sessions.length });
      return;
    }

    // ---- TTS endpoints ----
    if (req.method === 'GET' && urlPath === '/api/tts/system') {
      const qs = new URL(req.url, 'http://localhost').searchParams;
      const text = qs.get('text') || '';
      const accent = qs.get('accent') || 'british';
      if (!text) { sendJson(res, 400, { error: 'text required' }); return; }
      try {
        const result = await systemTTS(text, accent);
        const data = fs.readFileSync(result.path);
        res.writeHead(200, { 'Content-Type': result.mime, 'Cache-Control': 'public, max-age=3600' });
        res.end(data);
        try { fs.unlinkSync(result.path); } catch (e) {}
      } catch (err) {
        const code = err.code === 'ESPEAK_MISSING' ? 503 : 500;
        sendJson(res, code, { error: err.message || String(err), platform: process.platform });
      }
      return;
    }

    if (req.method === 'GET' && urlPath === '/api/tts/google') {
      const qs = new URL(req.url, 'http://localhost').searchParams;
      const text = qs.get('text') || '';
      const lang = qs.get('lang') || 'en';
      if (!text) { sendJson(res, 400, { error: 'text required' }); return; }
      const ttsUrl = googleTTS(text, lang);
      https.get(ttsUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } }, upstream => {
        if (upstream.statusCode !== 200) {
          sendJson(res, 502, { error: 'Google TTS upstream ' + upstream.statusCode });
          upstream.resume();
          return;
        }
        res.writeHead(200, { 'Content-Type': 'audio/mpeg', 'Cache-Control': 'public, max-age=86400' });
        upstream.pipe(res);
      }).on('error', e => { sendJson(res, 502, { error: e.message }); });
      return;
    }

    // Health
    if (req.method === 'GET' && urlPath === '/api/health') {
      sendJson(res, 200, {
        ok: true,
        vocabPath: FANCY_VOCAB,
        vocabExists: fs.existsSync(FANCY_VOCAB),
        platform: process.platform
      });
      return;
    }

    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  } catch (err) {
    sendJson(res, 500, { error: String(err && err.message || err) });
  }
}

// ========== PORT FALLBACK ==========
function tryListen(port) {
  return new Promise((resolve) => {
    const tester = net.createServer()
      .once('error', () => resolve(false))
      .once('listening', () => tester.close(() => resolve(true)))
      .listen(port, '127.0.0.1');
  });
}

async function findAvailablePort(start) {
  for (let p = start; p < start + 100; p++) {
    if (await tryListen(p)) return p;
  }
  throw new Error('No available port in range ' + start + '-' + (start + 99));
}

// ========== START ==========
(async () => {
  ensureHomeDir();
  // Honor QUIZ_PORT env override; otherwise auto-find from START_PORT
  const envPort = process.env.QUIZ_PORT ? parseInt(process.env.QUIZ_PORT, 10) : null;
  const port = (envPort && !isNaN(envPort)) ? envPort : await findAvailablePort(START_PORT);
  const server = http.createServer(handle);
  server.listen(port, '127.0.0.1', () => {
    try { fs.writeFileSync(PORT_FILE, String(port), 'utf8'); } catch (e) {}
    process.stdout.write('QUIZ_PORT=' + port + '\n');
    process.stdout.write('Quiz Web ready: http://127.0.0.1:' + port + '\n');
    process.stdout.write('Vocab source: ' + FANCY_VOCAB + '\n');
    process.stdout.write('Platform:     ' + process.platform + '\n');
  });
})().catch(err => {
  process.stderr.write('Failed to start: ' + (err && err.message || err) + '\n');
  process.exit(1);
});

// Keep server alive on uncaught errors (helpful for TTS subprocess hiccups)
process.on('uncaughtException', err => {
  process.stderr.write('[uncaughtException] ' + (err && err.message || err) + '\n');
});
process.on('unhandledRejection', reason => {
  process.stderr.write('[unhandledRejection] ' + (reason && reason.message || reason) + '\n');
});
