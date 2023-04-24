import React from "react";
import "./style.css";
import FrontEnd from "../Frontend";
import Backend from "../Backend";

const PaginaInicial = () => { return(
    <div className="PaginaInicial">
        <div className="Conteudo">
            <FrontEnd/>
            <Backend/>
        </div>
    </div>
    );
};

export default PaginaInicial;