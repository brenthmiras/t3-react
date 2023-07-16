import { useState } from 'react';
import Board from './board';
import { RoundResult } from '../types/RoundResult';

const Game = () => {
  const player1 = 'John';
  const player2 = 'Kate';

  const handleRoundComplete = (result: RoundResult) => {
    console.log(result);
  };

  return (
    <div>
      <h1>
        {player1} vs {player2}
      </h1>
      <Board
        player1={player1}
        player2={player2}
        onRoundComplete={handleRoundComplete}
      />
      ;
    </div>
  );
};

export default Game;
