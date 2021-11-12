import { Nav, Header, Content,Footer } from '../../components'
import './Inicio.scss'

const Inicio = () => {
  return (
    <div className="bg-img">
      {/* Navegacion */}
      <Nav />
      {/* Cabecera */}
      <Header />
      {/* Contenido de la pagina de Inicio */}
      <Content/>
      {/* Pie de pagina */}
      <Footer/>
    </div>
  )
}

export default Inicio
