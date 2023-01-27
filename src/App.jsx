import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Nav from "./components/Nav";
import ToDoContainer from "./components/ToDoContainer";

function App() {
	return (
		<div className="bg-neutral-900 h-screen w-screen">
			<ToDoContainer />
		</div>
	);
}

export default App;
