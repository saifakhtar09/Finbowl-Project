import { Share2 as BrokerIcon } from 'lucide-react'
import Section from '../Section'
import DataTable from '../DataTable'
import Badge from '../Badge'
import { formatMoney, formatPercent } from '../../utils/format'

export default function BrokerInfoSection({ broker }) {
  const columns = [
    {
      key: 'name',
      label: 'Broker Name / Code',
      render: (r) => (
        <div>
          <div>{r.name}</div>
          <div className="broker-code-row">
            <span className="broker-code">{r.code}</span>
            <Badge tone={r.tag === 'Aggregator' ? 'info' : 'neutral'}>{r.tag}</Badge>
          </div>
        </div>
      ),
    },
    { key: 'commissionPct', label: 'Broker Commission %', render: (r) => formatPercent(r.commissionPct) },
    { key: 'referralFee', label: 'Referral Fee', render: (r) => formatMoney(r.referralFee) },
    {
      key: 'poNo',
      label: 'PO No & Date',
      render: (r) => (
        <span>
          <span className="link-text">{r.poNo}</span>{' '}
          <span className="broker-po-date">{r.poDate}</span>
        </span>
      ),
    },
    { key: 'poStatus', label: 'PO Status', render: (r) => <Badge tone="positive">{r.poStatus}</Badge> },
  ]

  return (
    <Section
      id="broker-information"
      icon={BrokerIcon}
      title="Broker Infromation"
      badge={<Badge tone="negative">Total Referral Fee: {formatMoney(broker.totalReferralFee).replace('.00', '')}</Badge>}
    >
      <DataTable columns={columns} rows={broker.rows} getRowKey={(r, i) => r.poNo + i} />
    </Section>
  )
}
