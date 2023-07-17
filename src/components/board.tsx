import BoardLayout from '../styled-components/BoardLayout';
import Cell from './cell';
import useRound from '../hooks/useRound';
import useCells from '../hooks/useCells';
import { RoundResult } from '../types/RoundResult';
import { RoundStatus } from '../types/RoundStatus';
import { Player } from '../types/Player';

type BoardProps = {
  player1: Player;
  player2: Player;
  onRoundComplete: (result: RoundResult) => void;
  onStop: () => void;
  onContinue: () => void;
};

const Board = ({
  player1,
  player2,
  onRoundComplete,
  onStop,
  onContinue,
}: BoardProps) => {
  const { cells, placePiece, reset: resetCells } = useCells();

  const {
    winner,
    status,
    currentPlayer,
    nextPlayer,
    reset: resetRound,
  } = useRound({
    player1,
    player2,
    cells,
    onComplete: onRoundComplete,
  });

  const handleCellClick = (index: number): void => {
    if (!!winner) return;
    placePiece(currentPlayer.piece, index);
    nextPlayer();
  };

  const handleContinue = () => {
    resetCells();
    resetRound();
  };

  return (
    <div>
      {status === RoundStatus.ONGOING ? (
        <h1>
          {currentPlayer.user.name}'s Turn - {currentPlayer.piece}
        </h1>
      ) : (
        ''
      )}
      {status === RoundStatus.COMPLETED && winner ? (
        <h2>{winner.user.name} has won!</h2>
      ) : (
        ''
      )}
      {status === RoundStatus.COMPLETED && !winner ? <h2>It's a draw</h2> : ''}
      {status === RoundStatus.COMPLETED ? (
        <div className="p-2">
          <button className="btn btn-outline-primary" onClick={onStop}>
            Stop
          </button>
          <button className="btn btn-primary" onClick={() => handleContinue()}>
            Continue
          </button>
        </div>
      ) : (
        ''
      )}
      <BoardLayout>
        {cells.map((cell, index) => (
          <Cell
            key={index}
            value={cell}
            onCellClick={() => handleCellClick(index)}
          />
        ))}
      </BoardLayout>
    </div>
  );
};

export default Board;
