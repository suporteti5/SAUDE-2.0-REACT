import React, { useState } from "react";

/* LIBS */

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

/* ICONS */
import { IconContext } from "react-icons";

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { HiOutlineBars3 } from "react-icons/hi2";
import { GrSystem } from "react-icons/gr";

/* IMAGES */

import LogoSaude10 from "../Assets/Logo/LogoSaude10.png";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: (
        <IconContext.Provider value={{ size: "25px" }}>
          <HomeIcon />
        </IconContext.Provider>
      ),
      link: "#",
    },
    {
      text: "Sobre Nós",
      icon: (
        <IconContext.Provider value={{ size: "25px" }}>
          <InfoIcon />
        </IconContext.Provider>
      ),
      link: "#about",
    },
    {
      text: "Serviços",
      icon: (
        <IconContext.Provider value={{ size: "25px" }}>
          <MedicalServicesIcon />
        </IconContext.Provider>
      ),
      link: "#services",
    },
    {
      text: "Contate-nos",
      icon: (
        <IconContext.Provider value={{ size: "25px" }}>
          <PhoneRoundedIcon />
        </IconContext.Provider>
      ),
      link: "#contact",
    },
    {
      text: "Agende Seu Exame",
      icon: (
        <IconContext.Provider value={{ size: "25px" }}>
          <CalendarMonthIcon />
        </IconContext.Provider>
      ),
      link: "https://asoonline.com.br/sistema/hub.asp",
    },
    {
      text: "Acesse o Sistema",
      icon: (
        <IconContext.Provider value={{ size: "25px" }}>
          <GrSystem />
        </IconContext.Provider>
      ),
      link: "https://www.agendatecnica.com.br/v2/login.asp",
    },
  ];

  return (
    <>
      <div className="top-menu">
        <div className="top-menu-itens">
          <div className="text-top-menu">
            <p>
              <span className="text-top-menu-span">Funcionamento: </span> Seg -
              Sex : 07:00h - 17:00h
            </p>
          </div>
        </div>
        <div className="top-menu-itens">
          <div className="text-top-menu">
            <p>
              <span className="text-top-menu-span">Contato: </span>
              <a href="mailto:contato@saude10clinica.com.br">
                contato@saude10clinica.com.br
              </a>
            </p>
          </div>
        </div>
        <div className="top-menu-itens">
          <div className="text-top-menu">
            <p>
              <span className="text-top-menu-span">Ligar para: </span>
              <a href="tel:2135491640"> (21) 3549-1640</a>
            </p>
          </div>
        </div>
      </div>
      <nav>
        <div className="nav-logo-container">
          <a href="#">
            <img src={LogoSaude10} alt="Logo Saúde10" />
          </a>
        </div>
        <div className="navbar-links-container">
          <a href="#">Home</a>
          <a href="#about">Sobre Nós</a>
          <a href="#services">Serviços</a>
          <a href="#contact">Contate-nos</a>
          <a target="_blank" href="https://www.agendatecnica.com.br/v2/login.asp">
            Acesso ao sistema
          </a>
          <a target="_blank" href="https://asoonline.com.br/sistema/hub.asp" id="agenda">
            Agende Seu Exame
          </a>
        </div>

        <div className="navbar-menu-container">
          <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
        </div>
        <Drawer
          open={openMenu}
          onClose={() => setOpenMenu(false)}
          anchor="right"
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => setOpenMenu(false)}
            onKeyDown={() => setOpenMenu(false)}
          >
            <List>
              {menuOptions.map((item) => (
                <ListItem key={item.text} disablePadding>
                  <a href={item.link} className="navbar-menu-link">
                    <ListItemButton>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  </a>
                </ListItem>
              ))}
            </List>
            <Divider />
            <div className="infos-mobile">
              <div className="text-top-menu-mobile">
                <p>
                  <span className="text-top-menu-span">
                    Funcionamento: <br />
                  </span>{" "}
                  Seg - Sex : 07:00h - 17:00h
                </p>
              </div>
              <div className="text-top-menu-mobile">
                <p>
                  <span className="text-top-menu-span">
                    Contato:
                    <br />{" "}
                  </span>
                  <a href="mailto:contato@saude10clinica.com.br">
                    contato@saude10clinica.com.br
                  </a>
                </p>
              </div>
              <div className="text-top-menu-mobile">
                <p>
                  <span className="text-top-menu-span">
                    Ligar para: <br />
                  </span>
                  <a href="tel:+213549-1640"> +21 3549-1640</a>
                </p>
              </div>
            </div>
          </Box>
        </Drawer>
      </nav>
    </>
  );
};

export default NavBar;
