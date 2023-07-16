import { useCallback, useEffect, useState } from 'react';
import { RoundStatus } from '../types/RoundStatus';
import { BoardPiece } from '../types/BoardPiece';
import usePlayer from './usePlayer';
import { Player } from '../types/Player';
import { calculateWinner, pickOneOf } from '../helper';

const useRound = (p1Name: string, p2Name: string, cells: BoardPiece[]) => {
  const player1 = usePlayer(p1Name, BoardPiece.X);
  const player2 = usePlayer(p2Name, BoardPiece.O);

  const [currentPlayer, setCurrentPlayer] = useState(
    pickOneOf(player1, player2)
  );

  const [winner, setWinner] = useState<Player | null>();
  const [status, setStatus] = useState(RoundStatus.ONGOING);

  const nextPlayer = () => {
    setCurrentPlayer((currentPlayer) => {
      return currentPlayer.piece === player1.piece ? player2 : player1;
    });
  };

  useEffect(() => {
    const winnerPiece = calculateWinner(cells);
    if (winnerPiece) {
      setWinner(
        player1.piece === winnerPiece
          ? player1
          : player2.piece === winnerPiece
          ? player2
          : null
      );
      setStatus(RoundStatus.COMPLETED);
    }
  }, [cells]);

  return {
    status,
    winner,
    currentPlayer,
    setWinner,
    nextPlayer,
  };
};

export default useRound;
