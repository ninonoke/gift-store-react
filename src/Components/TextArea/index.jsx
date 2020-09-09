import React from 'react'
import './styles.scss'
import PropTypes from 'prop-types'

function TextArea(props) {
    return(
        <textarea 
            className='text-area'
            value={props.value}
            placeholder={props.placeholder}
            onClick={(e) => e.stopPropagation()}
            onChange={(e) => props.onChange(e)}
        />
    )
}

TextArea.propTypes={
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
}

export default TextArea 