import './style.css';
import CertificadosSlider from '../../components/CertificadosSlider';
import CertificadosGrid from '../../components/CertificadosGrid'; 

function ExpandSection(){
    document.getElementById('certificados').classList.toggle('hidden');
}

function Certificados(){
    return(
        <div>
            <section id='certificados' className='hidden'>
                <div className="wrapper" >

                    <h1 className="title">Certificados</h1>
                    
                    <div className="destaques">
                        <h2 className="destaqueTitle">Destaques</h2>
                        <CertificadosGrid/>
                    </div>

                    <div className="sliderBack">
                        <h2 className='sliderTitle'>Back-End</h2>
                        <CertificadosSlider type={0}/>
                    </div>

                    <div className="sliderFront">
                        <h2 className='sliderTitle'>Front-End</h2>
                        <CertificadosSlider type={1}/>
                    </div>
                </div>            
            </section>

            <section id='botaoVerMais'>
                <button onClick={() => ExpandSection()}>Ver Mais</button>
            </section>
        </div>
    )
}

export default Certificados;