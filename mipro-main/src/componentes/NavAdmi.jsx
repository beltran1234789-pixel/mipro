import { Link } from "react-router-dom";

function NavAdmi() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm py-3">
      <div className="container-fluid px-4">

        {/* Logo */}
        <Link className="navbar-brand fw-bold fs-3" to="/">
          🚲 MJBE Bikes
        </Link>

        {/* Botón responsive */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menú */}
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto ms-4">

            {/* Reportes */}
            <li className="nav-item mx-2">
              <Link className="nav-link text-white" to="/">
                📊 Reportes
              </Link>
            </li>

            {/* Productos */}
            <li className="nav-item dropdown mx-2">
              <Link
                className="nav-link dropdown-toggle text-white"
                to="/Gestion-producto"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                📦 Productos
              </Link>

              <ul className="dropdown-menu shadow border-0 rounded-3">
                <li>
                  <Link className="dropdown-item" to="/CrearProducto">
                    Crear Producto
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/ActualizarProducto">
                    Actualizar Producto
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/EliminarProducto">
                    Eliminar Producto
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/VerProducto">
                    Ver Producto
                  </Link>
                </li>
              </ul>
            </li>

            {/* Empleados */}
            <li className="nav-item dropdown mx-2">
              <Link
                className="nav-link dropdown-toggle text-white"
                to="/Gestion-empleados"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                👥 Empleados
              </Link>

              <ul className="dropdown-menu shadow border-0 rounded-3">
                <li>
                  <Link className="dropdown-item" to="/CrearEmpleado">
                    Crear Empleado
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/ActualizarEmpleado">
                    Actualizar Empleado
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/EliminarEmpleado">
                    Eliminar Empleado
                  </Link>
                </li>
              </ul>
            </li>

          </ul>

          {/* Buscador */}
          <form className="d-flex" role="search">

            <input
              className="form-control rounded-pill me-2"
              type="search"
              placeholder="Buscar..."
            />

            <button
              className="btn btn-light rounded-pill px-4 fw-semibold"
              type="submit"
            >
              Buscar
            </button>

          </form>

        </div>
      </div>
    </nav>
  );
}

export default NavAdmi;