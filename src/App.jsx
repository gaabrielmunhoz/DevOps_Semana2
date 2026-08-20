import React from 'react'
import './App.css'

const Painel = () => {
  return (
    <div className='painel'>
      0.75
    </div>
  )
}

const Botao = (props) => {
  return (
    <div className={props.tipo}>
      {props.digito}
    </div>
  )
}

function App(){
  return (
    <div className='painel-botoes'></div>
  )
}

export default App