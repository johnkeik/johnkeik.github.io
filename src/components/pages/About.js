import React from 'react'
import '../../App.css';

export default function About() {
    return (
        <div>
            <div className="about__main__container">
                <div className="about__info__container">
                    <img className="about__img" src="/images/image-me.jpg" alt="ProfPic" />
                    <article className="about__img__info">
                        <h2>Hello my name is John Keikoglou,</h2>
                        <p>I am student of International Hellenic University at the department of IT in Thessaloniki.I am very passionate with software development,and i am highly intrested in learning new things and new technologies.In my free time you will see me running outside,doing calisthenic workout or training martial arts.Also i am passionate about reading books and go for walks wich i think is the most important gift you can do to yourself especially when you are working with computers just to clear your mind.
                    </p>
                    </article>
                </div>
            </div>
            <br />
            <div className="about__research__container">
                <div className="about__research">
                    <br />
                    <h2>Bibliographic research</h2>
                    <ul>
                        <li>
                            <a href="https://drive.google.com/open?id=1cSc8BvnxKpcv9B9or12rYr-T7P4F_bUs" rel="noopener noreferrer" target="_blank">AUGMENTED REALITY 2018 IHU</a>
                        </li>
                        <li>
                            <a href="https://drive.google.com/open?id=1joZHcwytvZl_yX2K0MNivA9bezMFe3mf" rel="noopener noreferrer" target="_blank">ROBOTIC ARM IHU</a>
                        </li>
                        <li>
                            <a href="https://drive.google.com/open?id=1kMgwsFPg5YlbQzhQ7uktdR73zEsIfhrQ" rel="noopener noreferrer" target="_blank">EVOLVING ALGORITHMS FOR FILE SAVING IHU</a>
                        </li>
                        <li>
                            <a href="https://drive.google.com/open?id=1po1VN83mBohX30FM8DiO-jb9od1V4mW6" rel="noopener noreferrer" target="_blank">TACTILE INTERNET 2020 IHU</a>
                        </li>

                    </ul>
                </div>

            </div>


        </div>
    )
}