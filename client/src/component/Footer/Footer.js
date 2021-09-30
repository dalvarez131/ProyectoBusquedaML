/* External */
import React from "react";

/* Style */
import "./Footer.scss";

/* Components */

const Footer = () => {
  return (
  <div className="ml-footer">
    <h5>Trabaja con nosotros<span className="ml-footer__span"> Términos y condiciones</span><span className="ml-footer__span"> Cómo cuidamos tu privacidad</span><span className="ml-footer__span"> Ayuda / PQR</span><span className="ml-footer__span"> www.sic.gov.co</span></h5>
    <h6>Copyright © 1999-2021<span className="ml-footer__span"> MercadoLibre Colombia LTDA.</span></h6>
    <h6>Carrera 17 Numero 93 - 09 Piso 3, Bogotá D.C., Colombia</h6>
  </div>
  );
}

export default Footer;