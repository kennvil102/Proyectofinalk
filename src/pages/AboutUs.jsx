import React from "react";
import { Accordion, Card, Carousel, useAccordionButton } from "react-bootstrap";
import CarruselVertical from "../components/CarruselVertical";
import "../css/AboutUs.css";
import "../css/CarruselVertical.css"
import "bootstrap/dist/css/bootstrap.min.css";

 

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
      <h2 className="stilito">SOBRE NOSOTROS</h2>
      <div className="accordion-wrapper" id="mission">
        <Accordion defaultActiveKey="0">
          <Card>
            <CustomToggle eventKey="0">Misión</CustomToggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                Ser lideres en suministros, Asesoria e innovación en la
                importación, Distribucion y comercialización de Insumos y
                Equipos Biomédicos.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <CarruselVertical/>
      </div>
      <div className="accordion-wrapper" id="vision">
        <Accordion defaultActiveKey="1">
          <Card>
            <CustomToggle eventKey="1">Valores</CustomToggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                Nuestros valores Innovación- Honestidad-Calidad-Compromiso.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <CarruselVertical/>
      </div>
      <div className="accordion-wrapper" id="values">
        <Accordion defaultActiveKey="2">
          <Card>
            <CustomToggle eventKey="2">Vision</CustomToggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                Consolidarnos como alternativa de excelencia y calidad en
                nuestros servicios, Dentro del mercado nacional ofreciendo
                tecnología de punta a todos nuestros clientes mediante productos
                médicos de alta Gama, Innovación y Capacitación constante.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <CarruselVertical/>
      </div>
 

    </div>
  );
};

export default AboutUs;
