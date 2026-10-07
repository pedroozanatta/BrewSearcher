import Header from './components/Header'
import { useBeerStyles } from './hooks/beerStyle'

function App() {
  const {
    styles,
    loading,
    error,
  } = useBeerStyles()

  return (
    <>
      <Header />
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