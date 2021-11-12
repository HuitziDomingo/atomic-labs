import twitter from '../../assets/img/twitter.png'
import linkedin from '../../assets/img/linkedin.png'

import './Footer.scss'

const Footer = () => {
    return (
        <footer className="text-muted py-5" style={{backgroundColor: '#000'}}>
            <div className="container">
                <p className="float-end mb-1">
                    <a href="#" className="text-white">Aviso de privacidad</a>
                    <a href="https://www.linkedin.com/company/atomic-mexico/?originalSubdomain=mx">
                        <img src={linkedin} alt="" srcset="" />
                    </a>
                    <a href="https://twitter.com/atomicmexico">
                        <img src={twitter} alt="" srcset=""/>
                    </a>
                </p>
                <p className="mb-1 text-white">&copy; 2020 AtomicLabs. Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer
