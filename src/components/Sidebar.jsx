import { useState } from 'react'
import Logo from '../assets/logo.png'
import SearchIcon from '../assets/icons/search.png'
import DashboardIcon from '../assets/icons/Dash.png'
import FinanceIcon from '../assets/icons/wallet.png'
import SalesCrmIcon from '../assets/icons/pie-chart-.png'
import RmsIcon from '../assets/icons/bank.png'
import RmsDashboardIcon from '../assets/icons/bar-chart.png'
import DisbursementIcon from '../assets/icons/coins-hand.png'
import InvoicesIcon from '../assets/icons/receipt-check.png'
import PoIcon from '../assets/icons/receipt.png'
import RmsReportsIcon from '../assets/icons/bar.png'
import ComplianceIcon from '../assets/icons/shield-tick.png'
import VendorsIcon from '../assets/icons/users.png'
import AiSuiteIcon from '../assets/icons/magic-wand.png'
import ReportsIcon from '../assets/icons/file.png'
import { ChevronDown } from 'lucide-react'
import './Sidebar.css'



const RMS_CHILDREN = [
  { label: 'Dashboard', icon: RmsDashboardIcon },
  { label: 'Disbursement', icon: DisbursementIcon, active: true },
  { label: 'Invoices', icon: InvoicesIcon },
  { label: 'PO', icon: PoIcon },
  { label: 'RMS Reports', icon: RmsReportsIcon },
]

const TOP_LEVEL = [
  { label: 'Dashboard', icon: DashboardIcon },
  { label: 'Finance', icon: FinanceIcon, hasChevron: true },
  { label: 'Sales CRM', icon: SalesCrmIcon, hasChevron: true },
]

const BOTTOM_LEVEL = [
  { label: 'Compliance', icon: ComplianceIcon, hasChevron: true },
  { label: 'Vendors', icon: VendorsIcon, hasChevron: true },
  { label: 'AI Suite', icon: AiSuiteIcon, hasChevron: true },
  { label: 'Reports', icon: ReportsIcon, hasChevron: true },
]

/** Renders an exported Figma icon as an <img>, sized by .sidebar__icon in CSS */
function NavIcon({ src }) {
  return <img src={src} alt="" role="presentation" className="sidebar__icon" />
}

export default function Sidebar() {
  const [rmsOpen, setRmsOpen] = useState(true)

  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <img src={Logo} alt="FinBowl" className="sidebar__logo" />
      </div>

      <div className="sidebar__divider" />

      <div className="sidebar__search">
        <NavIcon src={SearchIcon} />
        <span>Search</span>
      </div>

     <nav className="sidebar__nav" aria-label="Primary">
  {TOP_LEVEL.map(({ label, icon, hasChevron }, index) => (
    <div key={label}>
      <button className="sidebar__link">
        <NavIcon src={icon} />
        <span>{label}</span>
        {hasChevron && <ChevronDown size={15} className="sidebar__chevron" />}
      </button>
      {index === 0 && <div className="sidebar__divider" />}
    </div>
  ))}

        <div className="sidebar__group">
          <button
            className="sidebar__link sidebar__link--parent"
            onClick={() => setRmsOpen((v) => !v)}
            aria-expanded={rmsOpen}
          >
            <NavIcon src={RmsIcon} />
            <span>RMS</span>
            <ChevronDown
              size={15}
              className={`sidebar__chevron${rmsOpen ? ' sidebar__chevron--open' : ''}`}
            />
          </button>
          {rmsOpen && (
            <div className="sidebar__submenu">
              {RMS_CHILDREN.map(({ label, icon, active }) => (
                <button
                  key={label}
                  className={`sidebar__link sidebar__link--sub${active ? ' sidebar__link--active' : ''}`}
                  aria-current={active ? 'page' : undefined}
                >
                  <NavIcon src={icon} />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {BOTTOM_LEVEL.map(({ label, icon, hasChevron }) => (
          <button key={label} className="sidebar__link">
            <NavIcon src={icon} />
            <span>{label}</span>
            {hasChevron && <ChevronDown size={15} className="sidebar__chevron" />}
          </button>
        ))}
      </nav>

      <div className="sidebar__version">Version 1.0</div>
    </aside>
  )
}