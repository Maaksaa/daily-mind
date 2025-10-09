const BASE_URL = 'https://api.api-ninjas.com/v1/quotes'

export async function getRandomQuote() {
  const res = await fetch(BASE_URL, {
    headers: {
      'X-Api-Key': import.meta.env.VITE_API_KEY,
    },
  })
  if (!res.ok) {
    throw new Error('Failed to get data')
  }
  return await res.json()
}
