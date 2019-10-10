import React from 'react';
import VendingMachine from 'components/vending-machine/VendingMachine';
import Customer from 'components/customer/Customer';

const App = () => {
  return (
    <div className="p-3">
      <Customer />
      <VendingMachine />
    </div>
  );
};

export default App;
