import { CalendarCheck, MessageCircle } from 'lucide-react';
import Reveal from './Reveal';

export default function CtaFinal() {
  return (
    <section className="container">
      <Reveal className="cta-final">
        <h2>Dejá las planillas. Gestioná tu loteo como un producto.</h2>
        <p>Te mostramos GestionAr Lotes en una reunión de 30 minutos, con tus propios números. Sin compromiso.</p>
        <div className="cta-final-ctas">
          <a href="#contacto" className="btn btn-primary btn-lg"><CalendarCheck className="ico" /> Solicitar demo</a>
          <a href="https://wa.me/541155793722" target="_blank" rel="noreferrer" className="btn btn-ghost btn-lg"><MessageCircle className="ico" /> Hablar por WhatsApp</a>
        </div>
      </Reveal>
    </section>
  );
}
