export default function ServiceLine({ service }) {
  // Support both shapes: `areas` (new) or `items` (old)
  const list = Array.isArray(service?.areas)
    ? service.areas
    : Array.isArray(service?.items)
    ? service.items
    : []

  return (
    <div className="rounded-3xl border border-primary-200 bg-white/85 shadow-glow backdrop-blur-md">
      {/* Header */}
      <div className="px-5 py-5 sm:px-6 sm:py-6">
        {/* MOBILE: stack, DESKTOP: side-by-side */}
        <div className="flex flex-col gap-2 sm:flex-row sm:gap-5">
        {/* <p className="text-xs tracking-[0.22em] uppercase text-neutral-600 sm:min-w-[3.5rem]">
            {service?.number}
          </p>   */}

          <div className="flex-1 text-center">
            <h3 className="font-display text-xl font-black tracking-tight text-neutral-900 sm:text-2xl">
              {service?.title}
            </h3>
            <p className="mt-2 text-sm text-neutral-700 sm:text-base">
              {service?.subtitle}
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="mt-5">
          {list.length === 0 ? (
            <div className="rounded-2xl border border-primary-200 bg-white p-4 text-sm text-neutral-700">
              No details added yet.
            </div>
          ) : (
            <div className="grid gap-3 sm:grid-cols-2">
              {list.map((a) => (
                <div
                  key={a.title}
                  className="rounded-2xl border border-primary-200 bg-white p-4"
                >
                  <p className="text-sm font-semibold text-neutral-900">{a.title}</p>
                  <p className="mt-2 text-sm text-neutral-700">{a.desc}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
