export default function ServiceLine({ service }) {
  const list = Array.isArray(service?.areas)
    ? service.areas
    : Array.isArray(service?.items)
    ? service.items
    : []

  return (
    <div
      className="
        rounded-3xl border border-primary-200
        bg-white/85 backdrop-blur-md shadow-glow
        p-6 sm:p-8
        animate-fadeIn
      "
    >
      {/* HEADER */}
      <div className="text-center">
        <h3 className="font-display text-xl font-black tracking-tight text-neutral-900 sm:text-2xl">
          {service?.title}
        </h3>
        <p className="mt-2 text-sm text-neutral-700 sm:text-base">
          {service?.subtitle}
        </p>
      </div>

      {/* BODY */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {list.map((a) => (
          <div
            key={a.title}
            className="
              rounded-2xl border border-primary-200
              bg-white p-4
              transition-all duration-300
              hover:shadow-md hover:-translate-y-[1px]
            "
          >
            <p className="text-sm font-semibold text-neutral-900">
              {a.title}
            </p>
            <p className="mt-2 text-sm text-neutral-700">
              {a.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
