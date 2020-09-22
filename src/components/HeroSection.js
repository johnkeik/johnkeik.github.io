import React from 'react'
import '../App.css';
import './HeroSection.css';
import { Button } from './Button'
function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-2.mp4' autoPlay loop muted />
            <h1>Full Stack Developer</h1>
            <p>Scroll down to check my Skills!</p>
            <br></br>
            <div className="arrowAnim">
                <div class="arrowSliding">
                    <div class="arrow"></div>
                </div>
                <div class="arrowSliding delay1">
                    <div class="arrow"></div>
                </div>
                <div class="arrowSliding delay2">
                    <div class="arrow"></div>
                </div>
                <div class="arrowSliding delay3">
                    <div class="arrow"></div>
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
