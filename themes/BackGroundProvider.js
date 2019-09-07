import React from 'react'
import { useDeck } from 'mdx-deck'
import styled from 'styled-components'
import triangles from '../static/triangle-background.svg'

const BackgroundTriangles = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	height: 100vh;
	width: 100vw;
	background-repeat: 'no-repeat',
  background-position: 'right center',
  background-size: 'cover',
  background-attachment: 'fixed',
  background-image: 'url("../static/triangle-background.svg")',
`;

export default ({ children }) => (
  <div
    style={{
      width: '100vw',
      height: '100vw',
      backgroundColor: 'tomato',
    }}>
    {children}
  </div>
)

// const Provider = props => (
//   <div>
//     {props.children}
//     <div
//       css={{
//         position: 'fixed',
//         right: 0,
//         bottom: 0,
//         margin: 16,
//       }}
//     >
//       Put your name here
//     </div>
//   </div>
// )

// export default {
//   Provider
// }


// I cannot get this dumb Provider to work.
// What would be good: some padding on the left and right, the Trianglify background image.