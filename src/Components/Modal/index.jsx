import React from 'react'
import './styles.scss'
import PropTypes from 'prop-types'

function Modal(props) {
    return(
        <div 
            className="modal" 
            onClick={() => props.closeModal()}
        >
            <div 
                className='modal__inner'
                onClick={(e) => e.stopPropagation()}
            >
                {props.children}
            </div>
        </div>
    )
}

Modal.propTypes={
    closeModal:PropTypes.func.isRequired,
    children:PropTypes.node.isRequired
}

export default Modal
