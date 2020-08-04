import React,{useState} from 'react'
import './styles.scss'
import {CARDS} from '../../../Constants/cards.js'
import Paragraph from '../../../Components/Paragraph/index.jsx'
import Modal from '../../../Components/Modal/index.jsx'

export default function Cards() {
    const [modalImage, setModalImage] = useState(null)

    return(
        <div className='cards'>
            <Paragraph
                title='Gifts for all Occasions'
                text='Try our web to find the best gifts for all occasions'
            />

            <div className='cards__container'>
                {CARDS.map((item, index) => {
                    return(
                       <div 
                            className='cards__card'
                            key={index}
                       >
                            <img 
                                className='cards__card-image'
                                src={item.image}
                                onClick={() => setModalImage(item.image)}
                            />

                            <div className='cards__card-label'>
                                {item.label}
                            </div>
                            
                            <div className='cards__card-action'> 
                                Read more ›
                            </div>
                       </div>
                    )
                })}
            </div>

            {  !!modalImage 
                    ? (
                        <Modal
                            closeModal={() => setModalImage(null)}
                        >
                            <img 
                                className='cards__modal-image'
                                src={modalImage}
                            /> 
                        </Modal>
                    )
                    : null }
        </div>
    )
}
