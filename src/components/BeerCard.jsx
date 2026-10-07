import CardIcon from '../assets/CardIcon.png'

function formatRange(range, unit = '') {
  return range ? `${range.min}–${range.max}${unit}` : '—'
}

function Stat({ label, value, unit }) {
  const hasValue = value !== '—'

  return (
    <div className="px-3">
      <span className="block text-[10px] font-medium uppercase tracking-wide text-text-secondary">
        {label}
      </span>
      <span className="mt-1 block text-sm font-medium">
        {value}
        {hasValue && unit && (
          <span className="ml-1 text-[10px] text-text-secondary">{unit}</span>
        )}
      </span>
    </div>
  )
}

function BeerCard({ style }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">
      <div className="flex h-32 items-start justify-between bg-accent p-5">
        <span className="rounded-full bg-background px-3 py-1 text-xs font-medium">
          {style.category}
        </span>

        <div className="flex size-12 items-center justify-center rounded-full border border-white/30 bg-white/10">
          <img src={CardIcon} alt="" />
        </div>
      </div>

      <div className="p-5">
        <h2 className="font-title text-2xl">{style.name}</h2>

        <div className="mt-5 grid grid-cols-3 divide-x divide-border rounded-xl bg-background-secondary py-3">
          <Stat label="Amargor" value={formatRange(style.ibu)} unit="IBU" />
          <Stat label="Álcool" value={formatRange(style.abv, '%')} />
          <Stat label="Cor" value={formatRange(style.srm)} unit="SRM" />
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
          <button
            type="button"
            className="text-sm text-primary transition-colors hover:text-accent"
          >
            Ver detalhes
          </button>
        </div>
      </div>
    </article>
  )
}

export default BeerCard
