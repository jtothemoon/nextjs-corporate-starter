import Link from 'next/link'
import { services } from '@/content/data'

export function ServicesSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">핵심 서비스</h2>
          <p className="text-xl text-gray-600">
            고객의 성공을 위한 다양한 IT 솔루션을 제공합니다
          </p>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map(service => (
            <div key={service.id} className="rounded border p-6">
              <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-600">{service.shortDescription}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/services" className="rounded border px-6 py-3">
            서비스 자세히보기
          </Link>
        </div>
      </div>
    </section>
  )
}
