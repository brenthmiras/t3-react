import { useState } from 'react';
import BoardLayout from '../styled-components/BoardLayout';
import Cell from './cell';

const Board = () => {
  const handleCellClick = (index: number): void => {
    alert('Clicked ' + index);
  };

  return (
    <BoardLayout>
      <Cell onCellClick={() => handleCellClick(0)} />
      <Cell onCellClick={() => handleCellClick(1)} />
      <Cell onCellClick={() => handleCellClick(2)} />
      <Cell onCellClick={() => handleCellClick(3)} />
      <Cell onCellClick={() => handleCellClick(4)} />
      <Cell onCellClick={() => handleCellClick(5)} />
      <Cell onCellClick={() => handleCellClick(6)} />
      <Cell onCellClick={() => handleCellClick(7)} />
      <Cell onCellClick={() => handleCellClick(8)} />
    </BoardLayout>
  );
};

export default Board;
