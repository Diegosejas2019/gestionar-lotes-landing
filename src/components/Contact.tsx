import { MessageCircle, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import Reveal from './Reveal';

const CONTACT_INFO = [
  { icon: Phone, label: 'Teléfono', value: '+54 11 5579-3722' },
  { icon: Mail, label: 'Email', value: 'gestionar.app.info@gmail.com' },
  { icon: Clock, label: 'Respuesta', value: 'Menos de 48 h hábiles' },
];

export default function Contact() {
  return (
    <section className="section" id="contacto">
      <div className="container">
        <Reveal className="contact">
          <div className="contact-info">
            <span className="eyebrow"><span className="dot"><MessageCircle size={11} /></span> Hablemos</span>
            <h2>Solicitá tu demo y te mostramos GestionAr Lotes funcionando en vivo.</h2>
            <p>Contanos cuántos barrios y lotes manejás y te armamos una propuesta a medida en menos de 48&nbsp;h.</p>
            <ul className="contact-list">
              {CONTACT_INFO.map(({ icon: Icon, label, value }) => (
                <li key={label}>
                  <span className="contact-ico"><Icon size={18} /></span>
                  <div>
                    <span className="lbl">{label}</span>
                    <strong>{value}</strong>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="field-row">
              <label className="field">
                <span>Nombre</span>
                <input type="text" name="nombre" placeholder="Tu nombre" required />
              </label>
              <label className="field">
                <span>Loteo / barrio</span>
                <input type="text" name="loteo" placeholder="Nombre del loteo o desarrolladora" />
              </label>
            </div>
            <div className="field-row">
              <label className="field">
                <span>Email</span>
                <input type="email" name="email" placeholder="vos@desarrolladora.com" required />
              </label>
              <label className="field">
                <span>Teléfono</span>
                <input type="tel" name="telefono" placeholder="+54 9 11 ..." />
              </label>
            </div>
            <div className="field-row">
              <label className="field">
                <span>Barrios aprox.</span>
                <select name="barrios" defaultValue="">
                  <option value="" disabled>Seleccionar...</option>
                  <option value="1">1</option>
                  <option value="2-3">2 a 3</option>
                  <option value="4-10">4 a 10</option>
                  <option value="10+">Más de 10</option>
                </select>
              </label>
              <label className="field">
                <span>Lotes aprox.</span>
                <select name="lotes" defaultValue="">
                  <option value="" disabled>Seleccionar...</option>
                  <option value="<100">Menos de 100</option>
                  <option value="100-500">100 a 500</option>
                  <option value="500-1000">500 a 1000</option>
                  <option value="1000+">Más de 1000</option>
                </select>
              </label>
            </div>
            <label className="field">
              <span>Mensaje</span>
              <textarea name="mensaje" placeholder="Contanos brevemente qué módulos te interesan o qué necesitás resolver..." rows={4} />
            </label>
            <button type="submit" className="btn btn-primary btn-lg">
              Solicitar demo <ArrowRight className="ico" />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
