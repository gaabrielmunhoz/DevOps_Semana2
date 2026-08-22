import { Component } from 'react'
import './App.css'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      contador: 0,
      modoEscuro: true
    }

    this.aumentar = this.aumentar.bind(this)
    this.diminuir = this.diminuir.bind(this)
    this.moverLuz = this.moverLuz.bind(this)
    this.alternarTema = this.alternarTema.bind(this)
  }

  aumentar() {
    this.setState({
      contador: this.state.contador + 1
    })
  }

  diminuir() {
    this.setState({
      contador: this.state.contador - 1
    })
  }

  alternarTema() {
    this.setState({
      modoEscuro: !this.state.modoEscuro
    })
  }

  moverLuz(evento) {
    const botao = evento.currentTarget
    const posicao = botao.getBoundingClientRect()

    const x = evento.clientX - posicao.left
    const y = evento.clientY - posicao.top

    botao.style.setProperty('--x', `${x}px`)
    botao.style.setProperty('--y', `${y}px`)
  }

  render() {
    return (
      <div
        className={
          this.state.modoEscuro
            ? "pagina tema-escuro"
            : "pagina tema-claro"
        }
      >

        <div className="seletor-tema">

          <div className="tema-label">
            <span className="icone-tema">☀︎</span>
            Modo claro
          </div>

          <button
            className={
              this.state.modoEscuro
                ? "switch switch-ativo"
                : "switch"
            }
            onClick={this.alternarTema}
            aria-label="Alternar entre modo claro e modo escuro"
          >
            <span className="switch-bolinha"></span>
          </button>

          <div className="tema-label">
            Modo escuro
            <span className="icone-tema">☾</span>
          </div>

        </div>


        <div className="contador-card">

          <p className="contador-label">
            Contador
          </p>

          <h1 className="contador-numero">
            {this.state.contador}
          </h1>

          <div className="botoes">

            <button
              className="botao botao-subtrair"
              onClick={this.diminuir}
              onMouseMove={this.moverLuz}
            >
              − Subtrair
            </button>

            <button
              className="botao botao-adicionar"
              onClick={this.aumentar}
              onMouseMove={this.moverLuz}
            >
              + Adicionar
            </button>

          </div>

        </div>

        <p className='atividade-info'>Mesma atividade feita na disciplina <u>"Tecnologias Para Desenvolvimento Web"</u> <span>{'->'}</span> <strong>Atividade Somativa 3</strong>.</p>

      </div>
    )
  }
}

export default App