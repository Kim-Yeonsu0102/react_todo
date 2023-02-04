import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { format} from 'date-fns'
import { ko } from 'date-fns/locale'
import { RiChatCheckLine } from "react-icons/ri";
import 'remixicon/fonts/remixicon.css'

const DateContainer = styled.div`
width:50%;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	align-content: space-around;
`;
const StyleYear = styled.p`
width:100%;
	color: #fbd3cb;
	font-size: 1.2em;
	letter-spacing: 10px;	
	padding-left: 16px;
	font-family: 'GmarketSansLight';
	text-align: left;
	display: flex;
	justify-content: space-around;
	align-items: flex-end;
`;
const StyleDate = styled.p`
	width:100%;
	color: #fff;
	font-size: 4em;
	font-weight: 600;
	letter-spacing: -2px;
	margin-top:10px;
	font-family: 'GmarketSansMedium';
	
`;
const StyleDay = styled.p`
	width:100%;
	color: #fbd3cb;
	font-size: 1.2em;
	padding-left: 10px;
	margin-top:8px;
	letter-spacing: 10px;
	font-family: 'GmarketSansLight';
`;

function Calendar() {
  const year = format(new Date(),"yyyy", { locale: ko })
  const month = format(new Date(),"MM", { locale: ko })
  const date = format(new Date(),"dd", { locale: ko })  
  const today = format(new Date(), "eeee", { weekStartsOn: 1 })
  const thisYear = useRef();
	const thisDate = useRef();
	const thisDay = useRef();



	return( 
  <DateContainer>
		<StyleYear ref={thisYear}>{year}<span>-</span>
		<RiChatCheckLine style={{color:'#fff' , fontSize:'2.3rem'} }/>
		</StyleYear> 
		<StyleDate ref={thisDate}>{month}.{date}</StyleDate>
		<StyleDay ref={thisDay}>- {today}</StyleDay>
  </DateContainer>
  );
}

export default Calendar;

