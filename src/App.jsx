import { useCallback, useState } from 'react'
import TopBar from './components/TopBar'
import SidePanel from './components/SidePanel'
import Hero from './components/Hero'
import AdvisorCapabilities from './components/AdvisorCapabilities'
import WhatYouGet from './components/WhatYouGet'
import Services from './components/Services'
import AboutSection from './components/AboutSection'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { brand, hero, advisor, whatYouGet, services, about } from './content/siteContent'

export default function App() {
  const [panelOpen, setPanelOpen] = useState(false)
  const togglePanel = useCallback(() => setPanelOpen((v) => !v), [])
  const closePanel = useCallback(() => setPanelOpen(false), [])

  return (
    <div className="relative min-h-screen text-neutral-900">
      <div className="fixed inset-0 -z-10 bg-site" />
      <div className="fixed inset-0 -z-10 film-overlay" />

      <TopBar isPanelOpen={panelOpen} onTogglePanel={togglePanel} email={brand.email} />
      <SidePanel open={panelOpen} onClose={closePanel} email={brand.email} />

      <main>
        <Hero hero={hero} />
        <Services services={services} />
        <AdvisorCapabilities advisor={advisor} />
        {/* <WhatYouGet items={whatYouGet} /> */}
        <AboutSection about={about} />
        <Contact email={brand.email} />
      </main>

      <Footer />
    </div>
  )
}
