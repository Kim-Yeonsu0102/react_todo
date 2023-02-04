import Todo from "./components/Todo";
import Calendar from "./components/Calendar";
import "./styles/Common.css";
import { useEffect } from "react";


function App() {

	return (
		<div className="App">
			<header>
				<h1>
					<img className="logo" alt="My Todo List" src="img/logo.png" />
				</h1>
				<Calendar />
			</header>
			<section>
				<Todo />
			</section>
			<footer>
				<p>Copyright 2022. 김연수 all rights reserved.</p>
			</footer>
		</div>
	);
}

export default App;
