/**
 * 博客文章数据
 * 
 * 如何添加新文章：
 * 1. 在 posts 数组中添加新对象
 * 2. 必填字段：
 *    - id: 唯一标识符（递增数字）
 *    - title: 文章标题
 *    - excerpt: 摘要（显示在卡片上）
 *    - content: 完整内容（用 \n 分段）
 *    - category: 分类名称（对应 categories.js）
 *    - categoryId: 分类 ID（对应 categories.js）
 *    - tags: 标签数组
 *    - date: 发布日期（格式：YYYY-MM-DD）
 *    - readTime: 预计阅读时间
 *    - image: 文章配图 URL
 * 
 * 配图推荐网站：
 * - Unsplash: https://unsplash.com/
 * - Pexels: https://www.pexels.com/
 */

export const posts = [
    // ==================== 前端文章 ====================
    {
        id: 1,
        title: 'React 19 新特性详解',
        excerpt: '深入探讨 React 19 带来的重大更新，包括全新的编译器优化、服务器组件改进，以及更强大的钩子功能。让我们一起看看这些新特性如何提升开发体验...',
        content: `React 19 是一个令人兴奋的版本，它带来了许多新特性和改进。首先，新的编译器优化使得应用性能得到了显著提升。

服务器组件（Server Components）的改进让我们能够更好地构建高性能的应用。这些组件在服务器端渲染，减少了客户端的负担，提高了首屏加载速度。

此外，React 19 还引入了新的钩子，如 useOptimistic 和 useFormStatus，这些钩子让状态管理和表单处理变得更加简单和直观。

自动批处理（Automatic Batching）的优化也是一大亮点，现在所有的状态更新都会自动批处理，无论它们在哪里触发。

总的来说，React 19 是一个注重性能和开发体验的版本，值得我们深入学习和应用。`,
        category: '前端',
        categoryId: 'frontend',
        tags: ['React', 'JavaScript', '前端'],
        date: '2025-10-25',
        readTime: '8 分钟',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop'
    },
    {
        id: 2,
        title: 'TypeScript 最佳实践指南',
        excerpt: '分享在大型项目中使用 TypeScript 的经验和技巧。从类型定义到高级类型，从配置优化到团队协作，全方位提升你的 TypeScript 开发技能...',
        content: `TypeScript 已经成为现代前端开发的标准配置。在这篇文章中，我将分享一些在大型项目中使用 TypeScript 的最佳实践。

首先，合理使用类型定义非常重要。避免使用 any，尽可能为每个变量和函数指定具体的类型。这不仅能帮助我们在开发阶段发现错误，还能提供更好的代码提示。

泛型是 TypeScript 的强大功能之一。通过泛型，我们可以编写更加灵活和可复用的代码。

配置方面，tsconfig.json 的设置也很关键。开启 strict 模式可以帮助我们写出更安全的代码。

在团队协作中，建立统一的类型定义规范，使用类型声明文件，可以大大提高代码质量和维护性。`,
        category: '前端',
        categoryId: 'frontend',
        tags: ['TypeScript', '最佳实践', '前端'],
        date: '2025-10-22',
        readTime: '10 分钟',
        image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop'
    },
    {
        id: 3,
        title: 'CSS Grid 布局完全指南',
        excerpt: 'CSS Grid 是现代网页布局的强大工具。本文将带你从基础到进阶，掌握 Grid 布局的各种技巧，打造灵活响应式的页面布局...',
        content: `CSS Grid 布局系统是网页设计中最强大的工具之一。它允许我们创建二维的网格布局，使得复杂的页面设计变得简单。

基础概念包括容器（container）和项目（items）。通过 display: grid 可以将一个元素变成网格容器。

grid-template-columns 和 grid-template-rows 用于定义网格的列和行。我们可以使用固定值、百分比、fr 单位等多种方式来定义。

gap 属性用于设置网格间距，非常方便。

Grid 还提供了强大的对齐功能，如 justify-items、align-items 等，可以轻松实现各种对齐需求。

响应式设计方面，配合 auto-fit 和 auto-fill，我们可以创建自适应的网格布局，完美适配各种屏幕尺寸。`,
        category: '前端',
        categoryId: 'frontend',
        tags: ['CSS', 'Grid', '布局'],
        date: '2025-10-20',
        readTime: '12 分钟',
        image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=400&fit=crop'
    },

    // ==================== 后端文章 ====================
    {
        id: 4,
        title: 'Node.js 性能优化实战',
        excerpt: '探讨如何优化 Node.js 应用的性能。从代码层面到架构设计，从内存管理到并发处理，全面提升你的后端应用性能...',
        content: `Node.js 应用的性能优化是一个系统工程。本文将从多个角度探讨如何提升 Node.js 应用的性能。

首先是代码层面的优化。避免同步操作，充分利用 Node.js 的异步特性。使用 Promise 和 async/await 可以让代码更加清晰。

内存管理也很重要。避免内存泄漏，及时释放不需要的资源。可以使用 Node.js 的内置工具进行内存分析。

缓存策略的合理使用可以显著提升性能。Redis 是一个很好的选择。

并发处理方面，Worker Threads 和 Cluster 模块可以帮助我们充分利用多核 CPU。

监控和日志也是性能优化的重要一环。使用专业的监控工具可以帮助我们及时发现和解决性能瓶颈。`,
        category: '后端',
        categoryId: 'backend',
        tags: ['Node.js', '性能优化', '后端'],
        date: '2025-10-18',
        readTime: '15 分钟',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop'
    },
    {
        id: 5,
        title: 'RESTful API 设计最佳实践',
        excerpt: 'API 设计是后端开发的核心。本文介绍如何设计优雅、易用、可扩展的 RESTful API，包括资源命名、HTTP 方法使用、错误处理等方面...',
        content: `设计良好的 RESTful API 对于应用的成功至关重要。本文将分享 API 设计的最佳实践。

资源命名应该使用名词复数形式，如 /users、/posts。避免在 URL 中使用动词。

合理使用 HTTP 方法：GET 用于获取资源，POST 用于创建，PUT/PATCH 用于更新，DELETE 用于删除。

版本控制很重要，建议在 URL 中包含版本号，如 /api/v1/users。

错误处理应该返回合适的 HTTP 状态码和清晰的错误信息。使用标准的错误格式可以让客户端更容易处理。

分页、过滤、排序等功能通过查询参数实现，如 /users?page=1&limit=20&sort=created_at。

文档化是必不可少的，使用 Swagger 或类似工具生成 API 文档。`,
        category: '后端',
        categoryId: 'backend',
        tags: ['API', 'RESTful', '后端设计'],
        date: '2025-10-16',
        readTime: '12 分钟',
        image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop'
    },
    {
        id: 6,
        title: 'Docker 容器化部署指南',
        excerpt: '学习如何使用 Docker 容器化你的应用。从 Dockerfile 编写到 docker-compose 使用，从镜像优化到生产部署，全面掌握容器化技术...',
        content: `Docker 已经成为现代应用部署的标准方式。本文将介绍如何有效使用 Docker。

Dockerfile 是构建镜像的蓝图。选择合适的基础镜像很重要，优先使用官方镜像和 Alpine 版本以减小体积。

多阶段构建可以大大减小最终镜像的大小。在构建阶段安装依赖和编译，在运行阶段只包含必要的文件。

docker-compose 让多容器应用的管理变得简单。通过 YAML 文件定义服务、网络、卷等。

环境变量和配置文件的管理要谨慎，不要在镜像中硬编码敏感信息。

生产环境部署时，要注意日志管理、资源限制、健康检查等方面。

容器编排工具如 Kubernetes 可以帮助管理大规模的容器化应用。`,
        category: '后端',
        categoryId: 'backend',
        tags: ['Docker', '容器化', 'DevOps'],
        date: '2025-10-14',
        readTime: '18 分钟',
        image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&h=400&fit=crop'
    },

    // ==================== AI 文章 ====================
    {
        id: 7,
        title: '深度学习入门：从零开始理解神经网络',
        excerpt: '深入浅出地介绍神经网络的基本原理。从感知机到深度神经网络，从反向传播到梯度下降，帮助你建立扎实的深度学习基础...',
        content: `深度学习是人工智能领域最热门的技术之一。本文将带你从零开始理解神经网络。

神经网络的基本单元是神经元，它接收输入，进行加权求和，然后通过激活函数产生输出。

多层神经网络通过隐藏层来学习数据的复杂模式。层数越多，理论上可以学习越复杂的函数。

反向传播算法是训练神经网络的核心。它通过链式法则计算梯度，然后使用梯度下降来更新权重。

激活函数的选择很重要。ReLU 是最常用的，还有 Sigmoid、Tanh 等。

过拟合是训练中常见的问题，可以通过 Dropout、正则化、数据增强等方法来缓解。

选择合适的优化器（如 Adam、SGD）和学习率对训练效果影响很大。`,
        category: 'AI',
        categoryId: 'ai',
        tags: ['深度学习', '神经网络', 'AI'],
        date: '2025-10-12',
        readTime: '20 分钟',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop'
    },
    {
        id: 8,
        title: 'Transformer 架构详解',
        excerpt: 'Transformer 改变了 NLP 领域。本文详细解析 Transformer 的架构，包括自注意力机制、位置编码、多头注意力等核心概念...',
        content: `Transformer 是近年来 AI 领域最重要的突破之一。它摒弃了传统的 RNN 和 CNN，完全基于注意力机制。

自注意力（Self-Attention）是 Transformer 的核心。它允许模型在处理每个词时关注输入序列中的所有位置。

Query、Key、Value 是注意力机制的三个关键概念。通过 Q 和 K 的相似度来决定对 V 的加权。

多头注意力让模型能够从不同的表示子空间学习信息，增强了模型的表达能力。

位置编码为模型提供了序列的位置信息，因为自注意力本身是位置无关的。

Encoder-Decoder 结构在机器翻译等任务中很有效，BERT 使用 Encoder，GPT 使用 Decoder。

Transformer 的并行化能力强，训练效率高，这也是它能够扩展到超大模型的原因。`,
        category: 'AI',
        categoryId: 'ai',
        tags: ['Transformer', 'NLP', '深度学习'],
        date: '2025-10-10',
        readTime: '25 分钟',
        image: 'https://images.unsplash.com/photo-1676277791608-ac5c35794559?w=800&h=400&fit=crop'
    },

    // ==================== 数据分析文章 ====================
    {
        id: 9,
        title: 'Python 数据分析实战：Pandas 完全指南',
        excerpt: 'Pandas 是 Python 数据分析的核心库。本文系统介绍 Pandas 的各种功能，从数据读取到清洗、转换、分析，帮你掌握数据分析技能...',
        content: `Pandas 是 Python 中最强大的数据分析库。本文将全面介绍 Pandas 的使用。

DataFrame 和 Series 是 Pandas 的两个基本数据结构。DataFrame 类似表格，Series 类似列。

数据读取支持多种格式：CSV、Excel、SQL、JSON 等。read_csv 是最常用的函数。

数据清洗包括处理缺失值、重复值、异常值。dropna、fillna、drop_duplicates 是常用方法。

数据转换包括筛选、排序、分组、聚合等操作。loc、iloc、groupby、pivot_table 等功能强大。

数据合并可以使用 merge、join、concat 等方法，类似 SQL 的操作。

时间序列分析是 Pandas 的强项，提供了丰富的日期时间处理功能。

与 Matplotlib、Seaborn 结合可以快速实现数据可视化。`,
        category: '统计与数据分析',
        categoryId: 'data',
        tags: ['Python', 'Pandas', '数据分析'],
        date: '2025-10-08',
        readTime: '22 分钟',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop'
    },
    {
        id: 10,
        title: '数据可视化艺术：用 D3.js 讲述数据故事',
        excerpt: 'D3.js 是最强大的数据可视化库。学习如何用 D3.js 创建交互式、动态的数据可视化，让数据更有说服力...',
        content: `D3.js（Data-Driven Documents）是一个用于创建动态、交互式数据可视化的 JavaScript 库。

D3 的核心思想是数据驱动。通过将数据绑定到 DOM 元素，然后根据数据来操作元素的属性。

选择集（Selection）是 D3 的基础。select 和 selectAll 用于选择元素，data 用于绑定数据。

enter、update、exit 是数据绑定的三个阶段，理解它们对于创建动态可视化至关重要。

比例尺（Scale）将数据域映射到视觉域。线性比例尺、对数比例尺、时间比例尺等应用广泛。

坐标轴、图例、提示框等辅助元素让可视化更易读。D3 提供了便捷的 API 来创建它们。

过渡和动画可以让可视化更生动。transition 方法可以平滑地改变元素属性。

交互性是 D3 的优势，通过事件监听可以实现缩放、拖拽、筛选等功能。`,
        category: '统计与数据分析',
        categoryId: 'data',
        tags: ['D3.js', '数据可视化', 'JavaScript'],
        date: '2025-10-06',
        readTime: '18 分钟',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop'
    },
    {
        id: 11,
        title: '统计学基础：假设检验与置信区间',
        excerpt: '统计推断是数据分析的核心。本文介绍假设检验和置信区间的原理和应用，帮助你做出数据驱动的决策...',
        content: `统计推断让我们能够从样本数据得出关于总体的结论。假设检验和置信区间是两个重要工具。

假设检验的基本思路是：先假设原假设为真，然后看数据是否提供足够的证据来拒绝它。

p 值是假设检验中的关键概念。它表示在原假设为真的情况下，观察到当前或更极端结果的概率。

显著性水平（通常是 0.05）用来判断是否拒绝原假设。p 值小于显著性水平时拒绝原假设。

第一类错误（假阳性）和第二类错误（假阴性）是假设检验中需要权衡的。

置信区间提供了参数估计的范围。95% 置信区间意味着如果重复抽样，95% 的区间会包含真实参数。

t 检验、卡方检验、方差分析等是常用的假设检验方法，适用于不同的场景。

统计显著性不等于实际意义，解释结果时要结合业务背景。`,
        category: '统计与数据分析',
        categoryId: 'data',
        tags: ['统计学', '假设检验', '数据分析'],
        date: '2025-10-04',
        readTime: '16 分钟',
        image: 'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=800&h=400&fit=crop'
    },

    // ==================== 文学文章 ====================
    {
        id: 12,
        title: '《百年孤独》：魔幻现实主义的巅峰',
        excerpt: '马尔克斯的《百年孤独》是拉美文学的里程碑。本文探讨这部作品中的魔幻现实主义手法、家族命运的循环以及对拉美历史的隐喻...',
        content: `《百年孤独》是加西亚·马尔克斯最著名的作品，也是魔幻现实主义文学的代表作。

小说讲述了布恩迪亚家族七代人的兴衰历程。孤独是贯穿全书的主题，每个人物都被某种形式的孤独所困扰。

魔幻现实主义将魔幻元素融入现实生活，使之显得自然而然。飞天的美人、会说话的死人，在马尔克斯笔下都显得那么真实。

循环是小说的重要结构。人物的名字重复出现，命运也在重复，仿佛历史在不断轮回。

这部作品也是对拉美历史和政治的寓言。通过马孔多镇的兴衰，反映了拉美国家的殖民历史和现代化进程。

语言的诗意和叙事的流畅是马尔克斯的标志。长句子、多视角叙述，创造了独特的阅读体验。

《百年孤独》告诉我们：忘记历史的民族注定要重蹈覆辙。`,
        category: '文学',
        categoryId: 'literature',
        tags: ['文学评论', '魔幻现实主义', '马尔克斯'],
        date: '2025-10-02',
        readTime: '14 分钟',
        image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=400&fit=crop'
    },
    {
        id: 13,
        title: '村上春树的孤独美学',
        excerpt: '从《挪威的森林》到《1Q84》，村上春树的作品始终围绕着孤独、疏离和寻找。本文分析村上文学中的主题和风格特点...',
        content: `村上春树是当代最受欢迎的日本作家之一。他的作品以独特的风格和深刻的主题吸引了全球读者。

孤独和疏离是村上作品的核心主题。他笔下的人物往往是都市中的孤独者，与周围世界格格不入。

音乐在村上的作品中扮演重要角色。爵士乐、古典音乐不仅是氛围的营造，也是人物情感的表达。

现实与非现实的交织是村上的特色。《1Q84》中的双月世界，《海边的卡夫卡》中的超现实元素，模糊了现实与幻想的界限。

简洁的文字和隐喻的手法让村上的作品易读但耐人寻味。看似简单的故事背后往往有深层的含义。

寻找与失去的主题反复出现。人物在寻找失去的爱情、失去的自我、失去的时光。

村上的作品提醒我们：在现代都市的喧嚣中，保持内心的宁静和真实至关重要。`,
        category: '文学',
        categoryId: 'literature',
        tags: ['村上春树', '日本文学', '现代文学'],
        date: '2025-09-30',
        readTime: '12 分钟',
        image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=400&fit=crop'
    },
    {
        id: 14,
        title: '古典诗词中的四季之美',
        excerpt: '中国古典诗词蕴含着丰富的自然美。本文赏析历代名家笔下的春夏秋冬，感受古人对自然的细腻观察和深刻感悟...',
        content: `中国古典诗词中，四季是永恒的主题。诗人们通过对四季的描写，抒发情感，寄托理想。

春天是生机与希望的象征。"春眠不觉晓，处处闻啼鸟"展现了春天的生机，"春风又绿江南岸"则寄托了思乡之情。

夏天常与炎热、繁茂相关。"接天莲叶无穷碧，映日荷花别样红"写出了夏日的壮丽，"明月别枝惊鹊，清风半夜鸣蝉"则有夏夜的清凉。

秋天往往与悲伤、萧条联系。"自古逢秋悲寂寥"道出了秋天的悲凉，但"我言秋日胜春朝"又展现了秋天的另一面。

冬天代表着严寒与沉寂。"千山鸟飞绝，万径人踪灭"营造了冬日的寂静，"梅须逊雪三分白，雪却输梅一段香"则写出了冬日的雅趣。

古人对自然的观察细致入微，将个人情感与自然景物完美融合，创造了永恒的艺术价值。`,
        category: '文学',
        categoryId: 'literature',
        tags: ['古典诗词', '中国文学', '诗歌鉴赏'],
        date: '2025-09-28',
        readTime: '10 分钟',
        image: 'https://images.unsplash.com/photo-1510172951991-856a654063f9?w=800&h=400&fit=crop'
    }


];



