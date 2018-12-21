/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local Import
 */
import { breakpoints } from 'src/themes';
import {
  Article,
  Content,
  Container,
  Description,
  Image,
  Text,
  ThirdTitle,
} from './style';

/*
 * Component
 */
export default class Item extends React.Component {
  /*
   * PropTypes
   */
  static propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    align: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    paragraphs: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    isLast: PropTypes.bool.isRequired,
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
    this.setState({ isMobile: window.innerWidth < breakpoints.xlarge });
  };

  /*
   * Render
   */
  render() {
    const {
      align,
      id,
      image,
      paragraphs,
      title,
      description,
      isLast,
    } = this.props;
    const { isMobile } = this.state;
    // @TODO use index
    const isEven = id % 2 !== 0;

    return (
      <Container isEven={isEven}>
        {isMobile ? (
          <Article key={id} isEven={isEven} hasLosange={!isLast}>
            <Content>
              <ThirdTitle>{title}</ThirdTitle>
              <Description align="left">{description}</Description>
              <Text>{paragraphs[0]}</Text>
              <Image src={image} alt={title} />
              {paragraphs.map(
                (paragraph, index) =>
                  index > 0 && (
                    // eslint-disable-next-line react/no-array-index-key
                    <Text key={index}>{paragraph}</Text>
                  ),
              )}
            </Content>
          </Article>
        ) : (
          <Article key={id} align={align} isEven={isEven} hasLosange={!isLast}>
            <Content>
              <ThirdTitle align={align}>{title}</ThirdTitle>
              <Description align={align}>{description}</Description>
              {paragraphs.map((paragraph, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <Text key={index}>{paragraph}</Text>
              ))}
            </Content>

            <Content>
              <Image src={image} alt={title} />
            </Content>
          </Article>
        )}
      </Container>
    );
  }
}
