import "../pages/Projetos.css";
import { Link } from "react-router-dom";

export default function Cabecalho() {
    return (
        <div className="cabecalho">
            <Link to="/" className="Link">
                Início
            </Link>
        </div>
    );
}
