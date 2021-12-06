import React, { Fragment } from "react";
import { PrimerNombre } from "./PrimerNombre";
import { SegundoNombre } from "./SegundoNombre";
import { ApellidoPaterno } from "./ApellidoPaterno";
import { ApellidoMaterno } from "./ApellidoMaterno";

export function Form() {
	return (
		<Fragment>
			<div className="col-sm-10 offset-sm-1 text-center">
				<h1>Formulario Atención Médica</h1>
				<form>
					<PrimerNombre />
					<SegundoNombre />
					<ApellidoPaterno />
					<ApellidoMaterno />
				</form>
			</div>
		</Fragment>
	);
}
