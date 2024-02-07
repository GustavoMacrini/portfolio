import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import Header from "./components/Header";
import Home from "./pages/Home";
import Projetos from "./pages/Projetos";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import CertificadosSlider from './components/CertificadosSlider';
import Certificados from './pages/Certificados';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Projetos/>
      <Sobre/> 
      <Certificados/>
      <Contato/>
    </div> 
  );
}

export default App;
