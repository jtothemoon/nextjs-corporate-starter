import { createMetadata, pageMetadata } from '@/lib/metadata'
import { CONTACT_INFO, BUDGET_RANGES } from '@/lib/constants'
import { services } from '@/content/data'

export const metadata = createMetadata(pageMetadata.contact)

export default function ContactPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* 페이지 제목 */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold">연락처</h1>
          <p className="text-xl text-gray-600">
            프로젝트 상담이나 궁금한 점이 있으시면 언제든 연락주세요
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* 상담 신청 폼 */}
          <div>
            <h2 className="mb-6 text-2xl font-bold">상담 신청</h2>
            <form className="space-y-6">
              {/* 이름, 연락처 */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    이름 *
                  </label>
                  <input
                    type="text"
                    className="w-full rounded border p-3"
                    placeholder="홍길동"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    연락처 *
                  </label>
                  <input
                    type="tel"
                    className="w-full rounded border p-3"
                    placeholder="010-1234-5678"
                  />
                </div>
              </div>

              {/* 이메일 */}
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  이메일 *
                </label>
                <input
                  type="email"
                  className="w-full rounded border p-3"
                  placeholder="example@company.com"
                />
              </div>

              {/* 회사명, 직책 */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    회사명
                  </label>
                  <input
                    type="text"
                    className="w-full rounded border p-3"
                    placeholder="회사명"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    직책
                  </label>
                  <input
                    type="text"
                    className="w-full rounded border p-3"
                    placeholder="담당자"
                  />
                </div>
              </div>

              {/* 관심 서비스 */}
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  관심 서비스
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {services.map(service => (
                    <label key={service.id} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">{service.title}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* 예산 범위 */}
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  예산 범위
                </label>
                <select className="w-full rounded border p-3">
                  <option value="">선택해주세요</option>
                  {Object.entries(BUDGET_RANGES).map(([key, value]) => (
                    <option key={key} value={key}>
                      {value}
                    </option>
                  ))}
                </select>
              </div>

              {/* 상세 내용 */}
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  상세 내용
                </label>
                <textarea
                  className="h-32 w-full rounded border p-3"
                  placeholder="프로젝트에 대한 상세한 설명을 적어주세요..."
                ></textarea>
              </div>

              {/* 개인정보 동의 */}
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">
                  개인정보 처리방침에 동의합니다 *
                </span>
              </div>

              {/* 제출 버튼 */}
              <button
                type="submit"
                className="w-full rounded bg-blue-600 py-3 text-lg font-semibold text-white"
              >
                상담 신청하기
              </button>
            </form>
          </div>

          {/* 연락처 정보 */}
          <div>
            <h2 className="mb-6 text-2xl font-bold">연락처 정보</h2>

            <div className="space-y-6">
              {/* 전화 */}
              <div>
                <h3 className="mb-2 font-semibold">전화 상담</h3>
                <div className="mb-2 text-2xl font-bold text-blue-600">
                  {CONTACT_INFO.phone}
                </div>
                <div className="text-sm text-gray-600">
                  {CONTACT_INFO.businessHours}
                </div>
              </div>

              {/* 이메일 */}
              <div>
                <h3 className="mb-2 font-semibold">이메일</h3>
                <div className="mb-2 text-lg text-blue-600">
                  {CONTACT_INFO.email}
                </div>
                <div className="text-sm text-gray-600">24시간 접수 가능</div>
              </div>

              {/* 주소 */}
              <div>
                <h3 className="mb-2 font-semibold">주소</h3>
                <div className="mb-2 text-gray-700">{CONTACT_INFO.address}</div>
              </div>

              {/* 지도 */}
              <div>
                <h3 className="mb-2 font-semibold">오시는 길</h3>
                <div className="flex h-64 items-center justify-center rounded bg-gray-100">
                  <span className="text-gray-400">지도 영역</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <h2 className="mb-8 text-center text-3xl font-bold">
            자주 묻는 질문
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded border p-6">
              <h3 className="mb-2 font-semibold">프로젝트 기간은?</h3>
              <p className="text-sm text-gray-600">
                규모에 따라 2주~6개월 정도 소요됩니다.
              </p>
            </div>
            <div className="rounded border p-6">
              <h3 className="mb-2 font-semibold">개발 비용은?</h3>
              <p className="text-sm text-gray-600">
                프로젝트 복잡도에 따라 합리적인 비용을 제안드립니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
