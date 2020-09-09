import React from 'react'
import './styles.scss'
import Logo from '../../Assets/Logos/logo.png'
import {NAV} from '../../Constants/navigation.js'
import Button from '../../Components/Button/index.jsx'
import {NavLink} from "react-router-dom";

export default function Header() {
    return(
        <div className='header'>
            <img
                className='header__logo'
                src={Logo}
                alt="Logotype"
            />
            <div className='header__nav'>
                {NAV.map((item, index) => {
                    return(
                        <NavLink 
                            className='header__nav-item' 
                            activeClassName='header__nav-item--active'
                            to={item.route}
                            key={index}
                            exact
                        >
                            {item.name}
                        </NavLink>
                    )
                })}
            </div>
            <Button onClick={() => alert("hi")}>
                Gift Finder
            </Button>
        </div>
    )
}
