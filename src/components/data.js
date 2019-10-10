import { withIds } from 'lib/helpers';

import bueno from 'assets/imgs/bueno.png';
import cola from 'assets/imgs/cola.png';
import pringles from 'assets/imgs/pringles.png';
// import doritos from 'assets/imgs/doritos';
// import fanta from 'assets/imgs/fanta';
// import milkSlice from 'assets/imgs/milk-slice';
// import orbit from 'assets/imgs/orbit';
// import sprite from 'assets/imgs/sprite';
// import surprise from 'assets/imgs/surprise';

export const products = withIds([
  {
    name: 'Bueno',
    img: bueno,
  },
  {
    name: 'Cola',
    img: cola,
  },
  {
    name: 'Pringles',
    img: pringles,
  },
]);
