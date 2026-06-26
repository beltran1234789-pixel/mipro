import { BrowserRouter, Routes, Route } from "react-router-dom"

import Inicio from "./vistaAdmi/Inicio"
import CrearProducto from "./vistaAdmi/gestionDeProducto/CrearProducto"
import ActualizarProducto from "./vistaAdmi/gestionDeProducto/ActualizarProducto"
import EliminarProducto from "./vistaAdmi/gestionDeProducto/EliminarProducto"
import VerProductos from "./vistaAdmi/gestionDeProducto/VerProductos"

function App() {
  return (


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/CrearProducto" element={<CrearProducto />} />
          <Route path="/ActualizarProducto" element={<ActualizarProducto />} />
          <Route path="/EliminarProducto" element={<EliminarProducto />} />
          <Route path="/VerProductos" element={<VerProductos/>} />
        </Routes>
      </BrowserRouter>

  )
}

export default App