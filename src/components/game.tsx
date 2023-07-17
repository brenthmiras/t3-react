import { useEffect, useState } from 'react';
import Board from './board';
import usePlayer from '../hooks/usePlayer';
import useScore from '../hooks/useScore';
import ScoreCard from './score-board';
import { RoundResult } from '../types/RoundResult';
import { BoardPiece } from '../types/BoardPiece';
import ScoreLayout from '../styled-components/ScoreLayout';

const Game = () => {
  const player1 = usePlayer('Samara', BoardPiece.X);
  const player2 = usePlayer('Brenth', BoardPiece.O);

  const [rounds, setRounds] = useState<RoundResult[]>([]);

  const player1Score = useScore({ rounds, player: player1 });
  const player2Score = useScore({ rounds, player: player2 });

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
    <div className="row">
      <div className="col-md-4">
        <h1>Round {rounds.length + 1}</h1>
        <ScoreCard score={player1Score} />
        <ScoreCard score={player2Score} />
      </div>
      <div className="col-md-6">
        <Board
          player1={player1}
          player2={player2}
          onRoundComplete={handleRoundComplete}
          onStop={handleStop}
          onContinue={handleContinue}
        />
      </div>
    </div>
  );
};

export default Game;
