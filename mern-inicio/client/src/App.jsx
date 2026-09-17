/*import "./App.css";

function App(){
  const materia = "Diseño y Desarrollo de Apps Web";
  const parcial = 3;
  return (
    <main>
      <h1>Gestor de tareas </h1>
      <p>Aplicacion en React</p>
      <p>Materia: {materia}</p>
      <p>Parcial: {parcial}</p>
      <p>4x5 = {4 * 5}</p>

    </main>
  );
}

export default App;*/

import "./App.css";

function App() {
  // Datos de la venta del auto
  const marca = "Toyota";
  const modelo = "Corolla 2026";
  const precio = 385000;
  const enganche = 100000;
  const mensualidades = 24;

  // Cálculos
  const saldo = precio - enganche;
  const pagoMensual = saldo / mensualidades;
  const precioConEnganche = enganche + saldo;

  return (
    <main>
      <h1>Diseño y Desarrollo de Apps Web</h1>

      <h2>Luis Javier Hernández Bautista</h2>

      <h2>Venta de Autos</h2>

      <p>Marca: {marca}</p>
      <p>Modelo: {modelo}</p>
      <p>Precio: ${precio}</p>
      <p>Enganche: ${enganche}</p>
      <p>Mensualidades: {mensualidades}</p>

      <h2>Plan de pago</h2>

      <p>
        Saldo restante: ${precio} - ${enganche} = ${saldo}
      </p>

      <p>
        Pago mensual: ${saldo} ÷ {mensualidades} = $
        {pagoMensual.toFixed(2)}
      </p>

      <p>
        Precio total: ${enganche} + ${saldo} = $
        {precioConEnganche}
      </p>
    </main>
  );
}

export default App;