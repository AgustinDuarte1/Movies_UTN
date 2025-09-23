import logo from "../assets/munareto.png"; 

export default function Navbar({ irAInicio, alternarBuscador, alternarFiltros }) {
  return (
    <header className="bg-gray-900 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        
        <div className="flex items-center cursor-pointer" onClick={irAInicio}>
    <img
    src={logo}
    alt="Munareto Movies"
    className="h-25 w-25 sm:h-45 sm:w-45 transform transition-transform duration-300 hover:scale-110"
    />
    <h1 className="ml-2 text-xl sm:text-3xl font-extrabold tracking-wide bg-gradient-to-r from-cyan-400 via-yellow-400 to-red-500 text-transparent bg-clip-text animate-pulse">
    Munareto Movies
    </h1>
    </div>

        {/* Botones a la derecha */}
        <nav className="flex space-x-3 sm:space-x-6">
          <button
            onClick={irAInicio}
            className="px-4 py-2 rounded-full bg-red-600 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Populares
          </button>
          <button
            onClick={alternarBuscador}
            className="px-4 py-2 rounded-full bg-gray-700 text-gray-300 font-semibold hover:bg-gray-600 hover:scale-105 transition-transform duration-300"
          >
            Buscar
          </button>
          <button
            onClick={alternarFiltros}
            className="px-4 py-2 rounded-full bg-gray-700 text-gray-300 font-semibold hover:bg-gray-600 hover:scale-105 transition-transform duration-300"
          >
            Filtros
          </button>
        </nav>

      </div>
    </header>
  );
}