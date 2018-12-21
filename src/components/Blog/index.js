/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local Import
 */
import ContributeBtn from 'src/components/ContributeBtn';
import Article from 'src/components/Article';
import Pagination from './Pagination';
import Intro from './Intro';
// import NavCat from './NavCat';

// Styles
import {
  Container,
  Content,
  Lastest,
  Oldest,
  Articles,
  ArticlesContainer,
} from './style';

/*
 * Component
 */
export default class Blog extends React.Component {
  /*
   * PropTypes
   */
  static propTypes = {
    data: PropTypes.object.isRequired,
  };

  /*
   * State
   */
  state = {
    category: 'all',
    page: 1,
  };

  /*
   * Handlers
   */
  switchCategory = tag => {
    const { category } = this.state;

    if (category !== tag) {
      this.setState({ category: tag });
    }
 else {
      this.setState({ category: 'all' });
    }
  };

  /*
   * Actions
   */
  changePage = evt => {
    const { id } = evt.target;
    this.setState({ page: parseInt(id, 0) });
  };

  /*
   * Render
   */
  render() {
    const { data } = this.props;
    const { category, page } = this.state;
    const { edges } = data.allMarkdownRemark;

    const lastArticle =
      edges.find(edge => edge.node.frontmatter.priority) || edges[0];

    let articles = edges.filter(edge => edge !== lastArticle);

    if (articles.length && category !== 'all') {
      articles = articles.filter(
        article => article.node.frontmatter.category === category,
      );
    }

    const articlePage = articles.slice(9 * (page - 1), 9 * page);

    return (
      <Container>
        {/* Content */}
        <Content>
          <Intro />
          <ArticlesContainer>
            <Articles>
              {/* Lastest article */}
              <Lastest>
                <Article article={lastArticle.node} isBig />
              </Lastest>

              {/* Oldest articles */}
              <Oldest>
                {articlePage.map(({ node }) => (
                  <Article key={node.id} article={node} />
                ))}
              </Oldest>

              {/* Pagination */}
              {articles.length > 9 && (
                <Pagination
                  page={page}
                  articlesNumber={articles.length}
                  handleChange={this.changePage}
                />
              )}
            </Articles>
          </ArticlesContainer>
        </Content>

        {/* Contribute */}
        <ContributeBtn />

        {/* Filter by category */}
        {/* @TODO */}
        {/* <NavCat category={category} switchCategory={this.switchCategory} /> */}
      </Container>
    );
  }
}
