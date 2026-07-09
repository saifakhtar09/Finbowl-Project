// ===== ApplicantInfoSection.jsx =====
import { Users } from 'lucide-react'
import Section from '../Section'
import DataTable from '../DataTable'
import Badge from '../Badge'

const columns = [
  {
    key: 'name',
    label: 'Name',
    render: (row) => <span className="link-text">{row.name}</span>,
  },
  {
    key: 'type',
    label: 'Type',
    render: (row) => (
      <Badge tone={row.type === 'Applicant' ? 'success' : 'neutral'}>{row.type}</Badge>
    ),
  },
  {
    key: 'email',
    label: 'Email ID',
    render: (row) => <span className="link-text">{row.email}</span>,
  },
  { key: 'phone', label: 'Phone Number' },
]

export default function ApplicantInfoSection({ applicants }) {
  return (
    <Section id="applicant-information" icon={Users} title="Applicant Information">
      <DataTable columns={columns} rows={applicants} getRowKey={(r) => r.email} />
    </Section>
  )
}