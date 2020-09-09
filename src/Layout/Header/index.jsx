import React from 'react'
import './styles.scss'
import Logo from '../../Assets/Logos/logo.png'
import {NAV} from '../../Constants/navigation.js'
import Button from '../../Components/Button/index.jsx'
import {NavLink} from "react-router-dom";
import Home from '../../Views/Home'
import {
    useHistory
   } from "react-router-dom"; 

export default function Header() {
    const history = useHistory();
    function HandlClick(route) {
        history.push(route)
    }
    return(
        <div className='header'>
            <NavLink
                 to='/'
            >
                <img
                    className='header__logo'
                    src={Logo}
                    alt="Logotype"
                />
            </NavLink>
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
            <Button onClick={() => HandlClick('/services')}>
                Gift Finder
            </Button>
        </div>
    )
}
