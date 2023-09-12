import React from 'react';

function HomePage() {
    const imgPath = require("D:/Faculdade/PW/portifolioreact/src/imagens/Joice.jpg");
  return (
    <div className="dados">
      <div className="container mt-5">
        <div className="text-center">
        <img
            id="imagem"
            src={imgPath}
            width="100%"
            height="auto"
            object-fit="cover"
            className="centered-image"
            alt="Joice Barros"
          />
        </div>
        <br />
        <br />
        <h2>Quem sou</h2>
        <p>
          <br />
          Olá,
        </p>
        <p className="indented-paragraph">
          Me chamo Joice Barros, sou estudante do curso Engenharia da Computação,
          no CEFET-MG campus Timóteo, tenho boa interação e facilidade em trabalhos em grupos,
          sou participativa, tenho grande facilidade de aprendizado, sou bastante criativa e busco
          sempre melhorar.
        </p>
        <p className="indented-paragraph">
          No curso de Eletrotécnica que fiz, tive grande interesse pela área. Busquei mais informações,
          e então, no ano de 2017, prestei o ENEM e em 2018 ingressei na instituição CEFET. A área
          vem despertando meu interesse, mas tenho foco em disciplinas eletivas nas áreas de
          automação e banco de dados, que são duas áreas que me chamaram a atenção.
        </p>
        <p className="indented-paragraph">
          A parte de microprocessadores me chamou atenção, mas a área de testes foi o que mais me
          atraiu. O teste abrange desde o dedo do pé até a ponta do cabelo. Durante meu estágio, fui
          apresentada a alguns tipos de teste e treinada na parte teórica, embora ainda não tenha
          colocado a mão na massa, é uma área que quero continuar explorando.
        </p>
          <h2>Formação</h2>
          <ul>
            <br />
            <li><b>2018 - Presente:</b> Engenharia da Computação, Centro Federal de Educação Tecnológica
              de Minas Gerais, Campus Timóteo.</li>
            <br />
            <li><b>2016:</b> Curso de NR10, Colégio CEST, Ipatinga-MG.</li>
            <br />
            <li><b>2013 - 2014:</b> Curso Técnico em Eletrotécnica, Colégio CEST, Ipatinga - MG.</li>
            <br />
          </ul>
          <br />
          <h2>Tecnologias</h2>
          <ul>
            <br />
            <li><b>Avançado:</b> Java, Gimp, Google Docs.</li>
            <br />
            <li><b>Intermediário:</b> C, Latex, HTML5, Teste de Software, VHDL, HTML, CSS, JUnit.</li>
            <br />
            <li><b>Básico:</b> Linux, Arduino IDE, SQL, MySQL, Assemble, Teste de Integração,
              Google Sheets, AutoCad.</li>
            <br />
          </ul>
          <br />
          <h2>Idiomas</h2>
          <ul>
            <br />
            <li><b>Inglês:</b> Leitura intermediária, conversação básica.</li>
            <br />
            <li><b>Espanhol:</b> Conversação intermediária, leitura intermediária.</li>
            <br />
          </ul>
        </div>
    </div>
    );
}

export default HomePage;
