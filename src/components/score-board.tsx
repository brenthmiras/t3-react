import React from 'react';
import useScore from '../hooks/useScore';
import { PlayerScore } from '../types/PlayerScore';

type ScoreCardProps = {
  score: PlayerScore;
};

const ScoreCard = ({ score }: ScoreCardProps) => {
  return (
    <div className="card w-100 me-2">
      <div className="card-header">{score.name}</div>
      <div className="card-body">
        <ul>
          <li>Wins: {score.wins}</li>
          <li>Loses: {score.loses}</li>
          <li>Draws: {score.draws}</li>
        </ul>
      </div>
    </div>
  );
};

export default ScoreCard;
