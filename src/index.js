/* eslint-disable no-console */
import iconsInfo from './js/iconsInfo';

const bowman = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
};

const result = iconsInfo(bowman);
console.log(result);
