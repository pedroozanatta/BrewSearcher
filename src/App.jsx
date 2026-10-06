import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className="flex min-h-screen items-center justify-center bg-green-900">
        <h1 className="text-4xl font-bold text-white">
          Tailwind funcionando!
        </h1>
      </main>
    </>
  )
}

export default App
