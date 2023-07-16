import { useState } from 'react';
import { BoardPiece } from '../types/BoardPiece';

const useCells = () => {
  const [cells, setCells] = useState(
    Array<BoardPiece>(9).fill(BoardPiece.EMPTY)
  );

  const placePiece = (piece: BoardPiece, index: number) => {
    setCells((cells) => Object.assign([], cells, { [index]: piece }));
  };

  return {
    cells,
    placePiece,
  };
};

export default useCells;
