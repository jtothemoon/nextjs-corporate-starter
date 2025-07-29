import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="py-20 text-center">
      <div className="container mx-auto px-4">
        <h1 className="mb-6 text-4xl font-bold">
          공공기관과 기업의 디지털 전환을 완성하는 IT 파트너
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-xl">
          제안부터 개발, 운영까지 - 신뢰할 수 있는 원스톱 솔루션
        </p>

        <div className="space-x-4">
          <Link href="/contact" className="rounded border px-6 py-3">
            무료 상담 신청
          </Link>
          <Link href="/portfolio" className="rounded border px-6 py-3">
            포트폴리오 보기
          </Link>
        </div>
      </div>
    </section>
  )
}
