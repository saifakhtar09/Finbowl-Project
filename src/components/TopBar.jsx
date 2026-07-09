import { Building2, ChevronDown, Bell } from "lucide-react";
import CompanyIcon1 from "../assets/icons/Iconn.png";
import CompanyIcon2 from "../assets/icons/icon.png";

import "./TopBar.css";

export default function TopBar() {
  return (
    <header className="topbar">
    <div className="topbar__orgs">
  <button className="topbar__org-pill">
    <img
      src={CompanyIcon1}
      alt="Company"
      className="topbar__company-icon"
    />

    <span className="topbar__org-name">
      Gracia Advisory Group
    </span>

    <ChevronDown size={16} strokeWidth={1.8} />
  </button>

  <button className="topbar__org-pill">
    <img
      src={CompanyIcon2}
      alt="Company"
      className="topbar__company-icon"
    />

    <span className="topbar__org-name">
      ABC Advisory Group
    </span>

    <ChevronDown size={16} strokeWidth={1.8} />
  </button>
</div>
      <div className="topbar__actions">
        <button className="topbar__icon-btn" aria-label="Notifications">
          <Bell size={18} strokeWidth={1.8} />
          <span className="topbar__badge">2</span>
        </button>

        <div className="topbar__avatar">
          <img
            src="src/assets/Avatar.png"
            alt="Profile"
          />
        </div>
      </div>
    </header>
  );
}