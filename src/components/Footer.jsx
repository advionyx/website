import Container from './Container'

export default function Footer() {
  return (
    <footer className="border-t border-white/15 py-8">
      <Container>
        <div className="flex flex-col gap-2 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Advionyx</p>
          <p className="tracking-[0.18em] uppercase">Execution first</p>
        </div>
      </Container>
    </footer>
  )
}
