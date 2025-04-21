import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  function click(){
    setCount(count + 1)
  }
  return (
    <section className='container'>
      <h1>Testando o css no react</h1>
      <h2>{count}</h2>
      <button onClick={click}>Adicionar</button>
    </section>
  )
}

export default App
