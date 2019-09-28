import React from 'react';


export  const Header=(props)=> {
    console.log(props);
    return  (
        <header className="header">
            <h1 className="h1">{props.title}</h1>
            <span className="stats">Players:{props.totalPlayers}</span>
        </header>
    );
}

//export default Header;