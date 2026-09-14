import Producto from "../models/producto.js";

export const obtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (error) {
    res
      .status(500)
      .json({ mensaje: "Error al obtener productos", error: error.message });
  }
};

export const crearProducto = async (req, res) => {
  try {
    const { nombre, categoria, precio, existencia } = req.body;

    if (!nombre || nombre.trim() === "") {
      return res.status(400).json({ mensaje: "El nombre es obligatorio" });
    }
    if (!categoria || categoria.trim() === "") {
      return res.status(400).json({ mensaje: "La categoría es obligatoria" });
    }
    if (precio == null || precio < 0) {
      return res
        .status(400)
        .json({ mensaje: "El precio debe ser mayor o igual a 0" });
    }
    if (existencia == null || existencia < 0) {
      return res
        .status(400)
        .json({ mensaje: "La existencia debe ser mayor o igual a 0" });
    }

    const nuevoProducto = new Producto({
      nombre: nombre.trim(),
      categoria: categoria.trim(),
      precio,
      existencia,
    });

    const productoGuardado = await nuevoProducto.save();

    res
      .status(201)
      .json({
        mensaje: "Producto creado correctamente",
        producto: productoGuardado,
      });
  } catch (error) {
    res
      .status(400)
      .json({ mensaje: "Error al crear producto", error: error.message });
  }
};
