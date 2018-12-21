/*
 * Package Import
 */
import styled from 'react-emotion';

/*
 * Local Import
 */
import { base } from 'src/themes';

/*
 * Style
 */
export const Container = styled.div({
  position: 'relative',
});

/*
 * Title
 */
export const Subtitle = styled.h2({
  ...base.boxTitle,
});
