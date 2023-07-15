import { useState } from 'react';
import Board from './board';

const Game = () => {
  const player1 = 'John';
  const player2 = 'Kate';

  return (
    <div>
      <h1>
        {player1} vs {player2}
      </h1>
      <Board player1={player1} player2={player2} />;
    </div>
  );
};

export default Game;
