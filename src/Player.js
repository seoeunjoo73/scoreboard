import React from 'react';
import {Counter} from "./Counter";

export const Player=(props)=>
    (
        <div className="player">
            <span className="player-name">
                <button className="remove-player" onClick={function(){props.removePlayer(props.id)}}>X</button>
                {props.name}
            </span>
            <Counter score={props.score}/>
        </div>
    );