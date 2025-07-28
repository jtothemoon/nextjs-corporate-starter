import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-gray-900">404</h1>
        <h2 className="mb-4 text-2xl font-semibold text-gray-700">
          페이지를 찾을 수 없습니다
        </h2>
        <p className="mb-8 max-w-md text-gray-600">
          요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
        </p>
        <div className="space-x-4">
          <Button asChild>
            <Link href="/">홈으로 돌아가기</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact">문의하기</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
