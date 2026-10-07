import BeerCard from './BeerCard'

export default function BeerList({ styles }) {
  return (
    <>
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <span className="text-sm font-medium uppercase tracking-widest text-accent">
            Explore o menu
          </span>
          <h2 className="mt-2 font-title text-3xl">Estilos encontrados</h2>
        </div>

        <span className="text-sm text-text font-semibold">
          {styles.length} {styles.length === 1 ? 'resultado' : 'resultados'}
        </span>
      </div>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {styles.map((style) => (
          <BeerCard key={style.style_id} style={style} />
        ))}
      </section>
    </>
  )
}
