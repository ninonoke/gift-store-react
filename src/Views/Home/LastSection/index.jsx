import React from 'react'
import './styles.scss'
import Paragraph from '../../../Components/Paragraph/index.jsx'
import LastSectionParagraph from '../../../Components/LastSectionParagraph/index.jsx'
import Media from '../../../Assets/Images/Media.png'

export default function LastSection() {
    return(
        <div className='last-section'>
            <div className="last-section__container">
                <Paragraph
                    title='our best blogs ever'
                    text='"Try our blog to find the best tips and tricks to select your gift"'
                />
                <div className='last-section__wrapper'>
                    <div className='last-section__image-text'>
                            <img
                                className='last-section__image'
                                src={Media}
                            />
                        <div className='last-section__text'>
                            <div className='last-section__paragraph'>
                                mr. john doe
                            </div>
                            <div className='last-section__title'>
                                the best gifts for your love
                            </div>
                            <div className='last-section__paragraph'>
                                read more
                            </div>
                        </div>
                    </div>
                </div>
                <div className='last-section__paragraph-wrapper'>
                    <LastSectionParagraph
                        title='Database to find the gifts'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...'
                    />
                    <LastSectionParagraph
                        title='How Artificial Intelligence read your mind to find the best gift'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...'
                    />
                </div>
            </div>
        </div>
    )
}
