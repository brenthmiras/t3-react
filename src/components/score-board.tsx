import React from 'react';
import useScore from '../hooks/useScore';
import { PlayerScore } from '../types/PlayerScore';

type ScoreCardProps = {
  score: PlayerScore;
};

const ScoreCard = ({ score }: ScoreCardProps) => {
  return (
    <ul>
      <li>Name: {score.name}</li>
      <li>Wins: {score.wins}</li>
      <li>Loses: {score.loses}</li>
      <li>Draws: {score.draws}</li>
    </ul>
  );
};

export default ScoreCard;
