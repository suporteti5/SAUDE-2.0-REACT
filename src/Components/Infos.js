import React from "react";

const Info = () => {
  return (
    <>
      <section className="info" >
        <div className="info-container">
          <div className="info-item">
            <div className="info-item-content" id="info-item-treinamento">
              <h2>Treinamentos</h2>
              <p>NR 6 – Comissão interna de prevenção de acidente</p>
              <p>NR 10 - Segurança em instalações e serviços em eletricidade</p>
              <p>
                NR20- Segurança e saúde no trabalho com inflamáveis e
                combustíveis
              </p>
              <p>
                NR 33 - Segurança e saúde nos trabalhos em espaços confinados
              </p>
              <p>NR 35 – Trabalho em altura</p>
            </div>
            <div className="info-item-content" id="info-item-exames">
              <h2 >Exames Toxicológicos</h2>
              <ul>
                <li>
                  <p>Motoristas profissionais</p>
                </li>
                <li>
                  <p>Exames públicos e militares</p>
                </li>
                <li>
                  <p>Tripulação embarcada</p>
                </li>
              </ul>
            </div>
            <div className="info-item-content" id="info-item-ltcat">
              <h2>
                LTCAT – Laudo Técnico das Condições do Ambiente de Trabalho.
              </h2>

              <p>PCA - Programa de Conservação Auditiva.</p>
              <p>PPR - Programa de Conservação Auditiva.</p>
              <p >AE – Análise Ergonômica do Trabalho.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Info;
