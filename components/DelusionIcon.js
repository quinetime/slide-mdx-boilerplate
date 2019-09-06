import styled from 'styled-components';

const DelusionIcon = styled.img`
	border: ${props => props.invert ? "12px solid #fd0" : "12px solid black"};
	border-radius: 50%;
	box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    object-fit: none;
    height: 576px;

`;

export default DelusionIcon;