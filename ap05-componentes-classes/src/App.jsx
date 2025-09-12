import React from 'react'
import Lontra from './Lontra'
class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      latitude: null,
      longitude: null,
      estacao: null,
      data: null,
      icone: null,
      mesagemDeErro: null
    }
  }
  icones = {
    'Primavera': 'sun-plant-wilt',
    'Verão': 'sun',
    'Outono': 'leaf',
    'Inverno': 'snowflake'
  }
  obterEstacao = (latitude, data) => {
    const anoAtual = data.getFullYear()
    //21/06 Inverno
    const d1 = new Date(anoAtual, 5, 21)
    //24/09 primavera
    const d2 = new Date(anoAtual, 8, 24)
    //22/12 verão
    const d3 = new Date(anoAtual, 11, 22)
    //21/03 Outono
    const d4 = new Date(anoAtual, 2, 21)
    const estaNoSul = latitude < 0
    if (data >= d1 && data < d2)
      return estaNoSul ? 'Inverno' : 'Verão'
    if (data >= d2 && data < d3)
      return estaNoSul ? 'Primavera' : 'Outono'
    if (data >= d3 || data < d4)
      return estaNoSul ? 'Verão' : 'Inverno'

    return estaNoSul ? 'Outono' : 'Primavera'
  }

  obterLocalizacao = () => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        const dataAtual = new Date()
        const estacao = this.obterEstacao(
          position.coords.latitude,
          dataAtual
        )
        const icone = this.icones[estacao]
        //this.state.icone = icone
        this.setState({
          icone: icone,
          estacao: estacao,
          data: dataAtual,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        })
      },
      (err) => {
        console.log(`Erro: ${err}`)
        this.setState({
          mensagemDeErro: 'Tente novamente mais tarde.'
        })
      }

    )

  }
  // componentDidMount() {
  //   this.obterLocalizacao()
  // }

  //agora a lontra tem um parceiro
  //mais ainda cada lontra é produzido por um componente Reacr chamado Lontra
  render() {
    return (
      <div className='container mt-2 '>
        <div className="row">
          <div className="col-12">
            <Lontra tamanho="fa-3x" />
            <Lontra tamanho="fa-3x" />
          </div>
        </div>
        <div className='row'>
          <div className="col-sm-12">
            <div className="card">
              <div className="card-body">
                <div
                  className=" d-flex align-items-center border rounded mb-2"
                  style={{ height: '6rem' }}>
                  <i className={`fa-solid fa-4x fa-${this.state.icone} `}></i>
                  <p className="ms-2 w-75 text-center fs-1"> {this.state.estacao}</p>
                </div>

                <div>
                  <p className="text-center">
                    {/* {rederização condicional} */}
                    {
                      this.state.latitude ?
                      `Coordenadas ${this.state.latitude}, ${this.state.longitude},
                      Data: ${this.state.data.toLocaleString()}`:
                      this.state.mesagemDeErro ? `${this.state.mensagemDeErro}`:
                      `Precisa liberar o acesso à localização`
                    }
                  </p>
                </div>
                <button 
                className='btn btn-outline-primary w-100 mt-2'
                onClick={this.obterLocalizacao}>
                  Qual a minha estação
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default App

