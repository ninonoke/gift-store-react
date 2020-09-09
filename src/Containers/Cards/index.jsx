import React,{useState, useEffect} from 'react'
import './styles.scss'
import { connect } from 'react-redux'
import { fetchCategories} from '../../actions'
import Paragraph from '../../Components/Paragraph/index.jsx'
import Modal from '../../Components/Modal/index.jsx'
import PropTypes from 'prop-types'
import {getCategories} from '../../selectors'

function Cards(props) {
    const [modalImage, setModalImage] = useState(null)

    useEffect(() => {
        props.fetchCategories()
    }, [])

    return(
        <div className='cards'>
            <Paragraph
                title='Gifts for all Occasions'
                text='Try our web to find the best gifts for all occasions'
            />

            <div className='cards__container'>
                {props.categories.map((item, index) => {
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

Cards.propTypes = {
    categories: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string,
            label: PropTypes.string
        })
    ),
    fetchCategories: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    categories: getCategories(state)
})
  
const mapDispatchToProps = dispatch => ({
    fetchCategories: () => dispatch(fetchCategories())
})
  
export default connect(mapStateToProps, mapDispatchToProps)(Cards)