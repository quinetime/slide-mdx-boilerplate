import styled from 'styled-components';

const CoverModal = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: fixed;
	height: 100vh;
	width: 100vw;
	background-color: rgba(0, 0, 0, 0.7);
	color: ${props => props.pink ? "#ff00b4" : "#ffd233"};
	font-weight: 700;
	font-size: 6em;
`;

export default CoverModal;