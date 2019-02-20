/*
 * Package Import
 */
import { hydrate } from 'emotion';

/*
 * Local Import
 */

// Import global styles
import 'src/css/fonts.css';
import 'src/css/reset.css';
import 'src/css/root.css';
import 'src/css/prism.css';

/**
 * On client entry • Called when the Gatsby browser runtime first starts.
 * @api : https://www.gatsbyjs.org/docs/browser-apis/#onClientEntry
 */
export const onClientEntry = () => {
  if (
    typeof window !== `undefined` &&
    typeof window.__EMOTION_CRITICAL_CSS_IDS__ !== `undefined`
  ) {
    hydrate(window.__EMOTION_CRITICAL_CSS_IDS__);
  }
};
