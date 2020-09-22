import React from 'react';
import CardItem from '../CardItem';
import '../Cards.css';
import Footer from '../Footer';

function Portfolio() {
    return (
        <div>
        <div className="cards">           
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="/videos/project1.mp4"
                        text="Native Web Apps"
                        label="ReactJs"
                        path="https://www.google.com"
                        type="video"
                        />
                        <CardItem 
                        src="/videos/project2.mp4"
                        text="Fully customizable and Responsive WebSites."
                        label="HTML-CSS-JS"
                        path="/services"
                        type="video"
                        />
                        <CardItem 
                        src="/videos/events.mp4"
                        text="Desktop application for Thessaloniki's events"
                        label="C#"
                        path="/services"
                        type="video"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src="/videos/snake.mp4"
                        text="Native Web Apps"
                        label="Unity"
                        path="/services"
                        type="video"
                        />
                        <CardItem 
                        src="/videos/cargame.mp4"
                        text="Fully customizable and Responsive WebSites."
                        label="Unity"
                        path="/services"
                        type="video"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src="/videos/minion.mp4"
                        text="Native Web Apps"
                        label="ReactJs"
                        path="/services"
                        type="video"
                        />
                        <CardItem 
                        src="/videos/whitetower.mp4"
                        text="Fully customizable and Responsive WebSites."
                        label="HTML-CSS-JS"
                        path="/services"
                        type="video"
                        />
                    </ul>
        
                </div>
            </div>
        </div>
        <Footer/>
        </div>
    )
}

export default Portfolio;
