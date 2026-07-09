// ===== PageHeader.jsx =====
import { Archive, History, SquarePen } from 'lucide-react'
import { ChevronRight } from "lucide-react";
import './PageHeader.css'

export default function PageHeader({ loanId, breadcrumb }) {
  return (
    <div className="page-header">
      <div className="page-header__top">
        <div>
          <h1 className="page-header__title">Loan - {loanId}</h1>
          <nav className="page-header__breadcrumb" aria-label="Breadcrumb">
  {breadcrumb.map((crumb, i) => (
    <span className="page-header__crumb" key={crumb}>
      <span
        className={
          i === breadcrumb.length - 1
            ? "page-header__crumb--current"
            : "page-header__crumb-text"
        }
      >
        {crumb}
      </span>

      {i < breadcrumb.length - 1 && (
        <ChevronRight
          className="page-header__crumb-sep"
          size={16}
          strokeWidth={1.8}
        />
      )}
    </span>
  ))}
</nav>
        </div>

        <div className="page-header__actions">
  <button className="btn btn--ghost btn--archive">
    <Archive size={16} strokeWidth={1.8} />
    Archive
  </button>

  <button className="btn btn--ghost btn--activity">
    <History size={16} strokeWidth={1.8} />
    Activity Logs
  </button>

  <button className="btn btn--primary">
    <SquarePen size={16} strokeWidth={2} />
    Edit Loan
  </button>
</div>
      </div>
    </div>
  )
}