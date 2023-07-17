import React from 'react';
import useScore from '../hooks/useScore';
import { PlayerScore } from '../types/PlayerScore';

type ScoreCardProps = {
  score: PlayerScore;
};

const ScoreCard = ({ score }: ScoreCardProps) => {
  return (
    <div className="card w-100 me-2 mb-2">
      <div className="card-header">{score.name}</div>
      <div className="card-body">
        <div>
          <span className="badge bg-success me-2">{score.wins}</span>
          Wins
        </div>
        <div>
          <span className="badge bg-danger me-2">{score.loses}</span>
          Losses
        </div>
        <div>
          <span className="badge bg-secondary me-2">{score.draws}</span>
          Draws
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;
