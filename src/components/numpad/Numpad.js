import React, { useState } from 'react';
import { range } from 'ramda';

const Numpad = ({ buyProduct }) => {
  const [inputValue, setInputValue] = useState('');
  const digits = range(0, 10).reverse();
  const handleBuy = () => {
    buyProduct(inputValue);
    setInputValue('');
  };

  return (
    <div>
      <input
        type="text"
        readOnly
        className="w-100 mb-3"
        value={inputValue}
      />
      <div className="row">
        {
          digits.map(digit => (
            <button
              key={digit}
              className="col-4"
              type="button"
              onClick={() => setInputValue(inputValue + digit)}
            >
              {digit}
            </button>
          ))
        }
        <button
          type="button"
          className="col-4"
          onClick={() => handleBuy(inputValue)}
        >
          Buy
        </button>
        <button
          type="button"
          className="col-4"
          onClick={() => setInputValue('')}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Numpad;
