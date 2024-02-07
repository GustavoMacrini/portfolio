import ProjetosGrid from "../../components/ProjetosGrid";

import "./style.css";
function Projetos (){
    return(
        <section id="projetos">
            <div class="wrapper">
                
                <h2 className="title">Projetos</h2>
                

                {/* <div class="projetos-list">
                    <div class="projeto-item">
                        <a target="_blank" href="https://gustavomacrini.github.io/DoctorCare">
                            <img src={DoctorCare} alt="App DoctorCare"/>
                        </a>
                        <h3>DoctorCare</h3>
                        <p>HTML | CSS | JS</p>
                    </div>
                    <div class="projeto-item">
                        <a target="_blank" href="https://gustavomacrini.github.io/DIO/HTML_CSS/FlexBox/flex-projeto">
                            <img src={FlexTurismos} alt="App FlexTurismos"/>
                        </a>
                        <h3>FlexTurismos</h3>
                        <p>HTML | CSS</p>
                    </div>
                </div> */}
                <ProjetosGrid/>
            </div>  
        </section>
    )
}

export default Projetos;