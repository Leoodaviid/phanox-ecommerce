'use client'

const Home = () => {
  return (
    <>
      <div>
        <h2>Produtos mais vendidos</h2>
        <p>Fones de ouvido variados</p>
      </div>
      <div>{['Product 1', 'Product 2', 'Product 3'].map((product) => product)}</div>
    </>
  )
}

export default Home
