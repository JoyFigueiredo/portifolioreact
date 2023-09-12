import React from 'react';
import { Link } from 'react-router-dom';

function ClientsPage() {
    const
        imgAperam = require("D:/Faculdade/PW/portifolioreact/src/imagens/aperam.jpg"),
        imgCocaCola = require("D:/Faculdade/PW/portifolioreact/src/imagens/cocacola.png"),
        imgGoogle = require("D:/Faculdade/PW/portifolioreact/src/imagens/google.jpg"),
        imgVale = require("D:/Faculdade/PW/portifolioreact/src/imagens/vale.jpg");
    return (
        <div className="container mt-7">
            <br />
            <br />
            <h1 className="text-center">Clientes</h1>
            <br />
            <br />
            <div className="row">
                <div className="col-md-3">
                    <div className="card mb-4 small-card">
                        <img
                            src={imgAperam}
                            className="card-img-top"
                            alt="Aperam"
                        />
                        <div className="card-body">
                            <h2 className="card-title">
                                <Link to="https://brasil.aperam.com/" >Aperam</Link>
                            </h2>
                            <p className="card-text">

                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card mb-4 small-card">
                        <img
                            src={imgCocaCola}
                            className="card-img-top"
                            alt="Jogo 2048"
                        />
                        <div className="card-body">
                            <h2 className="card-title">
                                <Link to="https://www.coca-cola.com.br/" >Coca-Cola</Link>
                            </h2>
                            <p className="card-text">

                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card mb-4 small-card">
                        <img
                            src={imgVale}
                            className="card-img-top"
                            alt="Vale"
                        />
                        <div className="card-body">
                            <h2 className="card-title">
                                <Link to="https://www.vale.com/pt/" >Vale</Link>
                            </h2>
                            <p className="card-text">

                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card mb-4 small-card">
                        <img
                            src={imgGoogle}
                            className="card-img-top"
                            alt="Google"
                        />
                        <div className="card-body">
                            <h2 className="card-title">
                                <Link to="https://about.google/?utm_source=google-BR&utm_medium=referral&utm_campaign=hp-footer&fg=1" >Google</Link>
                            </h2>
                            <p className="card-text">

                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <h4 className="text-center">Clientes fictícios</h4>
        </div>
    );
}

export default ClientsPage;