import React from "react";

export default function Alumno(props){


    console.log(props);
   

    return(
        
       
        <div>
            <h2>Examen</h2>

            <table>
            <tbody>
                   
          
                         <tr> <td>Identidad </td><td> {props.a1.identidad}</td> </tr> 
                         <tr> <td>Nombre </td><td>{props.a1.nombre }</td> </tr>
                         <tr> <td>Nacimiento </td><td> {props.a1.nacimiento }</td> </tr> 
                         <tr> <td>Notas</td><td>{props.a1.nota_promedio }</td> </tr> 



                         <br/><br/><br/>
                         <tr> <td>Identidad </td><td> {props.a2.identidad}</td> </tr> 
                         <tr> <td>Nombre </td><td>{props.a2.nombre }</td> </tr>
                         <tr> <td>Nacimiento </td><td> {props.a2.nacimiento }</td> </tr> 
                         <tr> <td>Notas</td><td>{props.a2.nota_promedio }</td> </tr> 
                        
                        <br/><br/><br/>
                        <tr> <td>Identidad </td><td> {props.a3.identidad}</td> </tr> 
                         <tr> <td>Nombre </td><td>{props.a3.nombre }</td> </tr>
                         <tr> <td>Nacimiento </td><td> {props.a3.nacimiento }</td> </tr> 
                         <tr> <td>Notas</td><td>{props.a3.nota_promedio }</td> </tr> 
                        
                         

                         </tbody>
            </table>
            
            </div>             
                         
                        
           
                         )
                     }