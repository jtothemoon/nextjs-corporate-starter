'use client'

import { ErrorBoundary } from 'react-error-boundary'
import { Button } from '@/components/ui/button'
import { logger } from '@/lib/logger'

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
        // Logger를 사용하여 에러 로깅 (ESLint 워닝 해결)
        logger.error('Error caught by boundary', error, {
          componentStack: errorInfo.componentStack || 'unknown',
          url: typeof window !== 'undefined' ? window.location.href : 'unknown',
          userAgent:
            typeof window !== 'undefined' ? navigator.userAgent : 'unknown',
          errorBoundary: true,
        })
      }}
    >
      {children}
    </ErrorBoundary>
  )
}
