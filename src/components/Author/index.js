/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local Import
 */
import { getContributor } from 'src/utils';
import { Container, Avatar, Image, Name, Content, Bio } from './style';

/*
 * Component
 */
export default class Author extends React.Component {
  /*
   * PropTypes
   */
  static propTypes = {
    author: PropTypes.string.isRequired,
    isBig: PropTypes.bool.isRequired,
  };

  /*
   * State
   */
  state = {};

  /*
   * LifeCycles
   */
  componentDidMount() {
    // I know it's anti-pattern. But we had a problem with the
    // hot-reload @ webpack,
    this._isMounted = true;

    this.getData(this.props.author);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  /*
   * Actions
   */
  getData = author => {
    getContributor(author).then(contributor => {
      if (this._isMounted) {
        this.setState({ ...contributor });
      }
    });
  };

  /*
   * Render
   */
  render() {
    const { avatar, bio } = this.state;
    const { ...articleProps } = this.props;

    const name = this.state.defaultName || this.state.name;

    return (
      <Container {...articleProps}>
        {/* Avatar */}
        <Avatar {...articleProps}>
          <Image src={avatar} alt={name} {...articleProps} />
        </Avatar>

        {/* Content */}
        <Content {...articleProps}>
          <Name>{name}</Name>
          {bio && <Bio>{bio.short}</Bio>}
        </Content>
      </Container>
    );
  }
}
