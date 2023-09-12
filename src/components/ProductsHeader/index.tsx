import { NavLink } from "react-router-dom";
import "./ProductsHeader.css";

export default function ProductsHeader() {

    return(
        <div className="products-header container">
            <ul>
                <li><NavLink to={'/produtos/computadores'} className={({ isActive }) => isActive ? "bold" : "regular"}>Computadores</NavLink> </li>
                <li><NavLink to={'/produtos/eletronicos'} className={({ isActive }) => isActive ? "bold" : "regular"}>Eletrônicos</NavLink></li>
                <li><NavLink to={'/produtos/livros'} className={({ isActive }) => isActive ? "bold" : "regular"}>Livros</NavLink></li>
            </ul>
        </div>

    );
}