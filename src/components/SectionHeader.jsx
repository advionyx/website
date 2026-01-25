export default function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center" >
      {eyebrow ? (
        <p className="text-xs tracking-[0.22em] uppercase text-neutral-600">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 font-display text-2xl font-black tracking-tight text-neutral-900 sm:text-3xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-base text-neutral-700 sm:text-lg">{subtitle}</p>
      ) : null}
    </div>
  )
}
