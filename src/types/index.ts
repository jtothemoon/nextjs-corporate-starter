// 자몽IT 프로젝트 전체 타입 정의

// ============= 기본 공통 타입 =============
export interface BaseEntity {
  id: string
  createdAt?: Date
  updatedAt?: Date
}

// ============= 회사/사이트 관련 =============
export interface Company {
  name: string
  description: string
  address: string
  phone: string
  email: string
  website: string
  establishedYear: number
}

export interface ContactInfo {
  phone: string
  email: string
  address: string
  businessHours: string
}

// ============= 서비스 관련 =============
export interface Service extends BaseEntity {
  title: string
  description: string
  shortDescription: string
  icon: string
  features: string[]
  category: ServiceCategory
  order: number
}

export type ServiceCategory =
  | 'design' // UI/UX 설계
  | 'development' // 시스템 개발
  | 'consulting' // 사업 제안
  | 'operation' // 운영 관리
  | 'iot' // IoT 솔루션
  | 'support' // 기술 지원
  | 'data-analysis' // 데이터 분석

// ============= 프로젝트/포트폴리오 관련 =============
export interface Project extends BaseEntity {
  title: string
  client: string
  clientType: ClientType
  description: string
  shortDescription: string
  image: string
  images?: string[]
  startDate: Date
  endDate?: Date
  status: ProjectStatus
  technologies: string[]
  services: ServiceCategory[]
  features: string[]
  results?: ProjectResult[]
  testimonial?: Testimonial
  order: number
}

export type ClientType =
  | 'public' // 공공기관
  | 'enterprise' // 기업
  | 'startup' // 스타트업

export type ProjectStatus =
  | 'completed' // 완료
  | 'ongoing' // 진행중
  | 'planned' // 계획

export interface ProjectResult {
  metric: string
  value: string
  description?: string
}

export interface Testimonial {
  content: string
  author: string
  position: string
  company: string
}

// ============= 팀 관련 =============
export interface TeamMember extends BaseEntity {
  name: string
  position: string
  department?: string
  bio: string
  image: string
  email?: string
  linkedin?: string
  github?: string
  skills: string[]
  experience: number // 경력 년수
  education?: Education[]
  certifications?: Certification[]
  order: number
}

export interface Education {
  school: string
  degree: string
  major: string
  graduationYear: number
}

export interface Certification {
  name: string
  issuer: string
  issueDate: Date
  expiryDate?: Date
}

// ============= 신뢰도/실적 관련 =============
export interface TrustMetric {
  id: string
  label: string
  value: string | number
  unit?: string
  description?: string
  icon?: string
  order: number
}

export interface Client {
  id: string
  name: string
  logo: string
  type: ClientType
  website?: string
  projectCount?: number
}

// ============= 프로세스 관련 =============
export interface ProcessStep {
  id: string
  title: string
  description: string
  icon: string
  order: number
  duration?: string
  deliverables?: string[]
}

// ============= 폼 관련 =============
export interface ContactForm {
  name: string
  email: string
  phone: string
  company: string
  position: string
  projectType: ServiceCategory[]
  budget?: BudgetRange
  timeline?: string
  message: string
  agreeToTerms: boolean
}

export type BudgetRange =
  | 'under-1000' // 1천만원 미만
  | '1000-5000' // 1천만원 - 5천만원
  | '5000-10000' // 5천만원 - 1억원
  | 'over-10000' // 1억원 이상
  | 'discussion' // 협의

// ============= SEO/메타데이터 관련 =============
export interface PageSEO {
  title: string
  description: string
  keywords?: string[]
  image?: string
  url?: string
}

// ============= 네비게이션 관련 =============
export interface NavItem {
  label: string
  href: string
  external?: boolean
  children?: NavItem[]
}

// ============= 응답/API 관련 =============
export interface ApiResponse<T> {
  success: boolean
  data?: T
  message?: string
  error?: string
}

// ============= 페이지 Props 관련 =============
export interface PageProps {
  params?: { [key: string]: string | string[] }
  searchParams?: { [key: string]: string | string[] | undefined }
}

// ============= 컴포넌트 공통 Props =============
export interface ComponentProps {
  className?: string
  children?: React.ReactNode
}

export interface SectionProps extends ComponentProps {
  id?: string
  title?: string
  subtitle?: string
}
