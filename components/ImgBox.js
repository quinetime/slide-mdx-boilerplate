import styled from 'styled-components';

const ImgBox = styled.img`
	position: relative;
	border: ${props => props.inverse ? "12px solid #fd0" : "12px solid black"};
	border-radius: 40px;
	width: ${props => props.width ? props.width+"vw" : "20vw"};
	object-fit: cover;
	margin: 10px;
`;

export default ImgBox;