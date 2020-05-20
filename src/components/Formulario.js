import React, { useContext, useState, Fragment } from 'react';
import Error from "./Error"; 
import { CategoriasContext } from '../context/CategoriasContext';
import { RecetasContext } from '../context/RecetasContext'; 

const Formulario = () => {

    const [busqueda, guardarBusqueda] = useState({
        nombre:'',
        categoria:''
    });
   // const [error, guardarError] = useState(false); 

    const { categorias } = useContext(CategoriasContext);
    const {error, guardarError, buscarRecetas, guardarConsultar } = useContext(RecetasContext); 

    // Función para leer los contenidos

    const obtenerDatosReceta = e => {
        
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    const buscar = e => {
        e.preventDefault();

        if(busqueda.nombre.trim() === "" || busqueda.categoria.trim() === "") {
            guardarError(true);
            return;
        }
        guardarError(false); 
        buscarRecetas(busqueda); 
        guardarConsultar(true);
    }
    
    

    return (
        <Fragment>

        <form
            className="col-12"
            onSubmit={buscar}
            >
            <fieldset className="text-center">
                <legend>Busca bebidas por Categoría o Ingrediente</legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input 
                    name="nombre"
                    className="form-control"
                    type="text"
                    placeholder="Buscar por Ingrediente"
                    onChange={obtenerDatosReceta}
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="categoria"
                        onChange={obtenerDatosReceta}
                        >
                        <option value="">-- Selecciona Categoría --</option>
                        {categorias.map(categoria =>(
                            <option 
                            key={categoria.strCategory}
                            value={categoria.strCategory}
                            >{categoria.strCategory}</option>
                            ))}

                    </select>
                </div>
                <div className="col-md-4">
                    <input 
                    type="submit"
                    className="btn btn-block btn-info"
                    value="Buscar Bebidas"
                    />
                </div>
            </div>
        </form>
        { error ? <Error mensaje="Campos incompletos"/> : null }
    </Fragment>

);
};

export default Formulario;