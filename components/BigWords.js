import styled from 'styled-components';

const BigWords = styled.h1`
	font-size: ${props => props.size ? props.size+"em" : "8em"};
	color: ${props => props.pink ? "#ff00b4" : ""};
	line-height: 0.2em;
`;

export default BigWords;