import React from 'react'
import './styles.scss'
import PropTypes from 'prop-types'

function TextField(props) {
    return(
        <input 
            className='text-field'
            value={props.value}
            placeholder={props.placeholder}
            onClick={(e) => e.stopPropagation()}
            onChange={(e) => props.onChange(e)}
        />
    )
}

TextField.propTypes={
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
}

export default TextField 