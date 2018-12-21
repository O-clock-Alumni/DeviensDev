/*
 * Breakpoints
 */
export const breakpoints = {
  xsmall: 360,
  small: 520,
  medium: 720,
  large: 900,
  xlarge: 1024,
  xxlarge: 1260,
  xxxlarge: 1400,
  huge: 1600,
  full: 1920,
};

/**
 * Max-width
 * @param  {Number} x
 * @return {String}
 *
 * e.g ->
 * [maxWidth(700)]: {
 *   paddingLeft: '0.2em',
 * }
 */
export const maxWidth = x => `@media (max-width: ${x - 1}px)`;

/**
 * Min-width
 * @param  {Number} x
 * @return {String}
 *
 * e.g ->
 * [minWidth(700)]: {
 *   position: 'relative',
 *   textAlign: 'right',
 * }
 */
export const minWidth = x => `@media (min-width: ${x}px)`;

/**
 * Between-width
 * @param  {Number} x
 * @param  {Number} y
 * @return {String}
 *
 * e.g ->
 * [betweenWidth(1200, 1600)]: {
 *   display: 'block',
 * }
 */
export const betweenWidth = (x, y) =>
  `@media (min-width: ${x}px) and (max-width: ${y - 1}px)`;
