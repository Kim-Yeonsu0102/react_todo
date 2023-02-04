import { useState, useRef, useEffect } from 'react';
import TodoItem from './TodoItem';
// import '../styles/todoForm.css';
import { RiAddCircleFill } from "react-icons/ri";
import 'remixicon/fonts/remixicon.css'
import { v4 as uuidv4 } from "uuid";
import styled from 'styled-components';

const LOCAL_KEY = "todos"
function Todo() {
	const [todoList, setTodoList] = useState([]);

	const {localStorage} = window;
	useEffect(()=>{
		if(!localStorage.getItem(LOCAL_KEY)){
			localStorage.setItem(LOCAL_KEY, JSON.stringify(todoList))
		}else{
			setTodoList(prevTodo =>{
				console.log("hi")
				return JSON.parse(localStorage.getItem(LOCAL_KEY))
			})
		}
	},[])

	useEffect(()=>{
		localStorage.setItem(LOCAL_KEY , JSON.stringify(todoList))
	},[todoList])

	const newTodo = useRef();
	const addBtn = useRef();

	const onSubmitHandler = (event) => {
    let newTodoList = newTodo.current.value;	
		setTodoList((prevTodo) => [...prevTodo, {
      text: newTodoList,
      id : uuidv4(),
      done: false,      
    }]);   
    event.preventDefault();
    newTodo.current.value = ''    
	};

  const removeHandler = (id) => {
  setTodoList((previousTodo) =>
    previousTodo.filter((item) => item.id !== id)
  );
  };
const doneHandler = (id) => {
	setTodoList((prevTodo)=>
	prevTodo.map((item)=>
	id===item.id ? {
		...item, done : !item.done
	} : item ))
}
	const TodoContainer = styled.div`
		  width:70%;
  display: flex;
  flex-direction: column;
	`
	const FormContainer = styled.form`
		  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-between;
  align-items: flex-start;
	`
	const AddForm = styled.input`
		width: 80%;
  height: 35px;
  border: none;
  border-radius: 0 30px 30px 0;
  border-left: 18px solid #bdbdbd;
  font-size: 1.4em;
  padding: 10px 10px;
  margin-bottom:30px;
  font-family: 'GmarketSansMedium';
	&:focus  {border-left: 18px solid #5d5d79};
	&:focus-visible{
  outline :none;
  border-left: 18px solid #5d5d79
}
	`
	const CustomAddBtn =styled(RiAddCircleFill)`
	display: inline-block;
    width: 100%;
    height: 60px;
    border: none;
    color: #5d5d79;
    cursor: pointer;
    margin-top: -3px;

&:hover{
  color:#777;

}
	`

	const ListContainer =styled.ul`	
	display: block;
	width:98%;
	margin: 0 auto ;
	`
	
	

	return (
		<TodoContainer >
			<FormContainer onSubmit={onSubmitHandler} >
				<AddForm ref={newTodo} type="text" placeholder='할 일 입력'  />
				<button ref={addBtn} type="submit" style={{border: 'none',  background: 'transparent'}}  >
				<CustomAddBtn />
        </button>
			
			</FormContainer>
			<ListContainer >
				{todoList.map((item) => {
          const {id, text, done} = item ; 
          return <TodoItem text={text} key={id} removeHandler={()=>removeHandler(id) } doneHandler={()=>doneHandler(id)} done = {done}/>}
				)}
			</ListContainer>
		</TodoContainer>
	);
}

export default Todo;
