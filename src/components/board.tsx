import BoardLayout from '../styled-components/BoardLayout';
import Cell from './cell';
import useRound from '../hooks/useRound';
import useCells from '../hooks/useCells';
import { RoundResult } from '../types/RoundResult';
import { RoundStatus } from '../types/RoundStatus';

type BoardProps = {
  player1: string;
  player2: string;
  onRoundComplete: (result: RoundResult) => void;
};

const Board = ({ player1, player2, onRoundComplete }: BoardProps) => {
  const { cells, placePiece } = useCells();

  const { winner, status, currentPlayer, nextPlayer } = useRound({
    p1Name: player1,
    p2Name: player2,
    cells,
    onComplete: onRoundComplete,
  });

  const handleCellClick = (index: number): void => {
    if (!!winner) return;
    placePiece(currentPlayer.piece, index);
    nextPlayer();
  };

  return (
    <>
      {status === RoundStatus.ONGOING ? (
        <h2>{currentPlayer.user.name}'s Turn</h2>
      ) : (
        ''
      )}
      {status === RoundStatus.COMPLETED && winner ? (
        <h2>{winner.user.name} has won!</h2>
      ) : (
        ''
      )}
      {status === RoundStatus.COMPLETED && !winner ? <h2>It's a draw</h2> : ''}
      <BoardLayout>
        {cells.map((cell, index) => (
          <Cell
            key={index}
            value={cell}
            onCellClick={() => handleCellClick(index)}
          />
        ))}
      </BoardLayout>
    </>
  );
};

export default Board;
