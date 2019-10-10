import React from 'react';
import { withIds } from 'lib/helpers';

const Customer = () => {
  const money = 100;

  return (
    <div>
      <div>
        Total money: {money} lei.
      </div>
      <div>
        <span>
          Insert money:
        </span>
        {
          ammounts.map((ammount) => (
            <button key={ammount.id} type="button" className="mx-2">{ammount.label}</button>
          ))
        };
      </div>
    </div>
  );
};

export default Customer;

const ammounts = withIds([
  {
    label: '50bani',
    value: 0.5,
  },
  {
    label: '1leu',
    value: 1,
  },
  {
    label: '5lei',
    value: 5,
  },
]);
