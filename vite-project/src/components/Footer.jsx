import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
        <section className="footer-subscription">
            <p className='footer-subscription-heading'>
                Join the Adventure newsletter to receive our best vacation deals
            </p>
            <p className="footer-subscription-text">
                You can unsubscribe at any time
            </p>
            <div className="input-areas">
                <form>
                    <input type="email" name='email' placeholder='Your Email' className="footer-input" />
                    <Button buttonStyle='btn--outline'>Subscribe</Button>
                </form>
            </div>
        </section>
        <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>About Us</h2>
                    <Link to='/sign-up'>How We Work</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Careers</Link>
                </div>
                <div className="footer-link-items social-items">
                    <h2>Connect</h2>
                    <Link to='/sign-up'><i class="fa-brands fa-facebook"></i> Facebook</Link>
                    <Link to='/'><i class="fa-brands fa-twitter"></i>Twitter</Link>
                    <Link to='/'><i class="fa-brands fa-github"></i>Github</Link>
                </div>
                <div className="footer-link-items">
                    <h2>Customer Care</h2>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of Service</Link>
                    <Link to='/'>Contact Us Anytime!</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
