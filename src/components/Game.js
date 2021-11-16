import React, {useState} from 'react';
import Board from './Board'
import {calculateWinner} from '../helpers.js'

const style = {
    width: "200px",
    margin: "20px auto",
  };
  
function Game (){
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(board);
    const handleClick = (i) => {
      const boardCopy = [...board];
      if (winner || boardCopy[i]) {
        return;
      }
      boardCopy[i] = xIsNext ? "X" : "O";
      setBoard(boardCopy);
      setXisNext(!xIsNext);
    };

    const resetGame =() =>
    {
        return(
            <button onClick = {() =>  setBoard(Array(9).fill(null))}>
            <div style={{ textAlign: "center" }}>
                Reset Game
                </div>
            </button>
        );

    }

    return(
        <>
        <Board squares={board} onClick={handleClick} />
        <div style={style} >
            <p style = {{textAlign: "center"}}>
                { winner? 'Winner is: ' + winner: 'Next Player: '+ (xIsNext? 'X': 'O')}
            </p>
            {resetGame()}
        </div>
        </>
    );
}

export default Game;