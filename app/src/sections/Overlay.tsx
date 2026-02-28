import { useRef, useLayoutEffect, useCallback } from 'react';
import gsap from 'gsap';


export function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Extract event handler for better readability (rerender-move-effect-to-event)
  const scrollToContact = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('.contact-section')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        // 1. Initial Intro Animation (Hero)
        const tl = gsap.timeline();
        tl.from(".hero-element", {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            delay: 0.5 // Wait for loader
        });

        // 2. Scroll Animations for Sections
        const sections = document.querySelectorAll('.glass-card');
        sections.forEach((section) => {
            gsap.from(section, {
                scrollTrigger: {
                    trigger: section,
                    start: "top 85%", // Start when top of card hits 85% of viewport height
                    toggleActions: "play none none reverse"
                },
                y: 100,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });
        });
        

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="sections-container" ref={containerRef}>
      {/* Section 1: Intro / Presentación */}
      <section className="section" style={{ alignItems: 'flex-start', paddingTop: '15vh', position: 'relative' }}>
        <div className="content-wrapper">
          <p className="hero-element" style={{ color: '#fff', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem', fontWeight: 600 }}>
            Benjamin Forero Suárez
          </p>
          <h1 className="hero-element" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 1.1 }}>
            Ingeniero Electrónico <br />
            <span style={{ color: '#FFD700', opacity: 0.9 }}>IoT & Embebidos</span>
          </h1>
          <p className="hero-element" style={{ maxWidth: '800px', fontSize: '1.25rem', marginTop: '1.5rem', lineHeight: 1.6 }}>
            Transformando desafíos de alta complejidad en soluciones tecnológicas innovadoras.
            Más de 25 años de experiencia en automatización, electrónica de potencia y desarrollo avanzado.
          </p>
          <div className="hero-element" style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem' }}>
             <a href="#contact" className="btn" onClick={scrollToContact}>
               Contactar
             </a>
             <a href="#perfil" className="btn" onClick={(e) => {
                e.preventDefault();
                document.querySelector('.perfil-section')?.scrollIntoView({ behavior: 'smooth' });
             }} style={{ background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.3)' }}>
               Ver Perfil
             </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div style={{
            position: 'absolute',
            bottom: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 50
        }}>
            <div className="hero-element" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
                color: '#ffffff'
            }} onClick={() => document.querySelector('.perfil-section')?.scrollIntoView({ behavior: 'smooth' })}>
                <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '3px', fontWeight: 600 }}>Scrollear</span>
                <div style={{
                    width: '2px',
                    height: '40px',
                    background: 'linear-gradient(to bottom, rgba(255,255,255,1), rgba(255,255,255,0))',
                    animation: 'scrollDown 2s infinite cubic-bezier(0.22, 1, 0.36, 1)'
                }} />
            </div>
        </div>
      </section>

      {/* Section 2: Perfil Profesional */}
      <section className="section perfil-section" style={{ justifyContent: 'flex-end', textAlign: 'right' }}>
        <div className="content-wrapper">
          <div className="glass-card" style={{ display: 'inline-block', maxWidth: '850px', textAlign: 'left' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>Perfil Profesional</h2>
            <p style={{ fontSize: '1.25rem', marginBottom: '1.5rem', maxWidth: '100%', lineHeight: 1.6 }}>
              Ingeniero Electrónico de la <strong>Universidad Antonio Nariño</strong> especializado en Sistemas de Control y Automatización Industrial. Con más de dos décadas liderando proyectos desde la conceptualización hasta la implementación en campo.
            </p>
            <p style={{ fontSize: '1.25rem', maxWidth: '100%', color: '#ccc', lineHeight: 1.6 }}>
              Experto en comunicaciones inalámbricas (Wi-Fi, Bluetooth, 4G, LoRa), protocolos industriales (MQTT, Modbus, TCP/IP) y diseño de hardware/firmware para sectores de alta exigencia técnica como electromedicina, transporte, aeronáutica y defensa.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Competencias Técnicas */}
      <section className="section" style={{ alignItems: 'center' }}>
        <div className="content-wrapper">
          <div className="glass-card" style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', textAlign: 'left' }}>
            <div style={{ borderLeft: '4px solid #FFD700', paddingLeft: '1.5rem', marginBottom: '2rem' }}>
               <span style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', color: '#FFD700', fontWeight: 600}}>
                 Tech Stack
               </span>
            </div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '3rem' }}>Competencias Técnicas</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                 <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2.5rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{color: '#FFD700'}}>▹</span> IoT & Sistemas Embebidos
                    </h3>
                    <p style={{ fontSize: '1.05rem', color: '#aaa', lineHeight: 1.7 }}>
                      <strong>Plataformas:</strong> ESP32, ESP8266, STM32, PIC, ARM, Atmel.<br/>
                      <strong>Software:</strong> FreeRTOS, C/C++, Python, MicroPython, Linux embebido.<br/>
                      <strong>Conectividad:</strong> Wi-Fi, Bluetooth (BLE/Classic), GSM/4G LTE, LoRaWAN, Zigbee, Radio módems.
                    </p>
                 </div>
                 
                 <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2.5rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{color: '#FFD700'}}>▹</span> Redes, Nube y Seguridad
                    </h3>
                    <p style={{ fontSize: '1.05rem', color: '#aaa', lineHeight: 1.7 }}>
                      <strong>Protocolos:</strong> MQTT/TLS, HTTP/REST, TCP/UDP, WebSockets.<br/>
                      <strong>Cloud IoT:</strong> AWS IoT, Azure, Node-RED, Grafana, Thingsboard.<br/>
                      <strong>Seguridad & DB:</strong> TLS/SSL, X.509, IPv4/IPv6, MySQL, SQLite, InfluxDB.
                    </p>
                 </div>

                 <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2.5rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{color: '#FFD700'}}>▹</span> Hardware & Electrónica
                    </h3>
                    <p style={{ fontSize: '1.05rem', color: '#aaa', lineHeight: 1.7 }}>
                      <strong>Potencia:</strong> Conversores SMPS, UPS, Inversores, Control de Motores (AC/DC/BLDC).<br/>
                      <strong>Automatización:</strong> PLCs, HMI, Modbus TCP/RTU, RS-485, Sensores.<br/>
                      <strong>Diseño:</strong> Esquemáticos y PCB Routing (EasyEDA, CircuitMaker, PSIM).
                    </p>
                 </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Experiencia / Proyectos Destacados */}
      <section className="section" style={{ alignItems: 'center' }}>
        <div className="content-wrapper">
          <div className="glass-card" style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', textAlign: 'left' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem' }}>Proyectos Destacados</h2>
            <p style={{ marginBottom: '3rem', fontSize: '1.2rem', maxWidth: '800px', color: '#ccc' }}>
              Ciclo completo de desarrollo en soluciones robustas y sistemas embebidos.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
                 
                 <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2.5rem', borderRadius: '16px', borderTop: '2px solid rgba(255,255,255,0.1)' }}>
                    <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: '#fff' }}>I+D Militar & Electromedicina</h3>
                    <ul style={{ fontSize: '1.05rem', color: '#bbb', paddingLeft: '1.2rem', margin: 0, lineHeight: 1.6 }}>
                      <li style={{marginBottom: '0.8rem'}}>Modernización <strong>Sistema Eagle Eye</strong> (Sistema antiaéreo con procesadores/comunicaciones).</li>
                      <li style={{marginBottom: '0.8rem'}}><strong>Sistema de Alerta Temprana</strong> (Hardware de detección y comunicación encriptada).</li>
                      <li style={{marginBottom: '0.8rem'}}>Cronógrafo balístico de alta precisión.</li>
                      <li>Desarrollo de Unidad Electroquirúrgica Microcontrolada (RF 300-500kHz).</li>
                    </ul>
                 </div>

                 <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2.5rem', borderRadius: '16px', borderTop: '2px solid rgba(255,255,255,0.1)' }}>
                    <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: '#fff' }}>IoT Industrial & Movilidad</h3>
                    <ul style={{ fontSize: '1.05rem', color: '#bbb', paddingLeft: '1.2rem', margin: 0, lineHeight: 1.6 }}>
                      <li style={{marginBottom: '0.8rem'}}><strong>Telemetría vehicular</strong> con GPS y GSM/4G, y plataformas Node-RED/Grafana.</li>
                      <li style={{marginBottom: '0.8rem'}}>Gateway Modbus RTU a MQTT sobre redes industriales.</li>
                      <li style={{marginBottom: '0.8rem'}}>Controles de acceso biométrico, RFID, cámaras OCR y talanqueras motorizadas.</li>
                      <li>Diseño de <strong>Taxímetros Inteligentes</strong> con impresión térmica.</li>
                    </ul>
                 </div>

            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Trayectoria */}
      <section className="section" style={{ justifyContent: 'flex-start' }}>
        <div className="content-wrapper">
          <div className="glass-card" style={{ display: 'inline-block', maxWidth: '800px', textAlign: 'left' }}>
             <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '2.5rem', lineHeight: 1.1 }}>Experiencia de Valor</h2>
             
             <div style={{ position: 'relative', paddingLeft: '2rem', borderLeft: '2px solid rgba(255,255,255,0.1)' }}>
                 
                 <div style={{ position: 'relative', marginBottom: '2.5rem' }}>
                   <div style={{ position: 'absolute', width: '12px', height: '12px', background: '#FFD700', borderRadius: '50%', left: '-39px', top: '6px' }}></div>
                   <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '0.2rem' }}>Lextron Ltda.</h3>
                   <p style={{ color: '#aaa', fontSize: '1rem', marginBottom: '0.8rem', fontWeight: 600 }}>INGENIERO DE DESARROLLO (2006 — 2015)</p>
                   <p style={{ color: '#ccc', fontSize: '1.05rem', lineHeight: 1.5 }}>Liderazgo en diseño y prototipado de placas electrónicas, desarrollo de firmware y sistemas para aplicaciones específicas de alto desempeño.</p>
                 </div>

                 <div style={{ position: 'relative', marginBottom: '1rem' }}>
                   <div style={{ position: 'absolute', width: '12px', height: '12px', background: '#FFD700', borderRadius: '50%', left: '-39px', top: '6px' }}></div>
                   <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '0.2rem' }}>Dircom Ingeniería Ltda.</h3>
                   <p style={{ color: '#aaa', fontSize: '1rem', marginBottom: '0.8rem', fontWeight: 600 }}>INGENIERO ELECTRÓNICO (2001 — 2006)</p>
                   <p style={{ color: '#ccc', fontSize: '1.05rem', lineHeight: 1.5 }}>Implementación de sistemas de telecomunicaciones y soporte técnico en infraestructura electrónica.</p>
                 </div>

             </div>
             
             <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', margin: '3rem 0' }}></div>
             
             <div>
                <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '1rem' }}>Formación Académica</h3>
                <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#ccc' }}>
                 • <strong>Ingeniero Electrónico</strong> - Universidad Antonio Nariño (Acta 6953)<br/>
                 • <strong>Especialización</strong> en Sistemas de Control y Automatización Industrial<br/>
                 • <strong>Formación Continua:</strong> Múltiples entornos de IoT, Ciberseguridad Cloud, Electrónica de Potencia. 
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* Section 6: Contact */}
      <section className="section contact-section" style={{ textAlign: 'center' }}>
        <div className="content-wrapper" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p style={{ textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '1.5rem', opacity: 0.7, fontSize: '0.9rem' }}>
            Transformemos Ideas en Realidad
          </p>
          <h2 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '3rem' }}>Contacto</h2>
          
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
            
            {/* Email Button */}
            <a href="mailto:benforsu@gmail.com" className="contact-card">
               <span className="contact-label">Correo Electrónico</span>
               <span className="contact-value" style={{textTransform: 'none'}}>benforsu@gmail.com</span>
            </a>

            {/* Phone Button */}
            <a href="https://wa.me/573017084155" target="_blank" rel="noopener noreferrer" className="contact-card">
               <span className="contact-label">Celular / WhatsApp</span>
               <span className="contact-value">+57 301 708 4155</span>
            </a>

          </div>
        </div>
      </section>
    </div>
  );
}
