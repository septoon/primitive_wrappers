function iconsInfo(item) {
  const icons = {
    Bowman: 'U+1F620',
    Swordsman: 'U+1F621',
    Magician: 'U+1F9D0',
    Daemon: 'U+1F47F',
    Undead: 'U+1F480',
    Zombie: 'U+1F9DF',
    attack: 'U+2694',
    defence: 'U+1F6E1',
    health: 'U+2764',
  };

  for (const key in icons) { // eslint-disable-line
    icons[key] = String.fromCodePoint(icons[key].replace('U+', '0x'));
  }

  const type = icons[item.type];
  const firstLetter = item.name[0];

  return `${type} ${firstLetter}(${item.level}) ${icons.attack}${item.attack} ${icons.defence}${item.defence} ${icons.health}${item.health}/100`;
}

export default iconsInfo;
