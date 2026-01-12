import { useCallback, useState } from 'react'
import TopBar from './components/TopBar'
import SidePanel from './components/SidePanel'
import Hero from './components/Hero'
import WhatYouGet from './components/WhatYouGet'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { about, brand, services } from './content/siteContent'

export default function App() {
  const [panelOpen, setPanelOpen] = useState(false)

  const togglePanel = useCallback(() => setPanelOpen((v) => !v), [])
  const closePanel = useCallback(() => setPanelOpen(false), [])

  return (
    <div className="relative min-h-screen text-white">
      {/* Fixed background so the gradient stays consistent while scrolling */}
      <div className="fixed inset-0 -z-10 bg-site" />
      <div className="fixed inset-0 -z-10 film-overlay" />
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 rounded-full bg-teal-300 px-4 py-2 text-sm font-semibold text-ink-950"
      >
        Skip to content
      </a>

      <TopBar isPanelOpen={panelOpen} onTogglePanel={togglePanel} />
      <SidePanel open={panelOpen} onClose={closePanel} email={brand.email} />

      <main>
        <Hero about={about} />
        <WhatYouGet items={about.highlights} />
        <Services services={services} />
        <Contact email={brand.email} />
      </main>

      <Footer />
    </div>
  )
}
