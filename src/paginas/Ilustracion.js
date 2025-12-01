import { Link } from 'react-router-dom';

function Ilustracion() {
  // mis proyectos cute
  const proyectos = [
    // funcionales
    {
      id: 'proyecto-1',
      imagen: '/ilustracion1.jpg',
      titulo: 'LOBOTOMIA',
      subtitulo: 'Ilustración digital'
    },
    {
      id: 'proyecto-2',
      imagen: '/ilustracion2.jpg',
      titulo: 'Mommy Dearest',
      subtitulo: 'Ilustración digital'
    },
    {
      id: 'proyecto-3',
      imagen: '/ilustracion3.jpg',
      titulo: 'SMILE',
      subtitulo: 'Ilustración digital'
    },
    // no funcionales
    {
      id: 'proyecto-4',
      imagen: '/ilustracion4.jpg',
      titulo: 'Emociones',
      subtitulo: 'Serie de ilustraciones'
    },
    {
      id: 'proyecto-5',
      imagen: '/ilustracion5.jpg',
      titulo: 'El Martitio y El Perdón',
      subtitulo: 'Ilustración conceptual'
    },
    {
      id: 'proyecto-6',
      imagen: '/ilustracion6.jpg',
      titulo: 'Directoras',
      subtitulo: 'Personajes'
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
        // coloca mis proyectos
      }}>
        {proyectos.map((proyecto) => (
          <Link
            key={proyecto.id}
            to={`/ilustracion/${proyecto.id}`}
            style={{
              textDecoration: 'none',
              transition: 'transform 0.3s ease',
              display: 'block'
            }}
            // hover
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
              // imagen y titulos
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
              color: '#7c7c7cff',
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

export default Ilustracion;