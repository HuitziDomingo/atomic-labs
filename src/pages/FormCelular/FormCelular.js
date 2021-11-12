import { Nav, Footer, ContentFormCelular } from '../../components'

const FormCelular = () => {
    return (
        <div className="bg-img">
            {/* Navegacion */}
            <Nav />
            {/* Contenido del formulario */}
            <ContentFormCelular />
            {/* Pie de pagina */}
            <Footer />
        </div>
    )
}

export default FormCelular
