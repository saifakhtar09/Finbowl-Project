import { Percent } from 'lucide-react'
import Section from '../Section'
import DataTable from '../DataTable'
import Badge from '../Badge'
import { formatMoney, formatPercent } from '../../utils/format'

export default function CommissionSection({ commission }) {
  const columns = [
    { key: 'party', label: 'Party Name (Used Code)' },
    { key: 'subCode', label: 'Sub-Code Commission (Net)%', render: (r) => formatPercent(r.subCode) },
    { key: 'gross', label: 'Gross Commission %', render: (r) => formatPercent(r.gross) },
    { key: 'amount', label: 'Commission Amount', render: (r) => <span className="amount-positive">{formatMoney(r.amount)}</span> },
    { key: 'invoiceNo', label: 'Invoice No', render: (r) => <span className="link-text">{r.invoiceNo}</span> },
    { key: 'invoiceStatus', label: 'Invoice Status', render: (r) => <Badge tone="positive">{r.invoiceStatus}</Badge> },
  ]

  return (
    <Section
      id="commission"
      icon={Percent}
      title="Commission"
      badge={<Badge tone="positive">Total Commission : {formatMoney(commission.total)}</Badge>}
    >
      <DataTable columns={columns} rows={commission.rows} getRowKey={(r) => r.invoiceNo} />
    </Section>
  )
}
