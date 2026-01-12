import { useState } from 'react'
import Container from './Container'
import SectionHeader from './SectionHeader'
import ServiceLine from './ServiceLine'

export default function Services({ services }) {
  const [openId, setOpenId] = useState(services?.[0]?.id)

  return (
    <section id="services" className="relative border-t border-white/15">
      <Container className="py-16 sm:py-20">
        <SectionHeader
          eyebrow="SERVICES"
          title="Three lines of service. One standard: delivery."
          subtitle="Pick what you need. We can run end-to-end or plug into your team."
        />

        <div className="mt-10 space-y-3">
          {services.map((s) => (
            <ServiceLine
              key={s.id}
              service={s}
              open={openId === s.id}
              onToggle={() => setOpenId((prev) => (prev === s.id ? null : s.id))}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
