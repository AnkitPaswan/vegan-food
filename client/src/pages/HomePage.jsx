import React from 'react'
import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import Announcement from '../components/Announcement/Announcement'
import Footer from '../components/Footer/Footer'
import Products from '../components/Products/Products'
import Philosophybanner from '../components/Philosophybanner/Philosophybanner'
import Whywe from '../components/Whywe/Whywe'
import NewArrival from '../components/NewArrival/NewArrival'
import Assurity from '../components/Assurity/Assurity'

const HomePage = () => {
    return (
        <div>
            <Announcement />
            <Header />
            <Banner />
            <NewArrival heading="New Arrivals" />
            <Assurity />
            <Products headingText="Our Products" />
            <Philosophybanner />
            <Whywe headTag="Our Features" />
            {/* <Whywe headTag="SHOP TO MAKE A DIFFERENCE" /> */}
            <Footer />
        </div>
    )
}

export default HomePage
