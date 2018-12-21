/*
 * Package Import
 */
import PropTypes from 'prop-types';
import React from 'react';
/*
 * Local Import
 */
import { Container, LineNumber, Lines } from './style';

/*
 * Component
 */
export default class Textarea extends React.Component {
  /*
   * PropTypes
   */
  static propTypes = {
    // Props
    handleChange: PropTypes.func.isRequired,
    required: PropTypes.bool,
    value: PropTypes.string,
    startLine: PropTypes.number.isRequired,
  };

  static defaultProps = {
    required: false,
    value: '',
  };

  /*
   * State
   */
  state = {};

  /*
   * LifeCycles
   */
  componentDidMount = this.computeHeight;

  componentDidUpdate = this.computeHeight;

  /*
   * Utils
   */
  saveRef = instance => ref => node => {
    instance[ref] = node;
  };

  /*
   * Actions
   */
  computeHeight() {
    // Force determine scroll
    this.node.style.height = '1px';

    // Give `height`
    this.node.style.height = `${this.node.scrollHeight}px`;
  }

  /*
   * Render
   */
  render() {
    const { handleChange, required, value, startLine } = this.props;

    const lines = value.trim().split(/\r\n|\r|\n/).length;

    const arrayLine = [];

    for (let line = 1; line <= lines; line++) {
      arrayLine.push(<LineNumber key={line}>{startLine + line}</LineNumber>);
    }

    return (
      <Container>
        <Lines>{arrayLine}</Lines>
        <textarea
          spellCheck="false"
          placeholder="Ecris ton code ici"
          // React
          required={required}
          value={value}
          onChange={handleChange}
          ref={this.saveRef(this)('node')}
        />
      </Container>
    );
  }
}
