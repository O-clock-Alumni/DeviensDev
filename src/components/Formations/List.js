// /**
//  * Import
//  */
// import React from 'react';
//
// /**
//  * Local import
//  */
// import formations from '../../../content/formations/formations.json';
// import initialState from './initialState';
// import { AppContext } from './index';
//
// /**
//  * Utils
//  */
// const filterFormations = values =>
//   formations.filter(formation => {
//     const { categories } = initialState;
//     const { required, optional } = categories;
//
//     const allCategories = [...required, ...optional];
//
//     return allCategories
//       .filter(cat => values.required[cat] && values.required[cat].length)
//       .map(cat => values.required[cat].some(elmt => formation[cat] === elmt))
//       .every(cat => cat);
//   });
//
// /**
//  * Component
//  */
// const List = () => (
//   <AppContext.Consumer>
//     {({ values }) => (
//       <div>
//         <h3>Formations :</h3>
//         <ul>
//          {filterFormations(values).map(({ name, metiers, format, type }) => (
//             <li key={name}>
//               {name} {metiers} {format} {type}
//             </li>
//           ))}
//         </ul>
//       </div>
//     )}
//   </AppContext.Consumer>
// );
//
// export default List;
