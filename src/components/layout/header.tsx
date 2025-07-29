import Link from 'next/link'
import { navItems } from '@/content/data'
import { SITE_CONFIG } from '@/lib/constants'

export function Header() {
  return (
    <header className="border-b p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* 로고 */}
        <Link href="/" className="text-xl font-bold">
          {SITE_CONFIG.name}
        </Link>

        {/* 메뉴 */}
        <nav className="flex space-x-6">
          {navItems.map(item => (
            <Link key={item.href} href={item.href} className="hover:underline">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* 상담신청 버튼 */}
        <Link href="/contact" className="rounded border px-4 py-2">
          상담 신청
        </Link>
      </div>
    </header>
  )
}
