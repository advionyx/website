import Container from './Container'

export default function Contact({ email }) {
  return (
    <section id="contact" className="relative">
      <Container className="py-12 sm:py-16">
        <div className="rounded-3xl border border-primary-200 bg-white/85 p-8 shadow-glow backdrop-blur-md sm:p-10">
          <p className="text-xs tracking-[0.22em] uppercase text-neutral-600">CONTACT US</p>

          <h2 className="mt-3 font-display text-2xl font-black tracking-tight text-neutral-900 sm:text-3xl">
            Have a problem worth building?
          </h2>

          <p className="mt-3 text-base text-neutral-700 sm:text-lg">
            Send a quick note. We’ll reply with next steps.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center justify-center rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold text-white hover:bg-primary-600 transition"
            >
              Talk to us
            </a>

            <a
              href={`mailto:${email}`}
              className="inline-flex items-center justify-center rounded-full border border-primary-200 bg-white px-6 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-50 transition"
            >
              {email}
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
