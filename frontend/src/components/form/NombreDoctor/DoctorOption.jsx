import React from "react";

export function DoctorOption({ doctor }) {
	const { id, nombre, apellido, sexo, especialidad } = doctor;
	return <option value={id}>{nombre}</option>;
}
