import React from "react";

import NavBar from "./NavBar";

/* IMAGE */
import img1 from "../Assets/Banner/Banner-Saude.png";

const Home = () => {
  return (
    <>
      <section id="home">
        <NavBar />
        <a
          target="_black"
          href="https://www.google.com.br/maps/place/Dimension+Office+%26+Park/@-22.973857,-43.3667517,21z/data=!4m6!3m5!1s0x9bd91c1ed9d377:0x2799aa65f923454e!8m2!3d-22.9738278!4d-43.3666182!15sCmdEaW1lbnNpb24gT2ZmaWNlICYgUGFyayAtIEF2ZW5pZGEgRW1iYWl4YWRvciBBYmVsYXJkbyBCdWVubyAtIEJhcnJhIGRhIFRpanVjYSwgUmlvIGRlIEphbmVpcm8gLSBSSiwgMTA4kgETY29uZG9taW5pdW1fY29tcGxleA?shorturl=1"
        >
          <img src={img1} alt="Banner Saúde 10" id="Banner-home" />
        </a>
      </section>
    </>
  );
};

export default Home;
