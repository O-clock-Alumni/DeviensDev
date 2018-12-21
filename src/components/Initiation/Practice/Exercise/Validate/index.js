/*
 * Package Import
 */
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

/*
 * Local Import
 */
import Popup from 'src/components/Initiation/Popup';
import { ValidateBtn, PathTo, Back } from './style';

/*
 * Component
 */
export default class Validate extends React.Component {
  /*
   * PropTypes
   */
  static propTypes = {
    // eslint-disable-next-line react/require-default-props
    isSuccess: PropTypes.bool,
    onSubmit: PropTypes.func.isRequired,
    nextPath: PropTypes.string.isRequired,
  };

  /*
   * State
   */
  state = { open: false };

  /*
   * Handlers
   */
  handleOpen = open => () => {
    this.setState({ open });
  };

  onClick = () => {
    // 1. We submit our responses
    this.props.onSubmit();

    // 2. Open the Popup
    this.setState({ open: true });
  };

  /*
   * Render
   */
  render() {
    const { isSuccess, nextPath } = this.props;

    return (
      <Fragment>
        {/* CTA */}
        <ValidateBtn onClick={this.onClick}>Valider</ValidateBtn>

        {/* Popup */}
        {this.state.open && (
          <Popup
            onClose={this.handleOpen(false)}
            status={isSuccess ? 'success' : 'fail'}
          >
            {isSuccess ? <p>Bravo, tu as réussi !</p> : <p>Essaie encore</p>}

            {/* CTA */}
            {isSuccess &&
              nextPath && (
                <PathTo to={nextPath}>
                  {nextPath.includes('quiz') ? 'Quiz final' : 'Leçon suivante'}
                </PathTo>
              )}
            <Back onClick={this.handleOpen(false)}>Retour</Back>
          </Popup>
        )}
      </Fragment>
    );
  }
}
