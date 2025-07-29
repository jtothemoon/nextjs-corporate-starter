import Link from 'next/link'
import { CONTACT_INFO } from '@/lib/constants'

export function ContactCTASection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold">
          프로젝트 제안 또는 협업이 필요하신가요?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
          간단한 제안 요청부터 개발 문의까지 빠르고 정확하게 응답드립니다
        </p>

        <div className="space-y-4">
          <div>
            <Link href="/contact" className="rounded border px-8 py-4 text-lg">
              무료 상담 신청
            </Link>
          </div>
          <div className="text-gray-600">전화 상담: {CONTACT_INFO.phone}</div>
        </div>
      </div>
    </section>
  )
}
