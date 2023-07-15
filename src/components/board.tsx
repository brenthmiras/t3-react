import { useEffect, useState } from 'react';
import BoardLayout from '../styled-components/BoardLayout';
import Cell from './cell';
import { BoardPiece } from '../types/BoardPiece';

type BoardProps = {
  player1: string;
  player2: string;
};

const Board = ({ player1, player2 }: BoardProps) => {
  const [cells, setCells] = useState<string[]>(Array<string>(9).fill(''));
  const [nextPiece, setNextPiece] = useState(BoardPiece.X);

  const handleCellClick = (index: number): void => {
    setCells((cells) => {
      return Object.assign([], cells, { [index]: nextPiece });
    });

    setNextPiece((currentPiece) =>
      currentPiece === BoardPiece.X ? BoardPiece.O : BoardPiece.X
    );
  };

  return (
    <BoardLayout>
      <Cell value={cells[0]} onCellClick={() => handleCellClick(0)} />
      <Cell value={cells[1]} onCellClick={() => handleCellClick(1)} />
      <Cell value={cells[2]} onCellClick={() => handleCellClick(2)} />
      <Cell value={cells[3]} onCellClick={() => handleCellClick(3)} />
      <Cell value={cells[4]} onCellClick={() => handleCellClick(4)} />
      <Cell value={cells[5]} onCellClick={() => handleCellClick(5)} />
      <Cell value={cells[6]} onCellClick={() => handleCellClick(6)} />
      <Cell value={cells[7]} onCellClick={() => handleCellClick(7)} />
      <Cell value={cells[8]} onCellClick={() => handleCellClick(8)} />
    </BoardLayout>
  );
};

export default Board;
