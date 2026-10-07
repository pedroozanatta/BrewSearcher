import { useMemo, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import BeerList from './components/BeerList'
import { useBeerStyles } from './hooks/useBeerStyles'

function App() {
  const [search, setSearch] = useState('')
  const { styles, loading, error } = useBeerStyles()

  const filteredStyles = useMemo(() => {
    const term = search.trim().toLowerCase()
    return styles.filter((style) => style.name.toLowerCase().includes(term))
  }, [styles, search])

  return (
    <>
      <Header />
      <Hero search={search} onSearchChange={setSearch} />

      <main className="mx-auto max-w-7xl px-6 pb-20 md:px-16">
        {loading && <p>Carregando estilos...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && filteredStyles.length === 0 && (
          <p>Nenhum estilo encontrado.</p>
        )}
        {!loading && !error && <BeerList styles={filteredStyles} />}
      </main>
    </>
  )
}

export default App
