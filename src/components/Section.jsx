import { useState } from 'react'
import { ChevronUp } from 'lucide-react'
import './Section.css'

export default function Section({ id, icon: Icon, title, badge, children }) {
  const [open, setOpen] = useState(true)

  return (
    <section id={id} className="section-card">
      <button
        className="section-card__header"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="section-card__title-group">
          <span className="section-card__title">
            {Icon && <Icon size={16} strokeWidth={1.8} />}
            {title}
          </span>
          {badge}
        </span>
        <ChevronUp
          size={16}
          className={`section-card__chevron${open ? '' : ' section-card__chevron--closed'}`}
        />
      </button>
      {open && <div className="section-card__body">{children}</div>}
    </section>
  )
}