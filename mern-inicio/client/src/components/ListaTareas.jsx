import Tarea from "./Tarea.jsx";

function ListaTareas({
  tareas,
  cambiarEstadoTarea,
  eliminarTarea,
}) {
  return (
    <section className="lista-tareas">
      <h2>Listas tareas</h2>

      {tareas.length === 0 ? (
        <p>No hay tareas registradas.</p>
      ) : (
        tareas.map((tarea) => (
          <Tarea
            key={tarea.id}
            tarea={tarea}
            cambiarEstadoTarea={cambiarEstadoTarea}
            eliminarTarea={eliminarTarea}
          />
        ))
      )}
    </section>
  );
}

export default ListaTareas;