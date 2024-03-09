import React from "react";

/* IMAGES */
import Radiografia from "../Assets/MainImages/radiologia.png";
import Engenharia from "../Assets/MainImages/engenharia.png";

const Benefits = () => {
  return (
    <>
      <section className="benefits">
        <div className="benefits-content">
          <div className="benefits-text">
            <h2>
              Benefícios para a sua empresa na gestão da Segurança do trabalho
            </h2>
            <p>Melhoria nas condições do ambiente de trabalho</p>
            <p>Treinamento dos profissionais</p>
            <p>Mitigação de riscos nas rotinas de trabalho</p>
            <p>Redução de acidentes e doenças ocupacionais</p>
            <p>Maior rentabilidade na sua empresa</p>
          </div>
          <div className="benefits-img">
            <img src={Radiografia} alt="" />
          </div>
        </div>
      </section>
      <hr />
      <section className="benefits-normas">
        <div className="benefits-normas-content">
          <div className="benefits-normas-img">
            <img src={Engenharia} alt="" />
          </div>
          <div className="benefits-normas-text">
            <h2>
              Benefícios para a sua empresa na gestão da Segurança do trabalho
            </h2>
            <p>Melhoria nas condições do ambiente de trabalho</p>
            <p>Treinamento dos profissionais</p>
            <p>Mitigação de riscos nas rotinas de trabalho</p>
            <p>Redução de acidentes e doenças ocupacionais</p>
            <p>Maior rentabilidade na sua empresa</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Benefits;
