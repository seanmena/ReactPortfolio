import React from 'react';
import '../App.css';
import { Button, ButtonTwo } from './Button';
import './HeroSection.css';


function HeroSection() {
    return (
        <div className="hero-container">
            <video class ="vid" src="/videos/Wonderful Landscape of Porto Santo Island.mp4" autoPlay loop muted/>
            <h1>Sean Mena</h1>
            <p class="wlc-port">FULL-STACK WEB DEVLOPER</p>       
            <div className = "hero-btns">
                <Button  className="btns" buttonStyle="btn--outline"
                buttonSize="btn--large">
                    GITHUB
                </Button>
                <ButtonTwo className="btns" buttonStyle="btn--primary"
                buttonSize="btn--large">
                    LINKEDIN
                </ButtonTwo>
            </div>
        </div>
    )
}

export default HeroSection
