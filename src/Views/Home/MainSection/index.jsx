import React from 'react'
import './styles.scss'
import Button from '../../../Components/Button/index.jsx'
import {
 useHistory
} from "react-router-dom"; 

export default function MainSection() {
    const history = useHistory();
    function HandlClick(route) {
        history.push(route)
    }
    return(
        <div className='main-section'>
            <div className='main-section__wrapper'>
                <div className='main-section__container-one'>
                    <div className='main-section__container-inner'>
                        <div className='main-section__one-title'>
                            Find a gift for your loved one
                        </div>
                        <div className='main-section__one-paragraph'>
                            Straggling to find a gift for your loved one? No problem!
                        </div>
                       <Button 
                            type='secondary'
                            onClick={() => HandlClick('/services')}
                        >
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
                            All you have to do is take our short survey that only takes seconds, and our proprietary algorithm will match you with a few perfect gift options.
                        </div>
                        <Button
                            onClick={() => HandlClick('/about-us')}
                        >
                            learn more
                       </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}