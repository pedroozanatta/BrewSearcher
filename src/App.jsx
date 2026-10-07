import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import { useBeerStyles } from './hooks/beerStyle'

function App() {
  const [search, setSearch] = useState('')

  const {
    styles,
    loading,
    error,
  } = useBeerStyles()

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
        <h1>Caçador de Cervejas</h1>

        {loading && <p>Carregando estilos...</p>}

        {error && <p>{error}</p>}

        {!loading && !error && (
          <p>
            {styles.length} estilos encontrados.
          </p>
        )}
      </main>
    </>
  )
}

export default App