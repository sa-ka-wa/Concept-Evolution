import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import SketchList from "./components/Sketchlist";
import AddSketchForm from "./components/Addsketch";
import "./App.css"; // optional for styling

function App() {
  const [sketches, setSketches] = useState([]);
  const [selectedPhase, setSelectedPhase] = useState("All");

  // Fetch sketches on mount
  useEffect(() => {
    fetch("http://localhost:3000/sketches")
      .then((res) => res.json())
      .then((data) => setSketches(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  // Filter sketches based on phase
  const filteredSketches =
    selectedPhase === "All"
      ? sketches
      : sketches.filter((sketch) => sketch.phase === selectedPhase);

  // Add new sketch
  const handleAddSketch = (newSketch) => {
    fetch("http://localhost:3000/sketches", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newSketch),
    })
      .then((res) => res.json())
      .then((addedSketch) => setSketches([...sketches, addedSketch]));
  };

  return (
    <div className="App">
      <Navbar selectedPhase={selectedPhase} onPhaseChange={setSelectedPhase} />
      <AddSketchForm onAddSketch={handleAddSketch} />
      <SketchList sketches={filteredSketches} />
    </div>
  );
}

export default App;
