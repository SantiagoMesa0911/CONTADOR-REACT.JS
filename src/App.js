import "./styles.css";
import { useState } from "react";
import Button from "./components/Button";
import Number from "./components/Number";
export default function App() {
  /* USESTATE ES LO QUE NOS PERMITE RENDERIZAR LA PANTALLA DE NUEVO */
  const [cuenta, setcuenta] = useState(0);
  const [incremento, setincremento] = useState(1);

  const incrementar = (evento) => {
    evento.preventDefault();
    setcuenta(cuenta + parseInt(incremento));
    /* console.log("aumentando"); */
  };
  const disminuir = (evento) => {
    evento.preventDefault();
    setcuenta(cuenta - parseInt(incremento));
    /* console.log("disminuyendo"); */
  };

  const onchange = (evento) => {
    const value = evento.target.value;
    setincremento(value);
  };
  return (
    <div className="App">
      <h1>Hello world</h1>
      <h2>Contador con React js</h2>
      <p> Valor por el cual se va incrementar </p>
      <input type="number" onChange={onchange} value={incremento} />
      <br />
      <br />
      <div>
        <Button onClick={incrementar}>INCREMENTAR</Button>
      </div>
      <br />
      <br />
      <Number value={cuenta} />
      <br />
      <br />
      <div>
        <Button onClick={disminuir}>DISMINUIR</Button>
      </div>
    </div>
  );
}
