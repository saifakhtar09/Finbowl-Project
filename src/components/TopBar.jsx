import { ChevronDown, Bell, Menu } from "lucide-react";
import CompanyIcon1 from "../assets/icons/Iconn.png";
import CompanyIcon2 from "../assets/icons/icon.png";
import AvatarImg from "../assets/icons/Avatar.png";

import "./TopBar.css";

export default function TopBar({ onMenuClick }) {
  return (
    <header className="topbar">
      <button className="topbar__menu-btn" onClick={onMenuClick} aria-label="Open menu">
        <Menu size={22} strokeWidth={1.8} />
      </button>

      <div className="topbar__orgs">
        <button className="topbar__org-pill">
          <img src={CompanyIcon1} alt="Company" className="topbar__company-icon" />
          <span className="topbar__org-name">Gracia Advisory Group</span>
          <ChevronDown size={16} strokeWidth={1.8} />
        </button>

        <button className="topbar__org-pill">
          <img src={CompanyIcon2} alt="Company" className="topbar__company-icon" />
          <span className="topbar__org-name">ABC Advisory Group</span>
          <ChevronDown size={16} strokeWidth={1.8} />
        </button>
      </div>
      <div className="topbar__actions">
        <button className="topbar__icon-btn" aria-label="Notifications">
          <Bell size={18} strokeWidth={1.8} />
          <span className="topbar__badge">2</span>
        </button>

        <div className="topbar__avatar">
          <img src={AvatarImg} alt="Profile" />
        </div>
      </div>
    </header>
  );
}