

function FooterComponent() {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <p className="text-2xl font-semibold">Contacto</p>
                    <p className="text-gray-400">Correo: ejemplo@prestamos.com</p>
                    <p className="text-gray-400">Teléfono: +1 123-456-7890</p>
                </div>
                <div className="text-center">
                    <p className="text-2xl font-semibold">Enlaces útiles</p>
                    <ul className="mt-2">
                        <li>
                            <a
                                href="#inicio"
                                className="text-gray-400 hover:text-white transition duration-300"
                            >
                                Inicio
                            </a>
                        </li>
                        <li>
                            <a
                                href="#servicios"
                                className="text-gray-400 hover:text-white transition duration-300"
                            >
                                Servicios
                            </a>
                        </li>
                        <li>
                            <a
                                href="#solicitud"
                                className="text-gray-400 hover:text-white transition duration-300"
                            >
                                Solicitud de Préstamo
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="text-center mt-8">
                <p className="text-gray-400">&copy; {new Date().getFullYear()} Tu Compañía de Préstamos</p>
            </div>
        </footer>
    );
};

export default FooterComponent;
