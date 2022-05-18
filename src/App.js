import logo from './logo.svg';
import './App.css';
import GameBoard from './GameBoard';
import { useState } from 'react';
import GameStatus from './GameStatus';
import Welcomeform from './Welcomeform';
import MoveDetails from './MoveDetails';
function App() {

  const [winnerExists,setwinnerExists] = useState(false);
  const [turnval, Setturnval] = useState("X");
  const [moveCount,setMoveCount] = useState(0);

  const vals = [
    {
      value: " "
    },
    {
      value: " "
    },
    {
      value: " "
    },
    {
      value: " "
    },

    {
      value: " "
    },

    {
      value: " "
    },
    {
      value: " "
    },
    {
      value: " "
    },
    {
      value: " "
    }
  ]
  const [board, ChangeBoard] = useState(vals.map((obj) => ({ ...obj, visited: false })));
  const [gamestart, setgamestart] = useState(false);

  const [validity, Setvalidity] = useState(true);

  const [name1, setname1] = useState("Player 1");
  const [name2, setname2] = useState("Player 2");
  const [gameDone, SetGameDone] = useState(false);

  const restarthandler = () => {
    setgamestart(false);
    SetGameDone(false);
    Setturnval("X");
    const new_arr = vals.map((obj) => ({ ...obj, value: " ", visited: false }));
    ChangeBoard(new_arr);
    setname1("Player 1");
    setname2("Player 2");
    setwinnerExists("false");
  }
  const EndGame = () => {
    SetGameDone(true);
  }

  const TriggerWinner = () =>
  {
    setwinnerExists(true);
  }

  const nameInputHandler1 = (event) => {
    setname1(event.target.value);
  }

  const nameInputHandler2 = (event) => {
    setname2(event.target.value);
  }

  const submitHandler = () => {
    setgamestart(true);
  }

  const ButtonClickHandler = (n) => {
    const p = parseInt(n);
    if (gameDone === false) {
      if (board[p].visited === false) {
        board[p].visited = true;
        board[p].value = turnval;
        ChangeBoard(() => {
          return board;
        })

        if (turnval === "X")
          Setturnval("O");
        else
          Setturnval("X");
        Setvalidity(true);

      }
      else if (board[p].visited === true) {
        Setvalidity(false);
      }
    }
  }
  if (gamestart === true)
    return (
      <div >
        <GameStatus isValid={validity} moves={board} n1={name1} n2={name2} turn={turnval} finish={EndGame} makeWinner = {TriggerWinner}></GameStatus>
        <GameBoard nums={board} clickhandler={ButtonClickHandler}></GameBoard>
        <MoveDetails winner = {winnerExists} turn={turnval} status={gameDone} n1={name1} n2={name2} restart={restarthandler}></MoveDetails>
      </div>
    );

  return (
    <div>
      <Welcomeform nameInput1={nameInputHandler1}
        nameInput2={nameInputHandler2}
        submit={submitHandler}></Welcomeform>
    </div>
  )
}

export default App;
