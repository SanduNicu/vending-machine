import { withIds } from 'lib/helpers';

import bueno from 'assets/imgs/bueno.png';
import cola from 'assets/imgs/cola.png';
import pringles from 'assets/imgs/pringles.png';
import doritos from 'assets/imgs/doritos.png';
// import fanta from 'assets/imgs/fanta.png';
// import milkSlice from 'assets/imgs/milk-slice.png';
// import orbit from 'assets/imgs/orbit.png';
// import sprite from 'assets/imgs/sprite.png';
// import surprise from 'assets/imgs/surprise.png';

export const products = withIds([
  {
    name: 'Bueno',
    price: 3.5,
    img: bueno,
  },
  {
    name: 'Cola',
    price: 3,
    img: cola,
  },
  {
    name: 'Pringles',
    price: 7,
    img: pringles,
  },
  {
    name: 'Doritos',
    price: 4.5,
    img: doritos,
  },
]);

export const ammounts = withIds([
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

