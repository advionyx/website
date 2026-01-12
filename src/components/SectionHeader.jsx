export default function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="text-xs tracking-[0.22em] uppercase text-white/60">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-base text-white/70 sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
