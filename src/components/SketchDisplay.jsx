import React, { useEffect, useState } from "react";

function SketchDisplay() {
  const [sketches, setSketches] = useState([]);

  // Fetch sketches data from the JSON Server
  useEffect(() => {
    fetch("http://localhost:3000/sketches")
      .then((res) => res.json())
      .then((data) => setSketches(data))
      .catch((err) => console.error("Error fetching sketches:", err));
  }, []);

  return (
    <div className="sketch-display">
      <h2>Sketch Evolution</h2>
      <div className="sketches-container">
        {sketches.map((sketch) => (
          <div className="sketch-card" key={sketch.id}>
            <h3>{sketch.name}</h3>
            <p>
              <strong>Phase:</strong> {sketch.phase}
            </p>
            <div className="images">
              {sketch.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Sketch ${sketch.name} - Phase ${sketch.phase} Image ${
                    index + 1
                  }`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SketchDisplay;
