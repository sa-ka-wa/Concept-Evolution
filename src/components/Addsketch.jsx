import React, { useState } from "react";

function AddSketchForm({ onAddSketch }) {
  const [name, setName] = useState("");
  const [phase, setPhase] = useState("Initial");
  const [images, setImages] = useState(["", "", "", ""]);

  const handleImageChange = (index, value) => {
    const updatedImages = [...images];
    updatedImages[index] = value;
    setImages(updatedImages);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSketch = { name, phase, images };
    onAddSketch(newSketch);
    setName("");
    setPhase("Initial");
    setImages(["", "", "", ""]);
  };

  return (
    <form onSubmit={handleSubmit} className="add-sketch-form">
      <h2>Add a New Sketch</h2>

      <label>
        Sketch Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>

      <label>
        Phase:
        <select
          value={phase}
          onChange={(e) => setPhase(e.target.value)}
          required
        >
          <option value="Initial">Initial</option>
          <option value="Developed">Developed</option>
          <option value="Final">Final</option>
        </select>
      </label>

      <label>
        Images (URLs):
        {images.map((image, index) => (
          <input
            key={index}
            type="text"
            value={image}
            onChange={(e) => handleImageChange(index, e.target.value)}
            placeholder={`Image ${index + 1}`}
            required
          />
        ))}
      </label>

      <button type="submit">Add Sketch</button>
    </form>
  );
}

export default AddSketchForm;
