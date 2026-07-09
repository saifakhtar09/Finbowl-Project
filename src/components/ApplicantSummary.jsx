import Badge from './Badge'
import './ApplicantSummary.css'

export default function ApplicantSummary({ applicantName, status, loanTypeLabel }) {
  return (
    <div className="applicant-summary">
      <div className="applicant-summary__row">
        <h2 className="applicant-summary__name">{applicantName}</h2>
        <Badge tone="warning" dot>{status}</Badge>
      </div>
      <p className="applicant-summary__subtitle">{loanTypeLabel}</p>
    </div>
  )
}