/*
 * Package Import
 */
import React, { Fragment } from 'react';
import { extractCritical } from 'emotion-server';
import { renderToString } from 'react-dom/server';

/*
 * Local Import
 */

/**
 * Replace renderer • Replace the default server renderer.
 * This is useful for integration with Redux, CSS-in-JS libraries, etc...
 * That need custom setups for server rendering.
 *
 * @api : https://next.gatsbyjs.org/docs/ssr-apis/#replaceRenderer
 */
export const replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  const ConnectedBody = () => <Fragment>{bodyComponent}</Fragment>;

  const { html, ids, css } = extractCritical(renderToString(<ConnectedBody />));
  const criticalStyle = <style dangerouslySetInnerHTML={{ __html: css }} />;
  const criticalIds = (
    <script
      dangerouslySetInnerHTML={{
        __html: `window.__EMOTION_CRITICAL_CSS_IDS__ = ${JSON.stringify(ids)};`,
      }}
    />
  );

  setHeadComponents([criticalIds, criticalStyle]);
  replaceBodyHTMLString(html);
};
