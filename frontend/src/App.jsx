import React, { Fragment, useState } from "react";
import { BadForm } from "./components/BadForm";
import { Form } from "./components/form/Form";
import { Header } from "./components/layout/Header";

export function App() {
	const [doctors, setDoctors] = useState([
		{
			id: 1,
			nombre: "Juan",
			apellido: "Pérez",
			sexo: "M",
			especialidad: "Medicina General",
		},
		{
			id: 2,
			nombre: "Sofía",
			apellido: "Alba",
			sexo: "F",
			especialidad: "Medicina General",
		},
	]);
	return (
		<Fragment>
			<Header />
			<div className="container-fluid mt-5">
				{/*<Form }doctors={doctors} /> */}
				<BadForm />
			</div>
		</Fragment>
	);
}
