import Container from './Container'
import SectionHeader from './SectionHeader'

export default function AdvisorCapabilities({ advisor }) {
  return (
    <section id="advisor" className="relative">
      <Container className="py-16 sm:py-20">
        <SectionHeader eyebrow={advisor.eyebrow} title={advisor.title} subtitle={advisor.body} />

        <div className="mt-10 rounded-3xl border border-primary-200 bg-white/85 p-8 shadow-glow backdrop-blur-md sm:p-10">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {advisor.capabilities.map((c) => (
              <span
                key={c}
                className="flex items-center justify-center rounded-full border border-primary-200 bg-white px-4 py-2 text-sm font-semibold text-neutral-800"
              >
                {c}
              </span>
            ))}
          </div>

        </div>
      </Container>
    </section>
  )
}
