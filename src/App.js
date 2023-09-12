import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ClientsPage from './pages/ClientsPage';
import ContactsPage from './pages/ContactsPage';
import Jogo2048 from './pages/subPagesProjects/Jogo2048';
import Sudoku from './pages/subPagesProjects/Sudoku';
import DislexInfo from './pages/subPagesProjects/Dislexinfo';

function App() {
  const headerStyle = {
    backgroundColor: "#F6DEE5",
  };
  return (
    <Router>
      <div style={headerStyle}>
        <Header />
        <main>
        <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/projetos" element={<ProjectsPage />} />
          <Route path="/projetos/Dislexinfo" element={<DislexInfo />} />
          <Route path="/projetos/Jogo2048" element={<Jogo2048 />} />
          <Route path="/projetos/Sudoku" element={<Sudoku />} />
          <Route path="/clientes" element={<ClientsPage />} />
          <Route path="/contatos" element={<ContactsPage />} />
        </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
