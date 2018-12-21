/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
import { Container, ListOptions, Option, Title } from './style';

/**
 * Component
 */
class Select extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    setValues: PropTypes.func.isRequired,
    values: PropTypes.array,
    datas: PropTypes.object.isRequired,
  };

  static defaultProps = {
    values: [],
  };

  state = {
    hover: false,
  };

  handleChange = evt => {
    const { id } = evt.target;
    const { name, type, setValues, values } = this.props;

    let newValues;

    if (values.includes(id)) {
      newValues = values.filter(value => value !== id);
    }
 else {
      newValues = [...values, id];
    }

    setValues(type, name, newValues);
  };

  handleHover = () => {
    const { hover } = this.state;
    this.setState({
      hover: !hover,
    });
  };

  render() {
    const { values, datas } = this.props;
    const { options, title } = datas;
    const { hover } = this.state;
    return (
      <Container
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover}
      >
        <Title>{title}</Title>
        {hover && (
          <ListOptions>
            {options.map(option => (
              <Option
                key={option}
                id={option}
                onClick={this.handleChange}
                active={values.includes(option)}
              >
                {option}
              </Option>
            ))}
          </ListOptions>
        )}
      </Container>
    );
  }
}

export default Select;
