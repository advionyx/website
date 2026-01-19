import Container from './Container'
import SectionHeader from './SectionHeader'

export default function AboutSection({ about }) {
  return (
    <section id="about" className="relative border-t border-primary-200/70">
      <Container className="py-16 sm:py-20">
        <SectionHeader
          eyebrow={about.eyebrow}
          title={about.title}
          subtitle={null}
        />

        <div className="mt-10 rounded-3xl border border-primary-200 bg-white/85 p-8 shadow-glow backdrop-blur-md sm:p-10">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-xs tracking-[0.22em] uppercase text-neutral-600">
                About
              </p>
              <p className="mt-3 text-base font-semibold text-neutral-900">
                Execution-first consulting for teams that need progress, not decks.
              </p>
            </div>

            <div className="lg:col-span-8 space-y-4 text-base text-neutral-700">
              {about.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
