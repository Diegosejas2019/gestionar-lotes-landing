import { Instagram, Linkedin, Youtube, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="foot">
          <div className="foot-brand">
            <a href="#" className="logo">
              <span className="logo-mark">GL</span>
              <span>GestionAr Lotes</span>
            </a>
            <p>Software de gestión para loteos y barrios privados. Hecho en Argentina, pensado para administradoras y desarrolladoras inmobiliarias.</p>
          </div>
          <div className="foot-col">
            <h4>Producto</h4>
            <ul>
              <li><a href="#funcionalidades">Funcionalidades</a></li>
              <li><a href="#como-funciona">Cómo funciona</a></li>
              <li><a href="#portal">Portal del comprador</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>Empresa</h4>
            <ul>
              <li><a href="#">Sobre nosotros</a></li>
              <li><a href="#">Casos de uso</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>Legales</h4>
            <ul>
              <li><a href="#">Términos y condiciones</a></li>
              <li><a href="#">Política de privacidad</a></li>
              <li><a href="#">Tratamiento de datos</a></li>
              <li><a href="#">Soporte</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <small>© 2026 GestionAr Lotes · Todos los derechos reservados.</small>
          <div className="foot-social">
            <a href="#" aria-label="Instagram"><Instagram /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin /></a>
            <a href="#" aria-label="YouTube"><Youtube /></a>
            <a href="#" aria-label="WhatsApp"><MessageCircle /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
