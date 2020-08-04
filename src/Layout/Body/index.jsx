import React from 'react'
import './styles.scss'
import MainSection from './MainSection/index.jsx'
import Cards from './Cards/index.jsx'
import Contacts from './Contacts'
import LastSection from './LastSection'

export default function Body () {
    return (
        <div className='body'>
            <MainSection />
            <Cards />
            <Contacts />
            <LastSection />
        </div>
    )
}
