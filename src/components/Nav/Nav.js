import { NavLink } from 'react-router-dom'
import './Nav.scss'

const Nav = () => {
    return (
        <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3">
            <nav class="my-2 my-md-0 mr-md-3">
                <NavLink end to="/">
                    <h5 class="">atomicLabs</h5>
                </NavLink>
            </nav>
        </div>
    )
}

export default Nav
