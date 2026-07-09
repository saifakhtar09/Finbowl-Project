import { useState } from 'react'
import './SummaryTiles.css'

const formatCurrency = (value) =>
  '₹' + value.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

export default function SummaryTiles({ tiles }) {
  const [visible, setVisible] = useState(true)

  return (
    <div className="summary-tiles-wrap">
      <div className="summary-tiles-wrap__toggle-row">
        <button
          className={`toggle${visible ? ' toggle--on' : ''}`}
          onClick={() => setVisible((v) => !v)}
          role="switch"
          aria-checked={visible}
        >
          <span className="toggle__knob" />
        </button>
        <span className="summary-tiles-wrap__toggle-label">Summary Tiles</span>
      </div>

      {visible && (
        <div className="summary-tiles">
          {tiles.map((tile) => (
            <div
              key={tile.label}
              className={`summary-tile${tile.highlight ? ' summary-tile--highlight' : ''}`}
            >
              <p className="summary-tile__label">{tile.label}</p>
              <p className={`summary-tile__value${tile.highlight ? ' summary-tile__value--highlight' : ''}`}>
                {formatCurrency(tile.value)}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
