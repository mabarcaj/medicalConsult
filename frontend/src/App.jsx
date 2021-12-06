import React from "react";
import { Form } from "./components/form/Form";
import { Header } from "./components/layout/Header";

export function App() {
	return (
		<div>
			<Header />
			<div className="container-fluid mt-5">
				<Form />
			</div>
		</div>
	);
}
