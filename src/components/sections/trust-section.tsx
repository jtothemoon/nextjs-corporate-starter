import { trustMetrics, clients } from '@/content/data'

export function TrustSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* 신뢰도 지표 */}
        <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          {trustMetrics.map(metric => (
            <div key={metric.id} className="text-center">
              <div className="mb-2 text-3xl font-bold">
                {metric.value}
                {metric.unit}
              </div>
              <div className="text-gray-600">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* 주요 고객사 */}
        <div className="text-center">
          <h2 className="mb-8 text-2xl font-bold">주요 고객사</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-6">
            {clients.map(client => (
              <div key={client.id} className="border p-4 text-center">
                {client.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
