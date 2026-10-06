import { useState } from 'react'
import Header from './components/Header'

function App() {
  return (
    <>
      <Header/>
      <main className="flex min-h-screen items-center justify-center">
        <h1 className="text-4xl font-bold text-white">
          Teste tailwind
        </h1>
      </main>
    </>
  )
}

export default App
