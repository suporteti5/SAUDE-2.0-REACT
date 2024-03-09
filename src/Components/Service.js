import React from "react";

/* ICONS */
import { IconContext } from "react-icons";

import { FaPills } from "react-icons/fa";
import { FaHospital } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";
import { FaUserMd } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";

const Service = () => {
  const itensContent = [
    {
      icon: (
        <IconContext.Provider value={{ color: "#7fc540" }}>
          <div>
            <FaPills />
          </div>
        </IconContext.Provider>
      ),
      id: "saude",
      title: "Saúde Ocupacional",
      text: "Equipe de médicos, engenheiros, enfermeiros e técnicos de segurança especializados e com larga experiência profissional",
    },

    {
      icon: (
        <IconContext.Provider value={{ color: "#6e80fe" }}>
          <div>
            <FaHospital />
          </div>
        </IconContext.Provider>
      ),
      id: "laudos",
      title: "Laudos Técnicos",
      text: "Laudo Técnico de Insalubridade Laudo Técnico de Periculosidade",
    },
    {
      icon: (
        <IconContext.Provider value={{ color: "#f26c4f" }}>
          <div>
            <FaPhone />
          </div>
        </IconContext.Provider>
      ),
      id: "treinamento",
      title: "Treinamentos",
      text: "Treinamentos nas Normas Regulamentadoras (NRs) presencial, AED e à bordo",
    },
    {
      icon: (
        <IconContext.Provider value={{ color: "#00aeef" }}>
          <div>
            <FaHeadphones />
          </div>
        </IconContext.Provider>
      ),
      id: "suporte",
      title: "Suporte 24/7",
      text: "Suporte 24/7 presencial e online na Gestão de Riscos de sua empresa",
    },
    {
      icon: (
        <IconContext.Provider value={{ color: "#ffb606" }}>
          <div>
            <FaUserMd />
          </div>
        </IconContext.Provider>
      ),
      id: "absenteismo",
      title: "Absenteísmo",
      text: "Gestão automatizada dos afastamentos e controle do absenteísmo",
    },
    {
      icon: (
        <IconContext.Provider value={{ color: "#8781bd" }}>
          <div>
            <FaBuilding />
          </div>
        </IconContext.Provider>
      ),
      id: "e-social",
      title: "e-Social",
      text: "Gestão automatizada de parâmetros de SST no sistema eSocia",
    },
  ];

  return (
    <>
      <section id="services">
        <div className="service-container">
          <h3>Serviços</h3>
          <div className="service-itens-container">
            {itensContent.map((item, i) => (
              <div className="service-item" id={item.id} key={i}>
                <div className="service-item-icon">{item.icon}</div>
                <div className="service-item-text">
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
