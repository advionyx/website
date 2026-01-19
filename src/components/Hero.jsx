import Container from './Container'

function Chip({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-primary-200 bg-white px-3 py-1 text-xs font-semibold text-neutral-800">
      {children}
    </span>
  )
}

export default function Hero({ hero }) {
  return (
    <section id="home" className="relative">
      <div className="pointer-events-none absolute inset-0 hero-wash" />

      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left */}
          <div className="lg:col-span-7">
            {/* <div className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white px-3 py-1.5 text-xs font-semibold text-neutral-700">
              <span className="h-2 w-2 rounded-full bg-primary-700" />
              {hero.eyebrow}
            </div> */}

            <h1 className="mt-6 font-display text-4xl font-black tracking-tight text-neutral-900 sm:text-5xl lg:text-5xl">
              {hero.headline}
            </h1>

            <p className="mt-5 max-w-2xl text-base text-neutral-700 sm:text-lg">
              {hero.subtext}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={hero.cta.href}
                className="inline-flex items-center justify-center rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold text-white hover:bg-primary-600 transition"
              >
                {hero.cta.label}
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-primary-200 bg-white px-6 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-50 transition"
              >
                View services
              </a>
            </div>
          </div>

          {/* Right Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-[2rem] border border-primary-200 bg-white/85 p-6 shadow-glow backdrop-blur-md">
              {/* floating chips (Influence vibe) */}
              <div className="absolute -left-4 top-10 hidden lg:block">
                <div className="rounded-full border border-primary-200 bg-white px-3 py-2 text-xs font-semibold text-neutral-800 shadow">
                  {hero.card.badge}
                </div>
              </div>
              <div className="absolute -right-5 top-16 hidden lg:block">
                <div className="rounded-full border border-primary-200 bg-white px-3 py-2 text-xs font-semibold text-neutral-800 shadow">
                  Faster decisions
                </div>
              </div>
              <div className="absolute -right-6 bottom-12 hidden lg:block">
                <div className="rounded-full border border-primary-200 bg-white px-3 py-2 text-xs font-semibold text-neutral-800 shadow">
                  Reduced risk
                </div>
              </div>

              <div className="rounded-3xl border border-primary-100 bg-primary-50 px-5 py-5">
                <p className="text-xs tracking-[0.22em] uppercase text-neutral-600">Preview</p>
                <p className="mt-2 font-display text-2xl font-black tracking-tight text-neutral-900">
                  {hero.card.title}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {hero.card.chips.map((c) => (
                    <Chip key={c}>{c}</Chip>
                  ))}
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {hero.card.bullets.map((b) => (
                  <div
                    key={b}
                    className="flex items-start gap-3 rounded-2xl border border-primary-200 bg-white px-4 py-3"
                  >
                    <span className="mt-1.5 inline-flex h-2 w-2 rounded-full bg-primary-700" />
                    <p className="text-sm text-neutral-800">{b}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
