/*
 * Fade In • Fade Out
 */
const fadeOut = {
  '100%': { opacity: 0 },
};

const fadeIn = {
  '0%': { opacity: 0 },
};

const fadeInTop = {
  '0%': {
    transform: 'translate3d(0, -1em, 0)',
    opacity: 0,
  },
};

const fadeOutTop = {
  '100%': {
    transform: 'translate3d(0, -1em, 0)',
    opacity: 0,
  },
};

const fadeInRight = {
  '0%': {
    transform: 'translate3d(1em, 0, 0)',
    opacity: 0,
  },
};

const fadeOutRight = {
  '100%': {
    transform: 'translate3d(1em, 0, 0)',
    opacity: 0,
  },
};

const fadeInBottom = {
  '0%': {
    transform: 'translate3d(0, 1em, 0)',
    opacity: 0,
  },
};

const fadeOutBottom = {
  '100%': {
    transform: 'translate3d(0, 1em, 0)',
    opacity: 0,
  },
};

const fadeInLeft = {
  '0%': {
    transform: 'translate3d(-1em, 0, 0)',
    opacity: 0,
  },
};

const fadeOutLeft = {
  '100%': {
    transform: 'translate3d(-1em, 0, 0)',
    opacity: 0,
  },
};

const fadeScaleIn = {
  '0%': {
    opacity: 0,
    transform: 'scale3d(.95, .95, 1)',
  },
};

const scaleIn = {
  '0%': {
    transform: 'scale3d(0, 1, 1)',
  },
};

const scaleOut = {
  '100%': {
    transform: 'scale3d(0, 1, 1)',
  },
};
/*
 * Pop In • Pop Out
 */
const popIn = {
  '0%': { transform: 'scale3d(0, 0, 1)' },
  '80%': { transform: 'scale3d(1.1, 1.1, 1)' },
};

const popOut = {
  '20%': { transform: 'scale3d(1.2, 1.2, 1)' },
  '100%': { transform: 'scale3d(0, 0, 1)' },
};

const popInBig = {
  '0%': { fontSize: 0 },
  '8%': { fontSize: '1.6em' },
  '10%': { fontSize: '1.5em' },
  '100%': { fontSize: '1.5em' },
};

/*
 * Export
 */
export default {
  // Fade In • Fade Out
  fadeOut,
  fadeIn,
  fadeInTop,
  fadeOutTop,
  fadeInRight,
  fadeOutRight,
  fadeInBottom,
  fadeOutBottom,
  fadeInLeft,
  fadeOutLeft,
  fadeScaleIn,
  scaleIn,
  scaleOut,

  // Pop In • Pop Out
  popIn,
  popOut,
  popInBig,
};
