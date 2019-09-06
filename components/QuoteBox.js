import React from 'react';
import styled from 'styled-components';


const QuoteBoxWrapper = styled.div`
	position: relative;
	width: ${props => props.large ? "87%" : "74%"};
`;

//left: ${props => props.large ? "6%" : "14%"};

const QuoteBoxContent = styled.div`
	padding: ${props => props.inverse ? "0 10% 3% 40px" : "3% 3% 3% 40px"};
	margin: 0;
	position: relative;
	border-left: ${props => props.inverse ? "12px solid #ffd233" : "12px solid black"};
	border-bottom: ${props => props.inverse ? "12px solid #ffd233" : "12px solid black"};
	border-radius: 0 60px 0 60px;
	text-transform: none;
	font-size: ${props => props.smallwriting ? "1em" : "1.7em"}
	font-weight: 700;
	line-height: 1.3em;
	color: ${props => props.inverse ? "#ff00b4" : "black"};
	background-color: ${props => props.inverse ? "black" : "#FFFFE0"};
	text-align: left;

`;

const QuoteBoxAuthor = styled.div`
	display: inline-block;
	min-width: 800px;
	position: relative;
	top: -12px;
	left: 56%;
	padding: 30px 60px;
	border-radius: 0 40px 40px 0;
	border-top: ${props => props.inverse ? "12px solid #ffd233" : "12px solid black"};
	border-right: ${props => props.inverse ? "12px solid #ffd233" : "12px solid black"};
	border-bottom: ${props => props.inverse ? "12px solid #ffd233" : "12px solid black"};
	font-style: italic;
	font-size: 1.5em;
	text-align: right;
	color: ${props => props.inverse ? "#ffd233" : "black"};
`;


const QuoteBox = ( {children, inverse, author, large, smallwriting} ) => {
	return (
		<QuoteBoxWrapper large={large}>
			<QuoteBoxContent inverse={inverse} smallwriting={smallwriting}>{children}</QuoteBoxContent>
			<QuoteBoxAuthor inverse={inverse}>{author}</QuoteBoxAuthor>
		</QuoteBoxWrapper>
		);
}

export default QuoteBox;