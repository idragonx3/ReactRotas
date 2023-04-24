import React from "react";
import "./style.css";
import BotaoVoltar from "../BotaoVoltar";

const PaginaFront = () => {
    return (
        <div className="container-pagina-front">
            <div className="conteudo-pagina-front">
                <div className="conteudo-texto-front-end">
                    <h1 className="Titulos">Esta é a carreira Front-End</h1>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>React</li>
                    </ul>
                </div>
                <div className="botao-voltar-front-end">
                    <BotaoVoltar/>
                </div>

            </div>
        </div>
    );
}
export default PaginaFront;