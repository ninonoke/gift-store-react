import React, {useState} from 'react'
import './styles.scss'
import Header from './Header/index.jsx'
import Footer from './Footer/index.jsx'
import Body from './Body/index.jsx'
import Modal from '../Components/Modal/index.jsx'
import logoYellow from '../Assets/Logos/logo-yellow.png'
import TextField from '../Components/TextField/index.jsx'
import Button from '../Components/Button/index.jsx'

export default function Layout() {
    const [email, setEmail] = useState('')
    const [modalOpen, setModalOpen] = useState(true)
    
    function onSignUp() {
        alert(`${email} Has successfully signed up!`)
        setEmail('')
        setModalOpen(false)
    }

    return (
        <div className='layout'>
            <Header />
            <Body />
            <Footer />
            {modalOpen ? ( 
                <Modal 
                    closeModal={() => setModalOpen(false)}
                >
                    <div className='layout__modal-offer'>
                        <img 
                            className='layout__modal-image'
                            src={logoYellow}
                        />
                        <div className='layout__modal-paragraph'>
                            Sign up to receive our emails and get a <span className='layout__bold'>$5 credit.</span>
                        </div>
                        <div className='layout__modal-field'>
                            <TextField 
                                placeholder='Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='layout__buttons'>
                            <Button 
                                type='secondary'
                                className='layout__sign-in'
                                onClick={() => onSignUp()}
                            >
                                SIGN ME UP
                            </Button>
                            <Button 
                                type='secondary-light'
                                onClick={() => setModalOpen(false)}
                            >
                                NO THANKS
                            </Button>
                        </div>
                    </div>
                </Modal>
            ) : null }
        </div>
    )
}