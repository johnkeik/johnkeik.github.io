import React from 'react'
import '../App.css';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-2.mp4' autoPlay loop muted />
            <h1>Full Stack Developer</h1>
            <p>Scroll down!</p>
            <div className="arrowAnim">
                <div className="arrowSliding">
                    <div className="arrow"></div>
                </div>
                <div className="arrowSliding delay1">
                    <div className="arrow"></div>
                </div>
                <div className="arrowSliding delay2">
                    <div className="arrow"></div>
                </div>
                <div className="arrowSliding delay3">
                    <div className="arrow"></div>
                </div>
            </div>
            {/*  <span className="point__down"><i className="far fa-hand-point-down fa-7x"></i></span>
            <span className="point__down"><i className="far fa-hand-point-down fa-5x"></i></span>
            <span className="point__down"><i className="far fa-hand-point-down fa-3x"></i></span>
            <span className="point__down"><i className="far fa-hand-point-down fa-1x"></i></span> */}
            {/* <p> What are you waiting for.</p> */}
            {/*<div className='heto-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'>
                    Get STARTED
                </Button>
               <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'>
                    Watch Trailer <i className='far fa-play-circle'/>
                </Button>  
            </div> 
    */}
        </div>
    )
}

export default HeroSection
