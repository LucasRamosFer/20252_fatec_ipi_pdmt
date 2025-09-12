import React, { Component } from 'react'

export class Loading extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center align-items-center border rounded p-3">
                <div
                style={{width: '3rem', height: '3rem'}} 
                className="spinner-border" 
                role='status'>
                    <span className='visually-hidden'>Carregando...</span>
                </div>
            </div>

        )
    }
}

export default Loading