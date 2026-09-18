import { useState } from "react";

function FormularioTarea({ agregarTarea }) {
  const [nombreTarea, setNombreTarea] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();

    if (nombreTarea.trim() === "") {
      return;
    }

    agregarTarea(nombreTarea);

    setNombreTarea("");
  };

  return (
    <form className="formulario" onSubmit={manejarEnvio}>
      <input
        type="text"
        placeholder="Escribe una nueva tarea"
        value={nombreTarea}
        onChange={(e) => setNombreTarea(e.target.value)}
      />

      <button type="submit">
        Agregar tarea
      </button>
    </form>
  );
}

export default FormularioTarea;