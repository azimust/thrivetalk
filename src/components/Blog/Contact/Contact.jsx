import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className="contact">
            <div className="container">
                <div className="contact__body">
                    <div className="contact__desc">
                        <p className="contact__text">CONTACT US</p>
                        <h2 className='contact__title'>Ready. Set. Smile</h2>
                        <p className="contact__text2">
                            Take the free online assessment to <br />
                            see if you are a candidate and get <br />
                            started on your journey.
                        </p>
                        <button className='contact__btn'>GET HELP NOW</button>
                    </div>
                    <div className="contact__img"></div>
                </div>
            </div>
        </div>
    )
}

export default Contact