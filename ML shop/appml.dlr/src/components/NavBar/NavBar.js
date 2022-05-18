import './NavBar.css'

const NavBar = ({ boton1, boton2, boton3, boton4 }) => {

    return (
        <ul class="nav justify-content-center justify-item-spo">
            <li class="nav-item">
                <a class="nav-link btn btn-outline-dark">{boton1}</a>
            </li>
            <li class="nav-item">
                <a class="nav-link btn btn-outline-dark">{boton2}</a>
            </li>
            <li class="nav-item">
                <a class="nav-link btn btn-outline-dark">{boton3}</a>
            </li>
            <li class="nav-item">
                <a class="nav-link btn btn-outline-dark">{boton4}</a>
            </li>
        </ul>
    )
}

export default NavBar

