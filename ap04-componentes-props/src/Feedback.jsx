import React from 'react'

const Feedback = (props) => {
    return (
        <div className='d-flex justify-content-evenly'>
            <button
                onClick={props.funcaoOK}
                className="btn btn-primary">
                {props.textOK}
            </button>
            <button
                onClick={props.funcaoNOK}
                className="btn btn-danger">
                {props.textNOK}
            </button>
        </div>
    )
}

export default Feedback