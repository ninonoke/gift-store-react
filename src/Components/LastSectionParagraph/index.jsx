import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

function LastSectionParagraph(props) {
    return(
        <div className='last-paragraph'>
                <div className='last-paragraph__title'>
                    {props.title}
                </div>
                <div className='last-paragraph__paragraph'>
                    {props.text}
                </div>
                <div className='last-paragraph__more'> 
                    Read more ›
                </div>
        </div>
    )
}

LastSectionParagraph.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default LastSectionParagraph