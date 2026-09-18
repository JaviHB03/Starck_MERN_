import { useState } from "react";
import "./App.css";
import Encabezado from "./components/Encabezado.jsx";
import ListaTareas from "./components/ListaTareas.jsx";
import FormularioTarea from "./components/FormularioTarea.jsx";

function App() {
  // Estado de las tareas
  const [tareas, setTareas] = useState([
    {
      id: 1,
      nombre: "inicio de actividad de react",
      completada: false,
    },
    {
      id: 2,
      nombre: "reporte de react",
      completada: false,
    },
    {
      id: 3,
      nombre: "prueba final de react",
      completada: false,
    },
  ]);

  // Agregar una tarea
  const agregarTarea = (nombre) => {
    const nuevaTarea = {
      id: Date.now(),
      nombre: nombre,
      completada: false,
    };

    setTareas([...tareas, nuevaTarea]);
  };

  // Cambiar el estado de una tarea
  const cambiarEstadoTarea = (id) => {
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.id === id) {
        return {
          ...tarea,
          completada: !tarea.completada,
        };
      }

      return tarea;
    });

    setTareas(tareasActualizadas);
  };

  // Eliminar una tarea
  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter(
      (tarea) => tarea.id !== id
    );

    setTareas(tareasActualizadas);
  };

  // Contar las tareas pendientes
  const tareasPendientes = tareas.filter(
    (tarea) => !tarea.completada
  ).length;

  return (
    <main>
      <Encabezado
        titulo="Gestor de Tareas de septiembre CUH"
        subtitulo="Aplicacion desarrollada en CUH con React en septiembre"
      />

      <section className="gestor">
        <p className="contador">
          Tareas pendientes: <strong>{tareasPendientes}</strong>
        </p>

        <FormularioTarea agregarTarea={agregarTarea} />

        <ListaTareas
          tareas={tareas}
          cambiarEstadoTarea={cambiarEstadoTarea}
          eliminarTarea={eliminarTarea}
        />
      </section>
    </main>
  );
}

export default App;