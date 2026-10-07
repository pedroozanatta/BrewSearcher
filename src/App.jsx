import { useEffect, useMemo, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import CategoryFilter from './components/CategoryFilter'
import BeerList from './components/BeerList'
import { getBeerStyles } from './services/beerApi'
import { matchesFamily } from './utils/beerFamilies'

function App() {
  const [styles, setStyles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [search, setSearch] = useState('')
  const [family, setFamily] = useState(null)

  useEffect(() => {
    async function loadStyles() {
      try {
        setLoading(true)
        const data = await getBeerStyles()
        setStyles(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadStyles()
  }, [])

  const term = search.trim().toLowerCase()
  const hasFilter = term !== '' || family !== null

  const filteredStyles = useMemo(() => {
    if (!hasFilter) return []

    return styles.filter((style) => {
      const matchesTerm = style.name.toLowerCase().includes(term)
      const matchesCategory = family === null || matchesFamily(style.category, family)
      return matchesTerm && matchesCategory
    })
  }, [styles, term, family, hasFilter])

  return (
    <>
      <Header />
      <Hero search={search} onSearchChange={setSearch} />

      <main className="mx-auto max-w-7xl px-6 pb-20 md:px-16">
        <CategoryFilter value={family} onChange={setFamily} />

        <div className="mt-8">
          {hasFilter && loading && <p>Carregando estilos...</p>}
          {hasFilter && error && <p>{error}</p>}
          {filteredStyles.length > 0 && <BeerList styles={filteredStyles} />}
        </div>
      </main>
    </>
  )
}

export default App
