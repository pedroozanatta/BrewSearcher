import BeerCard from './BeerCard'

function BeerList({ styles }) {
  return (
    <section>
      {styles.map((style) => (
        <BeerCard
          key={style.style_id}
          style={style}
        />
      ))}
    </section>
  )
}

export default BeerList