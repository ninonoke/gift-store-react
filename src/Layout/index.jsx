import React, {useState} from 'react'
import './styles.scss'
import Header from './Header/index.jsx'
import Footer from './Footer/index.jsx'
import Home from '../Views/Home/index.jsx'
import AboutUs from '../Views/AboutUs/index.jsx'
import Contact from '../Views/Contact/index.jsx'
import Services from '../Views/Services/index.jsx'
import MainModal from '../Layout/MainModal/index.jsx'
import {
    Switch,
    Route
} from "react-router-dom";


export default function Layout() {
    const [modalOpen, setModalOpen] = useState(true)

    return (
        <div className='layout'>
            <Header />

            <Switch>
                <Route 
                    path="/"
                    exact
                >
                    <Home />
                </Route>

                <Route path="/about-us">
                    <AboutUs />
                </Route>

                <Route path="/contact">
                    <Contact />
                </Route>

                <Route path="/services">
                    <Services />
                </Route>
            </Switch>

            <Footer />
            {modalOpen ? ( 
               <MainModal 
                    closeModal={() => setModalOpen(false)} 
                />
            ) : null }
        </div>
    )
}