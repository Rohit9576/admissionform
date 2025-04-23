import React from 'react'
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar" role="navigation" aria-label="Sidebar navigation">
          <div className="sidebar-header">
            <img
              src="https://storage.googleapis.com/a1aa/image/58b810a6-00b2-4d4c-1acd-e65a2d69003b.jpg"
              alt="ERP logo, blue background with white text ERP"
              width="32"
              height="32"
              loading="lazy"
            />
            <span>ERP</span>
          </div>
          <nav className="sidebar-nav" aria-label="Main menu">
            <a href="#" className="active" aria-current="page">
              <i className="fas fa-tachometer-alt" aria-hidden="true"></i>
              <span>Dashboard</span>
            </a>
            <button type="button" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-exchange-alt" aria-hidden="true"></i>
              <span>Transaction</span>
              <i className="fas fa-chevron-left" style={{ marginLeft: "auto", fontSize: "0.75rem" }} aria-hidden="true"></i>
            </button>
            <a href="#">
              <i className="fas fa-file-alt" aria-hidden="true"></i>
              <span>Reports</span>
            </a>
            <button type="button" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-cubes" aria-hidden="true"></i>
              <span>Master</span>
              <i className="fas fa-chevron-left" style={{ marginLeft: "auto", fontSize: "0.75rem" }} aria-hidden="true"></i>
            </button>
            <button type="button" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-wrench" aria-hidden="true"></i>
              <span>Settings</span>
              <i className="fas fa-chevron-left" style={{ marginLeft: "auto", fontSize: "0.75rem" }} aria-hidden="true"></i>
            </button>
          </nav>
          <div className="sidebar-footer" aria-label="User info">
            <div>210475</div>
            <div>[HQ]</div>
            <div style={{ marginTop: 4, fontSize: "0.75rem" }}>01-Apr-2023 - 31-Mar-2026</div>
            <div style={{ marginTop: 4, fontWeight: "600" }}>Admin</div>
          </div>
          <div className="support-center" role="button" tabIndex="0" aria-label="Support Center">
            <i className="fas fa-headset" aria-hidden="true"></i>
            <span>Support Center</span>
          </div>
        </aside>
  )
}

export default Sidebar