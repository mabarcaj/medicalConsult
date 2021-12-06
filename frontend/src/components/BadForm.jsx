import React, { Fragment, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export function BadForm() {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const onSubmit = (data, e) => {
		// do things
		console.log(data);
		e.target.reset(); // no funca parece
	};

	const state = {
		details: [],
	};

	useEffect(() => {
		let data;
		axios
			.get("http://localhost:8000/api/doctor/")
			.then((res) => {
				data = res.data;
				console.log(data);
				this.setState({
					details: data,
				});
			})
			.catch((err) => console.log(err));
	});

	return (
		<Fragment>
			<h1>Solicitar Consulta</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="form-group">
					<label className="pt-2">Primer Nombre</label>
					<span className="text-danger text-small d-block mb-2">
						{errors?.primerNombre?.message}
					</span>
					<input
						name="primerNombre"
						placeholder="Ej: Juan"
						className="form-control my-2"
						{...register("primerNombre", {
							required: {
								value: true,
								message: "Por favor ingrese su primer nombre",
							},
						})}
					/>

					<label className="pt-2">Segundo Nombre</label>
					<span className="text-danger text-small d-block mb-2">
						{errors?.segundoNombre?.message}
					</span>
					<input
						name="segundoNombre"
						placeholder="Ej: Raul"
						className="form-control my-2"
						{...register("segundoNombre", {
							required: {
								value: true,
								message: "Por favor ingrese su segundo nombre",
							},
						})}
					/>

					<label className="pt-2">Apellido Paterno</label>
					<span className="text-danger text-small d-block mb-2">
						{errors?.apellidoPaterno?.message}
					</span>
					<input
						name="apellidoPaterno"
						placeholder="Ej: Perez"
						className="form-control my-2"
						{...register("apellidoPaterno", {
							required: {
								value: true,
								message:
									"Por favor ingrese su apellido paterno",
							},
						})}
					/>

					<label className="pt-2">Apellido Materno</label>
					<span className="text-danger text-small d-block mb-2">
						{errors?.apellidoMaterno?.message}
					</span>
					<input
						name="apellidoMaterno"
						placeholder="Ej: González"
						className="form-control my-2"
						{...register("apellidoMaterno", {
							required: {
								value: true,
								message:
									"Por favor ingrese su apellido materno",
							},
						})}
					/>

					<label className="pt-2">RUT</label>
					<span className="text-danger text-small d-block mb-2">
						{errors?.rut?.message}
					</span>
					<input
						name="rut"
						placeholder="1234567-8"
						className="form-control my-2"
						{...register("rut", {
							required: {
								value: true,
								message: "Por favor ingrese su rut",
							},
						})}
					/>

					<label className="pt-2">Edad</label>
					<span className="text-danger text-small d-block mb-2">
						{errors?.edad?.message}
					</span>
					<input
						type="number"
						name="edad"
						placeholder="Ej: 21"
						className="form-control my-2"
						{...register("edad", {
							required: {
								value: true,
								message: "Por favor ingrese su edad",
							},
							min: {
								value: 18,
								message:
									"Debe ser mayor de edad para solicitar una consulta",
							},
						})}
					/>

					<label className="pt-2">Sexo</label>
					<span className="text-danger text-small d-block mb-2">
						{errors?.sexo?.message}
					</span>
					<select
						name="sexo"
						className="form-control my-2"
						{...register("sexo", {
							required: {
								value: true,
								message: "Por favor seleccione su sexo",
							},
						})}
					>
						<option value="M">Masculino</option>
						<option value="F">Femenino</option>
						<option value="X">Otro</option>
					</select>

					<label className="pt-2">Nombre del Médico</label>
					<span className="text-danger text-small d-block mb-2">
						{errors?.nombreMedico?.message}
					</span>
					{state.details.map((val) => (
						<h1>v</h1>
					))}

					<label className="pt-2">Fecha para Solicitud</label>
					<span className="text-danger text-small d-block mb-2">
						{errors?.fechaConsulta?.message}
					</span>
					<input
						type="date"
						name="fechaConsulta"
						className="form-control my-2"
						{...register("date", {
							required: {
								value: true,
								message: "Por favor ingrese una fecha",
							},
							valueAsDate: {
								value: true,
								message: "Por favor ingerese una fecha válida",
							},
						})}
					/>

					<label className="pt-2">Hora para Solicitud</label>
					<span className="text-danger text-small d-block mb-2">
						{errors?.horaConsulta?.message}
					</span>
					<input
						type="time"
						name="horaConsulta"
						placeholder="HH:MM"
						className="form-control my-2"
						{...register("time", {
							required: {
								value: true,
								message: "Por favor ingrese una hora válida",
							},
						})}
					/>

					<label className="pt-2">Correo</label>
					<span className="text-danger text-small d-block mb-2">
						{errors?.email?.message}
					</span>
					<input
						type="email"
						name="email"
						className="form-control my-2"
						{...register("email", {
							required: {
								value: true,
								message: "Por favor su correo",
							},
						})}
					/>

					<button className="btn btn-primary">Enviar</button>
				</div>
			</form>
		</Fragment>
	);
}
