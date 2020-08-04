import React from 'react'
import './styles.scss'
import LogoYellow from '../../Assets/Logos/logo-yellow.png'
import {NAV} from '../../Constants/navigation.js'
import {ICONS} from '../../Constants/icons.js'
import FooterNav from './FooterNav/index.jsx'

export default function Footer(){
    const navOne=NAV.slice(0,2)
    const navTwo=NAV.slice(2,4)

    return(
        <div className='footer'>
            <div className='footer__nav-wrapper'>
                <div className='footer__nav'>
                    <FooterNav nav={navOne}/>

                    <img 
                        className='footer__logo' 
                        src={LogoYellow} 
                        alt="Logotype" 
                    />

                    <FooterNav nav={navTwo}/>
                </div>
            </div>
            <div className='footer__line'></div>
            <div className='footer__icons'>
                {ICONS.map((item, index) => {
                    return(
                        <a
                            className='footer__icon-link'
                            href={item.url}
                            key={index}
                        >
                            <img    
                                className='footer__icon' 
                                src={item.icon}
                            />
                        </a>
                    )
                })}
            </div>
            <div className='footer__copywrite'>
                © 2010 — 2020 &nbsp; &nbsp;\
                
                
                
                
                
                
                
                
                
                 Privacy — Terms
            </div>
        </div>
    )
}
