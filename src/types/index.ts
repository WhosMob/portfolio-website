export interface Project {
  id: string
  title: string
  description: string
  image: string
  githubUrl: string
}

export interface SkillCategory {
  category: string
  items: string[]
}

export interface NavItem {
  label: string
  href: string
}
