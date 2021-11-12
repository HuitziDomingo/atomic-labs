import { Nav, Footer, ContentForm } from '../../components'

import './Form.scss'

const Form = () => {
    return (
        <div className="bg-img">
            {/* Navegacion */}
            <Nav />
            {/* Contenido del formulario */}
            <ContentForm />
            {/* Pie de pagina */}
            <Footer />
        </div>
    )
}

export default Form