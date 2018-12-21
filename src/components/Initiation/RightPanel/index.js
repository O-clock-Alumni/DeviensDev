/*
 * Package Import
 */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

/*
 * Local Import
 */
import nav from 'src/assets/images/initiation/nav.svg';
import { Container, ResponseRender, Image, NavImage } from './style';

/*
 * Code
 */
const Translate = ({ value, style }) =>
  value
    .split('\r\n')
    .map(item => (
      <ResponseRender
        css={style}
        key={item}
        dangerouslySetInnerHTML={{ __html: item }}
        image={item === '<img src="images/code.jpg" alt="code" />'}
      />
    ));

/*
 * Component
 */
const RightPanel = ({
  code,
  content,
  context,
  example,
  image,
  language,
  style,
  value,
}) => (
  <Container>
    <NavImage src={nav} />
    {context === 'exercise' ? (
      <Fragment>
        {/* Before */}
        {code && <Translate value={code.before} />}
        {image && <Image>{image}</Image>}

        {/* Value */}
        <Translate value={value} style={style} />

        {/* After */}
        {code && <Translate value={code.after} />}
      </Fragment>
    ) : (
      <Fragment>
        {example && language !== 'CSS' && <Translate value={example} />}
        {image && <Image />}
        <ResponseRender css={style}>{content}</ResponseRender>
      </Fragment>
    )}
  </Container>
);

/*
 * PropTypes
 */
RightPanel.propTypes = {
  code: PropTypes.object,
  content: PropTypes.string,
  context: PropTypes.string.isRequired,
  example: PropTypes.string,
  image: PropTypes.string,
  language: PropTypes.string,
  style: PropTypes.string,
  value: PropTypes.string,
};

RightPanel.defaultProps = {
  value: '',
  code: null,
  content: '',
  example: '',
  language: '',
  style: '',
  image: '',
};

/*
 * Export
 */
export default RightPanel;
