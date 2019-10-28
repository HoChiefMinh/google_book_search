// import React from 'react';

// // Exporting the Container, Row, and Column components from this file

// // This Container component allows us to use a bootstrap row without having to think about class names
// export const Container = ({ fluid, children }) => (
//   <div className={`container${fluid ? '-fluid' : ''}`}>{children}</div>
// );

// //This Row component lets us use a bootstrap row without having to think about class names
// export const Row = ({ fluid, children }) => (
//   <div className={`row${fluid ? '-fluid' : ''}`}>{children}</div>
// );

// //This col component lets us size bootstrap columns with less sytax
// //e.g. <Col size='md-12'> instead of <div className='col-md-12'>
// export const Col = ({ size, children }) => (
//   <div
//     className={size
//       .split(' ')
//       .map(size => 'col-' + size)
//       .join(' ')}
//   >
//     {children}
//   </div>
// );
