import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function ProjectsPage() {
  const img2048 = require("D:/Faculdade/PW/portifolioreact/src/imagens/2048.png");
  const imgsudoku = require("D:/Faculdade/PW/portifolioreact/src/imagens/inicioSudoku.png");
  const imgdislexinfo = require("D:/Faculdade/PW/portifolioreact/src/imagens/entradaDis.png");
  return (
    <CardGroup>
      <h1 className="text-center">Projetos</h1>
      <Card>
        <Card.Img variant='top' src={imgdislexinfo} />
        <Card.Body>
          <Card.Title>Projeto de Software DislexInfo</Card.Title>
          <Card.Text>
            Projeto desenvolvido na matéria de Metodologia de Desenvolvimento de Software e
            continuada em Engenharia de Software.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4 small-card">
                <img
                  id="imagem"
                  src={imgdislexinfo}
                  width="100%"
                  height="auto"
                  object-fit="cover"
                  classNameName="card-img-top"
                  alt="DislexInfo"
                />
                <div className="card-body">
                  <h2 className="card-title">Projeto de Software DislexInfo</h2>
                  <p className="card-text">
                    Projeto desenvolvido na matéria de Metodologia de Desenvolvimento de Software e
                    continuada em Engenharia de Software.
                  </p>

                  <Link to="/projetos/Dislexinfo" className="btn btn-link m-2 nav-link">Ver Detalhes</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 small-card">
                <img id="imagem"
                  src={img2048}
                  width="100%"
                  height="auto"
                  object-fit="cover"
                  classNameName="card-img-top"
                  alt="Jogo 2048"
                />
                <div className="card-body">
                  <h2 className="card-title">Jogo 2048</h2>
                  <p className="card-text">
                    Projeto desenvolvido na matéria de Programação em C.
                  </p>
                  <Link to="/projetos/Jogo2048" className="btn btn-link m-2 nav-link">Ver Detalhes</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 small-card">
                <img id="imagem"
                  src={imgsudoku}
                  width="100%"
                  height="auto"
                  object-fit="cover"
                  classNameName="card-img-top"
                  alt="Jogo Sudoku"
                />
                <div className="card-body">
                  <h2 className="card-title">Jogo Sudoku</h2>
                  <p className="card-text">
                    Projeto desenvolvido na matéria de Algebra Linear.
                  </p>
                  <Link to="/projetos/Sudoku" className="btn btn-link m-2 nav-link">Ver Detalhes</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

      </Card>
    </CardGroup>

  );
}

export default ProjectsPage;
