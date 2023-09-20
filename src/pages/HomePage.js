import React from 'react';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';

function HomePage() {
  const imgPath = require("D:/Faculdade/PW/portifolioreact/src/imagens/Joice.jpg"),
    img1 = require("D:/Faculdade/PW/portifolioreact/src/imagens/carrosel/imagem1.jpg"),
    img2 = require("D:/Faculdade/PW/portifolioreact/src/imagens/carrosel/imagem2.jpg"),
    img3 = require("D:/Faculdade/PW/portifolioreact/src/imagens/carrosel/imagem3.jpg");

  return (
    <div className="dados">

      <div className="container mt-5">
        <div className="text-center">
          <Container>
            <Row>
              <Col xs={6} md={4} >
                <Image id="imagem"
                  width={171}
                  height={180} src={imgPath} roundedCircle />
              </Col>
            </Row>
          </Container>
        </div>

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
        <div>
          <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img1}
                alt="Primeiro slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img2}
                alt="Primeiro slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img3}
                alt="Primeiro slide"
              />
              
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
