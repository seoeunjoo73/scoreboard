import React from 'react';

import './App.css';
//import Header from "./Header";
import {Header} from './Header';

import {Player} from "./Player";

/*
   자식이 부모 함수 호출
    1. 부모 : 콜백함수 선언
    2. props = 콜백함수
    3. 자식 : 실행
 */
class App extends React.Component {

  state = {
    players : [{name:"seo", score:50, id:0}, {name:"kim", score:60 , id:1},{name:"pak", score:70, id:2},{name:"led", score:80, id:3}]
  }
  render() {
    return (
        <div className="scoreboard">
          <Header title="My scoreboard" totalPlayers={1 + 10}/>
          {
            this.state.players.map((player, idex) => <Player key={idex} id={player.id} name={player.name}
                                                             score={player.score} removePlayer={this.handleRemovePlayer}/>)
          }
        </div>
    );
  }

  handleRemovePlayer = (id)=>{
    console.log("handleRemovePlayer {}", id);
    // filter : predicate
    this.setState(
        (prevState) => ({ players : prevState.players.filter(player => player.id !== id)})
    )
  }
}

export default App;
