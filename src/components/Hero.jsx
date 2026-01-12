import Container from './Container'

export default function Hero({ about }) {
  return (
    <section id="about" className="relative">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="text-xs tracking-[0.22em] uppercase text-white/60">
              {about.eyebrow}
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              {about.title}
            </h1>

            <p className="mt-4 text-lg text-white/70 sm:text-xl">
              {about.subtitle}
            </p>

            <div className="mt-8 space-y-4 text-base text-white/70">
              {about.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full bg-white/90 px-6 py-3 text-sm font-semibold text-black hover:bg-white transition"
              >
                Explore services
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-black/20 px-6 py-3 text-sm font-semibold text-white hover:bg-black/30 transition"
              >
                Contact
              </a>
              <span className="ml-1 text-xs tracking-[0.22em] uppercase text-white/50">
                Execution first
              </span>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-black/20 p-6 shadow-glow">
              <div className="absolute inset-0">
                <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
                <div className="absolute -right-24 top-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/25" />
              </div>

              <div className="relative">
                <p className="text-xs tracking-[0.22em] uppercase text-white/60">Focus</p>
                <h2 className="mt-3 text-xl font-semibold tracking-tight">Real delivery, end-to-end.</h2>
                <p className="mt-3 text-sm text-white/75">
                  Strategy, design, engineering, and documentation that actually ships.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {['Marketing', 'Technology', 'Operations'].map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white/90"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/15 bg-black/20 px-4 py-3">
                  <p className="text-sm text-white/70">Scroll to see what you get</p>
                  <div className="h-9 w-6 rounded-full border border-white/25 p-1">
                    <div className="h-2 w-2 rounded-full bg-white/90 animate-floaty" />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
