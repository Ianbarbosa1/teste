import { useState } from 'react'
import { Titulo } from './componentes/titulo'
import ironman from './assets/imagens/i-am-iron-man_1572368483.jpg'

function App() {
  const [count, setCount] = useState(0)

  function click(){
    setCount(count + 1)
  }
  return (
    <section className='container'>
      <Titulo/>
      <h2>{count}</h2>
      <button onClick={click}>Adicionar</button>
      <img src={ironman} alt="homem de ferro" className='imagem'/>
    </section>
  )
}

export default App
