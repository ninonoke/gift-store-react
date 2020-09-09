import React from 'react'
import './styles.scss'
import Arrow from '../../Assets/Icons/Arrow.svg'
import ArrowYellow from '../../Assets/Icons/Arrow-yellow.svg'
import variables from '../../Assets/vars.scss';

const CSS = {
    headerHeight: variables.headerHeight
}

export default function AboutUs() {

    function scrollToBottom() {
        window.scroll({
            top: window.innerHeight - parseInt(CSS.headerHeight),
            behavior: 'smooth'
        });
    }

    return (
        <div className='about-us'>
            <div className='about-us__banner'>
                <div className='about-us__banner-text'>
                    <div className='about-us__banner-title'>
                        Lorem ipsum, adipisicing.
                    </div>
                    <div className='about-us__banner-paragraph'>
                         Nostrum laudantium tempora obcaecati, neque nesciunt voluptate.
                    </div>
                </div>
                <div
                    className='about-us__scroll-button'
                    onClick={() => scrollToBottom() }
                >
                    <img
                        className='about-us__scroll-arrow about-us__scroll-arrow--passive'
                        src={Arrow}
                        alt="Scroll"
                    />
                    <img
                        className='about-us__scroll-arrow about-us__scroll-arrow--active'
                        src={ArrowYellow}
                        alt="Scroll-active"
                    />
                </div>
            </div>
            <div className='about-us__container'>
                <div className='about-us__title'>
                    Lorem ipsum dolor
                </div>
                <div className='about-us__paragraph'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus rerum, nemo illum cumque aperiam doloribus, iusto dolorem debitis rem nobis recusandae, dignissimos sed sunt minima molestias praesentium minus aliquam tempora! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus rerum, nemo illum cumque aperiam doloribus, iusto dolorem debitis rem nobis recusandae, dignissimos sed sunt minima molestias praesentium minus aliquam tempora!
                </div>
            </div>
        </div>
    )
}