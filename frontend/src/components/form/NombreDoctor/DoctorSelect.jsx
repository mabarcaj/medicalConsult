import React, { Fragment } from "react";
import { DoctorOption } from "./DoctorOption";

export function DoctorSelect({ doctors }) {
	return (
		<Fragment>
			<label class="sr-only">Primer Nombre</label>
			<select
				name="nombreDoctor"
				id="doctorName"
				className="form-control my-2"
			>
				{doctors.map((doctor) => (
					<DoctorOption key={doctor.id} doctor={doctor} />
				))}
			</select>
		</Fragment>
	);
}
