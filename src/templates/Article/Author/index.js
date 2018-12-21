/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local Import
 */
import { getContributor } from 'src/utils';
import { Container, Info, Name, Avatar, Twitter, Url, Bio } from './style';

/*
 * Component
 */
export default class Author extends React.Component {
  /*
   * PropTypes
   */
  static propTypes = {
    author: PropTypes.string.isRequired,
  };

  /*
   * State
   */
  state = {};

  /*
   * LifeCycles
   */
  componentDidMount() {
    this.getData(this.props.author);
  }

  componentDidUpdate(prevProps) {
    if (this.props.author !== prevProps.author) {
      this.getData(this.props.author);
    }
  }

  /*
   * Actions
   */
  getData = author =>
    getContributor(author).then(contributor =>
      this.setState({ ...contributor }),
    );

  /*
   * Render
   */
  render() {
    const { avatar, bio, twitter, url } = this.state;

    const name = this.state.defaultName || this.state.name;

    return (
      <Container>
        <Avatar src={avatar} />
        <Name>{name}</Name>
        {bio && <Bio>{bio.long}</Bio>}
        <Info>
          {twitter && (
            <Twitter
              target="_blank"
              rel="noopener noreferrer"
              href={`https://twitter.com/${twitter}`}
            />
          )}

          {url &&
            url !== 'http://' && (
              <Url target="_blank" rel="noopener noreferrer" href={url} />
            )}
        </Info>
      </Container>
    );
  }
}
