import { Link } from 'react-router-dom';

function Arte() {
  // mis proyectos de arte <3
  const proyectos = [
    {
      id: 'proyecto-1',
      imagen: '/arte1.jpg',
      titulo: 'Mi amor',
      subtitulo: 'Bodegón'
    },
    {
      id: 'proyecto-2',
      imagen: '/arte2.jpg',
      titulo: 'Tulipan-pan',
      subtitulo: 'Obra de experimentación'
    },
    {
      id: 'proyecto-3',
      imagen: '/arte3.jpg',
      titulo: 'Daisy',
      subtitulo: 'Pintura conceptual'
    },
    {
      id: 'proyecto-4',
      imagen: '/arte4.jpg',
      titulo: 'Payasa idealista',
      subtitulo: 'Pintura conceptual'
    },
    {
      id: 'proyecto-5',
      imagen: '/arte5.jpg',
      titulo: 'Casita del campo',
      subtitulo: 'Pintura dedicada a mi mamá'
    },
    {
      id: 'proyecto-6',
      imagen: '/arte6.jpg',
      titulo: 'Los cojines de mi casa',
      subtitulo: 'Pintura dedicada a mi mamá'
    }
  ];
  // grillas con imagenes y hover y titulos
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
            to={`/arte/${proyecto.id}`}
            style={{
              textDecoration: 'none',
              transition: 'transform 0.3s ease',
              display: 'block'
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

export default Arte;