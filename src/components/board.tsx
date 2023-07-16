import { useCallback, useEffect, useState } from 'react';
import BoardLayout from '../styled-components/BoardLayout';
import Cell from './cell';
import { BoardPiece } from '../types/BoardPiece';
import { calculateWinner } from '../helper';
import useRound from '../hooks/useRound';
import useCells from '../hooks/useCells';

type BoardProps = {
  player1: string;
  player2: string;
};

const Board = ({ player1, player2 }: BoardProps) => {
  const { cells, placePiece } = useCells();

  const { winner, currentPlayer, nextPlayer } = useRound(
    player1,
    player2,
    cells
  );

  const handleCellClick = (index: number): void => {
    if (!!winner) return;
    placePiece(currentPlayer.piece, index);
    nextPlayer();
  };

  return (
    <>
      {winner ? (
        <h2>{winner.user.name} has won!</h2>
      ) : (
        <h2>{currentPlayer.user.name}'s Turn</h2>
      )}
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
    </>
  );
};

export default Board;
