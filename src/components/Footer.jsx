import Container from './Container'

export default function Footer() {
  return (
    <footer className="border-t border-brand-200/60 py-8">
      <Container>
        <div className="flex flex-col gap-2 text-xs text-neutral-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Advionyx</p>
          <p className="tracking-[0.18em] uppercase">Execution first</p>
        </div>
      </Container>
    </footer>
  )
}
