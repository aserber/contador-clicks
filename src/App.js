import './App.css';
import Boton from './componentes/Boton'
import Contador from './componentes/Contador'
import dibujo1 from './imagenes/Imagen1.png';
import { useState } from 'react';



function App() {

  const [numClicks, setNumClicks] = useState(0); 

  const manejarClick = () => {
    setNumClicks (numClicks + 1);
  }

  const menosClick = () => {
    setNumClicks (numClicks - 1);
  }

  const reiniciarContador = () => {
    setNumClicks(0);
  }

  return (
    <div className="App">
      <div className='logo-contenedor'>
      <img className='logo' src={dibujo1}
      alt= 'Logo'/>
      </div>
        <div className='contenedor-principal'>
          <Contador numClicks={numClicks} />
          <Boton texto='Click'
            esBotonDeClick={true}
            manejarClick={manejarClick}/>
            <Boton texto='-1'
            esBotonDeClick={true}
            manejarClick={menosClick}/>
          <Boton
            texto='Reiniciar'
            esBotonDeClick={false}
            manejarClick={reiniciarContador}/>
        </div>      
    </div>
  );
}

export default App;
