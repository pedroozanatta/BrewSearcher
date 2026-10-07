const TYPE_COLORS = [
  { max: 4, className: 'bg-beer-foam' },
  { max: 6, className: 'bg-beer-straw' },
  { max: 10, className: 'bg-beer-gold' },
  { max: 14, className: 'bg-beer-amber' },
  { max: 20, className: 'bg-beer-copper' },
  { max: 30, className: 'bg-beer-brown' },
  { max: Infinity, className: 'bg-beer-black' },
]

export function getTypeColor(srm) {
  if (!srm) return 'bg-accent'

  const average = (srm.min + srm.max) / 2
  return TYPE_COLORS.find((type) => average <= type.max).className
}
