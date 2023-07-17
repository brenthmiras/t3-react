import { useMemo } from 'react';
import { PlayerScore } from '../types/PlayerScore';
import { RoundResult } from '../types/RoundResult';
import { Player } from '../types/Player';

type ScoreProps = {
  player: Player;
  rounds: RoundResult[];
};

type Score = {
  name: string;
  wins: number;
  loses: number;
  draws: number;
};

const getDefaultScore = (name: string) => ({
  name,
  wins: 0,
  loses: 0,
  draws: 0,
});

const useScore = ({ rounds, player }: ScoreProps): Score => {
  const score = useMemo(() => {
    return rounds.reduce((result, round) => {
      if (round.winner && round.winner === player.piece) {
        return {
          ...result,
          wins: result.wins + 1,
        };
      } else if (round.winner && round.winner != player.piece) {
        return {
          ...result,
          loses: result.loses + 1,
        };
      } else {
        return {
          ...result,
          draws: result.draws + 1,
        };
      }
    }, getDefaultScore(player.user.name));
  }, [rounds]);

  return {
    ...score,
  };
};

export default useScore;
