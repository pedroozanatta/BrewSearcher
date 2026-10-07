function BeerCard({ style }) {
  const abv = style.abv
    ? `${style.abv.min}% – ${style.abv.max}%`
    : 'Não informado'

  const ibu = style.ibu
    ? `${style.ibu.min} – ${style.ibu.max}`
    : 'Não informado'

  return (
    <article>
      <span>
        {style.style_id}
      </span>

      <h2>
        {style.name}
      </h2>

      <p>
        {style.category}
      </p>

      <div>
        <span>
          ABV: {abv}
        </span>

        <span>
          IBU: {ibu}
        </span>
      </div>
    </article>
  )
}

export default BeerCard