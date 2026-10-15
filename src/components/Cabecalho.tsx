import "../pages/Projetos.css";
import { Link } from "react-router-dom";
import Voltar from "../../public/circle-arrow-left.svg";

export default function Cabecalho() {
    return (
        <div className="cabecalho">
            <Link to="/" className="Link">
                <img src={Voltar} alt="Voltar" className="voltar" />
            </Link>
        </div>
    );
}
