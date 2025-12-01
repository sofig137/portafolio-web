import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';

function DetalleProyecto() {
  const { categoria, id } = useParams();
  const [imagenAmpliada, setImagenAmpliada] = useState(null);

  // colores diferentes para cada seccion
  const coloresBase = {
    ilustracion: {
      principal: '#FFC603',
    },
    diseno: {
      principal: '#88DF1E',
    },
    arte: {
      principal: '#6FD5D7',
    }
  };

  // agarrar el color segun la categoria
  const colores = coloresBase[categoria] || coloresBase.ilustracion;

  // todos mis proyectos con su info
  const proyectos = {
    ilustracion: [
      {
        id: 'proyecto-1',
        titulo: 'LOBOTOMIA',
        fecha: '2025',
        tecnica: 'Digital, Procreate, Illustrator',
        descripcion: 'LOBOTOMIA es un proyecto de ilustración gráfica conceptual que reinterpreta los problemas de desamor a través de una sátira visual. La intención fue emular la estética de un cartel para proponer, de manera drástica y simbólica, una solución a la angustia sentimental. La pieza se distingue por el uso de colores vibrantes y contrastantes que potencian el impacto visual y la carga emocional del concepto. El grueso del trabajo se desarrolló en Procreate para la ilustración y texturizado, mientras que la tipografía y los detalles gráficos de alta precisión fueron finalizados en Adobe Illustrator.',
        imagenPrincipal: '/ilustracion1.jpg',
        proceso: [
          { titulo: 'Boceto inicial', imagen: '/proceso1-boceto.jpg' },
          { titulo: 'Lineart', imagen: '/proceso1-linea.jpg' },
          { titulo: 'Color base', imagen: '/proceso1-color.jpg' },
          { titulo: 'Detalles finales', imagen: '/ilustracion1.jpg' }
        ],
        colores: ['#387385', '#FDC52A', '#B70805', '#000002', '#F1D49F']
      },
      {
        id: 'proyecto-2',
        titulo: 'Mommy Dearest',
        fecha: '2025',
        tecnica: 'Digital, Procreate',
        descripcion: 'Mommy Dearest es una pieza de arte digital que explora el tema del amor tóxico y la posesión a través del vínculo materno. La ilustración representa la lucha interna de un individuo por avanzar, quien se encuentra literalmente anclado por la sombra de un recuerdo o una figura dominante, simbolizada por la madre. Conceptualmente, la obra forma parte de una narrativa visual continua, donde ciertos personajes recurrentes exploran distintos aspectos de la psique humana. Este proyecto fue ejecutado íntegramente en Procreate y se desarrolló como un estudio avanzado de luces y sombras. Se utilizó la iluminación dramática para acentuar la tensión psicológica, contrastando la sutil luz en el rostro del hijo con la profunda oscuridad que envuelve a la figura materna, logrando una atmósfera de constante opresión.',
        imagenPrincipal: '/ilustracion2.jpg',
        proceso: [
          { titulo: 'Boceto inicial', imagen: '/proceso2-boceto.jpg' },
          { titulo: 'Lineart', imagen: '/proceso2-linea.jpg' },
          { titulo: 'Color base', imagen: '/proceso2-color.jpg' },
          { titulo: 'Detalles finales', imagen: '/ilustracion2.jpg' }
        ],
        colores: ['#FDDABA', '#7A1208', '#7B6B6B', '#52495E', '#262834']
      },
      {
        id: 'proyecto-3',
        titulo: 'SMILE',
        fecha: '2025',
        tecnica: 'Digital, Procreate',
        descripcion: 'SMILE es una ilustración conceptual que busca plasmar la paranoia y la presión propia de mantener una fachada de bienestar. El título, irónico, juega con el concepto del autoengaño y la sensación constante de estar siendo vigilado. Visualmente, la repetición de los rostros en segundo plano intensifica la sensación de ansiedad disociativa y vigilancia. El diseño gráfico utiliza tramas de semitono en la base para evocar la estética de impresión de cómics clásicos, sumando una capa de estilo al concepto. Técnicamente, la obra fue un ejercicio de experimentación en color monocromático utilizando una paleta de rojos y magentas. Este uso intencional del color restringe la profundidad visual para, en cambio, maximizar el impacto emocional y la sensación de alarma.',
        imagenPrincipal: '/ilustracion3.jpg',
        proceso: [
          { titulo: 'Boceto inicial', imagen: '/proceso3-boceto.jpg' },
          { titulo: 'Lineart', imagen: '/proceso3-linea.jpg' },
          { titulo: 'Color base', imagen: '/proceso3-color.jpg' },
          { titulo: 'Detalles finales', imagen: '/ilustracion3.jpg' }
        ],
        colores: ['#F4435D', '#87132A', '#5B0220', '#FE7998', '#ffffffff']
      }
    ],
    diseno: [
      {
        id: 'proyecto-1',
        titulo: 'The Road',
        fecha: '2025',
        tecnica: 'p5.js, HTML y CSS.',
        descripcion: 'The Road es una novela visual interactiva de terror psicológico que invita al jugador a sumergirse en una historia oscura y envolvente. El usuario toma decisiones que afectan el curso de los acontecimientos, desbloqueando distintos finales posibles. Se optó por una estética en blanco y negro, inspirada en lo analógico y lo vintage, utilizando recursos visuales como el halftone y el uso intencional de píxeles para crear una atmósfera inquietante. Desarrollado por el equipo creativo Atelier , compuesto por Fransisca Huenullan G. y Sofia Catalina Garrido A.',
        textoExtra: 'Se pasó de un único archivo de código a una estructura modular, dividiendo la funcionalidad en archivos JS externos. Esto facilita la reutilización y el mantenimiento del código. Para manejar eficientemente todos los textos narrativos y diálogos del juego, estos se extrajeron del código y se cargaron desde un único archivo externo (script.txt) usando loadStrings(). Esto garantizó un código principal limpio y simplificó la edición del contenido narrativo. La totalidad del flujo narrativo, las decisiones del jugador y la visualización de los elementos se controlan mediante un único sistema de máquina de estados, que gestiona cuándo mostrar imágenes, texto y botones.',
        linkJuego: 'https://editor.p5js.org/Atelier/full/4tQe_VaL8',
        imagenPrincipal: '/diseño1.jpg',
        proceso: [
          { titulo: 'Diseño de personaje', imagen: '/diseño1-per1.jpg' },
          { titulo: 'Diseño de personaje', imagen: '/diseño1-per2.jpg' },
          { titulo: 'Diseño de personaje', imagen: '/diseño1-per3.jpg' },
          { titulo: 'CG', imagen: '/diseño1-CG.jpg' },
          { titulo: 'Gameplay', imagen: '/diseño1-gameplay.jpg' }
        ],
        colores: ['#191919', '#383838', '#626262', '#949494', '#FFFFFF']
      }
    ],
    arte: [
      {
        id: 'proyecto-1',
        titulo: 'Mi Amor',
        fecha: '2025',
        tecnica: 'Acrílico sobre lienzo',
        descripcion: 'Mi Amor es una pieza de arte tradicional ejecutada en acrílico sobre lienzo, que busca capturar la vitalidad y la fugacidad de un momento íntimo. La obra se centra en el estudio del movimiento y la luz a través de pinceladas rápidas y expresivas, especialmente en el follaje y los pétalos. Se utilizó una paleta de colores de alto contraste y saturación para evocar una sensación de calidez y pasión. Este proyecto explora la forma en que los elementos orgánicos, como las flores y la luz reflejada en el jarrón de vidrio, pueden ser representados con textura y dinamismo.',
        imagenPrincipal: '/arte1.jpg',
        proceso: [
          { titulo: 'Estudio', imagen: '/arte1-boceto.jpg' },
          { titulo: 'En proceso', imagen: '/arte1-proceso.jpg' }
        ],
        colores: ['#E9D155', '#BD5A86', '#DFD2BF', '#5BB039', '#F05773']
      }
    ]
  };

  // busco el proyecto que quiero mostrar
  const proyectoActual = proyectos[categoria] 
  ? proyectos[categoria].find(p => p.id === id) 
  : null;

  // si no existe muestro mensaje de que estaran proximamente y link para volver
  if (!proyectoActual) {
    return (
      <div style={{ 
        textAlign: 'center', 
        padding: '100px 20px',
        color: '#6d6d6dff' 
      }}>
        <h1>Próximamente :)</h1>
        <Link to={`/${categoria}`} style={{ color: coloresBase.ilustracion.principal }}>
          Volver a {categoria}
        </Link>
      </div>
    );
  }

  return (
    <>
      <main style={{ 
        maxWidth: '1400px', 
        margin: '40px auto', 
        padding: '0 30px' 
      }}>
        {/* boton para volver */}
        <Link 
          to={`/${categoria}`}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            color: colores.principal,
            textDecoration: 'none',
            fontSize: '18px',
            marginBottom: '30px',
            transition: 'color 0.3s ease'
          }}
        >
          ← Volver a {categoria}
        </Link>

        {/* seccion imagen grande y detalles */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          marginBottom: '60px'
        }}>
          {/* imagen principal */}
          <div>
            <div 
              style={{
                width: '80%',
                borderRadius: '20px',
                overflow: 'hidden',
                backgroundColor: '#1a1a1a',
                cursor: 'pointer',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.01)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <img 
                onClick={() => setImagenAmpliada(proyectoActual.imagenPrincipal)}
                src={proyectoActual.imagenPrincipal}
                alt={proyectoActual.titulo}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block'
                }}
              />
            </div>

            {/* texto adicional debajo de la imagen */}
            {proyectoActual.textoExtra && (
              <div style={{
                width: '80%',
                marginTop: '20px',
                padding: '20px',
                borderRadius: '15px'
              }}>
                <p style={{
                  color: '#7c7c7cff',
                  fontSize: '16px',
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  {proyectoActual.textoExtra}
                </p>
              </div>
            )}

            {/* boton para jugar (solo si existe linkJuego) */}
            {proyectoActual.linkJuego && (
              <a 
                href={proyectoActual.linkJuego}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  width: '80%',
                  marginTop: '20px',
                  padding: '15px',
                  backgroundColor: colores.principal,
                  color: '#ffffff',
                  textAlign: 'center',
                  borderRadius: '15px',
                  textDecoration: 'none',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                Jugar The Road
              </a>
            )}
          </div>

          {/* detalles del proyecto */}
          <div>
            <h1 style={{
              color: '#7c7c7cff',
              fontSize: '45px',
              marginBottom: '15px',
              lineHeight: '1.2'
            }}>
              {proyectoActual.titulo}
            </h1>

            {/* cajita con fecha y tecnica */}
            <div style={{
              backgroundColor: colores.principal,
              borderRadius: '20px',
              padding: '20px',
              marginBottom: '30px'
            }}>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: '1fr 1fr', 
                gap: '20px' 
              }}>
                <div>
                  <h3 style={{
                    color: '#ffffffff',
                    fontSize: '20px',
                    textTransform: 'uppercase',
                    marginBottom: '6px'
                  }}>
                    Fecha
                  </h3>
                  <p style={{
                    color: '#ffffffff',
                    fontSize: '16px',
                    margin: 0
                  }}>
                    {proyectoActual.fecha}
                  </p>
                </div>

                <div>
                  <h3 style={{
                    color: '#ffffffff',
                    fontSize: '20px',
                    textTransform: 'uppercase',
                    marginBottom: '6px'
                  }}>
                    Técnica
                  </h3>
                  <p style={{
                    color: '#ffffffff',
                    fontSize: '16px',
                    margin: 0
                  }}>
                    {proyectoActual.tecnica}
                  </p>
                </div>
              </div>
            </div>

            {/* descripcion del proyecto */}
            <div style={{ marginBottom: '30px' }}>
              <h3 style={{
                color: '#7c7c7cff',
                fontSize: '20px',
                marginBottom: '10px'
              }}>
                Sobre el proyecto
              </h3>
              <p style={{
                color: '#7c7c7cff',
                fontSize: '16px',
                lineHeight: '1.6',
                margin: 0
              }}>
                {proyectoActual.descripcion}
              </p>
            </div>
            
            {/* paleta de colores */}
            {proyectoActual.colores && (
              <div style={{ marginBottom: '30px' }}>
                <h3 style={{ 
                  color: '#7c7c7cff',
                  fontSize: '20px',
                  marginBottom: '15px'
                }}>
                  Paleta de colores
                </h3>
                <div style={{
                  display: 'flex',
                  gap: '12px',
                  flexWrap: 'wrap'
                }}>
                  {proyectoActual.colores.map((color, index) => (
                    <div key={index} style={{ textAlign: 'center' }}>
                      <div style={{
                        width: '100px',
                        height: '100px',
                        backgroundColor: color,
                        borderRadius: '12px',
                        marginBottom: '6px'
                      }}></div>
                      <p style={{
                        color: '#7c7c7cff',
                        fontSize: '15px',
                        fontFamily: 'monospace',
                        margin: 0
                      }}>
                        {color}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* imagenes del proceso */}
        {proyectoActual.proceso && proyectoActual.proceso.length > 0 && (
          <div style={{ marginBottom: '60px' }}>
            <h2 style={{
              color: '#7c7c7cff',
              fontSize: '30px',
              marginBottom: '25px'
            }}>
              Proceso creativo
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px'
            }}>
              {proyectoActual.proceso.map((paso, index) => (
                <div key={index}>
                  {/* contenedor cuadrado para las imagenes */}
                  <div 
                    style={{
                      width: '100%',
                      borderRadius: '15px',
                      overflow: 'hidden',
                      backgroundColor: '#1a1a1a',
                      cursor: 'pointer',
                      transition: 'transform 0.3s ease',
                      position: 'relative',
                      paddingTop: '100%'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    <img 
                      onClick={() => setImagenAmpliada(paso.imagen)}
                      src={paso.imagen}
                      alt={paso.titulo}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block'
                      }}
                    />
                  </div>

                  <h3 style={{
                    color: '#7c7c7cff',
                    fontSize: '16px',
                    margin: '10px 0 0 0',
                    textAlign: 'center'
                  }}>
                    {paso.titulo}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* modal simplificado */}
      {imagenAmpliada && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '40px'
          }}
        >
          {/* boton para cerrar */}
          <button
            onClick={() => setImagenAmpliada(null)}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              backgroundColor: 'white',
              border: 'none',
              color: 'black',
              fontSize: '30px',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            ×
          </button>

          {/* imagen grande */}
          <img 
            src={imagenAmpliada}
            alt="Imagen ampliada"
            style={{
              maxWidth: '90%',
              maxHeight: '90%',
              objectFit: 'contain',
              borderRadius: '10px'
            }}
          />
        </div>
      )}
    </>
  );
}

export default DetalleProyecto;