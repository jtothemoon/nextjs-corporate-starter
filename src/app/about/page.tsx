import { createMetadata, pageMetadata } from '@/lib/metadata'
import { companyInfo } from '@/content/data'

export const metadata = createMetadata(pageMetadata.about)

export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* 페이지 제목 */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold">회사 소개</h1>
          <p className="text-xl text-gray-600">
            공공과 기업을 잇는 디지털 브릿지, 자몽IT입니다
          </p>
        </div>

        {/* 회사 비전/미션 */}
        <div className="mb-16">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-bold">비전</h2>
              <p className="text-gray-600">
                공공기관과 기업이 디지털 전환을 통해 더 나은 서비스를 제공할 수
                있도록 신뢰할 수 있는 IT 파트너가 되겠습니다.
              </p>
            </div>
            <div>
              <h2 className="mb-4 text-2xl font-bold">미션</h2>
              <p className="text-gray-600">
                사용자 중심의 혁신적인 기술로 고객의 성공을 지원하고, 지속
                가능한 디지털 생태계 구축에 기여합니다.
              </p>
            </div>
          </div>
        </div>

        {/* 회사 연혁 */}
        <div className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold">회사 연혁</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <div className="text-lg font-semibold">2018년</div>
              <div className="text-gray-600">자몽IT 설립</div>
            </div>
            <div className="border-l-4 border-blue-500 pl-6">
              <div className="text-lg font-semibold">2019년</div>
              <div className="text-gray-600">첫 공공기관 프로젝트 수주</div>
            </div>
            <div className="border-l-4 border-blue-500 pl-6">
              <div className="text-lg font-semibold">2020년</div>
              <div className="text-gray-600">
                전자정부 프레임워크 전문기업 인증
              </div>
            </div>
            <div className="border-l-4 border-blue-500 pl-6">
              <div className="text-lg font-semibold">2023년</div>
              <div className="text-gray-600">누적 프로젝트 50건 달성</div>
            </div>
          </div>
        </div>

        {/* 회사 정보 */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-2xl font-bold">회사 정보</h2>
            <div className="space-y-3">
              <div>
                <span className="font-semibold">회사명:</span>{' '}
                {companyInfo.name}
              </div>
              <div>
                <span className="font-semibold">설립:</span>{' '}
                {companyInfo.establishedYear}년
              </div>
              <div>
                <span className="font-semibold">주소:</span>{' '}
                {companyInfo.address}
              </div>
              <div>
                <span className="font-semibold">전화:</span> {companyInfo.phone}
              </div>
              <div>
                <span className="font-semibold">이메일:</span>{' '}
                {companyInfo.email}
              </div>
            </div>
          </div>

          <div>
            <h2 className="mb-6 text-2xl font-bold">핵심 가치</h2>
            <div className="space-y-4">
              <div>
                <div className="font-semibold">신뢰</div>
                <div className="text-sm text-gray-600">
                  약속한 것은 반드시 지킵니다
                </div>
              </div>
              <div>
                <div className="font-semibold">혁신</div>
                <div className="text-sm text-gray-600">
                  새로운 기술과 방법을 추구합니다
                </div>
              </div>
              <div>
                <div className="font-semibold">협력</div>
                <div className="text-sm text-gray-600">
                  고객과 함께 성장합니다
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
