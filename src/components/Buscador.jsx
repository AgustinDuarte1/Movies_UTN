export default function Buscador({ busqueda, setBusqueda, cerrarBuscador }) {
  return (
    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-4/5 md:w-2/4 flex items-center bg-gray-800 rounded-full shadow-lg px-4 py-2 z-20">
      <input
        type="text"
        placeholder="Buscar película..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)} // 🔹 búsqueda en tiempo real
        className="flex-1 bg-transparent outline-none text-white placeholder-gray-400"
      />
      <button
        onClick={cerrarBuscador}
        className="ml-2 text-gray-400 hover:text-red-500"
      >
        ✖
      </button>
    </div>
  );
}