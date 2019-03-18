import iconsInfo from '../src/js/iconsInfo';

test('bowman', () => {
  const bowman = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const received = iconsInfo(bowman);
  const expected = '😠 Л(1) ⚔40 🛡10 ❤50/100';
  expect(received).toEqual(expected);
});

test('Swordsman', () => {
  const swordsman = {
    name: 'Мечник',
    type: 'Swordsman',
    health: 80,
    level: 2,
    attack: 60,
    defence: 30,
  };
  const received = iconsInfo(swordsman);
  const expected = '😡 М(2) ⚔60 🛡30 ❤80/100';
  expect(received).toEqual(expected);
});

test('Daemon', () => {
  const daemon = {
    name: 'Демон',
    type: 'Daemon',
    health: 90,
    level: 3,
    attack: 80,
    defence: 60,
  };
  const received = iconsInfo(daemon);
  const expected = '👿 Д(3) ⚔80 🛡60 ❤90/100';
  expect(received).toEqual(expected);
});
