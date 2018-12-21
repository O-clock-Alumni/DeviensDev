/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
import LeftPanel from 'src/components/Initiation/LeftPanel';
import RightPanel from 'src/components/Initiation/RightPanel';
import { Article, ArticleTitle, Example, NotionContainer } from './style';

/**
 * Component
 */
const Notion = ({ data }) => (
  <NotionContainer>
    {data.map(({ type, content, language, left, right }) => {
      switch (type) {
        case 'title':
          return <ArticleTitle key={content}>{content}</ArticleTitle>;
        case 'text':
          return (
            <Article
              key={content}
              dangerouslySetInnerHTML={{ __html: content }}
            />
          );
        case 'example':
          return (
            <Example key={left}>
              <LeftPanel
                context="intro"
                example={left}
                large={!!right}
                language={language}
              />
              {right && (
                <RightPanel
                  context="intro"
                  example={right}
                  language={language}
                />
              )}
            </Example>
          );
        default:
          return null;
      }
    })}
  </NotionContainer>
);

Notion.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default Notion;
