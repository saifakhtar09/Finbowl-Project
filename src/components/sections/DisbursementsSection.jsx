import { Share2 } from 'lucide-react'
import Section from '../Section'
import DataTable from '../DataTable'
import Badge from '../Badge'
import { formatMoney } from '../../utils/format'

export default function DisbursementsSection({ disbursements }) {
  const columns = [
    { key: 'id', label: 'Disbursement ID' },
    { key: 'date', label: 'Disbursement Date' },
    {
      key: 'amount',
      label: 'Disbursement Amount',
      render: (row) => (
        <span className={row.mismatch ? 'amount-mismatch' : 'amount-positive'}>
          {formatMoney(row.amount)}
        </span>
      ),
    },
    {
      key: 'verifiedAmount',
      label: 'Verified Disbursement Amount',
      render: (row) => (
        <span className={row.mismatch ? 'amount-mismatch' : 'amount-positive'}>
          {formatMoney(row.verifiedAmount)}
        </span>
      ),
    },
    { key: 'utr', label: 'UTR Number' },
    { key: 'tranche', label: 'Tranche' },
    {
      key: 'status',
      label: 'Disbursement Status',
      render: (row) => <Badge tone="warning">{row.status}</Badge>,
    },
  ]

  return (
    <Section id="disbursements-information" icon={Share2} title="Disbursements Information">
      <DataTable columns={columns} rows={disbursements} getRowKey={(r) => r.utr} />
    </Section>
  )
}
