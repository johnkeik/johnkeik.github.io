import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import HeroSection from '../HeroSection';
import ScrollToTop from '../ScrollToTop';


function Home() {
    window.addEventListener('load',<ScrollToTop/>)
    return (
        <>

                <HeroSection />

                <Cards />

                <Footer />


        </>
    );

}

export default Home;