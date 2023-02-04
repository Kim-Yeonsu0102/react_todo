import propTypes from 'prop-types';
import {useRef} from "react"
import { RiDeleteBin2Line } from "react-icons/ri";
import { RiHeartAddFill } from "react-icons/ri";
import 'remixicon/fonts/remixicon.css'
import styled,{css} from 'styled-components';
import btn from '../styles/btn';
import itemListDone from '../styles/itemListDone';

function TodoItem({ text, removeHandler,doneHandler , done }) {
  const item =useRef()

	const ListContainer =styled.li`
	display: block;
  width:98%;
  margin: 0 auto ;
	`
	const ListArea =styled.div`
		width: 100%; 
  /* border-bottom: 1px dashed #fff; */
  padding: 10px 0;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: nowrap;
  color:#5d5d79;
	`

const ItemBtn = styled.button`
	border: none;
  background: transparent;
  width: 15%;
  vertical-align: bottom;
`

  const DoneBtn = styled(RiHeartAddFill)`
    ${btn}
  `
  const DelBtn = styled(RiDeleteBin2Line)`
    ${btn}
  `



  const Text = styled.span`
    width:100%; 
    background: ${({done}) => {
    console.log()
    return `${done} ? ${itemListDone}: '#f5f5f5'`}} ;
  `

	return (
  <ListContainer  >
		<ListArea >			
				- <Text ref={item} done = {done}>{text}</Text> 
        


        <ItemBtn type="button"  onClick={doneHandler}>
					<DoneBtn />
				</ItemBtn>	
				<ItemBtn type="button"  onClick={removeHandler}>
					<DelBtn />
				</ItemBtn>	
		</ListArea>
    </ListContainer>
	);
}

TodoItem.propTypes = {
	text: propTypes.string.isRequired,  
	removeHandler: propTypes.func.isRequired,
	doneHandler :  propTypes.func.isRequired,
	done:propTypes.bool.isRequired,
};

export default TodoItem;
