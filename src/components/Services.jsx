import Container from './Container'
import SectionHeader from './SectionHeader'
import ServiceLine from './ServiceLine'

export default function Services({ services = [] }) {
  return (
    <section id="services" className="relative">
      <Container className="py-16 sm:py-20">
        <SectionHeader
          eyebrow="SERVICE LINES"
          title="Built for execution, not decks."
          // subtitle="Service areas are listed openly for quick scanning."
        />

        <div className="mt-10 space-y-4">
          {services.map((s) => (
            <ServiceLine key={s.id} service={s} />
          ))}
        </div>
      </Container>
    </section>
  )
}
