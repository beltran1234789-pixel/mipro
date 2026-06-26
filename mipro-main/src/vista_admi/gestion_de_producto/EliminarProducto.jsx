import NavAdmi from "../../componentes/NavAdmi";
import FooterAdmi from "../../componentes/FooterAdmi";

function EliminarProducto() {
  return (
    <>
      <NavAdmi />

      <main className="container-fluid py-4">

        <div className="row justify-content-center">

          <div className="col-xl-11 col-lg-11 col-md-12">

            <div className="card shadow border-0 rounded-4">

              {/* HEADER */}
              <div className="card-header bg-danger-dark text-white py-3">
                <h3 className="mb-1">🗑️ Eliminar Producto</h3>
                <small>Seleccione un producto y confirme su eliminación</small>
              </div>

              <div className="card-body p-4">

                <form className="row g-4">

                  {/* SELECCIONAR PRODUCTO */}
                  <div className="col-12">
                    <h5 className="border-bottom pb-2">
                      Seleccionar Producto
                    </h5>
                  </div>

                  <div className="col-md-10">
                    <label className="form-label fw-semibold">
                      Producto
                    </label>

                    <select className="form-select">
                      <option value="">Seleccione un producto...</option>
                      <option>Bicicleta MTB Trek XTR</option>
                      <option>Bicicleta Ruta GW</option>
                      <option>BMX Venzo</option>
                    </select>
                  </div>

                  <div className="col-md-2 d-flex align-items-end">
                    <button
                      type="button"
                      className="btn btn-outline-danger w-100"
                    >
                      Cargar
                    </button>
                  </div>

                  {/* PREVISUALIZACIÓN */}
                  <div className="col-12 mt-3">
                    <h5 className="border-bottom pb-2">
                      Información del Producto
                    </h5>
                  </div>

                  <div className="col-md-4">
                    <label className="form-label fw-semibold">Nombre</label>
                    <input type="text" className="form-control" disabled />
                  </div>

                  <div className="col-md-4">
                    <label className="form-label fw-semibold">Modelo</label>
                    <input type="text" className="form-control" disabled />
                  </div>

                  <div className="col-md-4">
                    <label className="form-label fw-semibold">Marca</label>
                    <input type="text" className="form-control" disabled />
                  </div>

                  <div className="col-md-4">
                    <label className="form-label fw-semibold">Cantidad</label>
                    <input type="text" className="form-control" disabled />
                  </div>

                  <div className="col-md-4">
                    <label className="form-label fw-semibold">Precio</label>
                    <input type="text" className="form-control" disabled />
                  </div>

                  <div className="col-md-4">
                    <label className="form-label fw-semibold">Estado</label>
                    <input type="text" className="form-control" disabled />
                  </div>

                  {/* ALERTA */}
                  <div className="col-12 mt-3">
                    <div className="alert alert-warning">
                      ⚠️ Esta acción eliminará el producto de forma permanente.
                    </div>
                  </div>

                  {/* CONFIRMACIÓN */}
                  <div className="col-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="confirmDelete"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="confirmDelete"
                      >
                        Confirmo que deseo eliminar este producto
                      </label>
                    </div>
                  </div>

                  {/* BOTÓN */}
                  <div className="col-12 text-center mt-4">
                    <button
                      type="submit"
                      className="btn bg-danger-dark text-white btn-lg px-5"
                    >
                      Eliminar Producto
                    </button>
                  </div>

                </form>

              </div>
            </div>

          </div>

        </div>

      </main>

      <FooterAdmi />
    </>
  );
}

export default EliminarProducto;