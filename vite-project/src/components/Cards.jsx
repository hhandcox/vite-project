import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these EPIC destinations!</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                    src="img/img-9.jpg"
                    text='Explore the Hidden Waterfall Deep Inside the Amazon Jungle'
                    label='Adventure'
                    path='/services'
                    />
                    <CardItem 
                    src="img/img-2.jpg"
                    text='Travel through the Islands of Bali in a Private Cruise'
                    label='Luxury'
                    path='/services'
                    />
                </ul>
                <ul className="cards__items">
                    <CardItem 
                    src="img/img-3.jpg"
                    text='Set Sail in the Atlantic Ocean and see Uncharted Waters'
                    label='Mystery'
                    path='/services'
                    />
                    <CardItem 
                    src="img/img-4.jpg"
                    text='Experience Football on Top of the Mountatins'
                    label='Adventure'
                    path='/products'
                    />
                    <CardItem 
                    src="img/img-5.jpg"
                    text='Ride through the Sahara Desert on our Camel Tour'
                    label='Adrenaline'
                    path='/sign-up'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards;
