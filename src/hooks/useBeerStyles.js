import { useEffect, useState } from 'react'
import { getBeerStyles } from '../services/beerApi'

export function useBeerStyles() {
  const [styles, setStyles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadStyles() {
      try {
        const data = await getBeerStyles()
        setStyles(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    loadStyles()
  }, [])

  return {
    styles,
    loading,
    error,
  }
}