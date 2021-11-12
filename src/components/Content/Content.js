import { NavLink } from 'react-router-dom'

import './Content.scss'

import planetas from '../../assets/img/planetas.png'
import foco from '../../assets/img/foco.png'
import tierra from '../../assets/img/tierra.png'
import equipo from '../../assets/img/equipo.png'
import atomic1 from '../../assets/img/atomic1.png'
import atomic2 from '../../assets/img/atomic2.png'
import atomic3 from '../../assets/img/atomic3.png'

const Content = () => {
    return (
        <div className="__cont">
            <div class="title __cent">
                <h2>
                    SOMOS EL BRAZO DERECHO DE LA
                    <span>DE LA TECNOLOGIA</span>
                </h2>
            </div>
            <div className="row">
                <div class="col-md-4">
                    <div class="__card mb-4 ">
                        <div class="card-body">
                            <div class="__cent">
                                <img src={planetas} alt={planetas} />
                            </div>
                            <div className="__cent__flex">
                                <hr />
                                <hr className="__litle" />
                                <hr />
                            </div>
                            <h3 className="__cent">EXPLORA</h3>
                            <ul class="mt-3 mb-4 ml-3">
                                <li className="fw-bolder" ><span className="fw-light">Innoavacion y</span> creacion tecnologica</li>
                                <li className="fw-bolder">UI/UX</li>
                                <li className="fw-bolder">Innoavacion</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="__card mb-4 __bg__orange">
                        <div class="card-body">
                            <div class="__cent">
                                <img src={foco} alt={foco} />
                            </div>
                            <div className="__cent__flex __hr__white">
                                <hr />
                                <hr className="__litle" />
                                <hr />
                            </div>
                            <h3 className="__cent text-white">IMAGINA</h3>
                            <ul class="mt-3 mb-4 ml-3">
                                <li className="fw-bolder"> <span className="fw-bolder">Estrategia</span>Digital</li>
                                <li className="fw-light">Big Data & <span className="fw-bolder">Analysis</span></li>
                                <li className="fw-bolder">Consultoria<span className="fw-light">Tecnologica</span></li>
                                <li className="fw-bolder">Reduccion<span className="fw-light">de costos TI</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="__card mb-4 ">
                        <div class="card-body">
                            <div class="__cent">
                                <img src={tierra} alt={tierra} />
                            </div>
                            <div className="__cent__flex">
                                <hr />
                                <hr className="__litle" />
                                <hr />
                            </div>
                            <h3 className="__cent">CONQUISTA</h3>
                            <ul class="mt-3 mb-4 ml-3 __ml__70">
                                <li className="fw-bolder"><span className="fw-light">Desarrollo tecnologico</span>a la medida</li>
                                <li className="fw-bolder">Cibersiguridad</li>
                                <li className="fw-bolder">Sercicios de la Nube</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="title __cent">
                <h2 className="text-center">
                    TE ENCANTARA
                    <span>TRABAJAR CON NOSOTROS</span>
                </h2>
                <img src={equipo} alt={equipo} srcset="" />
                <NavLink to="/form" className="__cent__flex">
                    <button className="btn btn-primary">Quiero ser parte!</button>
                </NavLink>
            </div>
            <div class="title __cont">
                <h2 className="text-center">
                    POR QUE 
                    <span style={{ display: 'inline-block', marginLeft: '12px' }}> ATOMIC ?</span>
                </h2>
                <div class="row">
                    <div class="col-md-4">
                        <img src={atomic1} alt="" srcset="" />
                    </div>
                    <div class="col-md-4">
                        <img src={atomic2} alt="" srcset="" />
                    </div>
                    <div class="col-md-4">
                        <img src={atomic3} alt="" srcset="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content
