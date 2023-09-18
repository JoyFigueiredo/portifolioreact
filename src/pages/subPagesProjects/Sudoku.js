import React from 'react';
import { Link } from 'react-router-dom';

function Sudoku() {
    const
        img1 = require("D:/Faculdade/PW/portifolioreact/src/imagens/comoJogar.png"),
        img2 = require("D:/Faculdade/PW/portifolioreact/src/imagens/jogoSu.png"),
        img3 = require("D:/Faculdade/PW/portifolioreact/src/imagens/selecioSudoku.png"),
        img4 = require("D:/Faculdade/PW/portifolioreact/src/imagens/verifica.png"),
        img5 = require("D:/Faculdade/PW/portifolioreact/src/imagens/errosudo.png"),
        img6 = require("D:/Faculdade/PW/portifolioreact/src/imagens/fimsudoku.png"),
        style = {
            width: "600px",
            height: "auto",
        };
    return (
        <div className="dados">
            <div className="container mt-5">
                <h2> Sudoku</h2>
                <h3> Introdução</h3>
                <p className="indented-paragraph">
                    Sudoku não é semelhante ao quadrado mágico, pois o mesmo não necessita de operações aritméticas
                    para determinarmos sua solução. É um jogo de lógica e de experimentação, onde o jogador deve
                    colocar
                    de 1 a 9 em uma grade 9x9, com 81 campos, são fornecidos valores iniciais em alguns campos, o
                    jogador
                    deve preencher os campos restantes sem repetir o mesmo número nas linhas, colunas e nos blocos
                    ao qual a matriz 9x9 é dividida em sub blocos 3x3.;
                </p>
                <p className="indented-paragraph">
                    O jogo Sudoku como hoje é chamado foi criado por Howard Garns. em 1979, provavelmente utilizando
                    como base o quadrado latino, denominado por Leonhard Euler (1707-1783) utilizando letras latinas
                    em seus estudos.
                </p>
                <p className="indented-paragraph">
                    Em 1984 o jogo foi publicado no japão, mas só veio à tona em 2004 por Wayne Gould, que criou um
                    programa capaz de gerar diferentes jogos e propôs ao jornal Britânico “The Times”. Com o
                    sucesso, os
                    jornais resolveram publicar o jogo também em suas páginas.

                </p>

                <h3> Jogabilidade</h3>
                <p className="indented-paragraph">
                    A única regra é a de distribuir de 1 a 9 por toda matriz, sem repetir os números nas linhas,
                    colunas ou nos blocos 3x3 existentes dentro da matriz 9x9. Apesar de parecer um simples jogo
                    apresenta aspectos matemáticos.
                </p>
                <br />
                <br />
                <div className="text-center">
                    <p>
                    <img
                        src={img1}
                        object-fit="cover"
                        className="centered-image"
                        alt="Dislexinfo inicio"
                        style={style}
                    />
                    </p>
                </div>
                <br />
                <br />
                <p className="indented-paragraph">
                    
                        A quantidade máxima de tipos diferentes foi determinada por Bertram Felgenhauer e Frazer Jarvis
                    em 2005, utilizando computadores e algoritmos, obtendo 6.670.930.752.021.072.936.960
                    possibilidades.
                </p>
                <br />
                <p className="indented-paragraph">
                    Jogo iniciado:
                </p>
                <div className="text-center">
                    <img
                        src={img2}
                        object-fit="cover"
                        className="centered-image"
                        alt="Dislexinfo inicio"
                        style={style}
                    />
                </div>
                <br />
                <br />
                <p className="indented-paragraph">
                    Seleciona um número do canto direito, todos os lugares possiveis são marcados de verde:
                </p>
                <div className="text-center">
                    <img
                        src={img3}
                        object-fit="cover"
                        className="centered-image"
                        alt="Dislexinfo inicio"
                        style={style}
                    />
                </div>
                <br />
                <br />
                <p className="indented-paragraph">
                    Clicando em "Check" o jogo é verificado:
                </p>
                <div className="text-center">
                    <img
                        src={img4}
                        object-fit="cover"
                        className="centered-image"
                        alt="Dislexinfo inicio"
                        style={style}
                    />
                </div>
                <br />
                <br />
                <p className="indented-paragraph">
                    Caso encontre um erro, é informado com a cor vermelha:
                </p>
                <div className="text-center">
                    <img
                        src={img5}
                        object-fit="cover"
                        className="centered-image"
                        alt="Dislexinfo inicio"
                        style={style}
                    />
                </div>
                <br />
                <br />
                <p className="indented-paragraph">
                    Finalizado clique em "check":
                </p>
                <div className="text-center">
                    <img
                        src={img6}
                        object-fit="cover"
                        className="centered-image"
                        alt="Dislexinfo inicio"
                        style={style}
                    />
                </div>
                <br />
                <br />
                <p className="indented-paragraph">
                    Logo a baixo encontrasse o codigo do programa.
                </p>
                <div className="d-flex justify-content-center">
                    <Link to="https://github.com/JoyFigueiredo/Sudoku" className="btn btn-secondary">GitHub do Sudoku</Link>
                </div>

            </div>
        </div>
    );
}

export default Sudoku;