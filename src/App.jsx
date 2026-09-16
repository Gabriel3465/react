import { useState } from 'react'
import './App.css'

function App() {
  const [life1, setLife1] = useState(20)
  const [life2, setLife2] = useState(20)

  const handleReset = () => {
    // Se utiliza confirm (un tipo de alert de validación) para preguntar al usuario
    const confirmar = confirm("¿Estás seguro de que quieres reiniciar la partida? Las vidas volverán a 20.")
    if (confirmar) {
      setLife1(20)
      setLife2(20)
    }
  }

  return (
    <div style={{ padding: '2rem', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>MTG Life Counter</h1>
      
      <div style={{ display: 'flex', justifyContent: 'space-around', margin: '2rem 0' }}>
        {/* Jugador 1 */}
        <div>
          <h2>Jugador 1</h2>
          <h3 style={{ fontSize: '3rem', margin: '1rem 0' }}>{life1}</h3>
          <div>
            <button 
              onClick={() => setLife1(prev => Math.max(0, prev - 1))}
              style={{ padding: '0.5rem 1rem', fontSize: '1.5rem', marginRight: '0.5rem' }}
            >
              -1
            </button>
            <button 
              onClick={() => setLife1(prev => prev + 1)}
              style={{ padding: '0.5rem 1rem', fontSize: '1.5rem' }}
            >
              +1
            </button>
          </div>
        </div>

        {/* Jugador 2 */}
        <div>
          <h2>Jugador 2</h2>
          <h3 style={{ fontSize: '3rem', margin: '1rem 0' }}>{life2}</h3>
          <div>
            <button 
              onClick={() => setLife2(prev => Math.max(0, prev - 1))}
              style={{ padding: '0.5rem 1rem', fontSize: '1.5rem', marginRight: '0.5rem' }}
            >
              -1
            </button>
            <button 
              onClick={() => setLife2(prev => prev + 1)}
              style={{ padding: '0.5rem 1rem', fontSize: '1.5rem' }}
            >
              +1
            </button>
          </div>
        </div>
      </div>

      <button 
        onClick={handleReset} 
        style={{ padding: '0.75rem 2rem', fontSize: '1.2rem', backgroundColor: '#e74c3c', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        Reiniciar
      </button>
    </div>
  )
}

export default App
