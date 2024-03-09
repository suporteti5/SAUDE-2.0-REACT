import React from "react";

const About = () => {
  return (
    <>
      <section id="about">
        <div className="about-section-3x">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div className="about-us-left">
                  <h4>Bem vindo à Saúde 10</h4>
                  <h3>Cuidando do seu bem estar</h3>
                  <p>ASO - Atestado de Saúde Ocupacional</p>
                  <p>Exames de imagem</p>
                  <p>Exames laboratoriais</p>
                  <p>Consultas médicas</p>
                  <p>Assessoria e consultoria</p>
                  <p>Medicina e Segurança do Trabalho</p>
                </div>
              </div>
              <div className="col-md-3 offset-md-1">
                <div className="about-us-middle">
                  <div className="single-feature violet">
                    <h3>Saúde Ocupacional</h3>
                    <p className="mt-2">PPRA (NR9)</p>
                    <p className="mt-3">PCMSO (NR7)</p>
                    <p className="mt-3">LTCAT</p>
                    <p className="mt-3">ASO - Atestado de Saúde Ocupacional</p>
                    <p className="mt-3">
                      PPP - Perfil Profissiográfico Previdenciário
                    </p>
                    <p className="mt-3">Treinamentos</p>
                    <p className="mt-3">eSocial</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="about-us-right">
                  <div className="single-feature blue">
                    <h3>Gestão Ambulatorial</h3>
                    <p>
                      Os melhores e mais capacitados profissionais de saúde para
                      te auxiliar no atendimento ambulatorial
                    </p>
                  </div>
                  <div className="single-feature green">
                    <h3>Gestão online de Saúde &amp; Segurança Ocupacional</h3>
                    <p>
                      Mantenha sua saúde e a da sua empresa segura até mesmo
                      distante
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
