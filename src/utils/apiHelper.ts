export async function fetchPostJSON(url: string, cartItems: {}) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
    })
    return await response.json()
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message)
      throw new Error(err.message)
    }

    throw err
  }
}
