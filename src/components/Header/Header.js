import { NavLink } from 'react-router-dom'
import astronauta from '../../assets/img/astronauta.png'
import './Header.scss'

const Header = () => {
    return (
        <div className="__cont">
            <div className="__cent-aro">
                <div className="col-md-6">
                    <img src={astronauta} alt="" srcset="" />
                </div>
                <div className="col-md-6">
                    <div className="__titulo">
                        Desarrolla todo
                        <span>tu POTENCIAL</span>
                        dentro del equipo
                        <span className="__line">ATOMIC</span> LABS
                    </div>
                    <NavLink to="/form">
                        <button className="btn btn-primary">Quiero ser parte!</button>
                    </NavLink>
                </div>
            </div>
            <div class="__down-cont">
                <button className="btn btn-primary __btn_goto" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    </svg>
                </button>
                <span className="text-light">Quiero saber mas</span>
            </div>
        </div>
    )
}

export default Header
