import { useEffect, useMemo, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import BeerList from './components/BeerList'
import { getBeerStyles } from './services/beerApi'

function App() {
  const [styles, setStyles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [search, setSearch] = useState('')

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

  const filteredStyles = useMemo(() => {
    if (!term) return []
    return styles.filter((style) => style.name.toLowerCase().includes(term))
  }, [styles, term])

  return (
    <>
      <Header />
      <Hero search={search} onSearchChange={setSearch} />

      <main className="mx-auto max-w-7xl px-6 pb-20 md:px-16">
        {term && loading && <p>Carregando estilos...</p>}
        {term && error && <p>{error}</p>}
        {filteredStyles.length > 0 && <BeerList styles={filteredStyles} />}
      </main>
    </>
  )
}

export default App
