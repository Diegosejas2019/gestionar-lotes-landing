import Reveal from './Reveal';

const BARRIOS = ['Los Álamos', 'Solar del Río', 'Altos del Lago', 'Pampa Verde', 'Estancia Norte', 'Costa Serena'];

export default function Proof() {
  return (
    <section className="proof">
      <div className="container">
        <p className="proof-label">Usado por <strong>barrios privados y loteos</strong> en todo el país</p>
        <Reveal className="proof-logos">
          {BARRIOS.map((b) => (
            <div className="proof-logo" key={b}><span className="b" />{b}</div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
