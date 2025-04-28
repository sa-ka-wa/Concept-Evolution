import React from "react";

function Navbar({ selectedPhase, onPhaseChange }) {
  return (
    <nav className="navbar">
      <h1>SketchBoard Evolution Tracker</h1>

      <div className="filter">
        <label htmlFor="phase-select">Filter by Phase:</label>
        <select
          id="phase-select"
          value={selectedPhase}
          onChange={(e) => onPhaseChange(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Initial">Initial</option>
          <option value="Developed">Developed</option>
          <option value="Final">Final</option>
        </select>
      </div>
    </nav>
  );
}

export default Navbar;
