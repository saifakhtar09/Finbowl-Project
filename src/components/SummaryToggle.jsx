import './SummaryToggle.css'

export default function SummaryToggle({ checked, onChange }) {
  return (
    <div className="summary-toggle">
      <button
        className={`toggle${checked ? ' toggle--on' : ''}`}
        onClick={onChange}
        role="switch"
        aria-checked={checked}
      >
        <span className="toggle__knob" />
      </button>
      <span className="summary-toggle__label">Summary Tiles</span>
    </div>
  )
}