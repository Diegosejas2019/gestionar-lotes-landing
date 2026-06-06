import { Sparkles, CalendarCheck, Play, CheckCircle2, Zap, ShieldCheck } from 'lucide-react';
import Reveal from './Reveal';

const ALERTS = [
  { name: 'María González', barrio: 'Los Álamos', cuotas: 1 },
  { name: 'Diego Salvatierra', barrio: 'Los Álamos', cuotas: 1 },
  { name: 'Lucía Fernández', barrio: 'Solar del Río', cuotas: 2 },
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <Reveal>
          <span className="eyebrow">
            <span className="dot"><Sparkles size={11} /></span> Plataforma multi-tenant para Argentina
          </span>
          <h1>El sistema operativo de tu <span className="grad">loteo o barrio privado</span>.</h1>
          <p className="lead">
            Gestioná lotes, ventas y cuotas en un solo lugar. Tus compradores pagan y consultan su
            estado desde un portal propio. Vos ves todo en tiempo real.
          </p>
          <div className="hero-ctas">
            <a href="#contacto" className="btn btn-primary btn-lg">
              <CalendarCheck className="ico" /> Solicitar demo
            </a>
            <a href="#video" className="btn btn-ghost btn-lg">
              <Play className="ico" /> Ver video (2 min)
            </a>
          </div>
          <div className="hero-meta">
            <span><CheckCircle2 className="ico" /> Sin tarjeta de crédito</span>
            <span><Zap className="ico" /> Implementación en 7 días</span>
            <span><ShieldCheck className="ico" /> Datos en Argentina</span>
          </div>
        </Reveal>

        <div className="mockup-wrap reveal is-in">
          <div className="mockup" aria-hidden="true">
            <div className="mockup-inner">
              <aside className="mk-sidebar">
                <div className="mk-brand">
                  <span className="m">GL</span>
                  <div>
                    <strong>GestionAr Lotes</strong>
                    <span>Administración comercial</span>
                  </div>
                </div>
                <div className="mk-group">Principal</div>
                <div className="mk-item active"><span className="sq" /> Dashboard</div>
                <div className="mk-item"><span className="sq" /> Barrios</div>
                <div className="mk-item"><span className="sq" /> Lotes</div>
                <div className="mk-item"><span className="sq" /> Compradores</div>
                <div className="mk-group">Comercial</div>
                <div className="mk-item"><span className="sq" /> Ventas</div>
                <div className="mk-item"><span className="sq" /> Cotizaciones</div>
                <div className="mk-item"><span className="sq" /> Reservas</div>
              </aside>
              <div className="mk-main">
                <h3 className="mk-h">Dashboard</h3>
                <p className="mk-sub">Estado general de ventas, cobranza y vencimientos.</p>
                <div className="mk-stats">
                  <div className="mk-stat"><div className="lbl">Barrios</div><div className="val">3</div></div>
                  <div className="mk-stat"><div className="lbl">Lotes</div><div className="val">142</div></div>
                  <div className="mk-stat"><div className="lbl">Disponibles</div><div className="val">61</div></div>
                  <div className="mk-stat"><div className="lbl">Reservados</div><div className="val">18</div></div>
                  <div className="mk-stat"><div className="lbl">Vendidos</div><div className="val">63</div></div>
                </div>
                <div className="mk-card">
                  <h4>Alertas de cuotas vencidas</h4>
                  <div className="mk-row head">
                    <span>Comprador</span><span>Barrio</span><span>Cuotas</span><span>Estado</span><span>Acción</span>
                  </div>
                  {ALERTS.map((a) => (
                    <div className="mk-row" key={a.name}>
                      <strong>{a.name}</strong><span>{a.barrio}</span><span>{a.cuotas}</span>
                      <span className="mk-pill"><span className="dot-sm" />Vencida</span>
                      <span><span className="mk-mini-btn">Ver venta</span></span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
