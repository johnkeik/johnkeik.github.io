import React from 'react';
import { Button } from './Button';
import './Footer.css';
function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the adventure
                </p>
                <p className="footer-subscription-text">
                   You can unsubsdcirbe at any time.
                </p>
                <div className="input-areas">
                <form>
                    <input type="email" name="email" placeholder="YourEmail" className="footer-input"/>
                    <Button buttonStyle='btn--outline'>Subscribe</Button>
                </form>

                </div>
            </section>
        </div>
    )
}

export default Footer 
