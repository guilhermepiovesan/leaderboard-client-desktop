import React, { Dispatch } from 'react';
import { Player, PlayerId } from '../models';

type Props = {
  players: Player[];
  onEdit: Dispatch<Player>;
  onRemove: Dispatch<PlayerId>;
};

export default function LeaderboardList({ players, onEdit, onRemove }: Props) {
  if (!players || players.length === 0) {
    return null;
  }

  return (
    <ul className="leaderboard-list">
      {players.map((player) => (
        <li className="leaderboard-item" key={player.id}>
          <span>{player.wins} wins</span>
          <span>{player.name}</span>
          <span className="leaderboard-item-actions">
            <button type="button" onClick={() => onEdit(player)}>
              Edit
            </button>
            <button type="button" onClick={() => onRemove(player.id)}>
              Remove
            </button>
          </span>
        </li>
      ))}
    </ul>
  );
}
