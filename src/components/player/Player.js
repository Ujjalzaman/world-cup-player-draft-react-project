import React, { useState } from 'react';
import { useEffect } from 'react';
import PlayerList from './playerList/PlayerList';
import './Player.css';
import PlayerCart from './PlayerCart/PlayerCart';

const Player = () => {
    const [players, setPlayer] = useState([])
    const [cart, setCart] = useState([])

    const handleAddPlayer = (player) =>{
        const newCart = [...cart, player];
        setCart(newCart);
    }
    useEffect(()=>{
        fetch("https://api.mocki.io/v1/1812d9bb")
          .then(res => res.json())
          .then(data => setPlayer(data))
          .catch(error => errorMessage("Something Went Wrong !! Please Try Again Leter."))
      },[]) 

      
      //handle error 
      const errorMessage = (error) =>{
        const showError = document.getElementById(error);
        // showError.innerText = error;
        // spinnerToggle();
      }
    return (
        <div className="player-container">
            <div className="player-box">

                <div className="player-heading">
                    <h1> Available Player</h1>
                </div>

                <div className="player-list">
                    {
                        players.map(player =><PlayerList player={player} handleAddPlayer={handleAddPlayer}></PlayerList>)
                    }
                </div>

            </div>
            <div className="player-cart">
                <PlayerCart cart={cart}></PlayerCart>
            </div>
        </div>

    );
};

export default Player;