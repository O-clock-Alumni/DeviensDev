/*
 * Package Import
 */
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

/*
 * Local Import
 */
import Popup from 'src/components/Initiation/Popup';
import { SurrenderBtn, Confirm, Back } from './style';

/*
 * Component
 */
export default class Surrender extends React.Component {
  /*
   * PropTypes
   */
  static propTypes = {
    showExpected: PropTypes.func.isRequired,
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
    // 1. We're surrendering
    this.props.showExpected();

    // 2. Close the Popup
    this.setState({ open: false });
  };

  /*
   * Render
   */
  render() {
    return (
      <Fragment>
        {/* CTA */}
        <SurrenderBtn onClick={this.handleOpen(true)}>Abandonner</SurrenderBtn>

        {/* Popup */}
        {this.state.open && (
          <Popup onClose={this.handleOpen(false)} status="fail">
            <p>Êtes-vous sûr de vouloir abandonner l’exercice en cours ?</p>

            {/* CTA  */}
            <Back onClick={this.handleOpen(false)}>Non</Back>
            <Confirm onClick={this.onClick}>Oui</Confirm>
          </Popup>
        )}
      </Fragment>
    );
  }
}
