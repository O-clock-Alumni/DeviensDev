/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local Import
 */
import { Container, Title, Text, Image, Content, Figure } from './style';

/*
 * Component
 */
export default class Item extends React.Component {
  /*
   * PropTypes
   */
  static propTypes = {
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    paragraphs: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
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
    setTimeout(this.onMobile);
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
    this.setState({ isMobile: window.innerWidth < 720 });
  };

  /*
   * Render
   */
  render() {
    const { alt, id, image, paragraphs, title } = this.props;
    const { isMobile } = this.state;
    const isEven = id % 2 === 0;

    return (
      <Container isEven={isEven}>
        {/* Text */}
        {isMobile ? (
          <Content>
            <Figure isEven={isEven}>{id}</Figure>
            <Title isEven={isEven}>{title}</Title>

            <Text>{paragraphs[0]}</Text>
            <Image src={image} alt={alt} />
            <Text>{paragraphs[1]}</Text>
          </Content>
        ) : (
          <>
            <Content isEven={isEven} text>
              <Figure isEven={isEven}>{id}</Figure>
              <Title isEven={isEven}>{title}</Title>

              {paragraphs.map((paragraph, index) => (
                /* eslint-disable react/no-array-index-key */
                <Text key={index}>{paragraph}</Text>
              ))}
            </Content>

            {/* Image */}
            <Content isEven={isEven} text={false}>
              <Image src={image} alt={alt} />
            </Content>
          </>
        )}
      </Container>
    );
  }
}
