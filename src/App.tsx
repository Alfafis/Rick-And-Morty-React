import React from 'react'
import { useCharater } from './hooks/useCharacter'
import LogoTitle from './assets/logo-title.png'

function App() {
  const { data: fecthCharacter } = useCharater()

  console.log(fecthCharacter)

  return (
    <div className="App">
      <img src={LogoTitle} alt="titulo do projeto" />
      <div className="text-xl font-medium">Total de personagens: {fecthCharacter?.info.count}</div>
      <div className="text-xl font-medium">Total de páginas: {fecthCharacter?.info.pages}</div>
    </div>
  )
}

export default App
