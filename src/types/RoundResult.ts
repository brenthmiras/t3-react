import { BoardPiece } from './BoardPiece';
import { Player } from './Player';
import { RoundStatus } from './RoundStatus';

export type RoundResult = {
  player1: Player;
  player2: Player;
  winner?: BoardPiece;
  status: RoundStatus;
};
