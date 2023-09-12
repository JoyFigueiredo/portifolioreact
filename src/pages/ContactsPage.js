import React from 'react';
import { Link } from 'react-router-dom';

function ContactsPage() {
    const
        imgLinkedin = require("D:/Faculdade/PW/portifolioreact/src/imagens/linkedin.png"),
        imgGithub = require("D:/Faculdade/PW/portifolioreact/src/imagens/Github.png");
    return (
        <div>

            <br />
            <br />

            <div className="container mt-7">
                <div className="contact-info">
                    <h1 className="text-center">Contatos</h1>
                    <p>Entre em contato comigo por e-mail ou telefone:</p>
                    <p>
                        📬 <Link to="mailto:joicebfigueiredo@gmail.com?subject=Contato%20pelo%20site">joicebfigueiredo@gmail.com</Link>
                        <br />
                        📲 (031) 97115-9152
                    </p>
                </div>
            </div>
            <br />
            <div className="container mt-7">
                <h1 className="text-center">Redes Sociais</h1>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card mb-4 small-card">
                            <img
                                src={imgLinkedin}
                                className="card-img-top"
                                alt="Linkedin"
                            />
                            <div className="card-body">
                                <div class="d-flex justify-content-center">
                                    <Link to="https://github.com/JoyFigueiredo" class="btn btn-custom">Perfil Linkedin</Link>
                                </div>
                                <p className="card-text">

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4 small-card">
                            <img
                                src={imgGithub}
                                className="card-img-top"
                                alt="Jogo 2048"
                            />
                            <div className="card-body">
                                <div class="d-flex justify-content-center">
                                    <Link to="https://github.com/JoyFigueiredo" class="btn btn-custom">Perfil GitHub</Link>
                                </div>
                                <p className="card-text">

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactsPage;