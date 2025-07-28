export default function Loading() {
  return (
    <div className="flex min-h-[200px] items-center justify-center">
      <div className="flex items-center space-x-2">
        <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-blue-600"></div>
        <span className="text-gray-600">로딩 중...</span>
      </div>
    </div>
  )
}
