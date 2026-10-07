import { useState } from 'react'
import Header from './components/Header'
import SearchInput from './components/SearchInput'
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

      <main>
        <SearchInput
          value={search}
          onChange={setSearch}
          onSubmit={handleSearch}
        />

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