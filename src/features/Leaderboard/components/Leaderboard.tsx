import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddPlayerForm from './Form/AddPlayerForm';
import EditPlayerForm from './Form/EditPlayerForm';
import LeaderboardList from './LeaderboardList';
import LeaderboardHeader from './LeaderboardHeader';
import { Player, PlayerId } from '../models';
import { getAllPlayers, removePlayer } from '../services';

export default function Leaderboard() {
  const [loading, setLoading] = useState(false);
  const [players, setPlayers] = useState<Player[]>([]);
  const [isAddingPlayer, setIsAddingPlayer] = useState(false);
  const [playerToEdit, setPlayerToEdit] = useState<Player | null>(null);

  const fetchData = async () => {
    setLoading(true);

    const allPlayers = await getAllPlayers();

    setPlayers(allPlayers);
    setLoading(false);
  };

  const refreshPlayersData = () => {
    fetchData();
    setIsAddingPlayer(false);
    setPlayerToEdit(null);
  };

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    fetchData();

    return () => {
      source.cancel();
    };
  }, []);

  const onEditPlayer = (player: Player) => {
    setPlayerToEdit(player);
  };

  const onRemovePlayer = (playerId: PlayerId) => {
    removePlayer(playerId);
    refreshPlayersData();
  };

  return (
    <main className="app">
      <LeaderboardHeader>
        <button
          type="button"
          disabled={loading}
          onClick={() => setIsAddingPlayer(true)}
        >
          Add new
        </button>
      </LeaderboardHeader>

      {loading ? (
        <p>Loading</p>
      ) : (
        <section className="leaderboard">
          <div className="leaderboard-form">
            {isAddingPlayer && <AddPlayerForm onSubmit={refreshPlayersData} />}
            {playerToEdit !== null && (
              <EditPlayerForm
                player={playerToEdit}
                onSubmit={refreshPlayersData}
              />
            )}
          </div>

          <LeaderboardList
            players={players}
            onEdit={onEditPlayer}
            onRemove={onRemovePlayer}
          />
        </section>
      )}
    </main>
  );
}
