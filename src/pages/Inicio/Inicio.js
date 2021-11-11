import { Nav, Header, Content } from '../../components'
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
    </div>
  )
}

export default Inicio
