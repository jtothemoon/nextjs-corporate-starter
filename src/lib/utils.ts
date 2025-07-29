// 유틸리티 함수들

import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// ============= 스타일 관련 =============
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// ============= 날짜 관련 =============
export function formatDate(
  date: Date | string,
  locale: string = 'ko-KR'
): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  return dateObj.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function formatDateShort(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  return dateObj.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
}

export function getProjectDuration(startDate: Date, endDate?: Date): string {
  const start = new Date(startDate)
  const end = endDate ? new Date(endDate) : new Date()

  const diffTime = Math.abs(end.getTime() - start.getTime())
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  const diffMonths = Math.floor(diffDays / 30)

  if (diffMonths === 0) {
    return `${diffDays}일`
  } else if (diffMonths < 12) {
    return `${diffMonths}개월`
  } else {
    const years = Math.floor(diffMonths / 12)
    const remainingMonths = diffMonths % 12
    return remainingMonths > 0
      ? `${years}년 ${remainingMonths}개월`
      : `${years}년`
  }
}

// ============= 문자열 관련 =============
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text
  return text.slice(0, length) + '...'
}

export function slug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9가-힣]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

export function formatPhoneNumber(phone: string): string {
  // 010-1234-5678 형태로 포맷팅
  const cleaned = phone.replace(/\D/g, '')
  const match = cleaned.match(/^(\d{3})(\d{4})(\d{4})$/)
  return match ? `${match[1]}-${match[2]}-${match[3]}` : phone
}

// ============= 숫자 관련 =============
export function formatNumber(num: number): string {
  return new Intl.NumberFormat('ko-KR').format(num)
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW',
  }).format(amount)
}

// ============= 배열 관련 =============
export function shuffle<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export function chunk<T>(array: T[], size: number): T[][] {
  return Array.from({ length: Math.ceil(array.length / size) }, (_, index) =>
    array.slice(index * size, index * size + size)
  )
}

// ============= 객체 관련 =============
export function groupBy<T, K extends string | number | symbol>(
  array: T[],
  key: (item: T) => K
): Record<K, T[]> {
  return array.reduce(
    (groups, item) => {
      const group = key(item)
      groups[group] = groups[group] || []
      groups[group].push(item)
      return groups
    },
    {} as Record<K, T[]>
  )
}

// ============= 검증 관련 =============
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^01[0-9]-?\d{4}-?\d{4}$/
  return phoneRegex.test(phone.replace(/\s/g, ''))
}

// ============= URL 관련 =============
export function createAbsoluteUrl(path: string): string {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  return `${baseUrl}${path.startsWith('/') ? path : `/${path}`}`
}

export function isExternalUrl(url: string): boolean {
  return url.startsWith('http') || url.startsWith('//')
}

// ============= 스크롤 관련 =============
export function scrollToElement(elementId: string, offset: number = 0): void {
  const element = document.getElementById(elementId)
  if (element) {
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  }
}

// ============= 로컬 스토리지 (사용 안함 - 메모용) =============
// 브라우저 환경에서만 사용하고, Claude.ai artifacts에서는 사용 불가
// export function getLocalStorage<T>(key: string, defaultValue: T): T {
//   if (typeof window === 'undefined') return defaultValue
//   try {
//     const item = window.localStorage.getItem(key)
//     return item ? JSON.parse(item) : defaultValue
//   } catch {
//     return defaultValue
//   }
// }

// ============= 디바운스 =============
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null

  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

// ============= 로딩 상태 =============
export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}
