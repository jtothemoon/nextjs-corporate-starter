'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center p-4">
      <div className="text-center">
        <h2 className="mb-4 text-xl font-semibold text-red-600">
          페이지 로딩 중 오류가 발생했습니다
        </h2>
        <p className="mb-6 text-gray-600">
          페이지를 불러오는 중 문제가 발생했습니다.
        </p>
        <Button onClick={() => reset()}>다시 시도</Button>
      </div>
    </div>
  )
}
