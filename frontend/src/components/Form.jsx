import React, { Fragment, useState } from 'react';


export  function Form() {


    return (
        <Fragment>
            <h1>Solicitar Consulta</h1>
            <form>
                <label className="pt-2">Primer Nombre</label>
                <input
                    name="primerNombre"
                    placeholder="Ej: Juan"
                    className="form-control my-2"
                />

                <label className="pt-2">Segundo Nombre</label>
                <input
                    name="segundoNombre"
                    placeholder="Ej: Raul"
                    className="form-control my-2"
                />

                <label className="pt-2">Apellido Paterno</label>
                <input
                    name="apellidoPaterno"
                    placeholder="Ej: Perez"
                    className="form-control my-2"
                />

                <label className="pt-2">Apellido Materno</label>
                <input
                    name="apellidoMaterno"
                    placeholder="Ej: González"
                    className="form-control my-2"
                />

                <label className="pt-2">Edad</label>
                <input
                    type="number"
                    name="edad"
                    placeholder="Ej: 21"
                    className="form-control my-2"
                />

                
                <label className="pt-2">Sexo</label>
                <input
                    name="sexo"
                    placeholder="Ej: Masculino"
                    className="form-control my-2"
                />

                <label className="pt-2">Nombre del Médico</label>
                <input
                    name="nombreMedico"
                    placeholder="Ej: Dr. Juan Salinas"
                    className="form-control my-2"
                />


                <label className="pt-2">Fecha para Solicitud</label>
                <input
                    type="date"
                    name="fechaConsulta"
                    className="form-control my-2"
                />
                
                
                <label className="pt-2">Hora para Solicitud</label>
                <input
                    type="time"
                    name="horaConsulta"
                    className="form-control my-2"
                />


                <label className="pt-2">Correo</label>
                <input
                    type="email"
                    name="fechaConsulta"
                    className="form-control my-2"
                />
            </form>
        </Fragment>
    )
}
