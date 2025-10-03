import React, { Component } from 'react'

export class EstacaoClimatica extends Component {
    timer = null
    state = {
        data: null 
    }

    componentDidMount(){
        this.timer = setInterval(() => {
        //atualizar o estado do componente com a data atual do sistema
            this.setState({data: new Date().toLocaleString()})
        }, 1000)
        console.log(this.timer)
    }
    componentWillUnmount(){
        clearInterval()
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <div
                        className=" d-flex align-items-center border rounded mb-2"
                        style={{ height: '6rem' }}>
                        <i className={`fa-solid fa-4x fa-${this.props.icone} `}></i>
                        <p className="ms-2 w-75 text-center fs-1"> {this.props.estacao}</p>
                    </div>

                    <div>
                        <p className="text-center">
                            {/* {rederização condicional} */}
                            {
                                this.props.latitude ?
                                    `Coordenadas ${this.props.latitude}, ${this.props.longitude}, Data: ${this.state.data}` :
                                    this.props.mesagemDeErro ? `${this.props.mensagemDeErro}` :
                                        `Precisa liberar o acesso à localização`
                            }
                        </p>
                    </div>
                    <button
                        className='btn btn-outline-primary w-100 mt-2'
                        onClick={this.props.obterLocalizacao}>
                        Qual a minha estação
                    </button>
                </div>
            </div>
        )
    }
}

export default EstacaoClimatica