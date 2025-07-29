import { createMetadata, pageMetadata } from '../lib/metadata'

import { HeroSection } from '@/components/sections/hero-section'
import { TrustSection } from '@/components/sections/trust-section'
import { ServicesSection } from '@/components/sections/services-section'
import { PortfolioSection } from '@/components/sections/portfolio-section'
import { ProcessSection } from '@/components/sections/process-section'
import { TeamSection } from '@/components/sections/team-section'
import { ContactCTASection } from '@/components/sections/contact-cta-section'

export const metadata = createMetadata(pageMetadata.home)

export default async function HomePage() {
  // 테스트를 위한 1초 지연
  await new Promise(resolve => setTimeout(resolve, 1000))

  return (
    <div>
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <PortfolioSection />
      <ProcessSection />
      <TeamSection />
      <ContactCTASection />
    </div>
  )
}
