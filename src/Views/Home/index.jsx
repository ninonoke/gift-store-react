import React from 'react'
import './styles.scss'
import MainSection from './MainSection/index.jsx'
import Cards from './Cards/index.jsx'
import Contacts from './Contacts'
import LastSection from './LastSection'

export default function Home () {
    return (
        <div className='home'>
            <MainSection />
            <Cards />
            <Contacts />
            <LastSection />
        </div>
    )
}
