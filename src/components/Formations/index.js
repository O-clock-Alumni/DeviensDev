/*
 * Import
 */
import React from 'react';

/*
 * Local import
 */
import Crane from './Crane';
import * as S from './style';
// import List from './List';
// import Header from './header';
// import initialState from './initialState';

/*
 * Code
 */
// export const AppContext = React.createContext();
// class Formation extends React.Component {
//   /* eslint-disable react/no-unused-state */
//   state = {
//     validate: false,
//     error: false,
//     values: {
//       required: {},
//       optional: {},
//     },
//     setValues: (type, category, value) => {
//       this.setState(prevState => ({
//         values: {
//           ...prevState.values,
//           [type]: {
//             ...prevState.values[type],
//             [category]: value,
//           },
//         },
//       }));
//     },
//     setValidate: value => {
//       this.setState({
//         validate: value,
//         error: false,
//       });
//     },
//     setError: value => {
//       this.setState({
//         validate: false,
//         error: value,
//       });
//     },
//   };
//
//   render() {
//     return (
//       <AppContext.Provider value={this.state}>
//         <p>Page Formations</p>
//         <Header />
//         {this.state.validate && <List />}
//       </AppContext.Provider>
//     );
//   }

/*
 * Component
 */
const Formations = () => (
  <React.Fragment>
    <S.IntroContainer>
      <S.Title>Formations</S.Title>
    </S.IntroContainer>

    <S.ConstructionContainer>
      <Crane />
      <S.Text>
        <S.Bold>
          Vous retrouverez ici prochainement un listing de formation permettant
          de vous former.
        </S.Bold>{' '}
        Si vous êtes un organisme de formation et que vous souhaitez figurer sur
        la liste, contactez nous !
      </S.Text>

      <S.Button href="mailto:contact@deviensdev.com">Nous contacter</S.Button>
    </S.ConstructionContainer>
  </React.Fragment>
);

/*
 * Export
 */
export default Formations;
