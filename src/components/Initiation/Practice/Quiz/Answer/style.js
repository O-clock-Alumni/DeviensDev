/*
 * Package Import
 */
import styled from 'react-emotion';

/*
 * Local Import
 */
import { weights } from 'src/themes';

/*
 * Style
 */
export const Radio = styled.input({
  marginRight: '.65em',
  WebkitAppearance: 'radio',
});

export const Label = styled.label(
  {
    marginBottom: '.5em',
  },
  ({ isChecked }) => ({
    fontWeight: isChecked ? weights.medium : weights.light,
  }),
);
