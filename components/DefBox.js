import styled from 'styled-components';

const DefBox = styled.div`
	padding: 50px 100px 50px 100px;
	position: relative;
	border: ${props => props.inverse ? "12px solid #ffd233" : "12px solid black"};
	border-radius: 0px 60px;
	text-transform: none;
	font-size: 1.2em;
	color: ${props => props.inverse ? "#ff00b4" : "black"};
	background-color: ${props => props.inverse ? "black" : "#FFFFE0"};
	width: auto;
	max-width: ${props => props.split ? "86%" : "90%"};
	
	&:before {
		position: absolute;
		padding: 10px 25px;
		top: -56px;
		left: 60px;
		border-radius: 10px;
		background-color: ${props => props.inverse ? "#ffd233" : "black"};
		color: ${props => props.inverse ? "black" : "#ff00b4"};
		text-transform: uppercase;
		font-size: 1.2em;
		font-weight: 700;
		letter-spacing: 0em;
    	content: "${props => props.nameplate}";
	}
`;

export default DefBox;

// margin: ${props=> props.split ? "75px 7%" : "75px 3%"};//