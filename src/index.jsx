import { useState } from 'react'
import ironman from './assets/imagens/i-am-iron-man_1572368483.jpg'
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
      <img src={ironman} alt="homem de ferro" className='imagem'/>
    </section>
  )
}

export default App
