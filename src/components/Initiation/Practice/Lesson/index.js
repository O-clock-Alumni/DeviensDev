/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';
// import { colors } from 'src/themes';
/*
 * Local Import
 */
import Pagination from 'src/components/Initiation/Pagination';

import LeftPanel from 'src/components/Initiation/LeftPanel';
import RightPanel from 'src/components/Initiation/RightPanel';
import { Content, CodeEditor, PathTo, Wrapper, Parcours } from './style';

/*
 * Component
 */
const Lesson = ({ data }) => {
  // Props
  const { frontmatter, html } = data.markdownRemark;
  const { id, example, nextPath, language, render, image } = frontmatter;

  // Render
  return (
    <Wrapper>
      <Parcours>Parcours d’initiation {language}</Parcours>

      <Pagination id={id} language={language} />

      <Content dangerouslySetInnerHTML={{ __html: html }} />

      {/* Code */}
      <CodeEditor>
        <LeftPanel
          context="lesson"
          example={example}
          language={language}
          large
        />
        <RightPanel
          context="lesson"
          example={example}
          image={image}
          language={language}
          {...render}
        />
      </CodeEditor>

      <PathTo to={nextPath}>Exercice</PathTo>
    </Wrapper>
  );
};

/*
 * PropTypes
 */
Lesson.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object.isRequired,
      html: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

/*
 * Export
 */
export default Lesson;
