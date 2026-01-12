import { useEffect, useRef, useState } from 'react'
import Container from './Container'
import SectionHeader from './SectionHeader'

function pad2(n) {
  return String(n).padStart(2, '0')
}

function MiniCard({ index, label, value, isActive, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-current={isActive ? 'true' : undefined}
      className={
        'w-full text-left rounded-3xl border px-6 py-5 transition backdrop-blur-md ' +
        (isActive
          ? 'border-white/30 bg-black/25 shadow-glow'
          : 'border-white/12 bg-black/15 hover:border-white/22 hover:bg-black/20')
      }
    >
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className="text-xs tracking-[0.22em] uppercase text-white/60">
            {pad2(index + 1)}
          </p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">{label}</h3>
          <p className="mt-2 text-base text-white/75">{value}</p>
        </div>

        <span
          className={
            'mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full border text-sm transition ' +
            (isActive
              ? 'border-white/25 bg-white/10 text-white'
              : 'border-white/15 bg-white/5 text-white/70')
          }
          aria-hidden
        >
          →
        </span>
      </div>
    </button>
  )
}

function VisualStage({ items, activeIndex }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-black/25 shadow-glow">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/18 blur-3xl" />
        <div className="absolute -right-24 top-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-52 bg-gradient-to-t from-black/35 to-transparent" />
      </div>

      <div className="relative h-[360px] sm:h-[440px]">
        {items.map((it, idx) => {
          const isActive = idx === activeIndex
          return (
            <div
              key={it.label}
              className={
                'absolute inset-0 p-7 sm:p-10 transition-all duration-500 ' +
                (isActive
                  ? 'opacity-100 translate-y-0'
                  : 'pointer-events-none opacity-0 translate-y-4')
              }
              aria-hidden={!isActive}
            >
              <p className="text-xs tracking-[0.22em] uppercase text-white/70">WHAT YOU GET</p>

              <div className="mt-7 flex items-start justify-between gap-6">
                <div>
                  <p className="text-5xl font-semibold tracking-tight sm:text-6xl">
                    {pad2(idx + 1)}
                  </p>
                  <p className="mt-3 text-xs tracking-[0.22em] uppercase text-white/60">
                    {it.label}
                  </p>
                  <p className="mt-3 max-w-md text-base text-white/80 sm:text-lg">{it.value}</p>
                </div>

                <div className="hidden sm:block">
                  <div className="h-14 w-14 rounded-2xl border border-white/15 bg-white/10" />
                </div>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-4">
                {[0, 1, 2].map((n) => (
                  <div
                    key={n}
                    className="h-10 rounded-2xl border border-white/10 bg-white/5"
                  />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function WhatYouGet({ items = [] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef(null)
  const triggerRefs = useRef([])

  useEffect(() => {
    const els = triggerRefs.current.filter(Boolean)
    if (!els.length) return

    let rafId = null

    const computeActive = () => {
      const section = sectionRef.current
      if (section) {
        const r = section.getBoundingClientRect()
        if (r.bottom < 0 || r.top > window.innerHeight) return
      }

      const viewportMid = window.innerHeight * 0.5
      let bestIdx = 0
      let bestDist = Number.POSITIVE_INFINITY

      for (let i = 0; i < els.length; i += 1) {
        const rect = els[i].getBoundingClientRect()
        const elMid = rect.top + rect.height / 2
        const dist = Math.abs(elMid - viewportMid)
        if (dist < bestDist) {
          bestDist = dist
          bestIdx = i
        }
      }

      setActiveIndex(bestIdx)
    }

    const onScroll = () => {
      if (rafId) return
      rafId = requestAnimationFrame(() => {
        rafId = null
        computeActive()
      })
    }

    computeActive()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [items.length])

  const scrollTo = (idx) => {
    const el = triggerRefs.current[idx]
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <section ref={sectionRef} id="what-you-get" className="relative">
      <Container className="py-16 sm:py-20">
        <SectionHeader
          eyebrow="WHAT YOU GET"
          title="The outcomes you can count on"
          subtitle="Scroll to move through each promise. Click a card to jump."
        />

        {/* Desktop scrollytelling (NO huge blank space) */}
        <div className="mt-10 hidden lg:block">
          <div className="relative">
            {/* Sticky UI */}
            <div className="sticky top-24 z-10 h-[calc(100vh-6rem)] flex items-center">
              <div className="grid w-full grid-cols-12 gap-10">
                {/* Left: cards */}
                <div className="col-span-4">
                  <div className="w-full max-w-[420px] space-y-4">
                    {items.map((it, idx) => (
                      <MiniCard
                        key={it.label}
                        index={idx}
                        label={it.label}
                        value={it.value}
                        isActive={idx === activeIndex}
                        onClick={() => scrollTo(idx)}
                      />
                    ))}
                  </div>
                </div>

                {/* Right: visual */}
                <div className="col-span-8">
                  <div className="w-full">
                    <VisualStage items={items} activeIndex={activeIndex} />

                    <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/15 bg-black/20 px-4 py-3">
                      <p className="text-sm text-white/70">Keep scrolling</p>
                      <div className="flex items-center gap-2">
                        {items.map((_, i) => (
                          <span
                            key={i}
                            className={
                              'h-1.5 w-7 rounded-full transition ' +
                              (i === activeIndex ? 'bg-white/80' : 'bg-white/20')
                            }
                            aria-hidden
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll triggers (overlapped under sticky UI so you don't get a giant empty tail) */}
            <div
              className="-mt-[calc(100vh-6rem)] pointer-events-none select-none opacity-0"
              aria-hidden="true"
            >
              <div className="h-[10vh]" />
              {items.map((it, idx) => (
                <div
                  key={it.label}
                  ref={(el) => (triggerRefs.current[idx] = el)}
                  className="h-[40vh]"
                />
              ))}
              <div className="h-[10vh]" />
            </div>
          </div>
        </div>

        {/* Mobile: stacked (simple, testable) */}
        <div className="mt-10 grid gap-6 lg:hidden">
          {items.map((it, idx) => (
            <div key={it.label} className="grid gap-4">
              <MiniCard
                index={idx}
                label={it.label}
                value={it.value}
                isActive={true}
                onClick={() => {}}
              />
              <VisualStage items={items} activeIndex={idx} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
