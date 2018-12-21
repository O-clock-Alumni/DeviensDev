/*
 * Package Import
 */
import styled from 'react-emotion';

/*
 * Local Import
 */
import { colors, weights, breakpoints, minWidth } from 'src/themes';
import code from 'src/assets/images/initiation/code.jpg';

/*
 * Style
 */
export const Container = styled.div({
  width: '100%',
  fontFamily: 'Times New Roman',
  fontSize: '1em',
  marginTop: '1em',
  border: `1px solid ${colors.lightGrey}`,

  [minWidth(breakpoints.large)]: {
    width: '39%',
    margin: 0,
  },
});

/* rendu de droite dynamique */
export const ResponseRender = styled.div(
  {
    fontSize: '1em',
    minHeight: '2em',
    // Titre H1
    '& h1': {
      fontWeight: weights.bold,
      fontSize: '2em',
    },

    // Titre H2
    '& h2': {
      fontWeight: weights.bold,
      fontSize: '1.8em',
    },

    // Titre H3
    '& h3': {
      fontWeight: weights.bold,
      fontSize: '1.6em',
    },

    // Titre H4
    '& h4': {
      fontWeight: weights.bold,
      fontSize: '1.4em',
    },

    // Titre H5
    '& h5': {
      fontWeight: weights.bold,
      fontSize: '1.2em',
    },

    // Titre H6
    '& h6': {
      fontWeight: weights.bold,
      fontSize: '1em',
    },

    // Liste ordonnée
    '& ol li': {
      listStyleType: 'decimal',
      marginLeft: '1em',
    },

    // Liste non-ordonnée
    '& ul li': {
      listStyleType: 'initial',
      marginLeft: '1em',
    },

    // Lien
    '& a': {
      color: 'blue',
    },
    '& img': {
      display: 'none',
    },

    // Image
  },
  ({ image }) =>
    image && {
      margin: '1em 0',
      backgroundImage: `url(${code})`,
      width: '150',
      height: '100',
      backgroundSize: 'cover',
      display: 'block',
      '& img': {
        display: 'none',
      },
    },
  ({ css }) => css && css,
);

export const Image = styled.div({
  margin: '1em 0',
  backgroundImage: `url(${code})`,
  width: '150',
  height: '100',
  backgroundSize: 'cover',
  display: 'block',
});

export const NavImage = styled.img({
  width: '100%',
  objectFit: 'cover',
});
