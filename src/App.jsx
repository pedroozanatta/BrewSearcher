import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import { useBeerStyles } from './hooks/beerStyle'
import BeerList from './components/BeerList'

function App() {
  const [search, setSearch] = useState('')

  const { styles, loading, error } = useBeerStyles()

  function handleSearch(event) {
    event.preventDefault()

    console.log('Pesquisa:', search)
  }

  return (
    <>
      <Header />
      <Hero
        search={search}
        onSearchChange={setSearch}
        onSearchSubmit={handleSearch}
      />
      <main>
        {loading && <p>Carregando estilos...</p>}

        {error && <p>{error}</p>}

        {!loading && !error && (
          <BeerList styles={styles} />
        )}
      </main>
    </>
  )
}

export default App