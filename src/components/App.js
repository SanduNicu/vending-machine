import React from 'react';
import VendingMachine from 'components/vending-machine/VendingMachine';
import Customer from 'components/customer/Customer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/scss/main.scss';

const App = () => {
  return (
    <div className="p-3">
      <ToastContainer />
      <Customer />
      <VendingMachine />
    </div>
  );
};

export default App;
