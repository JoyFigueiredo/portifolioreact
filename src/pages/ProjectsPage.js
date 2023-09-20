import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function ProjectsPage() {
  const img2048 = require("D:/Faculdade/PW/portifolioreact/src/imagens/2048.png");
  const imgsudoku = require("D:/Faculdade/PW/portifolioreact/src/imagens/inicioSudoku.png");
  const imgdislexinfo = require("D:/Faculdade/PW/portifolioreact/src/imagens/entradaDis.png");
  return (
    <CardGroup>
      <Card className="text-center" style={{ width: '18rem' }}>
        <Card.Img variant="center" src={imgsudoku} />
        <Card.Body>
          <Card.Title>Sudoku</Card.Title>
          <Card.Text>
            Projeto desenvolvido na matéria de Algebra Linear.
          </Card.Text>
          <Button className="corButton" href='/projetos/Sudoku' variant="primary">Ver Detalhes</Button>
        </Card.Body>
      </Card>
      <Card className="text-center" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img2048} />
        <Card.Body>
          <Card.Title>Jogo 2048</Card.Title>
          <Card.Text>
            Projeto desenvolvido na matéria de Programação em C.
          </Card.Text>
          <Button className="corButton" href='/projetos/Jogo2048' variant="primary">Ver Detalhes</Button>
        </Card.Body>
      </Card>
      <Card className="text-center" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imgdislexinfo} />
        <Card.Body>
          <Card.Title>DislexInfo</Card.Title>
          <Card.Text>
            Projeto desenvolvido na matéria de Metodologia de Desenvolvimento de Software e
            continuada em Engenharia de Software.
          </Card.Text>
          <Button className="corButton" href='/projetos/Dislexinfo' variant="primary">Ver Detalhes</Button>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default ProjectsPage;
