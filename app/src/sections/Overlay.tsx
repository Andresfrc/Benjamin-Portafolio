export function Overlay() {
  return (
    <div className="sections-container">
      {/* Section 1: Intro / Presentación */}
      <section className="section" style={{ alignItems: 'flex-start', paddingTop: '15vh' }}>
        <div className="content-wrapper">
          <p style={{ color: '#fff', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem' }}>
            Benjamin Forero
          </p>
          <h1>
            Visión y Precisión <br />
            en Ingeniería
          </h1>
          <p>
            Transformando desafíos técnicos complejos en soluciones robustas y escalables. 
            Más de 20 años de excelencia profesional, fundamentados en rigor de ingeniería y visión estratégica.
          </p>
          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
             <a href="#contact" className="btn" onClick={(e) => {
               e.preventDefault();
               document.querySelector('.contact-section')?.scrollIntoView({ behavior: 'smooth' });
             }}>
               Contactar
             </a>
          </div>
        </div>
      </section>

      {/* Section 2: Perfil Profesional */}
      <section className="section" style={{ justifyContent: 'flex-end', textAlign: 'right' }}>
        <div className="content-wrapper">
          <div className="glass-card" style={{ display: 'inline-block', maxWidth: '800px', textAlign: 'left' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>Una Trayectoria de Impacto</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', maxWidth: '100%' }}>
              Egresado de la <strong>Universidad Antonio Nariño</strong>. Mi carrera abarca más de dos décadas de adaptación a cambios tecnológicos sin perder de vista los principios fundamentales de la ingeniería.
            </p>
            <p style={{ fontSize: '1.2rem', maxWidth: '100%' }}>
              No solo escribo código; arquitecto sistemas que resuelven problemas reales. Mi enfoque está en crear valor sostenible a través de liderazgo técnico y claridad.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Sobre Mí (About Me & Photo) */}
      <section className="section" style={{ justifyContent: 'flex-start' }}>
        <div className="content-wrapper">
          <div className="glass-card" style={{ display: 'flex', gap: '2rem', alignItems: 'center', maxWidth: '900px' }}>
             
             {/* Photo Placeholder - Replace src with actual image later */}
             <div style={{ 
               width: '300px', 
               height: '300px', 
               flexShrink: 0,
               background: 'rgba(255,255,255,0.1)', 
               borderRadius: '16px',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               border: '1px dashed rgba(255,255,255,0.3)'
             }}>
               <span style={{ color: '#aaa' }}>[Espacio para Foto]</span>
             </div>

             <div>
                <h2 style={{ fontSize: '3rem', marginBottom: '1rem', lineHeight: 1 }}>Sobre Mí</h2>
                <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
                  Ingeniero de corazón y estratega por experiencia. Me apasiona construir puentes entre la complejidad técnica y las necesidades humanas.
                </p>
                <p style={{ fontSize: '1.1rem', color: '#aaa' }}>
                  Cuando no estoy diseñando arquitecturas de software, estoy explorando nuevas formas de potenciar equipos y optimizar procesos.
                  <br/><br/>
                  <em>*Esta sección está lista para ser personalizada con tu biografía detallada y fotografía profesional.*</em>
                </p>
             </div>

          </div>
        </div>
      </section>

      {/* Section 4: Detail / Philosophy */}
      <section className="section" style={{ justifyContent: 'flex-end', textAlign: 'right' }}>
        <div className="content-wrapper">
             <div className="glass-card" style={{ display: 'inline-block', maxWidth: '600px', textAlign: 'left' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{fontSize: '1.1rem'}}>Experiencia</span>
                    <span style={{fontSize: '1.1rem'}}>2003 — Presente</span>
                </div>
                <h2 style={{ fontSize: '5rem', marginBottom: '0.5rem', lineHeight: 1 }}>20+ Años</h2>
                <div style={{ height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', width: '100%' }}>
                     <div style={{ height: '100%', width: '100%', background: '#fff', borderRadius: '3px' }}></div>
                </div>
                <p style={{ marginTop: '2rem', fontSize: '1.1rem', lineHeight: 1.6 }}>
                   <strong>Mi Filosofía:</strong> La tecnología es la herramienta, no el fin. Priorizo la mantenibilidad, escalabilidad y la comunicación honesta sobre tendencias pasajeras.
                </p>
             </div>
        </div>
      </section>
      
       {/* Section 4: Projects (Evolution Zone) */}
       <section className="section" style={{ alignItems: 'center' }}>
        <div className="content-wrapper">
          <div className="glass-card" style={{ width: '100%', maxWidth: '1100px', margin: '0 auto', textAlign: 'left' }}>
            <div style={{ borderLeft: '4px solid #FFD700', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
               <span style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', color: '#FFD700', fontWeight: 600}}>
                 Próximamente
               </span>
            </div>
            <h2 style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>Proyectos</h2>
            <p style={{ marginBottom: '3rem', fontSize: '1.25rem', maxWidth: '800px' }}>
              Esta sección se encuentra actualmente en construcción y actualización constante. 
              Pronto estaré publicando una selección de proyectos que demuestran la evolución de arquitecturas de alta escala y soluciones de ingeniería avanzada.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                 <div style={{ background: 'rgba(255,255,255,0.05)', padding: '2.5rem', borderRadius: '16px' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Sistemas Empresariales</h3>
                    <p style={{ fontSize: '1rem', color: '#aaa' }}>Arquitectura y optimización de flujos de datos complejos.</p>
                 </div>
                 <div style={{ background: 'rgba(255,255,255,0.05)', padding: '2.5rem', borderRadius: '16px' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Ingeniería de Procesos</h3>
                    <p style={{ fontSize: '1rem', color: '#aaa' }}>Automatización y eficiencia operativa a gran escala.</p>
                 </div>
            </div>
          </div>
        </div>
      </section>

       {/* Section 5: Contact */}
      <section className="section contact-section" style={{ textAlign: 'center' }}>
        <div className="content-wrapper" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p style={{ textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '1.5rem', opacity: 0.7, fontSize: '0.9rem' }}>
            ¿Listo para el siguiente paso?
          </p>
          <h2 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '3rem' }}>Hablemos</h2>
          
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
            
            {/* Email Button */}
            <a href="mailto:benforsu@gmail.com" className="contact-card">
               <span className="contact-label">Correo Electrónico</span>
               <span className="contact-value">benforsu@gmail.com</span>
            </a>

            {/* Phone Button */}
            <a href="tel:+573172786562" className="contact-card">
               <span className="contact-label">Llamada Directa</span>
               <span className="contact-value">317 278 6562</span>
            </a>

          </div>
        </div>
      </section>
    </div>
  );
}
