import styled from 'styled-components';

const CaptionBox = styled.span`
	position: relative;
	margin: 0;
	padding: 0;

	&:after { 
	display: inline-block;
	position: absolute;
	bottom: -10px;
	right: 40px;
	padding: 14px 30px;
	border-radius: 10px;
	max-width: 80%;
	background-color: ${props => props.inverse ? "#ffd233" : "black"};
	color: ${props => props.inverse ? "black" : "#ff00b4"};
	text-transform: uppercase;
	font-size: 1.3em;
	font-weight: 700;
	letter-spacing: 0em;
	content: "${props => props.caption}";"
	}
`;

export default CaptionBox;