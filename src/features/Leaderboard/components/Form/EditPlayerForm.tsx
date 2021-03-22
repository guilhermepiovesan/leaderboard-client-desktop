import React from 'react';
import PlayersForm from './PlayersForm';
import { BasePlayer, Player } from '../../models';
import { editPlayer } from '../../services';

type Props = {
  player: Player;
  onSubmit: () => void;
};

export default function EditPlayerForm({ player, onSubmit }: Props) {
  const handleForm = async ({ name, wins }: BasePlayer) => {
    await editPlayer({
      name,
      wins,
      id: player.id,
    });
    onSubmit();
  };

  return (
    <div className="leaderboard-player-form leaderboard-edit-player-form">
      <h2>Edit Player</h2>
      <PlayersForm
        player={player}
        handleForm={handleForm}
        submitLabel="Edit user"
      />
    </div>
  );
}
