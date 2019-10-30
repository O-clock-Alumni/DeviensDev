/*
 * Package Import
 */
import React from 'react';

/*
 * Local Import
 */
import Overlay from 'src/components/Overlay';
import * as S from './style';

/*
 * Component
 */
export default class Momentum extends React.Component {
  /*
   * State
   */
  state = {
    isOpen: false,
  };

  /*
   * Handlers
   */
  handleOpen = () => {
    this.setState({ isOpen: true });
  };

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  // handleClick = () => {
  //   tracking.gaEvent('overlay_momentum_vote', 'click');
  // };

  /*
   * Render
   */
  render() {
    return (
      <div id="momentum">
        <S.Tab onClick={this.handleOpen} />
        {this.state.isOpen && (
          <Overlay onClose={this.handleClose}>
            <S.Container>
              <S.Title>C’est le moment.</S.Title>
              <S.Description>
                <p>
                  L’école O’clock travaille actuellement sur un projet qui lui
                  tient vraiment à <S.Heart role="img" aria-label="Heart" />
                  .
                  <br />
                  Cette initiative a pour but d’aider les jeunes et les publics
                  fragiles, en perte de sens et d’horizon, <br />à enfin trouver
                  leur voie grâce aux métiers du numérique.
                </p>
                <p>
                  Pour rendre concret ce projet, nous avons besoin d’un petit
                  coup de main. Quoique votre doigt devrait largement suffire.
                  <br />
                  Cliquez juste en dessous et votez pour{' '}
                  <S.Logo role="img" aria-label="Logo" />
                  , l’initiative lancée par O’clock <br />
                  dans le cadre du concours Google Impact Challenge.
                </p>
                <p>Merci pour votre soutien !</p>
                <S.CTA
                  href="https://oclock.io/google-impact-challenge"
                  target="_blank"
                  rel="noopener noreferrer"
                  // onClick={this.handleClick}
                >
                  Je vote pour O’clock
                </S.CTA>
              </S.Description>
            </S.Container>
          </Overlay>
        )}
      </div>
    );
  }
}
