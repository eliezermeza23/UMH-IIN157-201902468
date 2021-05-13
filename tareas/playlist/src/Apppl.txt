
import './App.css';
import Cancion from "./componentes/Cancion";

//const v_titulo="Tu Amor";
//const v_duracion="3:22s"
//const v_album="Me Desespero";
//const v_numero="235"
//const v_fechadecreacion="6/07/2020";

const o_playlista ={
  titulo:"Tu Amor",
duracion:"3:22s",
album:"Me Desespero",
numero:"235",
fechadecreacion:"6/07/2020"
  };

  const f_titulo= (props) => {
    alert("El titulo de la cancion es " + props);
  
  }

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
          
          <Cancion pl={o_playlista}
            fntitulo= {f_titulo}
          />
          
       
      </header>
    </div>
  );
}

export default App;
