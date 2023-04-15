import React from 'react';
import './HelpCards.css'

const HelpCards = () => {
  return (
    <div id='services' className='help-cards'>
        <div className="container">
            <div className="help-cards__body">
                <p className='help-cards__title'>WE CAN HELP YOU WITH</p>
                <div className="help-cards__cards">
                    <div className="cards card1">
                        <div className="line"></div>
                        <div className="card__inner">
                            <div className="dot"></div>
                            <p className='card__text'>Weight Lifting</p>
                        </div>
                    </div>
                    <div className="cards card2">
                        <div className="line"></div>
                        <div className="card__inner">
                            <div className="dot"></div>
                            <p className='card__text'>Running <br /> & Spinning</p>
                        </div>
                    </div>
                    <div className="cards card3">
                        <div className="line"></div>
                        <div className="card__inner">
                            <div className="dot"></div>
                            <p className='card__text'>Pumping Iron</p>
                        </div>
                    </div>
                    <div className="cards card4">
                        <div className="line"></div>
                        <div className="card__inner">
                            <div className="dot"></div>
                            <p className='card__text'>Pumping Iron</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HelpCards