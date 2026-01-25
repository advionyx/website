import { useEffect, useRef, useState } from 'react'
import Container from './Container'
import SectionHeader from './SectionHeader'
import ServiceLine from './ServiceLine'

const ROTATE_INTERVAL = 6500

export default function Services({ services = [] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const timerRef = useRef(null)
  const pausedRef = useRef(false)

  const activeService = services[activeIndex]

  // --- Auto rotation ---
  useEffect(() => {
    if (!services.length) return

    timerRef.current = setInterval(() => {
      if (!pausedRef.current) {
        setActiveIndex((i) => (i + 1) % services.length)
      }
    }, ROTATE_INTERVAL)

    return () => clearInterval(timerRef.current)
  }, [services.length])

  const handleSelect = (index) => {
    setActiveIndex(index)
    // reset timer so it doesn’t instantly rotate again
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      if (!pausedRef.current) {
        setActiveIndex((i) => (i + 1) % services.length)
      }
    }, ROTATE_INTERVAL)
  }

  return (
    <section id="services" className="relative">
      <Container className="py-16 sm:py-20">
        <SectionHeader
          eyebrow="SERVICE LINES"
          title="Built for execution, not decks."
        />

        <div
          className="mt-12 grid gap-8 lg:grid-cols-[280px_1fr]"
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
        >
          {/* SELECTOR */}
          <div className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible pb-2 lg:pb-0">
            {services.map((s, i) => {
              const active = i === activeIndex

              return (
                <button
                  key={s.id}
                  onClick={() => handleSelect(i)}
                  className={`
                    shrink-0 rounded-2xl px-4 py-3 text-left text-sm font-semibold
                    transition-all duration-300
                    ${
                      active
                        ? 'bg-white text-neutral-900 shadow-glow'
                        : 'bg-white/70 text-neutral-500 hover:bg-white hover:text-neutral-900'
                    }
                  `}
                >
                  {s.title}
                </button>
              )
            })}
          </div>

          {/* CONTENT */}
          <div className="relative">
            {activeService && (
              <ServiceLine key={activeService.id} service={activeService} />
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
