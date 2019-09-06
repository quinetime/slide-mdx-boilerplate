import styled from 'styled-components';

const SpacerPercent = styled.div`
	opacity: 0;
	height: ${props => props.height ? props.height+"%" : "5%"};
	width: ${props => props.width ? props.width+"%" : "5%"};
`;

export default SpacerPercent;