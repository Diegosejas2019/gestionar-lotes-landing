import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav${isScrolled ? ' is-scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#" className="logo" aria-label="GestionAr Lotes">
          <span className="logo-mark">GL</span>
          <span>GestionAr Lotes</span>
        </a>
        <nav className="nav-links" aria-label="Principal">
          <a href="#funcionalidades">Funcionalidades</a>
          <a href="#como-funciona">Cómo funciona</a>
          <a href="#portal">Portal</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <div className="nav-cta">
          <a href="#contacto" className="btn btn-primary">Solicitar demo</a>
        </div>
      </div>
    </header>
  );
}
