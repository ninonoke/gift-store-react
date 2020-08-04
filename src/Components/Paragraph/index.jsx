import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

function Paragraph(props) {
    return(
        <div className='paragraph'>
            <div className='paragraph__title'>
                {props.title}
            </div>
            <div className='paragraph__text'>
                {props.text}
            </div>
        </div>
    )
}

Paragraph.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default Paragraph
