import "./App.css";
import Boton from "./componentes/Boton";
import Pantalla from "./componentes/Pantalla";
import BotonClear from "./componentes/BotonClear";
import { EliminarUltimoCaracter } from "./componentes/EliminarUltimoCaracter";
import { Logo } from "./componentes/Logo"
import { useState } from "react";
import { evaluate } from 'mathjs'; 
import toast, { Toaster } from 'react-hot-toast';


let indicador = true;


function App() {
  
  const [input, setInput] = useState('');
 
  const agregarInput = valor => {
    setInput(input + valor);
  };
  
  const calcularResultado = () => {

    const inputNopermitidos = input.match((/[^0-9+*/-]/g));
  
    if (inputNopermitidos ) {
      toast.error("Por favor ingrese valores validos");
    }
    else{
      setInput(input.replace(/[^0-9+*/-]/g, ''));
      if(input){
        setInput(evaluate(input)); 
        indicador = false;
      }
      else{
        toast.error("Por favor ingrese valores para calcular");
      }
    }
    
  };

  const EliminarCaracter = () => {
    if (indicador) {
      setInput(input.slice(0, -1));
    }
  };
  if (input == '') {
    indicador = true;
  }
  const agregarInputTeclado = (Newinput) => {
    setInput(Newinput);
  };

  return (
    <div className="App">
      <Toaster
      position="top-center"
      reverseOrder={false}
      />
      <Logo/>
      <div className="contenedor-calculadora">
        <Pantalla
         input={input}
         NuevoInput={agregarInputTeclado}/>

        <div className="fila">
          <EliminarUltimoCaracter 
            manejarBorrarCaracter={EliminarCaracter}>
              C
          </EliminarUltimoCaracter>
          
          <BotonClear manejarClear={() => setInput('') }>
            Clear
          </BotonClear>
        </div>

        <div className="fila">
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>

        <div className="fila">
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>

        <div className="fila">
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>

        <div className="fila">
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        
      </div>
    </div>
  );
}

export default App;
