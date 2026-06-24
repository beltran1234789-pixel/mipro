import { Link } from "react-router-dom"

function Nav (){
    return(
        <nav class="navbar navbar-expand-lg bg-body-tertiary nav">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">MJBE_Bikes</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Reportes/Novedades</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Gestionar Producto
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Crear Producto</a></li>
                        <li><a class="dropdown-item" href="#">Actualizar Producto</a></li>
                        <li><a class="dropdown-item" href="#">Eliminar Producto</a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Gestionar Empleados
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Crear Empleados</a></li>
                        <li><a class="dropdown-item" href="#">Actualizar Empleados</a></li>
                        <li><a class="dropdown-item" href="#">Eliminar Empleados</a></li>
                    </ul>
                </li>
            </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
        </nav>
    )
}
export default Nav