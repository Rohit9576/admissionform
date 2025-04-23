import React from 'react'
import './Tabs.css';

const Tabs = () => {
  const tabs = [
    { id: "main", label: "MAIN" },
    { id: "parental", label: "PARENTAL." },
    { id: "previous", label: "PREVIOUS SCHOOL" },
    { id: "photo", label: "PHOTO" },
    { id: "transport", label: "TRANSPORT" },
    { id: "hostel", label: "HOSTEL" },
    { id: "library", label: "LIBRARY" },
  ];
  const activeTab = "main";
  return (
    <div>
      <div className="buttons">
        <button type="submit" className="save-btn">
          Save
        </button>
        <button type="button" className="cancel-btn">
          Cancel
        </button>
      </div >

      <nav className="tabs" role="tablist" aria-label="Student form sections">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            tabIndex={activeTab === tab.id ? 0 : -1}
            className={activeTab === tab.id ? "active" : ""}
            type="button"
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  )
}

export default Tabs