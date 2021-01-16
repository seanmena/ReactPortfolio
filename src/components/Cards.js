import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out my projects below!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/kippersnack 1-SmSmf607901764.jpg'
              text='Check out all of my project code on my github here'
              label='Github'
              path='/products'

            />
            <CardItem
              src='images/LandingPage.png'
              text='Learn more about this project here!'
              label='EMG'
              to = "//github.com/seanmena/Kipper/blob/main/src/App.js"
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/colorize.png'
              text='Learn more about this project here!'
              label='Colorize'
              path='/products'
            />
            <CardItem
              src='images/pro3.png'
              text='Learn more about this project here!'
              label='Kipper'
              path='/products'
            />
            <CardItem
              src='images/Screen Shot 2021-01-11 at 7.21.51 PM (2).png'
              text='Learn more about this project here!'
              label='Emp-Tracker'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;