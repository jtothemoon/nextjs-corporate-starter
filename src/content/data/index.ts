// 자몽IT 프로젝트 더미 데이터

import {
  Company,
  Service,
  Project,
  TeamMember,
  TrustMetric,
  Client,
  ProcessStep,
  NavItem,
  ContactInfo,
} from '@/types'

// ============= 회사 기본 정보 =============
export const companyInfo: Company = {
  name: '자몽IT',
  description: '공공과 기업을 잇는 디지털 솔루션',
  address: '광주광역시 동구 동계천로 76 (장동)',
  phone: '010-6580-7890',
  email: 'contact@jamong.it.kr',
  website: 'https://jamong.it.kr',
  establishedYear: 2018,
}

// ============= 연락처 정보 =============
export const contactInfo: ContactInfo = {
  phone: '010-6580-7890',
  email: 'contact@jamong.it.kr',
  address: '광주광역시 동구 동계천로 76 (장동)',
  businessHours: '평일 09:00 - 18:00',
}
export const navItems: NavItem[] = [
  { label: '회사소개', href: '/about' },
  { label: '서비스', href: '/services' },
  { label: '포트폴리오', href: '/portfolio' },
  { label: '팀', href: '/team' },
  { label: '연락처', href: '/contact' },
]

// ============= 신뢰도 지표 =============
export const trustMetrics: TrustMetric[] = [
  {
    id: 'projects',
    label: '프로젝트 수행',
    value: 50,
    unit: '건+',
    description: '성공적으로 완료한 프로젝트',
    order: 1,
  },
  {
    id: 'clients',
    label: '공공기관 고객사',
    value: 20,
    unit: '곳+',
    description: '신뢰하는 공공기관',
    order: 2,
  },
  {
    id: 'experience',
    label: '업력',
    value: 6,
    unit: '년+',
    description: '축적된 경험과 노하우',
    order: 3,
  },
  {
    id: 'satisfaction',
    label: '고객 만족도',
    value: 98,
    unit: '%',
    description: '높은 고객 만족도',
    order: 4,
  },
]

// ============= 주요 고객사 =============
export const clients: Client[] = [
  {
    id: 'gwangju-city',
    name: '광주광역시',
    logo: '/images/clients/gwangju-city.png',
    type: 'public',
  },
  {
    id: 'jeonnam-province',
    name: '전라남도',
    logo: '/images/clients/jeonnam-province.png',
    type: 'public',
  },
  {
    id: 'gwangju-donggu',
    name: '광주 동구청',
    logo: '/images/clients/gwangju-donggu.png',
    type: 'public',
  },
  {
    id: 'chonnam-univ',
    name: '전남대학교',
    logo: '/images/clients/chonnam-univ.png',
    type: 'public',
  },
  {
    id: 'enterprise-a',
    name: '지역혁신기관',
    logo: '/images/clients/enterprise-a.png',
    type: 'enterprise',
  },
  {
    id: 'enterprise-b',
    name: '문화진흥원',
    logo: '/images/clients/enterprise-b.png',
    type: 'enterprise',
  },
]

// ============= 서비스 =============
export const services: Service[] = [
  {
    id: 'ui-ux-design',
    title: 'UI/UX 설계',
    description:
      '사용자 중심의 직관적인 인터페이스와 최적화된 사용자 경험을 설계합니다.',
    shortDescription: '사용자 중심의 화면 설계로 직관적인 서비스 환경 제공',
    icon: 'Palette',
    category: 'design',
    features: [
      '사용자 리서치 및 분석',
      '와이어프레임 및 프로토타입',
      '반응형 웹 디자인',
      '접근성 준수 설계',
    ],
    order: 1,
  },
  {
    id: 'system-development',
    title: '시스템 개발',
    description:
      '공공기관 특화 시스템을 안정성과 확장성을 고려하여 개발합니다.',
    shortDescription: '공공기관 특화 시스템을 안정성과 확장성을 고려하여 개발',
    icon: 'Code',
    category: 'development',
    features: [
      '전자정부 프레임워크 기반',
      '웹표준 및 웹접근성 준수',
      '보안 강화 시스템',
      '대용량 데이터 처리',
    ],
    order: 2,
  },
  {
    id: 'business-proposal',
    title: '사업 제안 및 기획',
    description:
      'RFP 분석부터 제안서 작성, 발표 지원까지 전 과정 대응이 가능합니다.',
    shortDescription: 'RFP 분석부터 제안서 작성, 발표 지원까지 전 과정 대응',
    icon: 'FileText',
    category: 'consulting',
    features: [
      'RFP 분석 및 요구사항 정의',
      '기술 제안서 작성',
      '사업계획 수립',
      '발표 지원 및 PT',
    ],
    order: 3,
  },
  {
    id: 'operation-maintenance',
    title: '운영 및 유지보수',
    description: '시스템 안정성을 유지하고 지속적인 기능 개선을 지원합니다.',
    shortDescription: '시스템 안정성 유지 및 지속적인 기능 개선 지원',
    icon: 'Settings',
    category: 'operation',
    features: [
      '24/7 시스템 모니터링',
      '정기 점검 및 업데이트',
      '장애 대응 및 복구',
      '성능 최적화',
    ],
    order: 4,
  },
  {
    id: 'iot-solution',
    title: '원격검침 시스템 구축',
    description:
      '실시간 데이터 수집 및 관리를 위한 IoT 기반 검침 솔루션을 제공합니다.',
    shortDescription: '실시간 데이터 수집 및 관리를 위한 IoT 기반 검침 솔루션',
    icon: 'Wifi',
    category: 'iot',
    features: [
      'IoT 센서 네트워크 구축',
      '실시간 데이터 수집',
      '원격 모니터링 시스템',
      '데이터 분석 및 리포트',
    ],
    order: 5,
  },
  {
    id: 'technical-support',
    title: '기술 지원 및 문의 대응',
    description:
      '요청 사항에 대한 빠른 기술 지원 및 문서 기반 응답을 제공합니다.',
    shortDescription: '빠른 기술 지원 및 문서 기반 응답 제공',
    icon: 'HelpCircle',
    category: 'support',
    features: [
      '신속한 기술 지원',
      '문서화된 대응 체계',
      '원격 지원 서비스',
      '교육 및 컨설팅',
    ],
    order: 6,
  },
]

// ============= 개발 프로세스 =============
export const processSteps: ProcessStep[] = [
  {
    id: 'analysis',
    title: '요구사항 분석',
    description:
      '고객의 요구사항을 상세히 분석하고 최적의 솔루션을 제안합니다.',
    icon: 'Search',
    order: 1,
    duration: '1-2주',
    deliverables: ['요구사항 정의서', '기술 제안서'],
  },
  {
    id: 'design',
    title: '설계 및 기획',
    description: '시스템 아키텍처와 UI/UX를 설계하고 개발 계획을 수립합니다.',
    icon: 'PenTool',
    order: 2,
    duration: '2-3주',
    deliverables: ['시스템 설계서', 'UI/UX 가이드'],
  },
  {
    id: 'development',
    title: '개발 및 구현',
    description: '설계를 바탕으로 시스템을 개발하고 단계적으로 구현합니다.',
    icon: 'Code',
    order: 3,
    duration: '4-12주',
    deliverables: ['개발 시스템', '소스코드'],
  },
  {
    id: 'testing',
    title: '테스트 및 검수',
    description: '철저한 테스트를 통해 품질을 보장하고 고객 검수를 진행합니다.',
    icon: 'CheckCircle',
    order: 4,
    duration: '1-2주',
    deliverables: ['테스트 보고서', '검수 완료'],
  },
  {
    id: 'deployment',
    title: '배포 및 운영',
    description: '시스템을 배포하고 안정적인 운영을 위한 지원을 제공합니다.',
    icon: 'Cloud',
    order: 5,
    duration: '지속',
    deliverables: ['운영 시스템', '운영 매뉴얼'],
  },
]

// ============= 프로젝트 사례 =============
export const projects: Project[] = [
  {
    id: 'gwangsan-homepage',
    title: '광산구청 홈페이지 전면개편',
    client: '광주광역시 광산구청',
    clientType: 'public',
    description:
      '시민 중심의 사용자 경험을 제공하는 반응형 웹사이트로 전면 개편',
    shortDescription: '시민 중심 UX를 적용한 반응형 홈페이지 구축',
    image: '/images/portfolio/gwangsan-homepage.jpg',
    startDate: new Date('2023-03-01'),
    endDate: new Date('2023-08-31'),
    status: 'completed',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    services: ['design', 'development'],
    features: [
      '반응형 웹 디자인',
      '웹접근성 AA 등급',
      '전자정부 프레임워크 적용',
      '다국어 지원',
    ],
    results: [
      {
        metric: '사용자 만족도',
        value: '95%',
        description: '시민 설문조사 결과',
      },
      {
        metric: '페이지 로딩 속도',
        value: '40%',
        description: '이전 대비 개선',
      },
    ],
    order: 1,
  },
  {
    id: 'dsc-platform',
    title: 'DSC 통합정보 및 성과관리시스템',
    client: '대전세종충남지역혁신플랫폼',
    clientType: 'public',
    description: '지역혁신기관 간 협업체계 지원 및 성과관리를 위한 통합 플랫폼',
    shortDescription: '지역혁신기관 협업 및 성과관리 통합 시스템',
    image: '/images/portfolio/dsc-platform.jpg',
    startDate: new Date('2023-01-01'),
    endDate: new Date('2023-12-31'),
    status: 'completed',
    technologies: ['Spring Boot', 'Vue.js', 'MySQL', 'AWS'],
    services: ['development', 'consulting'],
    features: [
      '기관 간 협업 시스템',
      '성과지표 관리',
      '데이터 시각화',
      '실시간 알림 시스템',
    ],
    results: [
      { metric: '참여 기관', value: '50+', description: '지역 혁신기관' },
      {
        metric: '데이터 처리량',
        value: '500만건',
        description: '월 평균 처리',
      },
    ],
    order: 2,
  },
  {
    id: 'culture-card-system',
    title: '통합문화이용권 관리시스템',
    client: '문화체육관광부',
    clientType: 'public',
    description: '문화누리카드 통합관리 및 이용현황 분석 시스템 구축',
    shortDescription: '문화누리카드 통합관리 시스템',
    image: '/images/portfolio/culture-card.jpg',
    startDate: new Date('2024-01-01'),
    endDate: new Date('2024-06-30'),
    status: 'completed',
    technologies: ['Java', 'Spring', 'Oracle', 'Redis'],
    services: ['development', 'operation'],
    features: [
      '카드 발급 관리',
      '이용내역 실시간 처리',
      '통계 및 분석',
      '가맹점 관리',
    ],
    results: [
      { metric: '처리 속도', value: '60%', description: '기존 대비 향상' },
      { metric: '시스템 안정성', value: '99.9%', description: '가동률' },
    ],
    order: 3,
  },
  {
    id: 'iot-monitoring',
    title: '스마트시티 IoT 모니터링',
    client: '광주광역시',
    clientType: 'public',
    description:
      '도시 전반의 IoT 센서 데이터를 실시간 수집하고 분석하는 모니터링 시스템',
    shortDescription: '실시간 IoT 데이터 수집 및 분석 시스템',
    image: '/images/portfolio/iot-monitoring.jpg',
    startDate: new Date('2024-03-01'),
    status: 'ongoing',
    technologies: ['Node.js', 'MongoDB', 'InfluxDB', 'Grafana'],
    services: ['iot', 'development'],
    features: [
      '실시간 센서 데이터 수집',
      '이상 상황 알림',
      '데이터 시각화 대시보드',
      '예측 분석',
    ],
    order: 4,
  },
]

// ============= 팀 멤버 =============
export const teamMembers: TeamMember[] = [
  {
    id: 'kky',
    name: 'KKY',
    position: '대표이사',
    bio: '공공기관 특화 IT 솔루션 개발 전문가로, 다수의 대형 프로젝트를 성공적으로 이끌어왔습니다.',
    image: '/images/team/kky.jpg',
    skills: ['프로젝트 관리', '사업 기획', 'IT 컨설팅'],
    experience: 15,
    order: 1,
  },
  {
    id: 'eun-jamong',
    name: '은자몽',
    position: '최고 기술 책임자',
    bio: '최신 기술 트렌드를 바탕으로 안정적이고 확장 가능한 시스템 아키텍처를 설계합니다.',
    image: '/images/team/eun-jamong.jpg',
    skills: ['시스템 아키텍처', 'Full-stack 개발', 'DevOps'],
    experience: 12,
    order: 2,
  },
  {
    id: 'lim-jamong',
    name: '임자몽',
    position: '프로젝트 리더',
    bio: '체계적인 프로젝트 관리와 팀 리더십으로 프로젝트의 성공적인 완료를 책임집니다.',
    image: '/images/team/lim-jamong.jpg',
    skills: ['프로젝트 관리', '팀 리더십', '품질 관리'],
    experience: 10,
    order: 3,
  },
  {
    id: 'bae-jamong',
    name: '배자몽',
    position: '시스템 운영팀장',
    bio: '안정적인 시스템 운영과 최적화를 통해 고객에게 최상의 서비스를 제공합니다.',
    image: '/images/team/bae-jamong.jpg',
    skills: ['시스템 운영', '인프라 관리', '모니터링'],
    experience: 8,
    order: 4,
  },
]
