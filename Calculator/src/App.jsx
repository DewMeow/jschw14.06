import React from "react";
import Adder from "./Components/Adder";

const App = () => {
  return (
    <div>
      <h1>Калькулятор сложения</h1>
      <Adder num1={13} num2={6} />
      <Adder num1={74} num2={23} />
    </div>
  );
};

export default App;
