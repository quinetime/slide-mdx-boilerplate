import styled from 'styled-components';

const FancyList = styled.ol`
	counter-reset: my-counter;
	list-style: none;
	margin: auto;
	width: ${props => props.large ? "82%" : "70%"};

	li {
	  margin: 0 0 0.4em 0;
	  counter-increment: my-awesome-counter;
	  position: relative;
	  color: ${props => props.inverse ? "black" : "black"};
	  font-size: ${props => props.large ? "2em" : "1.1em"};
	  background-color: ${props => props.inverse ? "#fd0" : "#ffffe0"};
	  border: ${props => props.inverse ? "10px solid #fd0" : "10px solid black"};
	  border-radius: 0px 30px 0px 30px;
	  padding: 40px 30px 40px 80px;
	  line-height: 1.2em;
	  z-index: 2;
	  min-width: 400px;

	}

	li::before {
		  content: counter(my-awesome-counter);
		  color: ${props => props.inverse ? "black" : "#ff00b4"};
		  padding: 0em 0.4em 0.1em 0.8em;
		  font-size: 1em;
		  font-weight: 700;
		  position: absolute;
		  left: -90.25px;
		  top: 30px;
		  background: ${props => props.inverse ? "#ff00b4" : "black"};
		  border-radius: 10% 0 0 10%;
		  border-top: ${props => props.inverse ? "5px solid #ff00b4" : "5px solid black"};
		  text-align: center;
		  z-index: 1;
	}


`;


export default FancyList;