/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local Import
 */
import { breakpoints } from 'src/themes';
import PreviewArticle from 'src/components/PreviewArticle';
import ContributeBtn from 'src/components/ContributeBtn';
import Pagination from './Pagination';
// import NavCat from './NavCat';
import Intro from './Intro';

// Styles
import * as S from './style';

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
    isMobile: false,
  };

  /*
   * LifeCycles
   */
  componentDidMount() {
    window.addEventListener('resize', this.onMobile);
    this.onMobile();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onMobile);
  }

  /*
   * Handlers
   */
  switchCategory = tag => {
    this.setState(currentState => ({
      category: currentState.category !== tag ? tag : 'all',
    }));
  };

  /*
   * Actions
   */
  onMobile = () => {
    this.setState({ isMobile: window.innerWidth < breakpoints.medium });
  };

  changePage = evt => {
    this.setState({ page: parseInt(evt.target.id, 0) });
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
      <S.Container>
        <S.Content>
          <Intro />
          <S.ArticlesContainer>
            <S.Articles>
              {/* The last article, or the article which is in priority */}
              {lastArticle && (
                <PreviewArticle
                  article={lastArticle.node}
                  isBig={!this.state.isMobile}
                />
              )}

              {/* The last next articles */}
              {articlePage.length &&
                articlePage.map(({ node }) => (
                  <PreviewArticle key={node.id} article={node} />
                ))}

              {/* Pagination */}
              {articles.length > 9 && (
                <Pagination
                  page={page}
                  articlesNumber={articles.length}
                  handleChange={this.changePage}
                />
              )}
            </S.Articles>
          </S.ArticlesContainer>
        </S.Content>

        {/* Wanna contribute ? */}
        <ContributeBtn />

        {/* Filter by category */}
        {/* @TODO */}
        {/* <NavCat category={category} switchCategory={this.switchCategory} /> */}
      </S.Container>
    );
  }
}
