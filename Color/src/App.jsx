import React from 'react';
import ColorSelector from './Components/ColorSelector';

const colors = ["red", "green", "blue"];

const App = () => {
  return (
    <div>
      <h1>Color Selector Example</h1>
      <ColorSelector colors={colors} />
    </div>
  );
};

export default App;