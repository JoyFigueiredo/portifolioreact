import React from 'react';
import { Link } from 'react-router-dom';

function Dislexinfo() {
    const
        img1 = require("D:/Faculdade/PW/portifolioreact/src/imagens/entradaDis.png"),
        img2 = require("D:/Faculdade/PW/portifolioreact/src/imagens/trocaLetras.png"),
        img3 = require("D:/Faculdade/PW/portifolioreact/src/imagens/tabuada.png"),
        style = {
            width: "600px",
            height: "auto",
        };
    return (
        <div className="dados">
            <div className="container mt-5">
                <h2> DislexInfo</h2>
                <h3> Introdução</h3>
                <p className="indented-paragraph">
                    A dislexia é um transtorno de aprendizagem, que envolve a dificuldade de leitura e escrita,
                    através de vários sintomas, tais como o embaralhamento de letras, localização geoespacial,
                    memória de curto prazo, dentre outros, que afetam diretamente o aprendizado do aluno que
                    apresenta tal necessidade especial.

                </p>
                <p className="indented-paragraph">
                    A área de interesse é disseminar e conscientizar pedagogos, responsáveis e alunos no meio
                    acadêmico sobre a dislexia, pois, atualmente, o assunto tem sido pouco ou nunca discutido,
                    fazendo com que muitas famílias de baixa renda nem sequer saibam da existência desse transtorno,
                    afetando diretamente na qualidade de ensino de crianças, jovens e adultos que apresentam esse
                    quadro, e até mesmo a desistência.

                </p>
                <p className="indented-paragraph">
                    Há muitos que desconhecem a existência desse distúrbio, e por isso pode ser que não busquem
                    ajuda profissional. Hoje 82,7% dos domicílios têm acesso a internet no brasil, 98% da população
                    brasileira usa celular e tem acesso a internet e 70% das escolas também o possui, o que indica
                    que uma conscientização sobre o problema pode ser feita através de mídias sociais.
                </p>

                <h3> Site</h3>
                <p className="indented-paragraph">
                    Site consiste em trazer a informação sobre Dislexia, um problema que muitos escondem por
                    vergonha.
                </p>
                <div className="text-center">
                    <img
                        src={img1}
                        object-fit="cover"
                        className="centered-image"
                        alt="Dislexinfo inicio"
                        style={style}
                    />
                </div>
                <p className="indented-paragraph">
                    O site possui jogos interativos para mostrar na pratica como funciona a dislexia das trocas de
                    letras:
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
                <p className="indented-paragraph">
                    No video mostra o funcionamento:
                </p>
                <div className="video">
                    <video controls width="800" height="450">
                        <source src="D:/Faculdade/PW/portifolioreact/src/imagens/dislexia.mp4" type="video/mp4" />
                        <img src="https://i.stack.imgur.com/5f4zQ.png" alt="Video não carregado" />
                    </video>
                </div>
                <p className="indented-paragraph">
                    Não podemos esquecer da discalculia:
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
                <p className="indented-paragraph">
                    Logo a baixo encontrasse o codigo do programa.
                </p>
                <div className="d-flex justify-content-center">
                    <Link to="https://github.com/JoyFigueiredo/DislexInfo" className="btn btn-secondary">GitHub do
                        DislexInfo</Link>
                </div>

            </div>
        </div>
    );
}

export default Dislexinfo;