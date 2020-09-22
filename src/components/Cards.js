import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
function Cards() {
    return (
        <div className="cards">
            <h1>Skills</h1>
            <br></br>
           
            <div className="cards__container">
          
                <div className="cards__wrapper">
                <h2>Web Developement</h2>
                <br/>
                    <ul className="cards__items">
                        <CardItem 
                        src="images/image-react.jpg"
                        text="Native Web Apps"
                        label="ReactJs"
                        path="/services"
                        type="image"
                        />
                        <CardItem 
                        src="images/image-h-c-j.jpg"
                        text="Fully customizable and Responsive WebSites."
                        label="HTML-CSS-JS"
                        path="/services"
                        type="image"
                        />
                       
                    </ul>
                    <br/>
                    <h2>Mobile Apllications</h2>
                    <br/>
                    <ul className="cards__items">
                        <CardItem 
                        src="images/image-flutter.jpg"
                        text="Native mobile applications using Flutter and Dart"
                        label="Flutter"
                        path="/services"
                        type="image"
                        />
                        <CardItem 
                        src="images/image-androidS.jpg"
                        text="Mobile apps with Java and Android Studio."
                        label="Android Studio"
                        path="/services"
                        type="image"
                        />
                        <CardItem 
                        src="images/image-firebase.jpg"
                        text="Store data online with Google's Firebase"
                        label="Firebase"
                        path="/services"
                        type="image"
                        />
                    </ul>
                    <br/>
                    <h2>Desktop Applications</h2>
                    <br/>
                    <ul className="cards__items">
                        <CardItem 
                        src="images/image-NET.jpg"
                        text="Native mobile applications using Flutter and Dart"
                        label=".NET"
                        path="/services"
                        type="image"
                        />
                        <CardItem 
                        src="images/image-java.jpg"
                        text="Mobile apps with Java and Android Studio."
                        label="JAVA"
                        path="/services"
                        type="image"
                        />
                        <CardItem 
                        src="images/image-python.jpg"
                        text="Store data online with Google's Firebase"
                        label="Python"
                        path="/services"
                        type="image"
                        />
                         <CardItem 
                        src="images/image-C.jpg"
                        text="Store data online with Google's Firebase"
                        label="C#"
                        path="/services"
                        type="image"
                        />
                    </ul>
                    <br/>
                    <h2>Database</h2>
                    <br/>
                    <ul className="cards__items">
                        <CardItem 
                        src="images/image-sql.jpg"
                        text="Native mobile applications using Flutter and Dart"
                        label="SQL"
                        path="/services"
                        type="image"
                        />
                        <CardItem 
                        src="images/image-postgress.jpg"
                        text="Mobile apps with Java and Android Studio."
                        label="POSTGRESS"
                        path="/services"
                        type="image"
                        />
                        
                    
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
