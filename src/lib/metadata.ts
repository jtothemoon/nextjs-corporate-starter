import type { Metadata } from 'next'

interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: 'website' | 'article'
}

export function createMetadata({
  title,
  description = '공공기관과 기업을 위한 맞춤형 IT 솔루션을 제공하는 자몽IT입니다.',
  image = '/images/og-image.jpg',
  url,
  type = 'website',
}: SEOProps = {}): Metadata {
  const fullTitle = title
    ? `${title} | 자몽IT`
    : '자몽IT - 공공과 기업을 잇는 디지털 솔루션'
  const fullUrl = url ? `https://jamong.it.kr${url}` : 'https://jamong.it.kr'

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url: fullUrl,
      siteName: '자몽IT',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title || '자몽IT',
        },
      ],
      locale: 'ko_KR',
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}
