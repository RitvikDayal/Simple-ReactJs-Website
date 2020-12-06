import React from 'react';
import {Link} from 'react-router-dom';


function CardItem() {
    return (
        <>
            <li className="cards__item">
                <Link to='/' className='cards__item__link'>
                    <figure className='cards__item_pic-wrap'>
                        <img src="/" alt="Travel Image" className='cards__item_img'/>
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text' />
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CardItem
