import { createMetadata, pageMetadata } from '@/lib/metadata'
import { projects } from '@/content/data'
import { formatDate } from '@/lib/utils'

export const metadata = createMetadata(pageMetadata.portfolio)

export default function PortfolioPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* 페이지 제목 */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold">포트폴리오</h1>
          <p className="text-xl text-gray-600">
            다양한 분야에서 축적된 프로젝트 경험과 성과를 확인해보세요
          </p>
        </div>

        {/* 필터 (향후 기능) */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            <button className="rounded border px-4 py-2">전체</button>
            <button className="rounded border px-4 py-2">공공기관</button>
            <button className="rounded border px-4 py-2">기업</button>
            <button className="rounded border px-4 py-2">웹 개발</button>
            <button className="rounded border px-4 py-2">모바일</button>
          </div>
        </div>

        {/* 프로젝트 목록 */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map(project => (
            <div key={project.id} className="rounded border p-6">
              {/* 프로젝트 이미지 영역 */}
              <div className="mb-4 flex h-48 items-center justify-center rounded bg-gray-100">
                <span className="text-gray-400">프로젝트 이미지</span>
              </div>

              {/* 프로젝트 정보 */}
              <div className="mb-4">
                <h2 className="mb-2 text-xl font-bold">{project.title}</h2>
                <div className="mb-2 font-semibold text-blue-600">
                  {project.client}
                </div>
                <p className="mb-3 text-sm text-gray-600">
                  {project.description}
                </p>
              </div>

              {/* 프로젝트 기간 */}
              <div className="mb-4 text-sm text-gray-500">
                <span>기간: {formatDate(project.startDate)}</span>
                {project.endDate && (
                  <span> ~ {formatDate(project.endDate)}</span>
                )}
                <span className="ml-2 rounded bg-green-100 px-2 py-1 text-xs text-green-800">
                  {project.status === 'completed'
                    ? '완료'
                    : project.status === 'ongoing'
                      ? '진행중'
                      : '계획'}
                </span>
              </div>

              {/* 기술 스택 */}
              <div className="mb-4">
                <div className="mb-2 text-sm font-semibold">사용 기술</div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span
                      key={tech}
                      className="rounded border px-2 py-1 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* 주요 기능 */}
              <div className="mb-4">
                <div className="mb-2 text-sm font-semibold">주요 기능</div>
                <ul className="space-y-1 text-sm text-gray-600">
                  {project.features.map((feature, index) => (
                    <li key={index}>• {feature}</li>
                  ))}
                </ul>
              </div>

              {/* 성과 지표 */}
              {project.results && project.results.length > 0 && (
                <div>
                  <div className="mb-2 text-sm font-semibold">주요 성과</div>
                  <div className="grid grid-cols-2 gap-4">
                    {project.results.map((result, index) => (
                      <div key={index} className="text-center">
                        <div className="text-lg font-bold text-blue-600">
                          {result.value}
                        </div>
                        <div className="text-xs text-gray-500">
                          {result.metric}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 rounded bg-gray-50 p-12 text-center">
          <h2 className="mb-4 text-2xl font-bold">
            비슷한 프로젝트가 필요하신가요?
          </h2>
          <p className="mb-6 text-gray-600">
            귀하의 프로젝트에 대해 상담받아보세요
          </p>
          <button className="rounded border px-8 py-3 text-lg">
            프로젝트 상담 신청
          </button>
        </div>
      </div>
    </div>
  )
}
