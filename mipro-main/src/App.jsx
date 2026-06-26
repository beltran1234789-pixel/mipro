import { BrowserRouter, Routes, Route } from "react-router-dom"

import Inicio from "./vista_admi/Inicio"
import CrearProducto from "./vista_admi/gestion_de_producto/CrearProducto"
import ActualizarProducto from "./vista_admi/gestion_de_producto/ActualizarProducto"
import EliminarProducto from "./vista_admi/gestion_de_producto/EliminarProducto"

function App() {
  return (

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/CrearProducto" element={<CrearProducto />} />
          <Route path="/ActualizarProducto" element={<ActualizarProducto />} />
          <Route path="/EliminarProducto" element={<EliminarProducto />} />
        </Routes>
      </BrowserRouter>

  )
}

export default App