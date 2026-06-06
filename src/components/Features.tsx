import { Map, TrendingUp, UserCheck, BarChart3, BellRing, MessageSquare, type LucideIcon } from 'lucide-react';
import Reveal from './Reveal';

const FEATURES: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Map,
    title: 'Gestión de lotes y mapa visual',
    text: 'Cargá tus manzanas y lotes una sola vez. Mapa interactivo con disponibilidad, reservas y ventas actualizado en tiempo real.',
  },
  {
    icon: TrendingUp,
    title: 'Ventas y cuotas',
    text: 'Generá boletos, planes de pago y financiación en pesos o dólares con ajustes por CER, UVA o índices propios.',
  },
  {
    icon: UserCheck,
    title: 'Portal del comprador',
    text: 'Cada cliente accede a su propia cuenta para ver cuotas, descargar comprobantes y pagar online con Mercado Pago.',
  },
  {
    icon: BarChart3,
    title: 'Reportes financieros',
    text: 'Cobranzas, proyecciones, saldos por barrio y por lote. Exportá a Excel o conectá con tu sistema contable.',
  },
  {
    icon: BellRing,
    title: 'Alertas de morosidad',
    text: 'El sistema detecta vencimientos y mora automáticamente. Recibís un resumen diario con los casos que requieren acción.',
  },
  {
    icon: MessageSquare,
    title: 'Comunicaciones automáticas',
    text: 'Recordatorios de pago, comprobantes y novedades por WhatsApp y email, con plantillas editables y envío programado.',
  },
];

export default function Features() {
  return (
    <section className="section" id="funcionalidades">
      <div className="container">
        <Reveal className="section-head">
          <span className="kicker">Funcionalidades</span>
          <h2>Todo lo que tu administración necesita, en un solo lugar.</h2>
          <p>Desde el primer interesado hasta la última cuota cobrada. Sin planillas, sin mails sueltos, sin perder información entre el comercial y la administración.</p>
        </Reveal>

        <div className="features-grid">
          {FEATURES.map(({ icon: Icon, title, text }) => (
            <Reveal className="feature" key={title}>
              <div className="feature-ico"><Icon /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
