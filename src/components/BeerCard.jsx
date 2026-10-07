import CardIcon from '../assets/CardIcon.png'
import { getTypeColor } from '../utils/typeColor'

function formatRange(range) {
  return range ? `${range.min}–${range.max}` : null
}

function Stat({ label, value, unit }) {
  return (
    <div className="px-3">
      <span className="block text-[10px] font-medium uppercase tracking-wide text-text-secondary">
        {label}
      </span>
      <span className="mt-1 block text-sm font-medium">
        {value ?? '—'}
        {value && (
          <span className="ml-1 text-[10px] text-text-secondary">{unit}</span>
        )}
      </span>
    </div>
  )
}

function BeerCard({ style }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">
      <div
        className={`flex h-32 items-start justify-between p-5 ${getTypeColor(style.srm)}`}
      >
        <span className="rounded-full bg-white px-3 py-1 text-xs font-medium">
          {style.category}
        </span>

        <img src={CardIcon} alt="" className="size-14" />
      </div>

      <div className="p-5">
        <h2 className="font-title text-2xl">{style.name}</h2>

        <div className="mt-5 grid grid-cols-3 divide-x divide-border rounded-xl bg-background-secondary py-3">
          <Stat label="Amargor" value={formatRange(style.ibu)} unit="IBU" />
          <Stat label="Álcool" value={formatRange(style.abv)} unit="%" />
          <Stat label="Cor" value={formatRange(style.srm)} unit="SRM" />
        </div>
      </div>
    </article>
  )
}

export default BeerCard
