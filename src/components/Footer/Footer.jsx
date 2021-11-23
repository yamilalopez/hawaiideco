import React from "react";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">
              {" "}
              Somos una empresa jóven y dinámica, comprometidos con la calidad
              en la atención y la satisfacción de nuestros
              clientes.Representamos a importantes marcas, sobre las cuales
              además ofrecemos servicio de postventa con Taller y Repuestos
              Originales. Estamos a diposición para atender tus consultas y
              ayudarte en tu decisión de adquirir o renovar tu moto o ATV.
            </p>
          </div>
          <div className="col-xs-6 col-md-3">
            <h6>Tools</h6>
            <ul className="footer-links mt-4">
              <li>React Js</li>
              <br></br>
              <li>JavaScript</li>
              <br></br>
              <li>Bootstrap</li>
              <br></br>
              <li>HTML 5</li>
              <br></br>
              <li>CSS</li>
            </ul>
          </div>
          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links mt-4">
              <li>Home</li>
              <br></br>
              <li>About Us</li>
              <br></br>
              <li>Products</li>
              <br></br>
              <li>Privacy Policy</li>
              <br></br>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; 2021 All Rights Reserved by Leandro Benac.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;