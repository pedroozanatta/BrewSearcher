import BeerCard from './BeerCard'

function BeerList({ styles }) {
  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {styles.map((style) => (
        <BeerCard key={style.style_id} style={style} />
      ))}
    </section>
  )
}

export default BeerList
