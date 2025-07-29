import Link from 'next/link'
import { teamMembers } from '@/content/data'

export function TeamSection() {
  // 핵심 팀원 3명만 표시
  const coreTeam = teamMembers.slice(0, 3)

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">핵심 팀원</h2>
          <p className="text-xl text-gray-600">
            전문성과 경험을 갖춘 핵심 인력
          </p>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          {coreTeam.map(member => (
            <div
              key={member.id}
              className="rounded border bg-white p-6 text-center"
            >
              <div className="mx-auto mb-4 h-24 w-24 rounded-full border"></div>
              <div className="mb-1 text-xl font-semibold">{member.name}</div>
              <div className="mb-3 text-blue-600">{member.position}</div>
              <p className="mb-3 text-sm text-gray-600">{member.bio}</p>
              <div className="text-sm text-gray-500">
                경력: {member.experience}년
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/team" className="rounded border px-6 py-3">
            팀 자세히보기
          </Link>
        </div>
      </div>
    </section>
  )
}
