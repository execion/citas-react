import React, { Fragment, useState } from "react";
import {v4 as uuid} from 'uuid';

const Formulario = ({createCite}) => {

    // Creando State para las citas
    const [cite, setCite] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    const [error, setError] = useState(false);

    //Lee lo que el usuario escribe en los inputs
    const citeChange = e => {
        
        setCite({
            ...cite,
            [e.target.name]: e.target.value
        });
    }

    // Extrae los valores en el formulario

    const { mascota, propietario, fecha, hora, sintomas } = cite;

    //Evento para envio de formulario

    const submitCite = e => {
        e.preventDefault();

        //Validación
        if (
            mascota.trim() === "" || 
            propietario.trim() === "" ||
            fecha.trim() === "" ||
            hora.trim() === "" ||
            sintomas.trim() === ""
        ) {
            setError(true);
            return;
        }
        //Eliminar el mensaje previo
        setError(false);

        //Asignar un ID
        cite.id = uuid();

        //Crear la cita
        createCite(cite);

        //Reiniciar el formulario
        setCite({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        });
    }

    return (
        <Fragment>
            <h2>Reserva tu cita</h2>

            { error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null }

            <form
                onSubmit={submitCite}
            >
                <label htmlFor="">Mascota:</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre de la mascota"
                    onChange={citeChange}
                    value={mascota}
                />

                <label htmlFor="">Dueño:</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Ingrese su nombre"
                    onChange={citeChange}
                    value={propietario}
                />

                <label htmlFor="">Fecha:</label>
                <input 
                    type="date" 
                    name="fecha" 
                    className="u-full-width" 
                    onChange={citeChange}
                    value={fecha}
                />

                <label htmlFor="">Hora:</label>
                <input 
                    type="time" 
                    name="hora" 
                    className="u-full-width" 
                    onChange={citeChange}
                    value={hora}
                />

                <label htmlFor="">Síntomas:</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={citeChange}
                    value={sintomas}
                ></textarea>

                <button
                    className="u-full-width button-primary"
                    type="submit"
                >Citar</button>
            </form>
        </Fragment>
    );
};

export default Formulario;
