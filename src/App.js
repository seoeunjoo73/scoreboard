import React from 'react';
import logo from './logo.svg';
import './App.css';

const Header=(props)=> {
  console.log(props);
  return  (
      <header className="header">
        <h1 className="h1">{props.title}</h1>
        <span className="stats">Players:{props.totalPlayers}</span>
      </header>
  );
}

//function  : function(){props.removePlayer(props.id)} ==> ()=> props.removePlayer(props.id)
const Player=(props)=>
    (
        <div className="player">
            <span className="player-name">
                <button className="remove-player" onClick={function(){props.removePlayer(props.id)}}>X</button>
              {props.name}
            </span>
          <Counter score={props.score}/>
        </div>
    );

//SOLID
/*
   클래스 컴포넌트
   1. React.Component 상속
   2. render override
   3. 속성앞에 this
 */
class Counter extends React.Component {
  state = {
    score : 30
  }

  /*
    // 위에 처럼 초기화 하거나 아래처럼 생성자를 이용하여 초기화
    constructor(){
          super();  // extends 때문에 부모class도 초기화
          this.state = {
              score : 30
          }
      }*/

  decrement= ()=>{
    console.log("decrement");
    //this.state.score += 1;
    //this.setState({score : this.state.score-1})
    // 1. 반드시 setState로 상태 변경
    // 2. 비동기로 동작하므로 콜백 함수로 상태 변경
    // 3. merge (override)
    this.setState((prevState) =>(
            {
              score : prevState.score-1
            }
        )
    )
  }

  increment(){
    console.log("increment");
    this.setState(function(prevState){
      return { score : prevState.score +1}
    })
  }
  // react 이벤트 : 선언형 스타일(함수 선언문을 우측에 배치)
  render() {
    return (
        <div className="counter">
          <button className="counter-action decrement" onClick={this.decrement}>-</button>
          <span className="counter-score">{this.state.score}</span>
          <button className="counter-action increment" onClick={this.increment.bind(this)}>+</button>
        </div>
    );
  }
}
/*
// function component  : 변경되는 값을 컨트롤이 안됨
const Counter = (props) => (
    <div className="counter">
        <button className="counter-action decrement">-</button>
        <span className="counter-score">{props.score}</span>
        <button className="counter-action increment">+</button>
    </div>
);*/

/*
  props : 부모에서 자식한테 property를 넘길때
  state : 시간에 따른 데이터 변화 setState 사용
          비동기
          React.Component를 상속 받는다.
          class component로 작성해야 됨
*/
//const palyers = [{name:"seo", score:50}, {name:"kim", score:60},{name:"pak", score:70},{name:"led", score:80}];

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
