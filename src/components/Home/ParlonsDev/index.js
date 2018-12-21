/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local Import
 */
import Article from 'src/components/Article';
import { breakpoints } from 'src/themes';
import { Articles, MoreLink, Container, More, Title, Text } from './style';

/*
 * Component
 */
export default class ParlonsDev extends React.Component {
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
    isMobile: false,
  };

  /*
   * componentDidMount
   */
  componentDidMount() {
    window.addEventListener('resize', this.onMobile);
    this.onMobile();
  }

  /*
   * componentWillUnmount
   */
  componentWillUnmount() {
    window.removeEventListener('resize', this.onMobile);
  }

  /*
   * Actions
   */
  // @TODO à rajouter au Context
  onMobile = () => {
    this.setState({ isMobile: window.innerWidth < breakpoints.medium });
  };

  /*
   * Render
   */
  render() {
    const { data } = this.props;
    const { isMobile } = this.state;
    const { priorityArticles } = data;

    const lastArticle = priorityArticles || data.articles.edges[0].node;

    const articles = data.articles.edges.filter(
      article => article.node.id !== lastArticle.id,
    );

    return (
      <Container>
        <Title>Parlons Dev</Title>
        <Text>
          Ici, tu trouveras du contenu écrit par des professionnels à
          destination des lecteurs qui s’intéressent au développement
          ou&nbsp;qui&nbsp;envisagent une reconversion au métier de développeur.
        </Text>

        {/* 7 last Articles */}
        <Articles>
          {/* The last Article */}
          <Article article={lastArticle} isBig={!isMobile} />

          {articles.length !== 0 &&
            articles.map(
              ({ node }, index) =>
                index < 6 && <Article key={node.id} article={node} />,
            )}
        </Articles>

        <More>
          <MoreLink to="/blog">Tous les articles</MoreLink>
        </More>
      </Container>
    );
  }
}
