import Container from './Container'

export default function Contact({ email }) {
  return (
    <section id="contact" className="relative border-t border-white/15">
      <Container className="py-16 sm:py-20">
        <div className="rounded-3xl border border-white/15 bg-black/25 p-8 shadow-glow sm:p-10">
          <p className="text-xs tracking-[0.22em] uppercase text-white/60">CONTACT</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Let’s build something that ships.</h2>
          <p className="mt-3 text-base text-white/70 sm:text-lg">
            Send a quick note and include what you’re trying to achieve. We’ll reply with next steps.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center justify-center rounded-full bg-teal-300 px-6 py-3 text-sm font-semibold text-ink-950 hover:bg-teal-200 transition"
            >
              Email us
            </a>
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              {email}
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
