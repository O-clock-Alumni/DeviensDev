/*
 * Package Import
 */
import styled from 'react-emotion';

/*
 * Local Import
 */
import { base, breakpoints, colors, minWidth, weights } from 'src/themes';

/*
 * Style
 */
export const Container = styled.div(
  {
    minHeight: 600,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    // Breakpoints
    [minWidth(breakpoints.xlarge)]: {
      marginBottom: '3em',
    },

    [minWidth(breakpoints.xxxlarge)]: {
      marginBottom: '0',
    },
  },
  ({ isEven }) => ({
    // Breakpoints
    [minWidth(breakpoints.medium)]: {
      flexDirection: isEven ? 'row-reverse' : 'row',
    },
  }),
);

export const Content = styled.div(
  {
    padding: '2em 1em',
    position: 'relative',
    width: '100%',

    // Breakpoints
    [minWidth(breakpoints.medium)]: {
      display: 'grid',
      padding: '1.7em 1.5em 2em 2em',
    },

    [minWidth(breakpoints.large)]: {
      padding: '1.7em 2em 2em',
    },

    [minWidth(breakpoints.full)]: {
      maxWidth: '900px',
    },
  },
  ({ text, isEven }) => {
    if (text) {
      // text && odd
      if (text && !isEven) {
        return {
          [minWidth(breakpoints.medium)]: {
            padding: '1.5em 2.5em 0 2em',
          },

          [minWidth(breakpoints.large)]: {
            padding: '1.5em 3em 0 2em',
          },

          [minWidth(breakpoints.xlarge)]: {
            padding: '3em 4em 0 2em',
          },
        };
      }
      // text && even
      if (text && isEven) {
        return {
          [minWidth(breakpoints.medium)]: {
            padding: '1.5em 2em 0 2.5em',
          },

          [minWidth(breakpoints.large)]: {
            padding: '1.5em 2em 0 3em',
          },

          [minWidth(breakpoints.xlarge)]: {
            padding: '3em 2em 0 4em',
          },
        };
      }
    }
    // image
    return {
      margin: '0 auto',
    };
  },
);

export const Title = styled.h3(
  {
    fontSize: '1.5em',
    fontWeight: weights.bold,
    fontFamily: 'Encode Sans Condensed',
    textAlign: 'center',
  },
  ({ isEven }) => ({
    // Breakpoints
    [minWidth(breakpoints.medium)]: {
      paddingBottom: '1em',
      textAlign: isEven ? 'left' : 'right',
    },
  }),
);

export const Figure = styled.span(
  {
    color: colors.mainColor,
    fontFamily: 'Encode Sans Condensed',
    fontSize: '4em',
    textAlign: 'center',

    // Breakpoints
    [minWidth(breakpoints.medium)]: {
      display: 'flex',
      position: 'absolute',
      top: 0,
      zIndex: 2,
    },

    [minWidth(breakpoints.xlarge)]: {
      fontSize: '6em',
    },
  },

  ({ isEven }) =>
    isEven
      ? {
          // Breakpoints
          [minWidth(breakpoints.medium)]: {
            left: 0,
            transform: 'translate(-25%)',
          },
        }
      : {
          // Breakpoints
          [minWidth(breakpoints.medium)]: {
            right: 0,
            transform: 'translate(25%)',
          },
        },
);

export const Text = styled.p({
  ...base.mainText,
  fontWeight: weights.light,
  padding: '.65em 0',
  textAlign: 'left',
});

export const Image = styled.img({
  ...base.image,
  // @TODO affiner pour certaines images?
  margin: '1em auto',
  maxHeight: '300px',

  // Breakpoints
  [minWidth(breakpoints.medium)]: {
    alignSelf: 'center',
    maxHeight: '350px',
  },

  [minWidth(breakpoints.large)]: {
    maxHeight: '400px',
  },

  [minWidth(breakpoints.xxlarge)]: {
    maxHeight: '450px',
  },

  [minWidth(breakpoints.xxxlarge)]: {
    maxHeight: '500px',
  },
});
