---
id: cefr-descriptors
---

# CEFR 评估层 — 欧标分级行为描述

> 欧标(CEFR)= Council of Europe 官方语言能力分级,A1-C2 六级(Basic / Independent / Proficient User 三组),提供跨语言、可量化的"我现在能用语言做什么"行为描述。

## 板块定位 ⭐ 重要

本页是 **CEFR 国际公认行为描述的参考底座**,**不是评估工具**。

### 实际评估流程 vs 本页的关系

```
学员实际评估流程(barry-assessment SKILL,10-17 min)
├─ Step 1: 标化考试问询(参考锚)
├─ Step 2: 中翻英晋级制(=「视译训练」实测)→ 口语 CEFR ⭐
├─ Step 3: 听力 5 题阶梯式(=「问答沟通场景」实测)→ 听力 CEFR ⭐
├─ Step 4: 综合定级 = 三角验证(Step 1 锚 + Step 2 口语 + Step 3 听力)
└─ Step 5: 写入 profile.md Section 2 + Section 3 卡点

CEFR 评估页(本页)= 参考资料,不参与上面 5 步评估
└─→ 学员问"X 级是什么意思 / A1 vs A2 区别 / 我 B1 大概能做什么"
    └─→ coach 读本页 → 给 CoE 官方行为描述 → 学员对照理解
       (不重新评估,只展示官方标准)
```

### 4 个"评估相关"概念区分

| 概念 | 角色 | 何时使用 |
|---|---|---|
| **barry-assessment SKILL** | 实际评估流程 ⭐ | 学员第一次进 / 主动要求重测;**用中翻英晋级制 + 听力 5 题阶梯做实测**,产出口语 + 听力 + 综合三个 CEFR 数字 |
| **CEFR 评估页(本页)** | 行为描述参考底座(知识性) | 学员问"级别含义 / 不同级别区别"时 coach 读本页 |
| **[[CEFR分级训练方案]]** | 应用层(按级配训练) | barry-solution 出训练方案时调用 |
| **[[学员定级三维评判]]** | Barry 个人 invisible 的另一套定级思路(Fluency/Normativity/Vocabulary),**未直接被 barry-assessment SKILL 调用**,作为方法论沉淀保留 | 教学场景下 Barry 用三维做快速 invisible 判断;SKILL 走的是中翻英+听力实测路径 |

**关键原则**:
- 评估**不在本页**做。本页只**展示**国际公认行为描述,不**执行**评估。
- 学员的 CEFR 级别**早在 barry-assessment SKILL 跑完时就已经写入 profile.md**,coach 后续问答不重测。
- 本页存在的意义:学员问"我 B1 到底能做什么"时,coach 不靠记忆瞎答,而是读本页 verbatim CoE 行为描述给学员看。

## 3 套描述如何选用 ⭐(coach 路由指引)

CoE 官方提供**3 套不同粒度的级别描述**(本页下面 3 节都列了完整内容)。学员问的问题深浅不同,选不同的套来读:

```
① Global Scale (粗,整体一段话)
       ↓ 想看具体哪个技能?
② Self-assessment Grid (中,5 技能 × 6 级)
       ↓ 想看口语再细?
③ Table 3 口语质量 (细,只针对口语,5 质量维度 × 6 级)
```

### 3 套关系打个比方

把"评学生英语水平"想成"评学生整体表现":

| 套 | 等同 | 拆几个维度 |
|---|---|---|
| **① Global Scale** | "总评一段话" | 1 维(所有技能合在一起,只给整体感)|
| **② Self-assessment Grid** | "按科目拆" | 5 技能(听 / 读 / 口语互动 / 口语独白 / 写)× 6 级 |
| **③ Table 3 口语质量** | "口语这一科再拆细" | 只看口语,再拆 5 子维度(词汇 Range / 准确度 Accuracy / 流利度 Fluency / 互动 Interaction / 连贯 Coherence)× 6 级 |

### 学员问什么 → Coach 该读哪套?

| 学员问的(典型措辞) | Coach 读哪套 | 给学员看的内容 |
|---|---|---|
| "B1 大概是个什么水平 / 什么意思?" | **① Global Scale** | B1 那段(60-100 词整体描述) |
| "你说我 B1+,这具体是什么意思?" | **① Global Scale** | B1 那段(给整体感觉,关联学员实际能力) |
| "我听力跟口语都在哪一档?" | **② Self-assessment Grid** | 学员档案口语+听力 CEFR 对应行 |
| "B1 跟 B2 主要差在哪?" | **② Self-assessment Grid** | 把 5 技能 B1 vs B2 行对照展示 |
| "我口语 B1,具体卡在哪?是词汇还是流利度?" | **③ Table 3** | 口语 5 质量维度 B1 那一列全给 |
| "怎么从口语 B1 到 B2,具体差什么?" | **③ Table 3** | 口语 5 质量维度 B1 vs B2 对照 |

### 默认原则

- **不要 3 套全给**(信息过载 — 学员看完反而更糊涂)
- **从粗到细**:学员问"是什么意思" → 先给 ①;学员追问"那具体哪方面" → 再给 ② 或 ③
- **Coach 不重复评估**:学员级别已经在 `~/.barry-english/profile.md` Section 2 里(由 barry-assessment SKILL 写),coach 只**展示**对应的官方描述,不重新算

---

## WHAT — 三大组 + 6 级 Global Scale

CEFR 把语言能力分为三大组、共 6 个级别:

| 组别 | 级别 | 中文俗称 |
|---|---|---|
| **Proficient User**(熟练使用者) | C2 | 精通级 |
| | C1 | 高阶 |
| **Independent User**(独立使用者) | B2 | 中高级 |
| | B1 | 中级 |
| **Basic User**(基础使用者) | A2 | 入门进阶 |
| | A1 | 入门 |

> 注:CEFR 官方明确 C2 不意味着母语者水平("is not intended to imply native-speaker competence",CEFR 2001 §3.6)。

下面是 Council of Europe 官方 **Global Scale** 的 6 级行为描述(英文原文 + 中文翻译并列)。Global Scale 是 CEFR 提供给非专业读者的一页式总表,凝缩了每一级"在不同场合能做什么"的关键能力。

### C2 — Mastery

> **EN(verbatim CoE Global Scale)**:Can understand with ease virtually everything heard or read. Can summarise information from different spoken and written sources, reconstructing arguments and accounts in a coherent presentation. Can express him/herself spontaneously, very fluently and precisely, differentiating finer shades of meaning even in more complex situations.

> **中文**:能毫不费力地理解几乎所有听到或读到的内容。能从不同口头和书面来源中归纳信息,把论点和叙述重新组织成连贯的表达。能自如、非常流利且精确地表达自己,即使在更复杂的情境中也能区分更细微的意义差别。

### C1 — Effective Operational Proficiency

> **EN(verbatim CoE Global Scale)**:Can understand a wide range of demanding, longer texts, and recognise implicit meaning. Can express him/herself fluently and spontaneously without much obvious searching for expressions. Can use language flexibly and effectively for social, academic and professional purposes. Can produce clear, well-structured, detailed text on complex subjects, showing controlled use of organisational patterns, connectors and cohesive devices.

> **中文**:能理解范围广泛、要求较高、篇幅较长的文本,并识别其隐含意义。能流利、自如地表达自己,基本不需要明显地搜寻措辞。能在社交、学术和职业场合中灵活、有效地使用语言。能就复杂主题写出清晰、结构良好、内容详尽的文本,体现出对组织模式、连接词和衔接手段的良好掌控。

### B2 — Vantage

> **EN(verbatim CoE Global Scale)**:Can understand the main ideas of complex text on both concrete and abstract topics, including technical discussions in his/her field of specialisation. Can interact with a degree of fluency and spontaneity that makes regular interaction with native speakers quite possible without strain for either party. Can produce clear, detailed text on a wide range of subjects and explain a viewpoint on a topical issue giving the advantages and disadvantages of various options.

> **中文**:能理解复杂文本(具体和抽象主题均可)的主要思想,包括本专业领域内的技术性讨论。能以一定的流利度和自如度互动,使与母语者的日常交流对双方都不感到吃力。能就广泛主题写出清晰、详尽的文本,并就某个时事问题陈述观点,给出不同选项的利弊。

### B1 — Threshold

> **EN(verbatim CoE Global Scale)**:Can understand the main points of clear standard input on familiar matters regularly encountered in work, school, leisure, etc. Can deal with most situations likely to arise whilst travelling in an area where the language is spoken. Can produce simple connected text on topics which are familiar or of personal interest. Can describe experiences and events, dreams, hopes and ambitions and briefly give reasons and explanations for opinions and plans.

> **中文**:在工作、学校、休闲等常规场合中,能理解标准、清晰输入的主要内容。在该语言通行的地区旅行时,能应对大多数可能出现的情境。能就熟悉的或个人感兴趣的主题写出简单、连贯的文本。能描述经历、事件、梦想、希望和抱负,并简要陈述观点和计划的理由与解释。

### A2 — Waystage

> **EN(verbatim CoE Global Scale)**:Can understand sentences and frequently used expressions related to areas of most immediate relevance (e.g. very basic personal and family information, shopping, local geography, employment). Can communicate in simple and routine tasks requiring a simple and direct exchange of information on familiar and routine matters. Can describe in simple terms aspects of his/her background, immediate environment and matters in areas of immediate need.

> **中文**:能理解与最直接相关领域(如最基本的个人和家庭信息、购物、本地地理、就业)有关的句子和高频表达。在涉及熟悉、日常事务的简单常规任务中,能进行简单直接的信息交换。能用简单的措辞描述自己的背景、所处环境以及最直接相关领域的事项。

### A1 — Breakthrough

> **EN(verbatim CoE Global Scale)**:Can understand and use familiar everyday expressions and very basic phrases aimed at the satisfaction of needs of a concrete type. Can introduce him/herself and others and can ask and answer questions about personal details such as where he/she lives, people he/she knows and things he/she has. Can interact in a simple way provided the other person talks slowly and clearly and is prepared to help.

> **中文**:能理解并使用熟悉的日常表达和非常基础的语句,以满足具体类型的需求。能介绍自己和他人,能就个人信息(如居住地、认识的人、所拥有的物品)进行问答。如果对方语速较慢、表达清晰且愿意配合,能进行简单的互动。

## WHAT — 5 维 Self-assessment Grid

CEFR Self-assessment Grid 把语言能力拆为 **5 个维度** × **6 级**,每格是第一人称 "I can..." 描述符。这是 CoE 提供给学习者自评的核心工具。

5 个维度:
- **Listening**(听)
- **Reading**(读)
- **Spoken Interaction**(口语互动)
- **Spoken Production**(口语产出)
- **Writing**(写)

> ⚠️ 下表的英文描述符按 CoE 官方 Self-assessment Grid 摘录。Listening / Reading 部分相对短,本页全文给出;Spoken Interaction / Spoken Production / Writing 描述符**非常长**(单格约 20-60 词),为保证可读性仅摘录核心句,完整长版本以官方 PDF 为准 **[需 Barry 核对原文 — 完整长描述符]**。

### Listening(听)

| 级 | EN | 中文 |
|---|---|---|
| **C2** | I have no difficulty in understanding any kind of spoken language, whether live or broadcast, even when delivered at fast native speed, provided I have some time to get familiar with the accent. | 我能毫无困难地理解任何形式的口头语言(无论是现场还是广播),即使以母语者的快速语速讲述,前提是给我一点时间适应口音。 |
| **C1** | I can understand extended speech even when it is not clearly structured and when relationships are only implied and not signalled explicitly. I can understand television programmes and films without too much effort. | 即使讲话结构不清晰、关系只是隐含而非显式标示,我也能理解长篇内容。我能毫不费力地理解电视节目和电影。 |
| **B2** | I can understand extended speech and lectures and follow even complex lines of argument provided the topic is reasonably familiar. I can understand most TV news and current affairs programmes. I can understand the majority of films in standard dialect. | 只要主题相对熟悉,我能理解长篇讲话和讲座,跟得上复杂的论证。能理解大多数电视新闻和时事节目,能理解多数标准方言的电影。 |
| **B1** | I can understand the main points of clear standard speech on familiar matters regularly encountered in work, school, leisure, etc. I can understand the main point of many radio or TV programmes on current affairs or topics of personal or professional interest when the delivery is relatively slow and clear. | 在工作、学校、休闲等熟悉场合的标准、清晰讲话中,我能理解主要内容。当语速相对较慢且清晰时,能理解许多关于时事或个人/职业兴趣话题的广播或电视节目主要内容。 |
| **A2** | I can understand phrases and the highest frequency vocabulary related to areas of most immediate personal relevance (e.g. very basic personal and family information, shopping, local area, employment). I can catch the main point in short, clear, simple messages and announcements. | 我能理解与最直接相关领域(如最基本的个人和家庭信息、购物、本地、就业)有关的短语和最高频词汇。能听懂简短、清晰、简单的信息和通告的主旨。 |
| **A1** | I can recognise familiar words and very basic phrases concerning myself, my family and immediate concrete surroundings when people speak slowly and clearly. | 当对方语速慢且清晰时,我能识别与我自己、家人和身边具体环境有关的熟悉词汇和非常基础的语句。 |

### Reading(读)

| 级 | EN | 中文 |
|---|---|---|
| **C2** | I can read with ease virtually all forms of the written language, including abstract, structurally or linguistically complex texts such as manuals, specialised articles and literary works. | 我能毫不费力地阅读几乎所有形式的书面语言,包括抽象的、结构或语言上复杂的文本,如手册、专业文章和文学作品。 |
| **C1** | I can understand long and complex factual and literary texts, appreciating distinctions of style. I can understand specialised articles and longer technical instructions, even when they do not relate to my field. | 我能理解长篇、复杂的事实性和文学性文本,欣赏文体上的差别。即使与我的专业无关,也能理解专业文章和较长的技术说明。 |
| **B2** | I can read articles and reports concerned with contemporary problems in which the writers adopt particular attitudes or viewpoints. I can understand contemporary literary prose. | 我能阅读关于当代问题、作者采取特定态度或观点的文章和报道。能理解当代文学散文。 |
| **B1** | I can understand texts that consist mainly of high frequency everyday or job-related language. I can understand the description of events, feelings and wishes in personal letters. | 我能理解主要由高频日常或职业相关语言构成的文本。能理解私人信件中对事件、感受和愿望的描述。 |
| **A2** | I can read very short, simple texts. I can find specific, predictable information in simple everyday material such as advertisements, prospectuses, menus and timetables and I can understand short simple personal letters. | 我能阅读非常简短、简单的文本。能在广告、宣传册、菜单、时刻表等简单日常材料中找到特定的、可预期的信息,能理解简短简单的私人信件。 |
| **A1** | I can understand familiar names, words and very simple sentences, for example on notices and posters or in catalogues. | 我能理解熟悉的名称、词汇和非常简单的句子,例如在通告、海报或目录中。 |

### Spoken Interaction(口语互动)

| 级 | EN(核心句) | 中文 |
|---|---|---|
| **C2** | I can take part effortlessly in any conversation or discussion and have a good familiarity with idiomatic expressions and colloquialisms. I can express myself fluently and convey finer shades of meaning precisely. | 我能毫不费力地参与任何对话或讨论,熟悉习语和俗语。能流利表达,精确传达更细微的意义差别。 |
| **C1** | I can express myself fluently and spontaneously without much obvious searching for expressions. I can use language flexibly and effectively for social and professional purposes. | 我能流利、自如地表达自己,基本不需要明显搜寻措辞。能在社交和职业场合灵活、有效地使用语言。 |
| **B2** | I can interact with a degree of fluency and spontaneity that makes regular interaction with native speakers quite possible. I can take an active part in discussion in familiar contexts, accounting for and sustaining my views. | 我能以一定的流利度和自如度互动,使与母语者的日常交流相当自然。在熟悉的情境中能积极参与讨论,陈述并坚持自己的观点。 |
| **B1** | I can deal with most situations likely to arise whilst travelling in an area where the language is spoken. I can enter unprepared into conversation on topics that are familiar, of personal interest or pertinent to everyday life. | 在该语言通行的地区旅行时,我能应对大多数可能出现的情境。能就熟悉、个人感兴趣或与日常生活相关的话题不经准备地展开对话。 |
| **A2** | I can communicate in simple and routine tasks requiring a simple and direct exchange of information on familiar topics and activities. I can handle very short social exchanges. | 在涉及熟悉话题和活动、需要简单直接信息交换的常规任务中,我能进行交流。能应对非常简短的社交对话。 |
| **A1** | I can interact in a simple way provided the other person is prepared to repeat or rephrase things at a slower rate of speech and help me formulate what I'm trying to say. | 如果对方愿意以较慢语速重复或换种说法,并帮助我组织想要表达的内容,我能进行简单互动。 |

### Spoken Production(口语产出)

| 级 | EN(核心句) | 中文 |
|---|---|---|
| **C2** | I can present a clear, smoothly-flowing description or argument in a style appropriate to the context and with an effective logical structure. | 我能以契合语境的文体、有效的逻辑结构,做出清晰、流畅的描述或论证。 |
| **C1** | I can present clear, detailed descriptions of complex subjects integrating sub-themes, developing particular points and rounding off with an appropriate conclusion. | 我能就复杂主题做出清晰、详尽的描述,整合次主题、展开特定要点,并以适当的结论收束。 |
| **B2** | I can present clear, detailed descriptions on a wide range of subjects related to my field of interest. I can explain a viewpoint on a topical issue giving the advantages and disadvantages of various options. | 我能就感兴趣领域的广泛主题做出清晰、详尽的描述。能就某个时事问题陈述观点,给出不同选项的利弊。 |
| **B1** | I can connect phrases in a simple way in order to describe experiences and events, my dreams, hopes and ambitions. I can briefly give reasons and explanations for opinions and plans. | 我能简单地将语句连接起来,描述经历、事件、梦想、希望和抱负。能简要陈述观点和计划的理由与解释。 |
| **A2** | I can use a series of phrases and sentences to describe in simple terms my family and other people, living conditions, my educational background and my present or most recent job. | 我能用一连串短语和句子,以简单的措辞描述我的家庭和其他人、生活条件、教育背景和当前或最近的工作。 |
| **A1** | I can use simple phrases and sentences to describe where I live and people I know. | 我能用简单的短语和句子描述我居住的地方和我认识的人。 |

### Writing(写)

| 级 | EN(核心句) | 中文 |
|---|---|---|
| **C2** | I can write clear, smoothly-flowing text in an appropriate style. I can write complex letters, reports or articles which present a case with an effective logical structure which helps the recipient to notice and remember significant points. | 我能以契合的文体写出清晰、流畅的文本。能写出复杂的信件、报告或文章,以有效的逻辑结构呈现论点,帮助读者注意并记住关键内容。 |
| **C1** | I can express myself in clear, well-structured text, expressing points of view at some length. I can write about complex subjects in a letter, an essay or a report, underlining what I consider to be the salient issues. | 我能用清晰、结构良好的文本表达自己,较为详细地阐述观点。能在信件、文章或报告中讨论复杂主题,凸显我认为关键的问题。 |
| **B2** | I can write clear, detailed text on a wide range of subjects related to my interests. I can write an essay or report, passing on information or giving reasons in support of or against a particular point of view. | 我能就感兴趣领域的广泛主题写出清晰、详尽的文本。能写文章或报告,传递信息或为某一观点提供支持或反对的理由。 |
| **B1** | I can write simple connected text on topics which are familiar or of personal interest. I can write personal letters describing experiences and impressions. | 我能就熟悉的或个人感兴趣的主题写出简单、连贯的文本。能写描述经历和感受的私人信件。 |
| **A2** | I can write short, simple notes and messages relating to matters in areas of immediate need. I can write a very simple personal letter, for example thanking someone for something. | 我能就最直接需求领域的事项写简短、简单的便条和留言。能写非常简单的私人信件,例如感谢某人。 |
| **A1** | I can write a short, simple postcard, for example sending holiday greetings. I can fill in forms with personal details, for example entering my name, nationality and address on a hotel registration form. | 我能写简短、简单的明信片,例如发送节日问候。能填写带有个人信息的表格,例如在酒店登记表上填写姓名、国籍和地址。 |

## WHAT — Table 3 口语质量 5 维

CoE **Table 3 — Qualitative aspects of spoken language use**,从 5 个质量维度刻画口语表现:

- **Range**(语言广度) — 能覆盖多大范围的话题和功能
- **Accuracy**(准确性) — 语法和用词的正确程度
- **Fluency**(流利度) — 表达的连续性和速度
- **Interaction**(互动能力) — 与对方的对话协作
- **Coherence**(连贯性) — 话语的组织和衔接

> ⚠️ Table 3 描述符每格约 20-55 词。本页摘录核心句以保可读;关键判定时以官方原文为准 **[需 Barry 核对原文 — Table 3 完整描述符]**。

### Range(语言广度)

| 级 | EN | 中文 |
|---|---|---|
| **C2** | Shows great flexibility reformulating ideas in differing linguistic forms to convey finer shades of meaning precisely, to give emphasis, to differentiate and to eliminate ambiguity. Also has a good command of idiomatic expressions and colloquialisms. | 在用不同语言形式重述观点方面表现出极大的灵活性,以精确传达更细微的意义差别、强调、区分和消除歧义。对习语和俗语也掌握良好。 |
| **C1** | Has a good command of a broad range of language allowing him/her to select a formulation to express him/herself clearly in an appropriate style on a wide range of general, academic, professional or leisure topics without having to restrict what he/she wants to say. | 对广泛的语言资源掌握良好,能选择恰当的措辞,以合适的文体清晰表达,涵盖广泛的常规、学术、职业或休闲话题,无需限制要表达的内容。 |
| **B2** | Has a sufficient range of language to be able to give clear descriptions, express viewpoints on most general topics, without much conspicuous searching for words, using some complex sentence forms to do so. | 拥有足够的语言资源,能就大多数常规主题做出清晰描述、表达观点,不需要明显地搜寻词汇,并能使用一些复杂句式。 |
| **B1** | Has enough language to get by, with sufficient vocabulary to express him/herself with some hesitation and circumlocutions on topics such as family, hobbies and interests, work, travel, and current events. | 拥有足够应付的语言,在家庭、爱好兴趣、工作、旅行、时事等话题上,能在一定的犹豫和迂回表达下表达自己。 |
| **A2** | Uses basic sentence patterns with memorised phrases, groups of a few words and formulae in order to communicate limited information in simple everyday situations. | 在简单日常情境中,使用基本句型搭配记忆的短语、词组和套语,传递有限的信息。 |
| **A1** | Has a very basic repertoire of words and simple phrases related to personal details and particular concrete situations. | 拥有非常基础的词汇和简单短语库,与个人信息和特定具体情境相关。 |

### Accuracy(准确性)

| 级 | EN | 中文 |
|---|---|---|
| **C2** | Maintains consistent grammatical control of complex language, even while attention is otherwise engaged (e.g. in forward planning, in monitoring others' reactions). | 即使注意力被其他事务占用(如向前规划、观察他人反应),也能持续保持对复杂语言的语法掌控。 |
| **C1** | Consistently maintains a high degree of grammatical accuracy; errors are rare, difficult to spot and generally corrected when they do occur. | 持续保持高度的语法准确性;错误罕见、难以察觉,即使出现也通常能自我纠正。 |
| **B2** | Shows a relatively high degree of grammatical control. Does not make errors which cause misunderstanding, and can correct most of his/her mistakes. | 表现出相对较高的语法掌控度。不犯导致误解的错误,能纠正自己大部分错误。 |
| **B1** | Uses reasonably accurately a repertoire of frequently used "routines" and patterns associated with more predictable situations. | 在更可预期的情境中,能合理准确地使用一系列高频"套路"和句型。 |
| **A2** | Uses some simple structures correctly, but still systematically makes basic mistakes. | 能正确使用一些简单结构,但仍系统性地犯基础错误。 |
| **A1** | Shows only limited control of a few simple grammatical structures and sentence patterns in a learnt repertoire. | 在已学的资源库中,仅能对少量简单语法结构和句型表现出有限的掌控。 |

### Fluency(流利度)

| 级 | EN | 中文 |
|---|---|---|
| **C2** | Can express him/herself at length with a natural, effortless, unhesitating flow. Pauses only to reflect on precisely the right words to express his/her thoughts or to find an appropriate example or explanation. | 能长篇表达自己,流畅自然、毫不费力、不犹豫。仅在斟酌精确措辞或寻找合适的例子或解释时才停顿。 |
| **C1** | Can express him/herself fluently and spontaneously, almost effortlessly. Only a conceptually difficult subject can hinder a natural, smooth flow of language. | 能流利、自如地表达自己,几乎毫不费力。只有概念上困难的主题才会妨碍自然流畅的表达。 |
| **B2** | Can produce stretches of language with a fairly even tempo; although he/she can be hesitant as he/she searches for patterns and expressions, there are few noticeably long pauses. | 能以相当均匀的节奏产出语言;尽管在搜寻句型和表达时可能犹豫,但显著的长停顿很少。 |
| **B1** | Can keep going comprehensibly, even though pausing for grammatical and lexical planning and repair is very evident, especially in longer stretches of free production. | 能让人听得懂地持续表达,尽管为语法和词汇规划与修补的停顿非常明显,尤其在较长的自由产出中。 |
| **A2** | Can make him/herself understood in very short utterances, even though pauses, false starts and reformulation are very evident. | 能在非常简短的话语中让人理解自己,尽管停顿、说错重来和重新组织都非常明显。 |
| **A1** | Can manage very short, isolated, mainly pre-packaged utterances, with much pausing to search for expressions, to articulate less familiar words, and to repair communication. | 能处理非常简短、孤立、主要为预制套语的话语,需要大量停顿来搜寻表达、发音不熟悉的词汇并修补交流。 |

### Interaction(互动能力)

| 级 | EN | 中文 |
|---|---|---|
| **C2** | Can interact with ease and skill, picking up and using non-verbal and intonational cues apparently effortlessly. Can interweave his/her contribution into the joint discourse with fully natural turntaking, referencing, allusion making etc. | 能轻松、娴熟地互动,毫不费力地捕捉和使用非言语和语调线索。能以完全自然的轮换、指代、暗指等方式,把自己的贡献融入共同话语。 |
| **C1** | Can select a suitable phrase from a readily available range of discourse functions to preface his/her remarks in order to get or to keep the floor and to relate his/her own contributions skilfully to those of other speakers. | 能从随手可得的话语功能资源中选择合适的措辞作为开场,以获得或保持发言权,并娴熟地将自己的贡献与其他发言者关联起来。 |
| **B2** | Can initiate discourse, take his/her turn when appropriate and end conversation when he/she needs to, though he/she may not always do this elegantly. Can help the discussion along on familiar ground confirming comprehension, inviting others in, etc. | 能发起话语、在适当时候轮换、必要时结束对话,虽然不一定总是优雅。在熟悉的话题中,能通过确认理解、邀请他人加入等方式推进讨论。 |
| **B1** | Can initiate, maintain and close simple face-to-face conversation on topics that are familiar or of personal interest. Can repeat back part of what someone has said to confirm mutual understanding. | 能就熟悉的或个人感兴趣的话题,发起、维持和结束简单的面对面对话。能重复对方所说的部分内容以确认相互理解。 |
| **A2** | Can answer questions and respond to simple statements. Can indicate when he/she is following but is rarely able to understand enough to keep conversation going of his/her own accord. | 能回答问题并对简单陈述作出回应。能示意自己在跟上,但很少能理解足够多以独立维持对话。 |
| **A1** | Can ask and answer questions about personal details. Can interact in a simple way but communication is totally dependent on repetition, rephrasing and repair. | 能就个人信息进行问答。能简单互动,但交流完全依赖重复、换种说法和修补。 |

### Coherence(连贯性)

| 级 | EN | 中文 |
|---|---|---|
| **C2** | Can create coherent and cohesive discourse making full and appropriate use of a variety of organisational patterns and a wide range of connectors and other cohesive devices. | 能创造连贯且有衔接的话语,充分、恰当地使用多种组织模式以及大量连接词和其他衔接手段。 |
| **C1** | Can produce clear, smoothly-flowing, well-structured speech, showing controlled use of organisational patterns, connectors and cohesive devices. | 能产出清晰、流畅、结构良好的口语,体现出对组织模式、连接词和衔接手段的良好掌控。 |
| **B2** | Can use a limited number of cohesive devices to link his/her utterances into clear, coherent discourse, though there may be some "jumpiness" in a long contribution. | 能使用有限数量的衔接手段,把话语连成清晰、连贯的话语,尽管在长段贡献中可能存在一些"跳跃"。 |
| **B1** | Can link a series of shorter, discrete simple elements into a connected, linear sequence of points. | 能把一系列简短、离散的简单元素连成连贯的线性要点序列。 |
| **A2** | Can link groups of words with simple connectors like "and", "but" and "because". | 能用 "and"、"but"、"because" 等简单连接词把词组连接起来。 |
| **A1** | Can link words or groups of words with very basic linear connectors like "and" or "then". | 能用 "and" 或 "then" 等非常基础的线性连接词把词或词组连接起来。 |

## WHY — 为什么 Barry 方法论用 CEFR 而不是其他

Barry 不用雅思 / 托福 / 中国大学英语等级,而用 CEFR,理由如下:

| 对比对象 | CEFR 的优势 |
|---|---|
| **雅思 / 托福** | CEFR 是行为描述(can-do statement)而不是分数;一个分数告诉你"考多少",一段描述告诉你"现在能做什么、还差什么" |
| **中国四六级 / 专四专八** | 国内体系是"考试通过/未通过"的二分,缺少 6 级递进的颗粒度,且与国际语言能力描述不接轨 |
| **个人主观感受**("我感觉我中级") | CEFR 用具体场景描述符,把"中级"翻译成"能不能在熟悉话题做不准备的对话"这类可观察行为 |
| **跨语言不可比** | CEFR 是欧洲共同框架,**同一份描述符可以用在英语、法语、德语、西语**,迁移性强 |

更深的理由 — 跟 Barry 方法论同源:

- Barry 的训练目标定义是**"能调用 + 调不出来时换路径"**,本质是行为能力,跟 CEFR can-do 描述符同构
- CEFR 的 6 级递进,跟 [[MCES模型|MCES 模型]] M↔S 直连度的连续提升相呼应(注:这是 **Barry 的对应假设**,方便用 CEFR 给 MCES 进度做标尺,**不是 CoE 官方主张**——CEFR 本身不涉及 MCES 这套认知路径)
- ABC 三档配训练 → 直接对接 [[Four-Strands-训练方法工具箱]] 的 12 个方法 × ABC 三档矩阵
- 行为描述比分数更适合学员**自我诊断 + 自我跟踪**

## HOW — 学员如何使用本页

> **本页不是评估工具**(评估在 barry-assessment SKILL 里做)。本页是**参考资料**,供以下两种使用方式:

### 用法 1:理解自己的级别背后含义(已被 barry-assessment 定级后)

学员跑完 barry-assessment SKILL 后,profile.md Section 2 已经写好了**综合 CEFR**(如 "B1+")。学员想知道:
- "B1+ 到底能做什么 / 不能做什么?"
- "我离 B2 还差什么?"

→ Coach 读本页对应级别的 Global Scale + 5 维 Self-assessment Grid + Table 3 口语 5 维,给学员讲 CoE 官方"我能..."行为描述,帮学员**校准期待 + 看清下一步缺口**。

### 用法 2:解释不同级别之间的区别(知识性问答)

学员问:
- "A2 跟 B1 主要差在哪?"
- "C1 和 C2 区别有多大?"
- "什么叫 Independent User?"

→ Coach 读本页对应级别的对照段落,给 CoE 官方原文 + Barry 简化解释。

### 三档简化原则(给学员一个直观参考,不是评估流程)

CEFR 原版 6 级在实战中过于细碎,Barry 训练方案上做了一个简化:**只取 A / B / C 三档**。理由:**训练方案的分水岭在三档之间**,不在每档内部:
- A → B 之间需要换训练方法(从背语块转到大量视译)
- B → C 之间不需要换方法,只是同一种训练做得更深
- 详见 [[CEFR分级训练方案]]

⚠️ **注意**:**这是训练方案的简化,不代表评估时用 ABC 三档**。barry-assessment SKILL 评出来的还是细到 A1/A2/B1/B2/C1/C2 的标准级别(用于跨课程沟通 + 学员自我跟踪进度)。

### 跨课程沟通用 CEFR 全级,内部训练用 ABC 三档

- **对外**(学员跟雅思 / 托福 / 别的课程 / 简历)→ 用 CEFR 标准级 A1-C2
- **对内**(barry-solution 出训练方案 / barry-coach 调用训练方法)→ 用 ABC 三档

## 相关方法论

- [[CEFR分级训练方案]] — **应用层**:每一级别配什么训练方法
- [[Four-Strands-训练方法工具箱]] — Solution 设计落地:12 个训练方法 × ABC 三档配置矩阵
- [[学员定级三维评判]] — Barry 内部 invisible 的三维快速评分(流利度 / 规范性 / 词汇),与本页 5 维 self-assessment 互为补充
- [[零基础学习路径-总览]] — Stage 4 衔接 A2-B1,从零基础专项进入 Barry 主体系
- [[MCES模型]] — CEFR 行为描述背后的认知模型(M↔S 直连度对应级别提升)
- [[0-翻译能力总览]] — 板块入口

## 来源

- **Council of Europe** — *Common European Framework of Reference for Languages: Learning, Teaching, Assessment* (CEFR, 2001) + *Companion Volume with New Descriptors* (2018) + *CEFR Companion Volume* (2020 update)
- **官方 Level Descriptions**(Global Scale + Self-assessment Grid):https://www.coe.int/en/web/common-european-framework-reference-languages/level-descriptions
- **官方 Table 3**(Qualitative aspects of spoken language use):https://www.coe.int/en/web/common-european-framework-reference-languages/table-3-cefr-3.3-common-reference-levels-qualitative-aspects-of-spoken-language-use
- **raw 参考**:`Barry 内部素材` — Barry 在 CEFR 框架基础上的简化和实战经验

## 待 Barry 核对项

本页基于 LLM 训练数据中的 CoE 公开材料整合,以下条目**强烈建议对照官方 PDF 核对原文措辞**:

1. **Self-assessment Grid · Spoken Interaction / Spoken Production / Writing 三维**:为节选,漏句不影响各级别核心描述
2. **Table 3 五维**:为基本完整转录(2026-06-11 已对照官方文本核验)
3. **Global Scale 6 级**:Listening / Reading 描述与多个公开来源比对一致,但 C1 / B2 部分句末细节可能有 2018 Companion Volume 修订,建议比对最新版
4. 中文翻译**为本页新译**(求准不求文采),非 CoE 官方中文翻译;CoE 有官方中文版本但本页未直接引用

## 更新记录

- **[2026-05-14]** 新建 — 从 raw 欧标定级参考思路 + Council of Europe 官方资料整合,补齐 wiki 评估层缺口。区分**评估层(本页)** vs **应用层([[CEFR分级训练方案]])** vs **快速评判([[学员定级三维评判]])** 三个层次,作为整个 02-翻译能力板块共享的国际公认评估锚点。
- **[2026-06-11]** 巡检修复:C2 俗称「母语者级」改「精通级」并加官方注;A2 Global Scale 引文按官方原文校正(immediate need);描述符词数与删节免责说明改为符合事实
- **[2026-06-11]** 批量打磨:"CEFR 6 级递进跟 MCES M↔S 直连度直接对应"加 Barry 假设/非 CoE 官方主张的标注,避免在官方锚点页被读成官方背书 MCES
