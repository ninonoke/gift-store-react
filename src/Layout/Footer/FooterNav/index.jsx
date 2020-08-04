import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

function FooterNav (props) {
    return (
        <Fragment>
            {props.nav.map((item, index) => {
                return (
                    <a
                        className='nav-item'
                        href='/'
                        key={index}
                    >
                        {item}
                    </a>
                )
            })}
        </Fragment>
    )
}

FooterNav.propTypes = {
    nav: PropTypes.array.isRequired,
}

export default FooterNav
