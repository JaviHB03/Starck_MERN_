function Tarea({
  tarea,
  cambiarEstadoTarea,
  eliminarTarea,
}) {
  return (
    <div
      className={`tarea ${
        tarea.completada ? "completada" : ""
      }`}
    >
      <div className="informacion-tarea">
        <input
          type="checkbox"
          checked={tarea.completada}
          onChange={() => cambiarEstadoTarea(tarea.id)}
        />

        <span>{tarea.nombre}</span>
      </div>

      <button
        className="boton-eliminar"
        onClick={() => eliminarTarea(tarea.id)}
      >
        Eliminar
      </button>
    </div>
  );
}

export default Tarea;