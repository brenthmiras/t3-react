import { useEffect, useState } from 'react';
import { RoundStatus } from '../types/RoundStatus';
import { BoardPiece } from '../types/BoardPiece';
import usePlayer from './usePlayer';
import { Player } from '../types/Player';
import { isBoardFull, calculateWinner, pickOneOf } from '../helper';
import { RoundResult } from '../types/RoundResult';

type RoundProps = {
  player1: Player;
  player2: Player;
  cells: BoardPiece[];
  onComplete: (result: RoundResult) => void;
};

const useRound = ({ player1, player2, cells, onComplete }: RoundProps) => {
  const [currentPlayer, setCurrentPlayer] = useState(
    pickOneOf(player1, player2)
  );

  const [winner, setWinner] = useState<Player>();
  const [status, setStatus] = useState(RoundStatus.ONGOING);

  const nextPlayer = () => {
    setCurrentPlayer((currentPlayer) => {
      return currentPlayer.piece === player1.piece ? player2 : player1;
    });
  };

  const reset = () => {
    setCurrentPlayer(pickOneOf(player1, player2));
    setWinner(undefined);
    setStatus(RoundStatus.ONGOING);
  };

  useEffect(() => {
    const winnerPiece = calculateWinner(cells);

    if (winnerPiece) {
      const newWinner =
        player1.piece === winnerPiece
          ? player1
          : player2.piece === winnerPiece
          ? player2
          : undefined;

      setWinner(newWinner);

      setStatus(RoundStatus.COMPLETED);

      onComplete({
        player1,
        player2,
        winner: winnerPiece,
        status: RoundStatus.COMPLETED,
      });
    }

    const boardFull = isBoardFull(cells);

    if (!winnerPiece && boardFull) {
      setStatus(RoundStatus.COMPLETED);

      onComplete({
        player1,
        player2,
        status: RoundStatus.COMPLETED,
      });
    }
  }, [cells]);

  return {
    status,
    winner,
    currentPlayer,
    setWinner,
    nextPlayer,
    reset,
  };
};

export default useRound;
