import { Link } from 'react-router-dom';

function Diseño() {
  // mis proyectos de diseño
  const proyectos = [
    // unico funcional xd
    {
      id: 'proyecto-1',
      imagen: '/diseño1.jpg',
      titulo: 'The Road',
      subtitulo: 'Novela Visual P5.js'
    },
    // no funcionales
    {
      id: 'proyecto-2',
      imagen: '/diseño2.jpg',
      titulo: 'Pincelada',
      subtitulo: 'Proyecto de recolección de datos digital'
    },
    {
      id: 'proyecto-3',
      imagen: '/diseño3.jpg',
      titulo: 'Atelier - Reproductór',
      subtitulo: ' Reproductor de música programado en Processing'
    },
    {
      id: 'proyecto-4',
      imagen: '/diseño4.jpg',
      titulo: 'Mana',
      subtitulo: 'Branding de marca de cerveza'
    },
    {
      id: 'proyecto-5',
      imagen: '/diseño5.jpg',
      titulo: 'Atelier - Reloj',
      subtitulo: 'Reloj digital programado en Processing'
    },
    {
      id: 'proyecto-6',
      imagen: '/diseño6.jpg',
      titulo: 'Carebears',
      subtitulo: 'Composición digital'
    }
  ];
  // grilla responsive
  return (
    <main style={{
      maxWidth: '1400px',
      margin: '60px auto',
      padding: '0 40px'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '40px',
        marginTop: '40px'
      }}>
        {proyectos.map((proyecto) => (
          <Link
            key={proyecto.id}
            to={`/diseno/${proyecto.id}`}
            style={{
              textDecoration: 'none',
              transition: 'transform 0.3s ease',
              display: 'block'
              // hover
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={{
              width: '100%',
              height: '300px',
              borderRadius: '20px',
              overflow: 'hidden',
              marginBottom: '15px'
            }}>
              <img 
                src={proyecto.imagen}
                alt={proyecto.titulo}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>

            <h3 style={{
              color: '#9c9c9cff',
              fontSize: '20px',
              margin: '0 0 5px 0'
            }}>
              {proyecto.titulo}
            </h3>
            <p style={{
              color: '#9c9c9cff',
              fontSize: '14px',
              margin: 0
            }}>
              {proyecto.subtitulo}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}

export default Diseño;