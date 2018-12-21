// /**
//  * Import
//  */
// import React from 'react';
//
// /**
//  * Local import
//  */
// import searchOptions from '../../../content/formations/searchOptions.json';
// import { AppContext } from './index';
// import Select from './Select';
//
// // import { Categories } from './style';
//
// /**
//  * Component
//  */
// class Header extends React.Component {
//   handleSubmit = (actions, values) => () => {
//     const { required } = values;
//     const { setValidate, setError } = actions;
//
//     if (
//       Object.keys(required).length !==
//       Object.keys(searchOptions.required).length
//     ) {
//       setError(true);
//     }
//  else {
//       setValidate(true);
//     }
//   };
//
//   render() {
//     return (
//       <AppContext.Consumer>
//         {({ setValues, values, setValidate, setError }) => (
//           <div>
//             {/* <Categories> */}
//               {Object.keys(searchOptions.required).map(category => (
//                 <Select
//                   key={category}
//                   name={category}
//                   type="required"
//                   setValues={setValues}
//                   values={values.required[category]}
//                   datas={searchOptions.required[category]}
//                 />
//               ))}
//             {/* </Categories> */}
//             <button
//               type="button"
//               onClick={this.handleSubmit({ setValidate, setError }, values)}
//             >
//               Valider
//             </button>
//           </div>
//         )}
//       </AppContext.Consumer>
//     );
//   }
// }
//
// export default Header;
