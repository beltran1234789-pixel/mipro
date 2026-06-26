import NavAdmi from '../componentes/NavAdmi'
import FooterAdmi from '../componentes/FooterAdmi'


function Inicio (){
    return(
        <>
            <NavAdmi/>
                <main className="container main">
                    <h1>Bienvenido a la página de inicio</h1>             
                </main>
            <FooterAdmi/>
        </>
    )
}

export default Inicio