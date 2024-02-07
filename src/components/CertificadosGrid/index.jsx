import cSharp from './assets/CertificadoCsharp-Udemy.jpg';
import oracle from './assets/oracle.jpg';
import './style.css';

function CertificadosGrid(){
    return(
        <div className="grid">
            <img src={cSharp} alt="Certificado C#" />
            <img src={oracle} alt="Certificado ORACLE" />
        </div>
    )
}

export default CertificadosGrid;
