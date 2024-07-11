import React from "react";
import { Accordion, Card, useAccordionButton } from "react-bootstrap";
import CarruselVertical from "../components/CarruselVertical";
import "../css/AboutUs.css";
import "../css/CarruselVertical.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Componente personalizado para el botón de toggle del Accordion
const CustomToggle = ({ children, eventKey }) => {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <div onClick={decoratedOnClick} className="accordion-toggle">
      {children}
    </div>
  );
};

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* Título principal */}
      <h2 className="stilito">SOBRE NOSOTROS</h2>

      {/* Sección de Misión */}
      <div className="accordion-wrapper" id="mission">
        <Accordion defaultActiveKey="0">
          <Card>
            <CustomToggle eventKey="0">Misión</CustomToggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                Ser líderes en suministros, asesoría e innovación en la
                importación, distribución y comercialización de insumos y
                equipos biomédicos.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <CarruselVertical /> {/* Componente CarruselVertical */}
      </div>

      {/* Sección de Valores */}
      <div className="accordion-wrapper" id="vision">
        <Accordion defaultActiveKey="1">
          <Card>
            <CustomToggle eventKey="1">Valores</CustomToggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                Nuestros valores: Innovación, Honestidad, Calidad, Compromiso.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <CarruselVertical /> {/* Componente CarruselVertical */}
      </div>

      {/* Sección de Visión */}
      <div className="accordion-wrapper" id="values">
        <Accordion defaultActiveKey="2">
          <Card>
            <CustomToggle eventKey="2">Visión</CustomToggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                Consolidarnos como alternativa de excelencia y calidad en
                nuestros servicios dentro del mercado nacional, ofreciendo
                tecnología de punta a todos nuestros clientes mediante productos
                médicos de alta gama, innovación y capacitación constante.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <CarruselVertical /> {/* Componente CarruselVertical */}
      </div>
    </div>
  );
};

export default AboutUs;