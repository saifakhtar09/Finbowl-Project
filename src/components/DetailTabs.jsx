import './DetailTabs.css'

export default function DetailTabs({ items, activeId, onSelect }) {
  return (
    <nav className="detail-tabs" aria-label="Loan detail sections">
      {items.map((item) => (
        <button
          key={item.id}
          className={`detail-tabs__item${item.id === activeId ? ' detail-tabs__item--active' : ''}`}
          onClick={() => onSelect(item.id)}
        >
          {item.label}
        </button>
      ))}
    </nav>
  )
}
