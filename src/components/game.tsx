import { useEffect, useState } from 'react';
import Board from './board';
import { RoundResult } from '../types/RoundResult';

const Game = () => {
  const player1 = 'John';
  const player2 = 'Kate';

  const [rounds, setRounds] = useState<RoundResult[]>([]);

  const handleRoundComplete = (result: RoundResult) => {
    setRounds((rounds) => [...rounds, result]);
  };

  useEffect(() => {
    console.log('Rounds:');
    console.log(rounds);
  }, [rounds]);

  const handleStop = () => {
    alert('Game has stopped');
  };

  const handleContinue = () => {
    alert('Continue game');
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
        onStop={handleStop}
        onContinue={handleContinue}
      />
    </div>
  );
};

export default Game;
