export default function PanelFiltros({ listaGeneros, generoSeleccionado, setGeneroSeleccionado, cerrarFiltros }) {
  return (
    <div className="absolute top-16 right-6 w-72 bg-gray-800 rounded-xl shadow-lg p-4 z-20">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold">Filtros</h2>
        <button
          onClick={cerrarFiltros}
          className="text-gray-400 hover:text-red-500"
        >
          ✖
        </button>
      </div>

    <div className="flex flex-wrap justify-start mb-4">
    <button
    className={`px-4 py-2 m-1 rounded-full font-semibold transition-all duration-300 ${
      generoSeleccionado === null ? "bg-red-600 text-white shadow-lg scale-105" : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:scale-105"
    }`}
    onClick={() => setGeneroSeleccionado(null)}
    >
    Populares
    </button>

    {listaGeneros.map((g) => (
    <button
      key={g.id}
      className={`px-4 py-2 m-1 rounded-full font-semibold transition-all duration-300 ${
        generoSeleccionado === g.id ? "bg-red-600 text-white shadow-lg scale-105" : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:scale-105"
      }`}
      onClick={() => setGeneroSeleccionado(g.id)}
    >
      {g.name}
    </button>
    ))}
    </div>
    </div>
  );
}