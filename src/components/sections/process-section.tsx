import { processSteps } from '@/content/data'

export function ProcessSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">개발 프로세스</h2>
          <p className="text-xl text-gray-600">
            체계적이고 투명한 프로젝트 진행
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          {processSteps.map(step => (
            <div key={step.id} className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border text-xl font-bold">
                {step.order}
              </div>
              <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
              <p className="mb-2 text-sm text-gray-600">{step.description}</p>
              {step.duration && (
                <div className="text-sm text-blue-600">
                  소요시간: {step.duration}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
