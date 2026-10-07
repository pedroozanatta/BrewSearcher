import { BEER_FAMILIES } from '../utils/beerFamilies'

export default function CategoryFilter({ value, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {BEER_FAMILIES.map((family) => {
        const isActive = family.id === value

        return (
          <button
            key={family.id}
            type="button"
            onClick={() => onChange(family.id)}
            className={`rounded-full border px-4 py-2 text-sm ${
              isActive
                ? 'border-primary bg-primary text-white'
                : 'border-border bg-background text-text'
            }`}
          >
            {family.label}
          </button>
        )
      })}
    </div>
  )
}