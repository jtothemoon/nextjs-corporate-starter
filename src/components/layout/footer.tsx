import Link from 'next/link'
import { navItems } from '@/content/data'
import { CONTACT_INFO, SITE_CONFIG } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="border-t bg-gray-50 p-8">
      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* 회사 정보 */}
        <div>
          <div className="mb-4 text-lg font-bold">{SITE_CONFIG.name}</div>
          <div className="mb-2">{SITE_CONFIG.description}</div>
          <div className="space-y-1 text-sm">
            <div>주소: {CONTACT_INFO.address}</div>
            <div>전화: {CONTACT_INFO.phone}</div>
            <div>이메일: {CONTACT_INFO.email}</div>
          </div>
        </div>

        {/* 사이트맵 */}
        <div>
          <div className="mb-4 font-semibold">사이트맵</div>
          <div className="space-y-2">
            {navItems.map(item => (
              <div key={item.href}>
                <Link href={item.href} className="hover:underline">
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* 빈 공간 */}
        <div></div>
      </div>

      {/* 저작권 */}
      <div className="container mx-auto mt-8 border-t pt-4 text-center text-sm">
        © 2025 {SITE_CONFIG.name}. All rights reserved.
      </div>
    </footer>
  )
}
