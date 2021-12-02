import React from "react";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>Hawaii Deco</h6>
            <p className="text-justify">
              {" "}
              Somos un emprendimiento familiar destinado a llevar calidez y amor a los hogares.
              Todos nuestros productos están confeccionados con materiales de primera calidad;
              ayudándonos a decorar cada rincón de tus espacios de la mejor manera.

            </p>
          </div>

          <div className="col-xs-6 col-md-3">
            
            <ul className="footer-links mt-4">
              <li>Inicio</li>
              <br></br>
              <li>Sobre nosotros</li>
              <br></br>
              <li>Productos</li>
              <br></br>
              <li>Legal</li>
              <br></br>
              <li>Contacto</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; 2021 All Rights Reserved by HawaiiDeco.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
