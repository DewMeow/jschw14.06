import React, { useState, useEffect } from 'react';

const Adder = (props) => {
    const { num1, num2 } = props;
    const [sum, setSum] = useState(num1 + num2);
  
    useEffect(() => {
     
      setSum(num1 + num2);
    }, [num1, num2]);
  
    return (
      <div>
        <p>Сумма чисел {num1} и {num2} равна: {sum}</p>
      </div>
    );
  };
  
  export default Adder;