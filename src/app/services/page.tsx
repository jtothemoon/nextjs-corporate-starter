import Link from 'next/link'
import { createMetadata, pageMetadata } from '@/lib/metadata'
import { services, processSteps } from '@/content/data'
import { TECH_STACK } from '@/lib/constants'

export const metadata = createMetadata(pageMetadata.services)

export default function ServicesPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* 페이지 제목 */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold">서비스</h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            UI/UX 설계부터 시스템 개발, 운영 관리까지 고객의 성공을 위한 원스톱
            IT 솔루션을 제공합니다
          </p>
        </div>

        {/* 전체 서비스 목록 */}
        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map(service => (
            <div key={service.id} className="rounded border p-8">
              <h2 className="mb-4 text-2xl font-bold">{service.title}</h2>
              <p className="mb-6 text-gray-600">{service.description}</p>

              <div className="mb-6">
                <h3 className="mb-3 font-semibold">주요 기능</h3>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="text-sm text-gray-600">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* 개발 프로세스 */}
        <div className="mb-16">
          <h2 className="mb-12 text-center text-3xl font-bold">
            개발 프로세스
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
            {processSteps.map(step => (
              <div key={step.id} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 text-xl font-bold">
                  {step.order}
                </div>
                <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                <p className="mb-3 text-sm text-gray-600">{step.description}</p>
                {step.duration && (
                  <div className="text-sm text-blue-600">
                    소요: {step.duration}
                  </div>
                )}
                {step.deliverables && (
                  <div className="mt-2 text-xs text-gray-500">
                    {step.deliverables.join(', ')}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 기술 스택 */}
        <div className="mb-16">
          <h2 className="mb-12 text-center text-3xl font-bold">기술 스택</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-4 text-xl font-semibold">프론트엔드</h3>
              <div className="flex flex-wrap gap-2">
                {TECH_STACK.frontend.map(tech => (
                  <span key={tech} className="rounded border px-3 py-1 text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-semibold">백엔드</h3>
              <div className="flex flex-wrap gap-2">
                {TECH_STACK.backend.map(tech => (
                  <span key={tech} className="rounded border px-3 py-1 text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-semibold">데이터베이스</h3>
              <div className="flex flex-wrap gap-2">
                {TECH_STACK.database.map(tech => (
                  <span key={tech} className="rounded border px-3 py-1 text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="rounded bg-gray-50 p-12 text-center">
          <h2 className="mb-4 text-2xl font-bold">프로젝트 시작하기</h2>
          <p className="mb-6 text-gray-600">
            어떤 서비스가 필요하신지 상담받아보세요
          </p>
          <Link href="/contact" className="rounded border px-8 py-3 text-lg">
            무료 상담 신청
          </Link>
        </div>
      </div>
    </div>
  )
}
