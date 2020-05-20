import React, { useContext, Fragment } from 'react';
import Receta from './Receta';
import { RecetasContext } from '../context/RecetasContext';



const ListaRecetas = () => {

        const { recetas, error } = useContext(RecetasContext);
             console.log(recetas);

    return ( 

        
        <Fragment>
        { error ? null : 
    (<div className="row mt-5">
        {recetas.map( receta => (
        <Receta 
            key={receta.idDrink}
            receta={receta}
        />
        ))} 
    </div>) }
    </Fragment>
    );
       }
export default ListaRecetas;