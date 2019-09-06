
import styled from 'styled-components';

const ArgBox = styled.div`
	border-bottom: 4px solid black;
	max-width: 70vw;
	padding-bottom: 0.6em;

	&:after {
		content: ${props => props.conc}
	}
`;


export default ArgBox;