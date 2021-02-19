import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Feel free to contact me anytime.
        </p>

        <div className='input-areas'>
          <p className="footer-subscription-heading">
            SeanMenaDev@gmail.com
          </p>
        </div>
      </section>

      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              Sean Mena
            </Link>
          </div>
          <small className='website-rights'>Sean Meana © 2020</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link instagram'
              to= {{pathname: 'https://www.instagram.com/kippersnack_/'}}
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to={{pathname: 'https://www.youtube.com/channel/UCs6DOldIYUXqNuOUf_Eq0qw/featured' }}
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to= {{pathname: 'https://www.linkedin.com/in/sean-mena-2910651aa/' }}
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;