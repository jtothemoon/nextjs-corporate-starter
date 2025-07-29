import Link from 'next/link'
import { projects } from '@/content/data'

export function PortfolioSection() {
  // 대표 프로젝트 3개만 표시
  const featuredProjects = projects.slice(0, 3)

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">프로젝트 사례</h2>
          <p className="text-xl text-gray-600">
            다양한 분야의 성공적인 프로젝트 경험
          </p>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          {featuredProjects.map(project => (
            <div key={project.id} className="rounded border bg-white p-6">
              <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
              <div className="mb-3 text-blue-600">{project.client}</div>
              <p className="mb-4 text-gray-600">{project.shortDescription}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span key={tech} className="rounded border px-2 py-1 text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/portfolio" className="rounded border px-6 py-3">
            전체 포트폴리오 보기
          </Link>
        </div>
      </div>
    </section>
  )
}
