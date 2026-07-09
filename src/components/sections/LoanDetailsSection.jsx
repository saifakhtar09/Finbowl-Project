import { FileText } from 'lucide-react'
import Section from '../Section'
import Badge from '../Badge'
import InfoField from '../InfoField'
import { formatMoney } from '../../utils/format'
import './LoanDetailsSection.css'

export default function LoanDetailsSection({ details }) {
  return (
    <Section id="loan-details" icon={FileText} title="Loan Details">
      <div className="loan-details-grid">
        <InfoField label="Loan ID" value={details.loanId} />
        <InfoField label="Loan Type" value={<Badge tone="accent">{details.loanType}</Badge>} />
        <InfoField label="Bank" value={details.bank} />
        <InfoField label="Stage" value={details.stage} />
      </div>

      <p className="loan-details-subheading">Sanction Details:</p>
      <div className="loan-details-grid">
        <InfoField label="Sanctioned Date" value={details.sanctionedDate} />
        <InfoField
          label="Loan Sanctioned Amount"
          value={formatMoney(details.sanctionedAmount)}
          valueClass="info-field__value--positive"
        />
        <InfoField
          label="Verified Sanctioned Amount"
          value={formatMoney(details.verifiedSanctionedAmount)}
          valueClass="info-field__value--positive"
        />
      </div>

      <p className="loan-details-subheading">Team Details:</p>
      <div className="loan-details-grid">
        <InfoField label="Bank Executive Name" value={details.bankExecutive} />
        <InfoField label="Credit Executive Details" value={details.creditExecutive} />
        <InfoField label="Source" value={details.source} />
      </div>
    </Section>
  )
}
