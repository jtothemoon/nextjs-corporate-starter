'use client'

import { ErrorBoundary } from 'react-error-boundary'
import { Button } from '@/components/ui/button'

function ErrorFallback({
  error,
  resetErrorBoundary,
}: {
  error: Error
  resetErrorBoundary: () => void
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="text-center">
        <h2 className="mb-4 text-2xl font-bold text-red-600">
          문제가 발생했습니다
        </h2>
        <p className="mb-6 max-w-md text-gray-600">
          예상치 못한 오류가 발생했습니다. 다시 시도해 주세요.
        </p>
        <details className="mb-6 text-left">
          <summary className="mb-2 cursor-pointer text-sm text-gray-500">
            오류 상세 정보
          </summary>
          <pre className="max-w-md overflow-auto rounded bg-gray-100 p-3 text-xs">
            {error.message}
          </pre>
        </details>
        <Button onClick={resetErrorBoundary}>다시 시도</Button>
      </div>
    </div>
  )
}

export function AppErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error, errorInfo) => {
        console.error('Error caught by boundary:', error, errorInfo)
      }}
    >
      {children}
    </ErrorBoundary>
  )
}
