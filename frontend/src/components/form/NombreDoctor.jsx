import React from "react";

export function NombreDoctor({ doctors }) {
	return (
		<div>
			<ul>
				{doctors.map((doctor) => (
					<li>{doctor.nombre}</li>
				))}
			</ul>
		</div>
	);
}
