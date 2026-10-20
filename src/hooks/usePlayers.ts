import { useState } from "react";

export const DEFAULT_COUNTER = 20;

export interface Player {
  id: string;
  name: string;
  counter: number;
}

const createInitialPlayers = (): Player[] => [
  { id: "1", name: "Player 1", counter: DEFAULT_COUNTER },
  { id: "2", name: "Player 2", counter: DEFAULT_COUNTER },
];

export const usePlayers = () => {
  const [players, setPlayers] = useState<Player[]>(createInitialPlayers);

  const addPlayer = (name?: string) => {
    const nextNumber = players.length + 1;
    const newPlayer: Player = {
      id: typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
      name: name && name.trim() ? name : `Player ${nextNumber}`,
      counter: DEFAULT_COUNTER,
    };
    setPlayers((prevPlayers) => [...prevPlayers, newPlayer]);
  };

  const removePlayer = (id: string) => {
    setPlayers((prevPlayers) => prevPlayers.filter((player) => player.id !== id));
  };

  const updatePlayerName = (id: string, name: string) => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) =>
        player.id === id ? { ...player, name } : player
      )
    );
  };

  const updateCounter = (id: string, counter: number) => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) =>
        player.id === id ? { ...player, counter } : player
      )
    );
  };

  const increaseCounter = (playerOrId: Player | string) => {
    const id = typeof playerOrId === "string" ? playerOrId : playerOrId.id;
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) =>
        player.id === id ? { ...player, counter: player.counter + 1 } : player
      )
    );
  };

  const decreaseCounter = (playerOrId: Player | string) => {
    const id = typeof playerOrId === "string" ? playerOrId : playerOrId.id;
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) => {
        if (player.id === id) {
          return {
            ...player,
            counter: player.counter > 0 ? player.counter - 1 : 0,
          };
        }
        return player;
      })
    );
  };

  const resetPlayerCounter = () => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) => ({
        ...player,
        counter: DEFAULT_COUNTER,
      }))
    );
  };

  const resetPlayers = () => {
    setPlayers(createInitialPlayers());
  };

  const haveTwoOrMorePlayers = players.length > 2;

  return {
    players,
    addPlayer,
    removePlayer,
    updatePlayerName,
    updateCounter,
    increaseCounter,
    decreaseCounter,
    resetPlayers,
    resetPlayerCounter,
    haveTwoOrMorePlayers,
  };
};

export default usePlayers;
