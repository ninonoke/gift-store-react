import React from 'react'
import './styles.scss'
import Button from '../../../Components/Button/index.jsx'
import {
    useHistory
   } from "react-router-dom"; 

export default function Contacts() {
    
    const history = useHistory();
    function HandlClick(route) {
        history.push(route)
    }

    return (
        <div className='contacts'>
            <div className='contacts__content'>
                <div className='contacts__content-text'>
                    <div className='contacts__content-title'>
                        Ready to get started?
                    </div>
                    <div className='contacts__content-paragraph'>
                        Sign up or contact us
                    </div>  
                </div>
                <div className='contacts__content-buttons'>
                    <Button 
                        type='primary-dark'
                        onClick={() => HandlClick('/services')}
                    >
                        find gift now
                    </Button>
                    <Button
                        type='secondary-light'
                        onClick={() => HandlClick('/about-us')}
                    >
                        how it works
                    </Button>
                </div>
            </div>
        </div>
    )
}