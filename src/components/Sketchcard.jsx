import React, { useState } from "react";

function SketchCard({ sketch }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array to map through the 4 images
  const images = sketch.images;

  // Next button handler
  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Back button handler
  const handleBack = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="sketch-card">
      <h3>{sketch.name}</h3>
      <p>
        <strong>Phase:</strong> {sketch.phase}
      </p>

      {/* Display current image */}
      <img
        src={images[currentImageIndex]}
        alt={`Stage ${currentImageIndex + 1}`}
        className="sketch-image"
      />

      {/* Navigation buttons */}
      <div className="image-nav">
        <button onClick={handleBack}>&lt; Back</button>
        <button onClick={handleNext}>Next &gt;</button>
      </div>
    </div>
  );
}

export default SketchCard;
