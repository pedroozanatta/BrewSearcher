const API_URL = 'https://brewgravity.com/data/styles.json'

export async function getBeerStyles() {
  const response = await fetch(API_URL)

  if (!response.ok) {
    throw new Error(
      `Erro ao consultar a API: ${response.status}`
    )
  }

  const data = await response.json()

  return data.styles
}