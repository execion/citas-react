import React from 'react'

const Cite = ({cite, deleteCite}) =>  ( 
    <div className="cita">
        <p>Mascota <span>{cite.mascota}</span></p>
        <p>Dueño <span>{cite.propietario}</span></p>
        <p>Fecha <span>{cite.fecha}</span></p>
        <p>Hora <span>{cite.hora}</span></p>
        <p>Sintomas <span>{cite.mascota}</span></p>

        <button
            className="button eliminar u-full-width"
            onClick={() => deleteCite(cite.id) }
        >Eliminar &times;</button>
    </div>
);

export default Cite; 