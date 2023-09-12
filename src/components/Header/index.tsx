import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
    return (
        <header className="header" >
            <nav className="container">
                <ul>
                    <li><NavLink className={({ isActive }) => isActive ? "bold" : "regular"} to="/" end>Início</NavLink> </li>
                    <li><NavLink to="/produtos" className={({ isActive }) => isActive ? "bold" : "regular"}>Produtos</NavLink></li>
                    <li><NavLink to="/sobre" className={({ isActive }) => isActive ? "bold" : "regular"}>Sobre nós</NavLink></li>
                </ul>
                <NavLink to=""><img src="/src/assets/images/homeIcon.png" alt="icone Home" /></NavLink>
            </nav>
        </header>

    );
}