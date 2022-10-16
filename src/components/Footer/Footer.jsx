import './footer.css';
import Logo from '../Logo/Logo';

function Footer() {
  return (
    <div className="footer">
      <Logo className="footer__image" />
      <p className="footer__text">
        © 2022 Todos los derechos Reservados, Box Custodia de Archivos S.A
      </p>
      <p className="footer__text">Políticas</p>
    </div>
  );
}

export default Footer;
