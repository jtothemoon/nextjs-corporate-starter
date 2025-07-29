import { createMetadata, pageMetadata } from '@/lib/metadata'
import { teamMembers } from '@/content/data'

export const metadata = createMetadata(pageMetadata.team)

export default function TeamPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* 페이지 제목 */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold">팀</h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            다양한 분야의 전문가들이 모여 최고의 IT 솔루션을 제공합니다. 각자의
            전문성을 바탕으로 고객의 성공을 위해 협력합니다.
          </p>
        </div>

        {/* 팀원 목록 */}
        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map(member => (
            <div key={member.id} className="rounded border p-6 text-center">
              {/* 프로필 이미지 */}
              <div className="mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-gray-100">
                <span className="text-gray-400">사진</span>
              </div>

              {/* 기본 정보 */}
              <div className="mb-4">
                <h2 className="mb-1 text-xl font-bold">{member.name}</h2>
                <div className="mb-2 font-semibold text-blue-600">
                  {member.position}
                </div>
                {member.department && (
                  <div className="mb-2 text-sm text-gray-500">
                    {member.department}
                  </div>
                )}
                <div className="text-sm text-gray-500">
                  경력 {member.experience}년
                </div>
              </div>

              {/* 소개 */}
              <p className="mb-4 text-sm text-gray-600">{member.bio}</p>

              {/* 주요 스킬 */}
              <div className="mb-4">
                <div className="mb-2 text-sm font-semibold">주요 스킬</div>
                <div className="flex flex-wrap justify-center gap-1">
                  {member.skills.map(skill => (
                    <span
                      key={skill}
                      className="rounded border px-2 py-1 text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* 학력 정보 */}
              {member.education && member.education.length > 0 && (
                <div className="mb-4">
                  <div className="mb-2 text-sm font-semibold">학력</div>
                  {member.education.map((edu, index) => (
                    <div key={index} className="text-xs text-gray-600">
                      {edu.school} {edu.major} {edu.degree} (
                      {edu.graduationYear})
                    </div>
                  ))}
                </div>
              )}

              {/* 자격증 */}
              {member.certifications && member.certifications.length > 0 && (
                <div>
                  <div className="mb-2 text-sm font-semibold">자격증</div>
                  {member.certifications.map((cert, index) => (
                    <div key={index} className="text-xs text-gray-600">
                      {cert.name} ({cert.issuer})
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 팀 문화 */}
        <div className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold">팀 문화</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <h3 className="mb-4 text-xl font-semibold">협업</h3>
              <p className="text-gray-600">
                서로의 전문성을 존중하고 협력하여 최상의 결과를 만들어냅니다
              </p>
            </div>
            <div className="text-center">
              <h3 className="mb-4 text-xl font-semibold">성장</h3>
              <p className="text-gray-600">
                지속적인 학습과 경험 공유를 통해 함께 성장하는 문화를
                만들어갑니다
              </p>
            </div>
            <div className="text-center">
              <h3 className="mb-4 text-xl font-semibold">혁신</h3>
              <p className="text-gray-600">
                새로운 기술과 방법론을 적극 도입하여 더 나은 솔루션을 제공합니다
              </p>
            </div>
          </div>
        </div>

        {/* 채용 정보 (선택사항) */}
        <div className="rounded bg-gray-50 p-12 text-center">
          <h2 className="mb-4 text-2xl font-bold">함께할 동료를 찾습니다</h2>
          <p className="mb-6 text-gray-600">
            자몽IT와 함께 성장하며 의미 있는 프로젝트에 참여하고 싶다면
          </p>
          <button className="rounded border px-8 py-3 text-lg">
            채용 정보 보기
          </button>
        </div>
      </div>
    </div>
  )
}
