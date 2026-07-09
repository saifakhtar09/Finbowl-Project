import { useState } from 'react'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import PageHeader from './components/PageHeader'
import ApplicantSummary from './components/ApplicantSummary'
import SummaryTiles from './components/SummaryTiles'
import DetailTabs from './components/DetailTabs'
import { LoadingState, ErrorState, EmptyState } from './components/PageStates'
import ApplicantInfoSection from './components/sections/ApplicantInfoSection'
import LoanDetailsSection from './components/sections/LoanDetailsSection'
import DisbursementsSection from './components/sections/DisbursementsSection'
import CommissionSection from './components/sections/CommissionSection'
import BrokerInfoSection from './components/sections/BrokerInfoSection'
import NotesSection from './components/sections/NotesSection'
import DocumentsSection from './components/sections/DocumentsSection'
import { useLoan } from './hooks/useLoan'
import './App.css'

const TAB_ITEMS = [
  { id: 'applicant-information', label: 'Applicant Information' },
  { id: 'loan-details', label: 'Loan Details' },
  { id: 'disbursements-information', label: 'Disbursements Information' },
  { id: 'commission', label: 'Commission' },
  { id: 'broker-information', label: 'Broker Infromation' },
  { id: 'additional-information', label: 'Additional Information' },
]

export default function App() {
  const { status, loan, error, reload } = useLoan('2026-04892')
  const [activeTab, setActiveTab] = useState('applicant-information')

  const handleTabSelect = (id) => {
    setActiveTab(id)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="app-shell">
      <Sidebar />
      <div className="app-main">
        <TopBar />
        <div className="app-content">
          {status === 'loading' && <LoadingState />}
          {status === 'error' && <ErrorState message={error} onRetry={reload} />}
          {status === 'empty' && <EmptyState />}

          {status === 'success' && (
            <>
              {/* Breadcrumb + title + action buttons — sits OUTSIDE the card */}
              <PageHeader loanId={loan.id} breadcrumb={loan.breadcrumb} />

              {/* Everything below — applicant name, tiles, tabs, sections —
                  lives inside ONE bordered, rounded-corner card per Figma */}
              <div className="loan-panel">
                <ApplicantSummary
                  applicantName={loan.applicantName}
                  status={loan.status}
                  loanTypeLabel={loan.loanTypeLabel}
                />
                <SummaryTiles tiles={loan.summary} />

                <div className="app-content__body">
                  <DetailTabs items={TAB_ITEMS} activeId={activeTab} onSelect={handleTabSelect} />
                  <div className="app-content__sections">
                    <ApplicantInfoSection applicants={loan.applicants} />
                    <LoanDetailsSection details={loan.loanDetails} />
                    <DisbursementsSection disbursements={loan.disbursements} />
                    <CommissionSection commission={loan.commission} />
                    <BrokerInfoSection broker={loan.broker} />
                    <NotesSection notes={loan.notes} />
                    <DocumentsSection documents={loan.documents} />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}