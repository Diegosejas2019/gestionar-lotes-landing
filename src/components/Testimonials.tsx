import Reveal from './Reveal';

const TESTIMONIALS = [
  {
    quote: 'Pasamos de cuatro planillas distintas a un solo lugar. La cobranza de cuotas mejoró un 30% en el primer trimestre y dejamos de perder mañanas conciliando depósitos.',
    initials: 'MR',
    name: 'Martín Rodríguez',
    role: 'Gerente comercial · Los Álamos, Pilar',
  },
  {
    quote: 'Lo que más valoran nuestros propietarios es el portal: ven sus cuotas, pagan online y descargan los comprobantes solos. Bajaron muchísimo las consultas a administración.',
    initials: 'CB',
    name: 'Carolina Bianchi',
    role: 'Administradora · Solar del Río, Rosario',
  },
  {
    quote: 'Manejamos tres loteos con un equipo chico. Las alertas de mora y los reportes por barrio nos permiten tomar decisiones sin tener que pedirle un informe a nadie.',
    initials: 'JV',
    name: 'Javier Villalba',
    role: 'Director · Desarrollos Pampa Verde',
  },
];

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="kicker">Testimonios</span>
          <h2>Lo que dicen los administradores.</h2>
        </Reveal>

        <div className="testimonials">
          {TESTIMONIALS.map((t) => (
            <Reveal key={t.name} className="testi">
              <p className="testi-quote">{t.quote}</p>
              <div className="testi-author">
                <div className="testi-avatar">{t.initials}</div>
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-role">{t.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
