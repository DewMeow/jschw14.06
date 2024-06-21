import React, { useState } from 'react';

const ColorSelector = ({ colors }) => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const handleChange = (e) => {
    setSelectedColor(e.target.value);
  };

  return (
    <div>
      <label htmlFor="colorSelect">Select a color: </label>
      <select id="colorSelect" value={selectedColor} onChange={handleChange}>
        {colors.map((color, index) => (
          <option key={index} value={color}>{color}</option>
        ))}
      </select>
      <div style={{ marginTop: '10px', width: '50px', height: '50px', backgroundColor: selectedColor }}></div>
    </div>
  );
};

export default ColorSelector;