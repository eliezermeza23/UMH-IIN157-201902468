import React from "react";

export default function Cancion(props){


    console.log(props);

    return(
        <div>
            <h2>Hot Playlist </h2>

            <table>
            <tbody>
                   
          
                         <tr> <td>Titulo:</td><td> {props.pl.titulo }</td> </tr> 
                         <tr> <td>Duracion:</td><td>{props.pl.duracion }</td> </tr>
                         <tr> <td>Album:</td><td> {props.pl.album }</td> </tr> 
                         <tr> <td>Numero:</td><td>{props.pl.numero }</td> </tr> 
                         <tr> <td>Fecha de Creacion:</td><td>{props.pl.fechadecreacion}</td> </tr>
                         <tr> <td>
                         <button onClick={ () => props.fntitulo(props.pl.titulo) } >Nombre de la Cancion</button>
                         </td> </tr>
                         

                         </tbody>
            </table>
        </div>             
                         
                        
           
    )
}