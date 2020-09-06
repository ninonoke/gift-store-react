import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Modal from '../../Components/Modal/index.jsx'
import logoYellow from '../../Assets/Logos/logo-yellow.png'
import TextField from '../../Components/TextField/index.jsx'
import Button from '../../Components/Button/index.jsx'


 function MainModal (props) {
    const [email, setEmail] = useState('')
    function onSignUp() {
        alert(`${email} Has successfully signed up!`)
        setEmail('')
        props.closeModal()
    }
    return (
        <Modal 
            closeModal={() => props.closeModal()}
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
                        onClick={() => props.closeModal()}
                    >
                        NO THANKS
                    </Button>
                </div>
            </div>
        </Modal>
    )
}

MainModal.propTypes = { 
    closeModal:PropTypes.func.isRequired
}

export default MainModal