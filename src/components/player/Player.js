import React, { useState } from 'react';
import { useEffect } from 'react';
import PlayerList from './playerList/PlayerList';
import './Player.css';
import PlayerCart from './PlayerCart/PlayerCart';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const Player = () => {
    const [players, setPlayer] = useState([])
    const [cart, setCart] = useState([])


    const handleAddPlayer = (player) => {
        const newCart = [...cart, player];
        setCart(newCart);
    }
    // api.mocki.io/v1/938a98f6
    // https://api.mocki.io/v1/1812d9bb
    useEffect(() => {
        fetch("https://api.mocki.io/v1/584c2a38")
            .then(res => res.json())
            .then(data => setPlayer(data))
            .catch(error => errorMessage("Something Went Wrong !! Please Try Again Leter."))
    }, [])

    //handle error 
    const errorMessage = (error) => {
        const showError = document.getElementById(error);
    }
    return (
        <div className="player-container">
            <div className="player-box">

                <div className="another">
                    <div className="player-heading ">
                        <h1 className=""> Available Players</h1>
                    </div>

                    <div className="player-list">
                        {
                            players.map(player => <PlayerList player={player} handleAddPlayer={handleAddPlayer}></PlayerList>)
                        }
                    </div>
                </div>

            </div>
            <div className="player-cart">
                <PlayerCart cart={cart}></PlayerCart>
            </div>
        </div>

    );
};

export default Player;