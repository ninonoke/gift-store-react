import React from 'react'
import './styles.scss'
import Logo from '../../Assets/Logos/logo.png'
import {NAV} from '../../Constants/navigation.js'
import Button from '../../Components/Button/index.jsx'

export default function Header() {
    return(
        <div className='header'>
            <img className='header__logo' src={Logo} alt="Logotype" />
            <div className='header__nav'>
                {NAV.map((item, index) => {
                    return(
                        <a 
                            className='header__nav-item' 
                            href='/'
                            key={index}
                        >
                            {item}
                        </a>
                    )
                })}
            </div>
            <Button>
                Gift Finder
            </Button>
        </div>
    )
}
