import './PageStates.css'

export function LoadingState() {
  return (
    <div className="page-state" role="status" aria-live="polite">
      <div className="skeleton skeleton--title" />
      <div className="page-state__tiles">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="skeleton skeleton--tile" />
        ))}
      </div>
      <div className="skeleton skeleton--card" />
      <div className="skeleton skeleton--card" />
      <span className="visually-hidden">Loading loan details…</span>
    </div>
  )
}

export function ErrorState({ message, onRetry }) {
  return (
    <div className="page-state-message" role="alert">
      <p className="page-state-message__title">Couldn't load this loan</p>
      <p className="page-state-message__body">
        {message || 'A network error occurred. Check your connection and try again.'}
      </p>
      <button className="btn btn--primary" onClick={onRetry}>Try again</button>
    </div>
  )
}

export function EmptyState() {
  return (
    <div className="page-state-message">
      <p className="page-state-message__title">No loan found</p>
      <p className="page-state-message__body">
        This loan record may have been removed or the link is out of date.
      </p>
    </div>
  )
}
