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
                        path=" https://johnkeik.github.io/react_project1/"
                        type="video"
                        code="https://github.com/johnkeik/react_project1/tree/master"
                        />
                        <CardItem 
                        src="/videos/project2.mp4"
                        text="Fully customizable and Responsive WebSites"
                        label="HTML-CSS-JS"
                        path=" https://johnkeik.github.io/myPortfolioSite/"
                        type="video"
                        code="https://github.com/johnkeik/myPortfolioSite"
                        />
                        <CardItem 
                        src="/videos/events.mp4"
                        text="Desktop application for Thessaloniki's events"
                        label="C#"
                        path="https://github.com/N1ckTheD1ck/Events-Project-Team-7"
                        type="video"
                        code="https://github.com/N1ckTheD1ck/Events-Project-Team-7"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src="/videos/snake.mp4"
                        text="Snake game in unity."
                        label="Unity"
                        type="video"
                        code="https://github.com/johnkeik/unity_snake"
                        />
                        <CardItem 
                        src="/videos/cargame.mp4"
                        text="Car game project in unity"
                        label="Unity"
                        type="video"
                        code="https://github.com/johnkeik/unity_car_Game_Project"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src="/videos/minion.mp4"
                        text="Minion 3d animation for academic purposes."
                        label="3dsMax"
                        type="video"
                        />
                        <CardItem 
                        src="/videos/whitetower.mp4"
                        text="Thessaloniki's white tower 3d model"
                        label="3dsMax"
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
