import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

function Button(props) {
    return(
        <button 
            className={`button button--${props.type} ${props.className}`} 
            onClick={() => props.onClick()}
        >
            {props.children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.string.isRequired,
    className: PropTypes.string,
    type: PropTypes.oneOf(['primary', 'secondary', 'primary-dark', 'secondary-light']).isRequired,
    onClick: PropTypes.func.isRequired
}

Button.defaultProps = {
    type: 'primary'
}

export default Button