import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these travel pictures!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                <ul className='cards__items'>
                        <CardItem 
                        src="images/img-1.jpg"text="Explore the hidden Waterfall deep inside the Amazon jungle"
                        label="Adventure"
                        path="/services"
                        />
                        <CardItem 
                        src="images/img-2.jpg"text="Explore the hidden Waterfall deep inside the Amazon jungle"
                        label="Luxury"
                        path="/products"
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem 
                        src="images/img-3.jpg"text="Explore the hidden Waterfall deep inside the Amazon jungle"
                        label="Adventure"
                        path="/services"
                        />
                        <CardItem 
                        src="images/img-4.jpg"text="Explore the hidden Waterfall deep inside the Amazon jungle"
                        label="Luxury"
                        path="/products"
                        />
                        <CardItem 
                        src="images/img-5.jpg"text="Explore the hidden Waterfall deep inside the Amazon jungle"
                        label="Luxury"
                        path="/products"
                        />
                        <CardItem 
                        src="images/img-6.jpg"text="Explore the hidden Waterfall deep inside the Amazon jungle"
                        label="Luxury"
                        path="/products"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
