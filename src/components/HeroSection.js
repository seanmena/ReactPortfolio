import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
    return (
        <div className="hero-container">
            <video src="/videos/Wonderful Landscape of Porto Santo Island.mp4" autoPlay loop muted/>
            <h1>Sean Mena</h1>
            <p>Welcome to my portfolio</p>       
            <div className = "hero-btns">
                <Button className="btns" buttonStyle="btn--outline"
                buttonSize="btn--large">
                    PROJECTS
                </Button>
                <Button className="btns" buttonStyle="btn--primary"
                buttonSize="btn--large">
                    CONTACT
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
