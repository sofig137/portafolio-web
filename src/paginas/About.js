function About() {
  // mis habilidades
  const habilidades = [
    { nombre: 'Ilustración Digital', porcentaje: 95 },
    { nombre: 'Pintura Digital', porcentaje: 80 },
    { nombre: 'Diseño de Personajes', porcentaje: 90 },
    { nombre: 'Conceptualización Visual', porcentaje: 85 },
    { nombre: 'Diseño Gráfico', porcentaje: 75 },
    { nombre: 'Retoque Digital Avanzado', porcentaje: 75 },
    { nombre: 'Animación 2D / Motion Graphics', porcentaje: 80 },
    { nombre: 'Pintura Acrílica', porcentaje: 90 },
    { nombre: 'Pintura al Oleo', porcentaje: 70 }
  ];
  // seccion principal con mi dibujillo y presentacion
  return (
    <div>
      <main style={{
        maxWidth: '1200px',
        margin: '60px auto',
        padding: '0 20px',
        display: 'flex',
        gap: '60px',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>
        {/* mi dibujo principal */}
        <div style={{
          flex: '1',
          minWidth: '300px',
          height: '700px',
          borderRadius: '20px',
          overflow: 'hidden'
        }}>
          <img 
            src="/Colors.jpg"
            alt="Perfil"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>

        {/* texto de presentacion */}
        <div style={{
          flex: '1',
          minWidth: '300px'
        }}>
          <h1 style={{
            color: '#fd41b2',
            fontSize: '48px',
            marginBottom: '30px'
          }}>
            Sofía Garrido A. Ilustradora y Creadora Multimedial
          </h1>
          
          <p style={{
            color: '#7c7c7cff',
            lineHeight: '1.8',
            fontSize: '16px',
            marginBottom: '20px'
          }}>
            Soy Sofía Garrido, tambien conocida como Sofi, una artista y estudiante de Diseño Gráfico Multimedial cuya especialización y mayor pasión es la Ilustración. Para mí, el proceso creativo es la forma más pura de dar vida a los mundos e ideas que existen en mi mente. Aunque mi principal fortaleza es el arte visual, mi formación me permite integrar habilidades como el retoque digital, la edición de video e incluso nociones de programación, asegurando una visión integral en cada proyecto. Explora mi trabajo y descubre la forma en que transformo conceptos abstractos en piezas visuales vibrantes y funcionales.
          </p>
        </div>
      </main>

      {/* mi enfoque y habilidades */}
      <section style={{
        maxWidth: '1200px',
        margin: '80px auto',
        padding: '0 20px',
        display: 'flex',
        gap: '60px',
        flexWrap: 'wrap'
      }}>
        {/* columna izquierda */}
        <div style={{
          flex: '1',
          minWidth: '300px'
        }}>
          {/* caja rosa con mi filosofia shaa*/}
          <div style={{
            backgroundColor: '#fd41b2',
            borderRadius: '20px',
            padding: '40px',
            marginBottom: '30px'
          }}>
            <h2 style={{
              color: '#ecececff',
              fontSize: '32px',
              marginBottom: '20px'
            }}>
              Mi Enfoque
            </h2>
            <p style={{
              color: '#ecececff',
              lineHeight: '1.8',
              fontSize: '16px',
              margin: 0
            }}>
              El arte ha sido siempre una parte esencial de mi vida, un motor constante para la creación. Mi filosofía se centra en la ejecución de la idea. El paso crucial es materializar el concepto, llevarlo a la realidad, porque solo así puede empezar a ser perfeccionado y cobrar su máximo potencial. Ya sea con pintura tradicional, ilustración digital o mediante herramientas multimediales, mi objetivo es crear una conexión emocional a través del color y la forma, asegurando que cada pieza no solo sea hermosa, sino que también cuente una historia poderosa y original.
            </p>
          </div>

          {/* dos fotos chicas */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px'
          }}>
            <div style={{
              width: '100%',
              height: '345px',
              borderRadius: '20px',
              overflow: 'hidden'
            }}>
              <img 
                src="/Pelu.jpg"
                alt="Imagen 1"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>

            <div style={{
              width: '100%',
              height: '345px',
              borderRadius: '20px',
              overflow: 'hidden'
            }}>
              <img 
                src="/Sushi.jpg"
                alt="Imagen 2"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
        </div>

        {/* barritas de habilidades */}
        <div style={{
          flex: '1',
          minWidth: '300px'
        }}>
          <div style={{
            backgroundColor: '#fd41b2',
            borderRadius: '20px',
            padding: '40px'
          }}>
            <h2 style={{
              color: '#ecececff',
              fontSize: '32px',
              marginBottom: '40px'
            }}>
              Habilidades
            </h2>

            {/* aca mapeo las habilidades */}
            {habilidades.map((habilidad, index) => (
              <div key={index} style={{ marginBottom: '30px' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '10px'
                }}>
                  <span style={{
                    color: '#ecececff',
                    fontSize: '16px'
                  }}>
                    {habilidad.nombre}
                  </span>
                  <span style={{
                    color: '#ecececff',
                    fontSize: '16px'
                  }}>
                    {habilidad.porcentaje}%
                  </span>
                </div>

                {/* barrita de progreso */}
                <div style={{
                  width: '100%',
                  height: '10px',
                  backgroundColor: '#be2882ff',
                  borderRadius: '10px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    width: `${habilidad.porcentaje}%`,
                    height: '100%',
                    backgroundColor: '#ecececff',
                    borderRadius: '10px'
                  }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;