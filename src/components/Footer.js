import React from 'react';
import './Footer.css';
import emailjs from 'emailjs-com';



function Footer() {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'my_website', e.target, 'user_efDmotUGbghc40Ab9onOi')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <div className='footer-container'>
        <section className='footer-subscription'>
          <p className='footer-subscription-heading'>
            If you want to contact me.
          </p>
          <p className='footer-subscription-text'>
            Send me an email at giannis.keik@gmail.com
          </p>
          <div className="contact__container">
                <div className="contact__form">
                    <form onSubmit={sendEmail}>
                        <div className="row pt-5 mx-auto">
                            <div className="col-8 form-group mx-auto">
                                <input type="text" className="form-control" placeholder="Name" name="name" />
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <input type="email" className="form-control" placeholder="Email Address" name="email" />
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <input type="text" className="form-control" placeholder="Subject" name="subject" />
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                            </div>
                            <div className="col-8 pt-3 mx-auto">
                                <input type="submit" className="btn btn-info" value="Send Message"></input>
                            </div>
                        </div>
                    </form>
                </div>
                </div>
        </section>
        
        <section className='social-media'>
          <div className='social-media-wrap'>
            <div className='footer-logo'>
              <span className='social-logo'>
                JohnKeik
                <i className='fab fa-typo3' />
              </span>
            </div>
            <small className='website-rights'>JohnKeik © 2020</small>
            <div className='social-icons'>
              {/*Linked in*/}
              <a href="https://www.linkedin.com/in/john-keikoglou-0a18a010a/" rel="noopener noreferrer" target="_blank">
                        <i className="fab fa-linkedin fa-3x" aria-hidden="true" />
                    </a>
                    {/*Github*/}
                    <a href="https://github.com/johnkeik" rel="noopener noreferrer" target="_blank">
                        <i className="fab fa-github-square fa-3x" aria-hidden="true" />
                    </a>
                    {/*Facebook*/}
                    <a href="https://www.facebook.com/jannis.keikoglou" rel="noopener noreferrer" target="_blank">
                        <i className="fab fa-facebook-square fa-3x" aria-hidden="true" />
                    </a>
                    {/*instagram*/}
                    <a href="https://www.instagram.com/giannis_keik/" rel="noopener noreferrer" target="_blank">
                        <i className="fab fa-instagram-square fa-3x" aria-hidden="true" />
                    </a>
            </div>
          </div>
        </section>
      </div>
    )
}

export default Footer 
