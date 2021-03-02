import React from 'react';
import './CartAdded.css'
const CartAdded = (props) => {
    const cart = props.cart;

    const { auction_price, name, city, salary, team, image } = props.cart;
    return (
        <div className="player-detail">
            <div className="player-desc">
                <div className="price-desc">
                    <p className="player">{name}</p>
                    <p>Country :  {city}</p>
                    <p> team : {team}</p>
                    <p>salary :  ${salary}</p>
                    <p> Auction Money : ${auction_price}</p>
                </div>
                <div className="player-img">
                    <img className="player-image" src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default CartAdded;