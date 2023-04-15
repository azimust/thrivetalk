import React from 'react';
import './Info.css'

const Info = () => {
    return (
        <div className='info'>
            <div className="container">
                <div className="info__body">
                    <div className="info__img"></div>
                    <div className="info__desc">
                        <div className="info__item">
                            <h2 className='info__title'>SOME INFO</h2>
                            <p className='info__text'>
                                Lorem ipsum dolor sit amet, <br />
                                consectetuer adipiscing elit. <br />
                                Aenean commodo ligula. <br />
                            </p>
                        </div>
                        <div className="info__item">
                            <h2 className='info__title'>ENFOLD HEALTH</h2>
                            <p className='info__text'>
                                Main Street 1, Olcott <br />
                                Buffalo, United States <br />
                            </p>
                            <p className="info__text2">
                                +555 283 784 333 <br />
                                <span>office@enfold-health.com</span> <br />
                            </p>
                        </div>
                        <div className="info__item">
                            <h2 className='info__title'>OFFICE HOURS</h2>
                            <p className='info__text'>
                                Mo-Fr: 8:00-19:00 <br />
                                Sa: 8:00-14:00 <br />
                                Su: closed <br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Info