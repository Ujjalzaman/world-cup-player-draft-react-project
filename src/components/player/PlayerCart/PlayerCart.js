import React from 'react';
import CartAdded from '../cartAdded/CartAdded';
import './PlayerCart.css';
const PlayerCart = (props) => {
    const cart = props.cart;
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        const element = cart[i];
        totalPrice = totalPrice + element.auction_price;
        
    }
    // const totalPrice = cart.reduce((total, prd) => total + prd.auction_price, 0)
    return (
        <div className="player-cart">
            <h1> Total Player :  {cart.length}</h1>
            <ul>
                {
                    cart.map(cart =><CartAdded cart={cart}></CartAdded>)
                }
            </ul>
            <h4 className="total-price">TOTAL PRICE : ${totalPrice}</h4> 
        </div>
    );
};

export default PlayerCart;