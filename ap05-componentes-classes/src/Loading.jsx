import React, { Component } from 'react'

export class Loading extends Component {
    render() {
        return (
            <div className="d-flex flex-column justify-content-center align-items-center border rounded p-3">
                <div
                style={{width: '3rem', height: '3rem'}} 
                className="spinner-border text-primary " 
                role='status'>
                    <span className='visually-hidden'>Carregando...</span>
                </div>
                <p className='text-primary'> {this.props.texto}</p>
            </div>

        )
    }
}
Loading.defaultProps = {
    texto: 'Aguardando...'
}

export default Loading