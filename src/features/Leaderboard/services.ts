import axios, { AxiosResponse } from 'axios';
import { Player, BasePlayer, PlayerId } from './models';
import { API_HOST } from '../../api';

export const getAllPlayers = async () => {
  try {
    const result: AxiosResponse<Player[]> = await axios(
      `${API_HOST}/api/players`
    );

    return result.data;
  } catch (error) {
    console.error('Sorry! Error on loading players!');
    return [];
  }
};

export const addPlayer = async ({ name, wins }: BasePlayer): Promise<void> => {
  try {
    const result = await axios.post(`${API_HOST}/api/players`, { name, wins });

    return result.data;
  } catch (error) {
    console.error('Sorry! Error on adding player!');
  }
};

export const editPlayer = async ({ id, name, wins }: Player): Promise<void> => {
  try {
    const result = await axios.put(`${API_HOST}/api/players/${id}`, {
      name,
      wins,
    });

    return result.data;
  } catch (error) {
    console.error('Sorry! Error on updating player!');
  }
};

export const removePlayer = async (playerId: PlayerId): Promise<void> => {
  try {
    const result = await axios.delete(`${API_HOST}/api/players/${playerId}`);

    return result.data;
  } catch (error) {
    console.error('Sorry! Error on removing player!');
  }
};
