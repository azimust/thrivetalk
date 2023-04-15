import React from 'react';
import './Fact.css'

const Fact = () => {
  return (
    <div id='blog' className="fact">
        <div className="container">
            <div className="fact__body">
                <div className="fact__img"></div>
                <div className="fact__desc">
                    <p className="fact__text">YOU SHOULD ALSO KNOW</p>
                    <h3 className="fact__text2">
                    MDD affects more than 16.1 million<br />
                    American adults, or about 6.7%of the U.S. <br />
                    population age 18 and older in a given year. <br />
                    We at <span className='logo'>ThriveTalk</span> can help you.
                    </h3>

                    <button className='fact__btn'>GET HELP NOW</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Fact