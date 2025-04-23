import React from 'react';
import './Topbar.css';

const Topbar = () => {
  return (
    <header className="topbar" role="banner">
    <button aria-label="Menu" className="menu-btn" type="button">
      <i className="fas fa-bars" aria-hidden="true"></i>
    </button>
    <input
      type="search"
      className="search"
      placeholder="search student by name/regno"
      aria-label="Search student by name or registration number"
    />
    <img
      src="https://storage.googleapis.com/a1aa/image/5b42ecd9-e858-47a9-e88a-be7f96e4f923.jpg"
      alt="User profile icon with blue background and white shield shape"
      className="profile-icon"
      width="32"
      height="32"
      loading="lazy"
    />
  </header>
  )
}

export default Topbar