import React, {useState} from 'react'
import './styles.scss'
import TextField from '../../Components/TextField/index.jsx'
import TextArea from '../../Components/TextArea/index.jsx'
import Button from '../../Components/Button/index.jsx'

export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
        function handleClick() {
            alert(`${name} ${email} ${subject}`)
            setName('')
            setEmail('')
            setSubject('')
            setMessage('')
        }
    return (
        <div className='contact'>
            <div className='contact__container'>
                <div className='contact__fields'>
                    <div className='contact__field'>
                        <TextField 
                            placeholder='Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className='contact__field'>
                        <TextField 
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='contact__field'>
                        <TextField 
                            placeholder='Subject'
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                    </div>
                    <div className='contact__field'>
                        <TextArea
                            placeholder='Message'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <div className='contact__field'>
                        <Button 
                            type='secondary'
                            className='contact_send'
                            onClick={() => handleClick()}
                        >
                            SEND
                        </Button>
                    </div>
                </div>
                <div className='contact__info'>
                    <div className='contact__info-title'>
                        Lorem ipsum, dolor sit amet adipisicing elit.
                    </div>
                    <div className='contact__info-paragraph'>
                        +000 00 0 00 00 00;
                    </div>
                    <div className='contact__info-paragraph'>
                        +000 00 0 00 00 00;
                    </div>
                    <div className='contact__info-title'>
                        Lorem ipsum, consectetur elit.
                    </div>
                    <div className='contact__info-paragraph'>
                        +000 00 0 00 00 00;
                    </div>
                </div>
            </div>
        </div>
    )
}