import React from 'react'
import './styles.scss'
import Button from '../../../Components/Button/index.jsx'

export default function MainSection() {
    return(
        <div className='main-section'>
            <div className='main-section__wrapper'>
                <div className='main-section__container-one'>
                    <div className='main-section__container-inner'>
                        <div className='main-section__one-title'>
                            Find a gift for your wife or girlfriend
                        </div>
                        <div className='main-section__one-paragraph'>
                            Straggling to find a gift for your wife or girlfriend? No problem!
                        </div>
                       <Button type='secondary'>
                           Find gift now
                       </Button>
                    </div>
                </div>
                <div className='main-section__banner main-section__banner--right'></div>
            </div>
            <div className='main-section__wrapper'>
                <div className='main-section__banner main-section__banner--left'></div>
                <div className='main-section__container-one'>
                    <div className='main-section__container-inner'>
                        <div className='main-section__four-title'>
                            How we work
                        </div>
                        <div className='main-section__four-paragraph'>
                            We've actually already asked hundreds of women what they want, and made a database with the results. All you have to do is take our short survey that only takes seconds, and our proprietary algorithm will match you with a few perfect gift options.
                        </div>
                        <Button>
                            learn more
                       </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}