import React, { useState, FormEvent, Dispatch, ChangeEvent } from 'react';
import { Player, BasePlayer } from '../../models';

type Props = {
  player?: Player;
  handleForm: Dispatch<BasePlayer>;
  submitLabel: string;
};

export default function PlayersForm({
  player,
  handleForm,
  submitLabel,
}: Props) {
  const [name, setName] = useState<string>(player?.name || '');
  const [wins, setWins] = useState<number>(player?.wins || 0);
  const [isError, setIsError] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      setIsError(false);
      handleForm({
        name,
        wins,
      });
    } catch (error) {
      setIsError(true);
    }
  };

  const onChangeWins = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value !== '' ? parseInt(e.target.value, 10) : 0;

    setWins(value);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="field">
        <label htmlFor="wins">Wins</label>
        <input
          type="number"
          name="wins"
          id="wins"
          required
          value={wins}
          onChange={onChangeWins}
        />
      </div>
      <button type="submit">{submitLabel}</button>

      {isError && <p>Error on submiting</p>}
    </form>
  );
}
