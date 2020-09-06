import React from 'react'
import './styles.scss'
import Button from '../../../Components/Button/index.jsx'

export default function Contacts() {
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
                    <Button type='primary-dark'>
                        find gift now
                    </Button>
                    <Button type='secondary-light'>
                        how it works
                    </Button>
                </div>
            </div>
        </div>
    )
}