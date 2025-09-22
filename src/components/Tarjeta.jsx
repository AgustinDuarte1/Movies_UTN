import { useState } from "react";

export default function Tarjeta({ title, image, descripcion }) {
  const [mostrarDescripcion, setMostrarDescripcion] = useState(false);

  return (
   <div
  className="relative w-full sm:w-72 bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transform transition-transform duration-300 cursor-pointer"
  onClick={() => setMostrarDescripcion(!mostrarDescripcion)}
>
    <img
    src={image}
    alt={title}
    className="w-full h-96 object-cover"
    />

      <div className="absolute bottom-0 w-full bg-gradient-to-t from-gray-900 via-transparent p-4">
        <h3 className="text-white font-bold text-lg">{title}</h3>
      </div>

      {mostrarDescripcion && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-90 p-4 text-white overflow-y-auto">
          <h3 className="font-bold text-xl mb-2">{title}</h3>
          <p className="text-sm">{descripcion || "Sin descripción disponible."}</p>
          <p className="mt-4 text-gray-400 text-xs">Click para cerrar</p>
        </div>
      )}
    </div>
  );
}