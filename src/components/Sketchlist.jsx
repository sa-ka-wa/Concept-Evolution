import React from "react";
import SketchCard from "./Sketchcard";

function SketchList({ sketches }) {
  return (
    <div className="sketch-list">
      {sketches.length > 0 ? (
        sketches.map((sketch) => <SketchCard key={sketch.id} sketch={sketch} />)
      ) : (
        <p>No sketches found for this phase.</p>
      )}
    </div>
  );
}

export default SketchList;
