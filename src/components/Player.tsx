import type { Player as PlayerType } from "../hooks/usePlayers";

export interface PlayerProps {
  player: PlayerType;
  onIncreaseCounter: () => void;
  onDecreaseCounter: () => void;
  onDeletePlayer: () => void;
  onUpdateName?: (name: string) => void;
  playerLabel?: string;
  showDeleteButton?: boolean;
}

function Player({
  player,
  onDecreaseCounter,
  onIncreaseCounter,
  onDeletePlayer,
  onUpdateName,
  playerLabel = "Player",
  showDeleteButton = true,
}: PlayerProps) {
  return (
    <div className="player-card">
      <div className="player-card-header">
        <span className="player-badge">{playerLabel}</span>
        {showDeleteButton && (
          <button
            onClick={onDeletePlayer}
            className="btn-delete"
            title="Eliminar este jugador"
            aria-label="Eliminar jugador"
          >
            ✕ Eliminar
          </button>
        )}
      </div>

      <div className="player-name-container">
        <label htmlFor={`player-name-${player.id}`} className="player-name-label">
          Nombre del jugador:
        </label>
        <input
          id={`player-name-${player.id}`}
          type="text"
          value={player.name}
          onChange={(e) => onUpdateName?.(e.target.value)}
          placeholder="Escribe el nombre..."
          className="player-name-input"
        />
      </div>

      <div className="counter-box">
        <div className="counter-number">{player.counter}</div>
        <div className="counter-tag">Puntos / Vidas</div>
      </div>

      <div className="counter-actions">
        <button
          onClick={onDecreaseCounter}
          className="btn-step btn-minus"
          title="Disminuir 1 punto"
          aria-label="Disminuir"
        >
          −
        </button>
        <button
          onClick={onIncreaseCounter}
          className="btn-step btn-plus"
          title="Aumentar 1 punto"
          aria-label="Aumentar"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Player;
