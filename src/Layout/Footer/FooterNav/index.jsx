import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import './styles.scss'
import {
  Link
} from "react-router-dom";

function FooterNav (props) {
    return (
        <Fragment>
            {props.nav.map((item, index) => {
                return (
                    <Link
                        className='nav-item'
                        to={item.route}
                        key={index}
                    >
                        {item.name}
                    </Link>
                )
            })}
        </Fragment>
    )
}

FooterNav.propTypes = {
    nav: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            route: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
}

export default FooterNav
