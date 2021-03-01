import React from'react';
import { useState, useEffect } from 'react';
import One from "../images/1.png";
import Two from "../images/2.png";
import Three from "../images/3.png";
import Four from "../images/4.png";
import Five from "../images/5.png";
import Six from "../images/6.png";
import "./game.css";
import Die from "./Die";

const Game = () => {

  const [diceArray, setDiceArray] = useState([]);

  const dicePicturesMap = {
    1: One, 2: Two, 3: Three, 4: Four, 5: Five, 6: Six
  }

  useEffect(() => {
    setUpDiceArray()
  }, []);

  const setUpDiceArray = () => {
    let arr = [];
    for (let i = 0; i < 6; i++) {
      diceArray[i] = {};
      diceArray[i].id = i;
      diceArray[i].value = i + 1;
      diceArray[i].picture = dicePicturesMap[i + 1];
      diceArray[i].active = true;
      arr.push(diceArray[i])   
    }
    setDiceArray(arr)
  }

  const onClickRollDice = () => {
    rollDice();
    console.log('roll dice');
  };

  const rollDice = () => {
    let arr = [];
    for (let i = 0; i < 6; i++) {
      if (diceArray[i].active === true){
        const randInt = Math.floor((Math.random() * 6) + 1);
        diceArray[i].value = randInt;
        diceArray[i].picture = dicePicturesMap[randInt];
      }
      // diceArray[i].active = true;
      arr.push(diceArray[i]) 
    }
    setDiceArray(arr)
  }

  const onSelectedDie = (die) => {
    console.log("die passed in", die)
    let arr = [...diceArray]
    console.log(arr)
    let id = die.id;
    let dice = arr[id]
    dice.active = !dice.active
    console.log("modified dice", dice)
    setDiceArray(arr)
  }
  
  const diceList = diceArray.map((die, index) => {
    return  <Die die={die} onSelectedDie={onSelectedDie} key={index} />
  });

  return (
      <div className="dice-code">
        <h1>Dice</h1>

        <button className='button' onClick={onClickRollDice}>Roll Dice</button>
        
        <>{diceList}</>
        
      </div>
  );
}


export default Game;
