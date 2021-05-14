import './App.css';
import Alumno from "./componentes/Alumno";




const o_alumno1 ={
  identidad:"0801199078780",
nombre:"Alexi Mondragon",
nacimiento:"6 de Diciembre",
nota_promedio:"90"
};

  const o_alumno2 ={
    identidad:"0712188078780",
  nombre:"Alonzo Molina",
  nacimiento:"6 de Agosto",
  nota_promedio:"90"
 };

    const o_alumno3 ={
      identidad:"0801198071180",
    nombre:"Alina Juarez",
    nacimiento:"6 de Enero",
    nota_promedio:"90"
      };

  

function App() {
  return (
    <div className="App">
      <header className="App-header">

      <Alumno a1={o_alumno1}
      Alumno a2={o_alumno2}
      Alumno a3={o_alumno3}
            
        />

       
      </header>
    </div>
  );
}

export default App;
