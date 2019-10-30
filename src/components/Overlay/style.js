/*
 * Package Import
 */
import styled, { keyframes } from 'react-emotion';

/*
 * Local Import
 */
import { animation, breakpoints, colors, colorsRGB } from 'src/themes';

/*
 * Keyframes
 */
const popIn = keyframes(animation.popIn);
const overlayBg = keyframes(animation.overlayBg);

/*
 * Components
 */
export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  animation: ${overlayBg} 0.4s both;
  z-index: 60;
  display: flex;
`;

export const Close = styled.div`
  animation: ${popIn} 0.2s 0.8s both;
  cursor: pointer;
  position: absolute;
  top: 1.5em;
  right: 2em;
  transition: 0.2s;
  width: 2em;
  height: 2em;
  padding-top: 0.1em;
  text-align: center;
  border-radius: 100%;
  display: flex;
  color: rgba(${colorsRGB.white}, 0.5);
  background: rgba(${colorsRGB.black}, 0.25);
  z-index: 90;
  &:hover {
    color: ${colors.white};
    background: rgba(${colorsRGB.black}, 0.85);
  }
  &::before {
    content: '\\2715';
    margin: auto;
  }
  @media (max-width: ${breakpoints.small - 1}px),
    (max-height: ${breakpoints.small - 1}px) {
    top: 1em;
    right: 1em;
    font-size: 0.9em;
  }
`;
