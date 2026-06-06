import Reveal from './Reveal';

const STEPS = [
  {
    title: 'Configurá tu barrio',
    text: 'Cargá manzanas, lotes, precios y planes de financiación. Importá desde Excel o lo hacemos por vos en el onboarding.',
  },
  {
    title: 'Cargá compradores y ventas',
    text: 'Generá reservas, boletos y planes de pago con un par de clics. Cada comprador recibe sus credenciales del portal.',
  },
  {
    title: 'Cobrá y reportá',
    text: 'Cobranzas online, conciliación bancaria y reportes financieros listos. Vos te ocupás del negocio, no del Excel.',
  },
];

function StepArrow() {
  return (
    <svg className="step-arrow" width="44" height="14" viewBox="0 0 44 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 7h40m0 0L36 2m5 5l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="3 3" />
    </svg>
  );
}

export default function Steps() {
  return (
    <section className="section steps-bg" id="como-funciona">
      <div className="container">
        <Reveal className="section-head">
          <span className="kicker">Cómo funciona</span>
          <h2>Operativo en una semana. Para siempre, en tres pasos.</h2>
          <p>Te acompañamos en la carga inicial y la migración. Después, el equipo de administración trabaja solo, sin depender del proveedor.</p>
        </Reveal>

        <div className="steps">
          {STEPS.map((step, i) => (
            <Reveal className="step" key={step.title}>
              <span className="step-num">{i + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              {i < STEPS.length - 1 && <StepArrow />}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
