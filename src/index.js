import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';
import './index.css'

class Game extends React.Component{
  render() {
    return (
        <div className="game">
          <Board></Board>
        </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game></Game>);