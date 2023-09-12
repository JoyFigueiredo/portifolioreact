import React from 'react';
import { Link } from 'react-router-dom';

function Jogo2048() {
    const
        img1 = require("D:/Faculdade/PW/portifolioreact/src/imagens/inicio2048.png"),
        img2 = require("D:/Faculdade/PW/portifolioreact/src/imagens/2048.png"),
        img3 = require("D:/Faculdade/PW/portifolioreact/src/imagens/voceperdeu.png"),
        style = {
            width: "600px",
            height: "auto",
        };
    return (
        <div className="dados">
            <div className="container mt-5">

                <h2> 2048</h2>

                <h3> Introdução</h3>
                <p className="indented-paragraph">
                    Jogar o 2048 pode trazer uma série de benefícios para os jogadores. Além de ser uma forma
                    divertida de passar o tempo, o jogo oferece desafios mentais que podem estimular o cérebro e
                    melhorar diversas habilidades cognitivas. Aqui estão alguns benefícios de jogar o 2048:
                </p>
                <p className="indented-paragraph">
                    <ul>
                        <li>Desenvolvimento da estratégia: O 2048 é um jogo que requer planejamento estratégico e tomada
                            de decisões. Os jogadores precisam avaliar constantemente as posições das peças e antecipar
                            os movimentos futuros para alcançar a maior pontuação possível. Essa prática de pensamento
                            estratégico pode ajudar a desenvolver habilidades de planejamento e raciocínio lógico;</li>
                        <li>Aprimoramento da concentração: Para obter sucesso no jogo, é necessário manter a
                            concentração e atenção nas peças em movimento. A necessidade de acompanhar várias peças
                            simultaneamente e planejar os movimentos seguintes pode ajudar a melhorar a capacidade de
                            concentração e foco dos jogadores;</li>
                        <li>Estímulo mental: O jogo 2048 envolve o uso de habilidades matemáticas básicas, como adição e
                            multiplicação, para combinar os números. Além disso, a resolução de problemas é
                            constantemente necessária para encontrar as melhores estratégias de movimento. O exercício
                            mental proporcionado pelo jogo pode fortalecer essas habilidades matemáticas e de resolução
                            de problemas, contribuindo para o desenvolvimento cognitivo;</li>
                        <li>Redução do estresse: Embora o 2048 possa ser desafiador, é também um jogo relaxante para
                            muitos jogadores. A jogabilidade simples e repetitiva pode ajudar a distrair a mente de
                            preocupações cotidianas e reduzir o estresse. O foco no jogo e a busca pela superação de
                            recordes pessoais podem proporcionar uma sensação de satisfação e relaxamento.</li>
                    </ul>
                </p>

                <p className="indented-paragraph">
                    No geral, jogar o 2048 pode oferecer benefícios cognitivos, como melhora na estratégia,
                    concentração, habilidades matemáticas e redução do estresse. É importante lembrar de jogar
                    de forma moderada e equilibrada, aproveitando os benefícios sem deixar que o jogo se torne
                    excessivamente envolvente ou prejudicial à saúde mental.
                </p>

                <h3> Jogabilidade</h3>
                <p className="indented-paragraph">
                    A ideia do jogo 2048 é bem simples (mas não significa que seja fácil de ganhar): usar o
                    raciocínio para movimentar os blocos e conseguir formar um bloco no valor de 2048.
                </p>

                <p className="indented-paragraph">

                </p>
                <p className="indented-paragraph">
                    Jogo iniciado:
                </p>
                <div className="text-center">
                    <img
                        src={img1}
                        object-fit="cover"
                        classNameName="centered-image"
                        alt="Dislexinfo inicio"
                        style={style}
                    />
                </div>
                <p className="indented-paragraph">
                    <ul>
                        <li>Use as setas do teclado (ou deslize o dedo na tela) para movimentar os blocos;</li>
                        <li>Quando dois blocos de números iguais se chocam, eles viram um só com valor igual a soma
                            dos
                            dois;</li>
                        <li>A cada movimento é acrescentado um bloco com valor 2 ou com valor 4 (menor
                            probabilidade) em
                            uma
                            posição vazia aleatória;</li>
                        <li>Você ganha quando conseguir um bloco no valor de 2048.</li>
                    </ul>
                </p>
                <div className="text-center">
                    <img
                        src={img2}
                        object-fit="cover"
                        classNameName="centered-image"
                        alt="Dislexinfo inicio"
                        style={style}
                    />
                </div>
                <p className="indented-paragraph">
                    Ao perder o jogo:
                </p>
                <div className="text-center">
                    <img
                        src={img3}
                        object-fit="cover"
                        classNameName="centered-image"
                        alt="Dislexinfo inicio"
                        style={style}
                    />
                </div>
                <p className="indented-paragraph">
                    Logo a baixo encontrasse o codigo do programa.
                </p>

                <div className="d-flex justify-content-center">
                    <Link to="https://github.com/JoyFigueiredo/Jogo2048" className="btn btn-secondary">GitHub do
                        2048</Link>
                </div>

            </div>
        </div>
    );
}

export default Jogo2048;