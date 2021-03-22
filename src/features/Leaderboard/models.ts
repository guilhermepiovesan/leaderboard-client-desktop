export type PlayerId = string;

export interface BasePlayer {
  name: string;
  wins: number;
}

export interface Player extends BasePlayer {
  id: PlayerId;
}

export interface Players {
  [key: string]: Player;
}
