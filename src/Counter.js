import React from 'react';

export class Counter extends React.Component {

    constructor(){
        super();
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
        this.props.changeScore(this.props.id, -1);
    }

    increment(){
        console.log("increment");
        this.props.changeScore(this.props.id, 1);
    }
    // react 이벤트 : 선언형 스타일(함수 선언문을 우측에 배치)
    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={() => this.decrement()}>-</button>
                <span className="counter-score">{this.props.score}</span>
                <button className="counter-action increment" onClick={() => this.increment()}>+</button>
            </div>
        );
    }
}