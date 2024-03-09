import React from "react";
import Forms from "./Forms";

const Contact = () => {
  return (
    <>
      <section className="contact-section">
        <div className="contact-content">
          <h1>Gestão de Saúde Ocupacional</h1>
          <p>
            A Gestão de SSO salva vidas, sua importância faz toda diferença na
            sua empresa, ela ajuda os profissionais a mitigar os riscos e as
            doenças, assim vivendo com uma melhor qualidade de vida no trabalho
            e na vida pessoal.
          </p>
        </div>

        <div className="contact-form" id="contact">
          <Forms />
        </div>
      </section>
    </>
  );
};

export default Contact;
