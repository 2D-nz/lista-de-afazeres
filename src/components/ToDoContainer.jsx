import React, { useState } from "react";
import { ArrowDown, Check } from "phosphor-react";

function ToDoContainer() {
	const [toDoList, setTodoList] = useState([
		"Ir para o Muay Thai",
		"Cometer crimes de ódio",
	]);

	const [newTodo, setNewTodo] = useState("");
	const handleNewTodo = (e) => {
		setNewTodo(e.currentTarget.value);
	};

	const addTodo = () => {
		if (newTodo.trim() == "") {
			return;
		} else {
			setTodoList((prevState) => [...prevState, newTodo]);
			setNewTodo("");
			console.log(toDoList);
		}
	};

	const removeTodo = (todo) => {
		const withoutTodo = toDoList.filter((todos) => todos !== todo);
		setTodoList(withoutTodo);
	};

	return (
		<div className="grid text-center pt-20">
			<span className="flex justify-center m-5">
				<input
					value={newTodo}
					onChange={handleNewTodo}
					type="text"
					placeholder="Adicione um afazer"
					className="px-4 border-none outline-none"
				/>
				<button
					onClick={addTodo}
					className="bg-violet-800 active:bg-violet-500 border-2 border-violet-500"
				>
					<ArrowDown size={35} />
				</button>
			</span>
			{toDoList.map((todo, index) => {
				return (
					<div id={index} className=" flex justify-center">
						{" "}
						<span
							className="grid  border-2  justify-around space-x-9 my-2 border-violet-500 	items-center  w-72"
							style={{ gridTemplateColumns: "3fr 1fr" }}
						>
							<p className="text-slate-100 "> {todo}</p>{" "}
							<Check
								size={35}
								onClick={() => {
									removeTodo(todo);
								}}
								className="text-violet-300 "
							/>
						</span>
					</div>
				);
			})}
		</div>
	);
}

export default ToDoContainer;
