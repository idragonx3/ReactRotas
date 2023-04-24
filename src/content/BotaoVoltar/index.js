import React from "react";
import "./style.css";

const BotaoVoltar = () => {
    return (
        <div className="container-voltar">
            <a href="/PaginaFront" className="link-botao-voltar">
                <div className="container-botao-voltar">
                    <p className="botao-voltar">Voltar</p>
                </div>

            </a>
        </div>
    )
}
export default BotaoVoltar;