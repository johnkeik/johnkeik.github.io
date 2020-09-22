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
                    
                        type="image"
                        />
                        <CardItem 
                        src="images/image-h-c-j.jpg"
                        text="Fully customizable and Responsive WebSites."
                        label="HTML-CSS-JS"
                 
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
                 
                        type="image"
                        />
                        <CardItem 
                        src="images/image-androidS.jpg"
                        text="Mobile apps with Java and Android Studio."
                        label="Android Studio"
                 
                        type="image"
                        />
                        <CardItem 
                        src="images/image-firebase.jpg"
                        text="Store data online with Google's Firebase"
                        label="Firebase"
                 
                        type="image"
                        />
                    </ul>
                    <br/>
                    <h2>Desktop Applications</h2>
                    <br/>
                    <ul className="cards__items">
                        <CardItem 
                        src="images/image-NET.jpg"
                        text="A developer platform with tools and libraries for building any type of app, including web, mobile, desktop, games, IoT, cloud, and microservices."
                        label=".NET"
                 
                        type="image"
                        />
                        <CardItem 
                        src="images/image-java.jpg"
                        text="Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible."
                        label="JAVA"
                 
                        type="image"
                        />
                        <CardItem 
                        src="images/image-python.jpg"
                        text="Python is an interpreted, high-level and general-purpose programming language."
                        label="Python"
                 
                        type="image"
                        />
                         <CardItem 
                        src="images/image-C.jpg"
                        text="C# (C-Sharp) is a programming language developed by Microsoft that runs on the . NET Framework. C# is used to develop web apps, desktop apps, mobile apps, games and much more."
                        label="C#"
                 
                        type="image"
                        />
                    </ul>
                    <br/>
                    <h2>Database</h2>
                    <br/>
                    <ul className="cards__items">
                        <CardItem 
                        src="images/image-sql.jpg"
                        text="SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS)"
                        label="SQL"
                 
                        type="image"
                        />
                        <CardItem 
                        src="images/image-postgress.jpg"
                        text="Is a free and open-source relational database management system (RDBMS) emphasizing extensibility and SQL compliance"
                        label="POSTGRESS"
                 
                        type="image"
                        />
                        
                    
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
