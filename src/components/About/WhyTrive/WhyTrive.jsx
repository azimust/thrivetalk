import React from 'react';
import './WhyTrive.css'

const WhyTrive = () => {
    return (
        <div id='about' className='why-trive'>
            <div className="container">
                <div className="why-trive__body">
                    <div className="why-trive__desk">
                        <h2 className="why-trive__title">Why Trive?</h2>
                        <p className="why-trive__text">
                            Want to improve your well-being from the comfort
                            of your own couch? Are you having trouble finding
                            the right therapist? <span>Here at ThriveTalk, our licensed
                                therapists provide the same quality care you would get in office
                                from anywhere you can access your laptop or mobile phone.
                                Become your best self with ThriveTalk.  Start therapy now with a
                                licensed therapist!</span>
                        </p>
                    </div>
                    <div className="why-trive__img"></div>
                </div>
            </div>
        </div>
    )
}

export default WhyTrive