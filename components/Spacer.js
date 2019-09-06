import styled from 'styled-components';

const Spacer = styled.div`
	opacity: 0;
	height: ${props => props.height ? props.height+"px" : "30px"};
	width: ${props => props.width ? props.width+"px" : "30px"};
`;

export default Spacer;