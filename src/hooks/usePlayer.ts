import { v4 as uuidv4 } from 'uuid';
import { BoardPiece } from '../types/BoardPiece';
import { Player } from '../types/Player';
import { useMemo } from 'react';

const usePlayer = (name: string, piece: BoardPiece): Player => {
  const user = useMemo(() => {
    return {
      id: uuidv4(),
      name,
    };
  }, [name]);

  return {
    user,
    piece,
  };
};

export default usePlayer;
