import React from "react";

const Info = () => {
  const servicesData = [
    {
      title: "Treinamentos",
      id: "info-item-treinamento",
      listItem: [
        "NR 6 – Comissão interna de prevenção de acidente",
        "NR 10 - Segurança em instalações e serviços em eletricidade",
        "NR20- Segurança e saúde no trabalho com inflamáveis e combustíveis",
        "NR 33 - Segurança e saúde nos trabalhos em espaços confinados",
        "NR 35 – Trabalho em altura",
      ],
    },
    {
      title: "Exames Toxicológicos",
      id: "info-item-exames",
      listItem: [
        "Motoristas profissionais",
        "Exames Militares e Públicos",
        "Tripulação embarcada",
      ],
    },
    {
      title: "LTCAT – Laudo Técnico das Condições do Ambiente de Trabalho.",
      id: "info-item-ltcat",
      listItem: [
        "PCA - Programa de Conservação Auditiva.",
        "PPR - Programa de Conservação Auditiva.",
        "AE – Análise Ergonômica do Trabalho.",
      ],
    },
  ];
  return (
    <>
      <section className="info">
        <div className="info-container">
          <div className="info-item">
            {servicesData.map((item, i) => (
              <div className="info-item-content" key={i} id={item.id}>
                <h2>{item.title}</h2>
                <ul>
                  {servicesData[i].listItem.map((listItem, j) => (
                    <li key={j}>{listItem}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Info;
