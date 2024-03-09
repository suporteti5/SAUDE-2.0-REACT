import "./Global.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Components/Home";
import About from "./Components/About";
import Service from "./Components/Service";
import Benefits from "./Components/Benefits";
import Infos from "./Components/Infos";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import ScrollButton from "./Components/ScrollButton";

function App() {
  return (
    <>
      <header>
        <Home />
      </header>
      <main>
        <About />
        <Service />
        <Benefits />
        <Infos />
        <Contact /> 
      </main>
      <footer>
        <Footer />
      </footer>
      <ScrollButton />
    </>
  );
}

export default App;
