import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div id='home' className='home'>
            <div className="container">
                <div className="home__body">
                    <div className="home__desc">
                        <h2 className="logo">Thrivetalk</h2>
                        <h1 className='home__title'>HELPING YOU THRIVE IN ALL AREAS OF LIFE</h1>
                        <p className='home__text'>
                            Our highly talented therapists can help you
                            with a range of issues including relationships,
                            sex, PTSD, depression, social anxiety, or even
                            just caring for yourself more.
                        </p>
                        <div className="home__buttons">
                            <button className='who-btn'>WHO I AM</button>
                            <button className='what-btn'>WHAT DO I</button>
                        </div>
                    </div>
                    <div className="home__images">
                        <div className="home__img"></div>
                        <div className="home__bg"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home