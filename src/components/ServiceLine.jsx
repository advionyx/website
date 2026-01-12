export default function ServiceLine({ service, open, onToggle }) {
  return (
    <div className="rounded-3xl border border-white/15 bg-black/20">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-start justify-between gap-6 rounded-3xl px-6 py-6 text-left hover:bg-black/25 transition"
      >
        <div className="flex flex-1 gap-5">
          <div className="min-w-[3.5rem]">
            <p className="text-xs tracking-[0.22em] uppercase text-white/60">
              {service.number}
            </p>
          </div>

          <div className="flex-1">
            <h3 className="text-xl font-semibold tracking-tight">{service.title}</h3>
            <p className="mt-2 text-sm text-white/70 sm:text-base">
              {service.subtitle}
            </p>
          </div>
        </div>

        <div className="pt-1">
          <span
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/80 transition ${open ? 'rotate-45' : 'rotate-0'}`}
            aria-hidden
          >
            +
          </span>
        </div>
      </button>

      <div
        className={`overflow-hidden px-6 transition-[max-height,opacity] duration-300 ease-out ${open ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="pb-6">
          <div className="grid gap-3 sm:grid-cols-2">
            {service.items.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/15 bg-black/20 p-4"
              >
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="mt-2 text-sm text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
