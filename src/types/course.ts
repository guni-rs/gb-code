// ========== 通用课程数据结构 ==========

// Block类型
export type BlockType = 'text' | 'heading' | 'code' | 'image' | 'video' | 'table' | 'tip' | 'warning' | 'quote' | 'list' | 'download' | 'flowchart' | 'flowchart-if' | 'flowchart-if-else' | 'flowchart-for'

// 流程图步骤
export interface FlowStep {
  text: string
  type?: 'start' | 'process' | 'decision' | 'end'
  branch?: 'yes' | 'no'  // 分支标记
}

// 内容块
export interface Block {
  id: string
  type: BlockType
  content?: string           // text/heading/tip
  items?: string[]           // list
  src?: string               // image/video
  language?: string          // code语言
  filename?: string          // code文件名
  code?: string              // code内容
  headers?: string[]         // table表头
  rows?: string[][]          // table数据行
  text?: string              // download按钮文字
  url?: string               // download链接
  steps?: FlowStep[]         // flowchart步骤
}

// 知识点
export interface Lesson {
  id: string
  title: string
  video?: string             // 知识点视频（小按钮）
  blocks: Block[]
}

// 章节
export interface Chapter {
  id: string
  title: string
  video?: string             // 章节视频（右侧播放）
  lessons: Lesson[]
}

// 课程
export interface Course {
  id: string
  pathId: string             // 所属路线ID，用于查询关联课程
  title: string
  desc?: string
  icon?: string
  interactivePage?: string   // 交互式页面路由（如AI面试）
  chapters: Chapter[]
}

// 导航项
export interface NavItem {
  id: string
  name: string
  path: string
  children?: NavItem[]  // 子导航
}

// ========== 编程知识点数据结构（多语言复用） ==========

// 支持的编程语言（含AI）
export type ProgrammingLanguage = 'java' | 'python' | 'go' | 'javascript' | 'c' | 'csharp' | 'ai'

// 代码块
export interface CodeBlock {
  id: string
  filename: string
  code: string
  prompt?: string              // AI提示词（仅ai语言使用）
}

// 知识点（支持多语言代码）
export interface KnowledgePoint {
  id: string
  title: string
  video?: Partial<Record<ProgrammingLanguage, string>>  // 多语言视频
  blocks: Block[]                           // 通用内容：text/list/tip/table/img/video
  codeImpl?: Partial<Record<ProgrammingLanguage, CodeBlock[]>>  // 多语言代码实现
}

// 编程章节
export interface ProgrammingChapter {
  id: string
  title: string
  video?: Partial<Record<ProgrammingLanguage, string>>  // 多语言视频
  points: KnowledgePoint[]
}

// 编程课程
export interface ProgrammingCourse {
  id: string
  title: string
  icon: string
  chapters: ProgrammingChapter[]
}

// 语言课程组（8个课程）
export interface LanguageCourseGroup {
  language: ProgrammingLanguage
  name: string                              // 显示名称：Java/Python/Go/JavaScript
  courses: ProgrammingCourse[]              // 8个课程
}
