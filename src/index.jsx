import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Formulario from "./components/Formulario";
import Cite from "./components/Cite";
import { useEffect } from "react";

const App = () => {

    //Cites in LocalStorage
    let citesInits = JSON.parse(localStorage.getItem("cites"));

    if(!citesInits) {
        citesInits = [];
    }

  //Arreglo de citas
    const [cites, setCites] = useState(citesInits);

  //Toma las citas y le agrega una nueva
    const createCite = cite => {
        setCites([
            ...cites,
            cite
        ]);
    }

    useEffect( () => {
        if(citesInits) {
            localStorage.setItem('cites', JSON.stringify(cites));
        } else {
            localStorage.setItem('cites', JSON.stringify([]));
        }
    }, [cites, citesInits]);

  //Funcion que elimina una cita por medio de su id
    const deleteCite = id => {
        const newCites = cites.filter( cite => cite.id !== id);
        setCites(newCites);
    }

    //
    const titleForm = cites.length === 0 ? 'No hay citas': "Administrar las citas";

    return ( 
    <Fragment>
        <h1>Administrador de Pacientes</h1>

        <div className="container">
            <div className="row">
                <div className="one-half column">
                    <Formulario 
                        createCite={createCite}
                    />
                </div>

                <div className="one-half column">
                    <h2>{titleForm}</h2>

                    {cites.map(cite => (
                    <Cite
                        key={cite.id}
                        cite={cite}
                        deleteCite={deleteCite} 
                    />
                    ))}
                </div>
            </div>
        </div>
    </Fragment>
    );
};

ReactDOM.render(
    <React.StrictMode>
    <App />
    </React.StrictMode>,
    document.getElementById("root")
);
