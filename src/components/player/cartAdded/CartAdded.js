import React from 'react';
import './CartAdded.css'
const CartAdded = (props) => {
    const cart = props.cart;
    // console.log(props.cart)
    

    const {auction_price, name, city, salary, team, image} = props.cart;
    return (
        <div className="player-desc">
            <div className="price-desc">
                <h3 className="player">{name}</h3>
                <h4>Country :  {city}</h4>
                <h4> team : {team}</h4>
                <h4>salary :  ${salary}</h4>
                <h4> Auction Money : ${auction_price}</h4>
                {/* <h4>total Price : {}</h4> */}
            </div>
            <div className="player-img">
                <img className="player-image" src={image} alt=""/>
            </div>
        </div>
    );
};

export default CartAdded;