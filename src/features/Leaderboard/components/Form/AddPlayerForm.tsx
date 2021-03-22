import React from 'react';
import PlayersForm from './PlayersForm';
import { BasePlayer } from '../../models';
import { addPlayer } from '../../services';

type Props = {
  onSubmit: () => void;
};

export default function AddPlayerForm({ onSubmit }: Props) {
  const handleForm = async ({ name, wins }: BasePlayer) => {
    await addPlayer({ name, wins });
    onSubmit();
  };

  return (
    <div className="leaderboard-player-form leaderboard-add-player-form">
      <h2>Add Player</h2>
      <PlayersForm handleForm={handleForm} submitLabel="Add new user" />
    </div>
  );
}
