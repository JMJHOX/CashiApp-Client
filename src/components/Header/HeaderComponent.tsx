
function HeaderComponent() {
    return (
        <header className="bg-blue-500 py-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Título */}
                <h1 className="text-white text-xs font-bold">Solicitud de Préstamos</h1>

                {/* Menú de Navegación */}
                <nav className="space-x-4">
                    <a
                        href="#inicio"
                        className="text-white hover:underline transition duration-300"
                    >
                        Inicio
                    </a>
                    <a
                        href="#servicios"
                        className="text-white hover:underline transition duration-300"
                    >
                        Servicios
                    </a>
                    <a
                        href="#contacto"
                        className="text-white hover:underline transition duration-300"
                    >
                        Contacto
                    </a>
                </nav>

                {/* Botón de Solicitud de Préstamo */}
                <button
                    className="bg-green-500 text-white hover:bg-green-700 px-4 py-2 rounded-md font-semibold transition duration-300"
                >
                    Solicitar Préstamo
                </button>
            </div>
        </header>
    );
};


export default HeaderComponent;