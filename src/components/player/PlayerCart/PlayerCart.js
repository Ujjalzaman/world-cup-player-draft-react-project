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
    return (
        <div className="player-cart">
            <div className="cart-heading">
                <div className="player-added">
                    <h4> Total Player Added :  {cart.length}</h4>
                </div>
                <ul>
                    {
                        cart.map(cart => <CartAdded cart={cart}></CartAdded>)
                    }
                </ul>
            </div>
            <div className="cart-container">
                <h5 className="total-price">TOTAL PRICE : ${totalPrice}</h5>
            </div>
        </div>
    );
};

export default PlayerCart;