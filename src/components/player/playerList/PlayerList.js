import React from 'react';
import {useRef} from 'react';
import './PlayerList.css';

const PlayerList = (props) => {
    const {name, image, salary, auction_price} = props.player
    return (
        <div className="player-list-container">
            <div className="player-list">
                <div className="player-description">
                    <img className="profile-img" src={image} alt=""/>
                    <h3>{name}</h3>
                    <p> Salary : {salary}</p>
                    <p>Auction Price : {auction_price}</p>
                    <button onClick={() => props.handleAddPlayer(props.player)}>Add Player</button>
                </div>
            </div>
        </div>
    );
};

export default PlayerList;