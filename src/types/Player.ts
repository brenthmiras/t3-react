import { BoardPiece } from './BoardPiece';
import { User } from './User';

export type Player = {
  user: User;
  piece: BoardPiece;
};
