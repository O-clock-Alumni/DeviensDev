/**
 * Background underline
 * @param  {Object} object color, posX, posY, sizeX, sizeY
 * @return {String}        '0' or linear-gradient
 */
const underlineObject = ({
  color,
  posX = '0',
  posY = '90%',
  sizeX = '100%',
  sizeY = '2px',
}) => {
  if (!color) {
    return '0';
  }
  const linear = `linear-gradient(to bottom, transparent 50%, ${color} 50%)`;
  const opts = `no-repeat content-box ${posX} ${posY} / ${sizeX} ${sizeY}`;
  return `${linear} ${opts}`;
};

const underline = options => {
  if (typeof options === 'string') {
    return underlineObject({ color: options });
  }
  return underlineObject(options);
};

/*
 * Export
 */
export default {
  underline,
};
