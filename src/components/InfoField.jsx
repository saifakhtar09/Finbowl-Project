import './InfoField.css'

export default function InfoField({ label, value, valueClass }) {
  return (
    <div className="info-field">
      <p className="info-field__label">{label}</p>
      <p className={`info-field__value${valueClass ? ' ' + valueClass : ''}`}>{value}</p>
    </div>
  )
}
