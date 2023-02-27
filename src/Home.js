import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
        <div className='home_container'>
            <img className='home_image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="prime-link"/>
            <div className="home_row">
                <Product
                id="12321341"
                title="The Lean Startup"
                owner="Eric Reiss"
                price={19.99}
                image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
                altn="the-lean-startup"
                rating={5}
                />
                <Product
                id="49538094"
                title="Kenwood kMix Stand Mixer"
                owner="Kenwood Electronics"
                price={249.99}
                image='https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg'
                rating={4}
                />
            </div>
            <div className="home_row">
                <Product/>
                <Product/>
                <Product/>
            </div>
            <div className="home_row">
                <Product/>
            </div>
        </div>
    </div>
  )
}

export default Home
