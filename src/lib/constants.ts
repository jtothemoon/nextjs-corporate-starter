// 자몽IT 사이트 설정 및 상수

import { companyInfo, contactInfo } from '@/content/data'

// ============= 사이트 기본 설정 =============
export const SITE_CONFIG = {
  name: companyInfo.name,
  description: companyInfo.description,
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  domain: 'jamong.it.kr',
  author: companyInfo.name,
  keywords: [
    'IT 솔루션',
    '시스템 개발',
    'UI/UX 디자인',
    '공공기관',
    '전자정부',
    '웹개발',
    '모바일앱',
    'IoT',
    '광주',
    '전남',
  ],
} as const

// ============= 연락처 정보 =============
export const CONTACT_INFO = {
  phone: contactInfo.phone,
  email: contactInfo.email,
  address: contactInfo.address,
  businessHours: contactInfo.businessHours,
  // 추가 연락처 정보
  kakao: 'jamong_it', // 카카오톡 채널 (옵션)
  linkedin: 'jamong-it', // 링크드인 (옵션)
} as const

// ============= 소셜 미디어 =============
export const SOCIAL_LINKS = {
  // 필요시 추가
  // facebook: 'https://facebook.com/jamongit',
  // instagram: 'https://instagram.com/jamongit',
  // youtube: 'https://youtube.com/@jamongit'
} as const

// ============= 기술 스택 =============
export const TECH_STACK = {
  frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  backend: ['Java', 'Spring Boot', 'Node.js', 'Python'],
  database: ['MySQL', 'Oracle', 'PostgreSQL', 'MongoDB'],
  cloud: ['AWS', 'Azure', 'Google Cloud'],
  mobile: ['React Native', 'Flutter', 'Android', 'iOS'],
  other: ['Docker', 'Kubernetes', 'Jenkins', 'Git'],
} as const

// ============= 사업 영역 =============
export const BUSINESS_AREAS = {
  public: {
    label: '공공기관',
    description: '정부기관, 지자체, 공공기관 대상 시스템 개발',
  },
  enterprise: {
    label: '기업',
    description: '중소기업, 대기업 대상 비즈니스 솔루션',
  },
  startup: {
    label: '스타트업',
    description: '신규 서비스 개발 및 기술 컨설팅',
  },
} as const

// ============= 프로젝트 예산 범위 =============
export const BUDGET_RANGES = {
  'under-1000': '1천만원 미만',
  '1000-5000': '1천만원 - 5천만원',
  '5000-10000': '5천만원 - 1억원',
  'over-10000': '1억원 이상',
  discussion: '협의',
} as const

// ============= 애니메이션 설정 =============
export const ANIMATION_CONFIG = {
  duration: {
    fast: 0.2,
    normal: 0.3,
    slow: 0.5,
  },
  ease: 'ease-in-out',
  stagger: 0.1,
} as const

// ============= 레이아웃 설정 =============
export const LAYOUT_CONFIG = {
  header: {
    height: '64px',
    mobileHeight: '56px',
  },
  footer: {
    height: '200px',
  },
  maxWidth: '1200px',
  container: {
    padding: {
      mobile: '1rem',
      tablet: '1.5rem',
      desktop: '2rem',
    },
  },
} as const

// ============= 개발/빌드 관련 =============
export const IS_DEV = process.env.NODE_ENV === 'development'
export const IS_PROD = process.env.NODE_ENV === 'production'

// ============= 외부 서비스 설정 =============
export const EXTERNAL_SERVICES = {
  googleAnalytics: process.env.NEXT_PUBLIC_GA_ID,
  googleMaps: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY,
  emailService: process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
} as const
