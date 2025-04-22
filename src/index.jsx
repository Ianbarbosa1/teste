import { useState } from 'react'
import { Titulo } from './componentes/titulo'
import ironman from './assets/imagens/iron man.jpg'
import halo from './assets/imagens/halo.jpg'

function App() {
  const [count, setCount] = useState(0)

  function click(){
    setCount(count + 1)
  }
  return (
    <section className='container'>
      <Titulo/>
      <h1>Testando o css no react vite</h1>
      <h2>{count}</h2>
      <button onClick={click}>Adicionar</button>
      <img src={ironman} alt="homem de ferro" className='imagem'/>
      <img src={halo} alt="homem de ferro" className='imagem'/>
    </section>
  )
}

export default App
