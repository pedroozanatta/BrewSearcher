import BeerCard from './BeerCard'

function BeerList({ styles }) {
  return (
    <>
      <span className="text-sm font-medium uppercase tracking-widest text-accent">
        Explore o menu
      </span>
      <h2 className="mb-8 mt-2 font-title text-3xl">Estilos encontrados</h2>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {styles.map((style) => (
          <BeerCard key={style.style_id} style={style} />
        ))}
      </section>
    </>
  )
}

export default BeerList
