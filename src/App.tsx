import Player from "./components/Player";
import usePlayers from "./hooks/usePlayers";
import "./App.css";

function App() {
  const {
    players,
    addPlayer,
    removePlayer,
    increaseCounter,
    decreaseCounter,
    resetPlayers,
    resetPlayerCounter,
    updatePlayerName,
    haveTwoOrMorePlayers,
  } = usePlayers();

  const handleOnAddPlayerClick = () => {
    addPlayer();
  };

  const handleOnResetPlayersClick = () => {
    resetPlayers();
  };

  const handleOnResetClick = () => {
    resetPlayerCounter();
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">🎮 Marcador de Jugadores</h1>
        <p className="app-subtitle">
          {players.length} {players.length === 1 ? "jugador en partida" : "jugadores en partida"}
        </p>
      </header>

      <div className="controls-panel">
        <button
          onClick={handleOnAddPlayerClick}
          className="btn-main btn-add"
        >
          ➕ Agregar Jugador
        </button>

        <button
          onClick={handleOnResetClick}
          className="btn-main btn-reset-counter"
        >
          🔄 Reiniciar Vidas (20)
        </button>

        <button
          onClick={handleOnResetPlayersClick}
          className="btn-main btn-reset-players"
        >
          👥 Volver a 2 Jugadores
        </button>
      </div>

      <div className="players-grid">
        {players.map((player, index) => (
          <Player
            key={player.id}
            player={player}
            onIncreaseCounter={() => increaseCounter(player)}
            onDecreaseCounter={() => decreaseCounter(player)}
            onDeletePlayer={() => removePlayer(player.id)}
            onUpdateName={(name) => updatePlayerName(player.id, name)}
            playerLabel={`Jugador ${index + 1}`}
            showDeleteButton={haveTwoOrMorePlayers}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
