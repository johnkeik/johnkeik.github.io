import React from 'react'
import { Link } from 'react-router-dom'

function CardItem(props) {
    if(props.type === "image"){
    return (
        <>
            <li className="cards__item">
                <Link className="cards__item__link" to={props.path}>
                    <figure className="cards__item__pic-wrap" data-category={props.label}>
                        <img src={props.src} alt="Travel" className="cards__item__img"/> 
                    </figure>
                    <div className="cards__item__info">
                        <h5 className="cards__item__text">{props.text}</h5>
                    </div>
                </Link>
            </li>
        </>
    )
    }else{
        if(props.code){
                return (
            <>
        <li className="cards__item">
                <a className="cards__item__link" href={props.path}  rel="noopener noreferrer" target="_blank">
                    <figure className="cards__item__pic-wrap" data-category={props.label}>
                    <video src={props.src} autoPlay loop muted  className="cards__item__video"/>
                    </figure>
                    <div className="cards__item__info">
                        <h5 className=" cards__item__text">{props.text}</h5>
                       <a href={props.code}  rel="noopener noreferrer" target="_blank">Check code</a>
                    </div>
                </a>
            </li>
            </>
        )
                }else{
                    return (
                        <>
                    <li className="cards__item">
                            <a className="cards__item__link" href={props.path}  rel="noopener noreferrer" target="_blank">
                                <figure className="cards__item__pic-wrap" data-category={props.label}>
                                <video src={props.src} autoPlay loop muted  className="cards__item__video"/>
                                </figure>
                                <div className="cards__item__info">
                                    <h5 className=" cards__item__text">{props.text}</h5>
                                  
                                </div>
                            </a>
                        </li>
                        </>
                    )
                }
    }
}

export default CardItem
