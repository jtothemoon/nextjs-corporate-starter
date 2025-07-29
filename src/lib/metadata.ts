// SEO 메타데이터 유틸리티

import type { Metadata } from 'next'
import { SITE_CONFIG } from './constants'

interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: 'website' | 'article'
  keywords?: string[]
  author?: string
  noIndex?: boolean
}

export function createMetadata({
  title,
  description = '공공기관과 기업을 위한 맞춤형 IT 솔루션을 제공하는 자몽IT입니다. UI/UX 설계, 시스템 개발, 사업 제안, 운영 관리까지 원스톱 서비스를 제공합니다.',
  image = '/images/og-image.jpg',
  url,
  type = 'website',
  keywords = [...SITE_CONFIG.keywords],
  author = SITE_CONFIG.author,
  noIndex = false,
}: SEOProps = {}): Metadata {
  const fullTitle = title
    ? `${title} | ${SITE_CONFIG.name}`
    : `${SITE_CONFIG.name} - ${SITE_CONFIG.description}`

  const fullUrl = url ? `${SITE_CONFIG.url}${url}` : SITE_CONFIG.url

  const imageUrl = image.startsWith('http')
    ? image
    : `${SITE_CONFIG.url}${image}`

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: author }],
    creator: author,
    publisher: author,

    // Open Graph
    openGraph: {
      title: fullTitle,
      description,
      url: fullUrl,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title || SITE_CONFIG.name,
        },
      ],
      locale: 'ko_KR',
      type,
    },

    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [imageUrl],
      creator: `@${SITE_CONFIG.domain}`,
    },

    // 로봇 설정
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },

    // 추가 메타 태그
    other: {
      'application-name': SITE_CONFIG.name,
      'apple-mobile-web-app-title': SITE_CONFIG.name,
      'format-detection': 'telephone=no',
    },

    // Canonical URL
    alternates: {
      canonical: fullUrl,
    },
  }
}

// ============= 페이지별 기본 메타데이터 =============
export const pageMetadata = {
  home: {
    title: '홈',
    description:
      '공공기관과 기업을 위한 맞춤형 IT 솔루션을 제공하는 자몽IT입니다. UI/UX 설계부터 시스템 개발, 운영 관리까지 원스톱 서비스를 제공합니다.',
    keywords: ['IT 솔루션', '시스템 개발', '공공기관', '웹개발'] as string[],
  },

  about: {
    title: '회사소개',
    description:
      '자몽IT의 비전과 미션, 그리고 우리가 걸어온 길을 소개합니다. 공공과 기업을 잇는 디지털 브릿지 역할을 하는 IT 전문기업입니다.',
    url: '/about',
    keywords: ['회사소개', '자몽IT', 'IT 기업', '비전', '미션'] as string[],
  },

  services: {
    title: '서비스',
    description:
      'UI/UX 설계, 시스템 개발, 사업 제안, 운영 관리, IoT 솔루션, 기술 지원까지 다양한 IT 서비스를 제공합니다.',
    url: '/services',
    keywords: [
      'IT 서비스',
      'UI/UX',
      '시스템 개발',
      'IoT',
      '기술 지원',
    ] as string[],
  },

  portfolio: {
    title: '포트폴리오',
    description:
      '자몽IT가 수행한 다양한 프로젝트 사례를 확인해보세요. 공공기관과 기업 대상의 성공적인 프로젝트 경험을 보유하고 있습니다.',
    url: '/portfolio',
    keywords: [
      '포트폴리오',
      '프로젝트 사례',
      '개발 실적',
      '레퍼런스',
    ] as string[],
  },

  team: {
    title: '팀',
    description:
      '자몽IT의 전문성 있는 팀원들을 소개합니다. 다양한 분야의 전문가들이 모여 최고의 IT 솔루션을 제공합니다.',
    url: '/team',
    keywords: ['팀 소개', 'IT 전문가', '개발팀', '기술진'] as string[],
  },

  contact: {
    title: '연락처',
    description:
      '자몽IT와 함께할 프로젝트가 있다면 언제든 연락주세요. 무료 상담을 통해 최적의 솔루션을 제안해드립니다.',
    url: '/contact',
    keywords: ['연락처', '상담 신청', '프로젝트 문의', '견적 요청'] as string[],
  },
}

// ============= JSON-LD 구조화 데이터 =============
export function createOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/images/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+82-10-6580-7890',
      contactType: 'customer service',
      areaServed: 'KR',
      availableLanguage: 'Korean',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: '광주광역시',
      addressRegion: '동구',
      streetAddress: '동계천로 76',
      addressCountry: 'KR',
    },
    foundingDate: '2018',
    numberOfEmployees: '10-50',
    knowsAbout: SITE_CONFIG.keywords,
  }
}
