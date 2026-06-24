import { BrowserRouter, Routes, Route } from "react-router-dom"

// import GuardarProducto from './vista_admi/gestion_de_producto/guardarProducto'

import Nav from "./componentes/Nav"
import Footer from "./componentes/Footer"

function App() {


  return (
    <>

      <Nav/>

      <main className="main">
        <h1>hola</h1>
      </main>
      
      <Footer/>
    </>
  )
}

export default App