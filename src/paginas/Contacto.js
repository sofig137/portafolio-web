import React from 'react'; 

function Contacto() {
  
  return (
    <main style={{
      maxWidth: '1200px',
      margin: '80px auto',
      padding: '0 30px'
    }}>

      {/* titulo */}
      <div style={{
        textAlign: 'center',
        marginBottom: '60px'
      }}>
        <h1 style={{
          color: '#7C6AD0',
          fontSize: '60px',
          marginBottom: '5px'
        }}>
          ¡Hablemos!
        </h1>
        <p style={{
          color: '#6d6d6dff',
          fontSize: '20px'
        }}>
          Estoy lista para tu próximo proyecto. Elige tu vía de contacto preferida.
        </p>
      </div>

      {/* seccion principal en 2 columnas */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '60px',
        marginBottom: '80px'
      }}>
        
        {/* columna izquierda email */}
        <div style={{
          backgroundColor: '#F7F7F7',
          borderRadius: '25px',
          padding: '40px',
          textAlign: 'center'
        }}>
          <h2 style={{
            color: '#7C6AD0',
            fontSize: '32px',
            marginBottom: '15px'
          }}>
            Inicia tu Proyecto
          </h2>
          <p style={{
            color: '#6d6d6dff',
            marginBottom: '30px',
            fontSize: '16px'
          }}>
            Para consultas de trabajo, tarifas o encargos directos, envíame un correo.
          </p>

          {/* boton de email */}
          <a 
            href="mailto:sofiagarrido137@gmail.com"
            style={{
              display: 'block',
              textAlign: 'center',
              backgroundColor: '#7C6AD0',
              color: 'white',
              padding: '15px 30px',
              borderRadius: '15px',
              textDecoration: 'none',
              fontSize: '20px',
              transition: 'background-color 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5D4AA3'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#7C6AD0'}
          >
            Enviar Correo a sofiagarrido137@gmail.com
          </a>
        </div>

        {/* columna derecha galeria e frasucita */}
        <div style={{ padding: '20px' }}>
          <p style={{
            color: '#7C6AD0',
            fontSize: '24px',
            fontStyle: 'italic',
            marginBottom: '20px'
          }}>
            "Combinando el impacto de la ilustración con la funcionalidad del diseño."
          </p>
          
          {/* galeria de imagenes chicas */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '10px',
            borderRadius: '15px',
            overflow: 'hidden'
          }}>
            {['/ilustracion1.jpg', '/diseño1.jpg', '/arte1.jpg'].map((src, index) => (
              <div 
                key={index}
                style={{
                  height: '150px',
                  overflow: 'hidden'
                }}
              >
                <img 
                  src={src}
                  alt={`Muestra ${index + 1}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* cajita de redes sociales */}
      <div style={{
        backgroundColor: '#7C6AD0',
        borderRadius: '25px',
        padding: '30px 40px',
        textAlign: 'center'
      }}>
        <h2 style={{
          color: '#e8e8e8',
          fontSize: '36px',
          marginBottom: '20px'
        }}>
          Sígueme
        </h2>

        <div style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'center'
        }}>
          {/* instagram */}
          <a 
            href="https://www.instagram.com/choco.choffis/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: '55px',
              height: '55px',
              border: '3px solid #e8e8e8',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.backgroundColor = '#e8e8e8';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <img
              src="/instagram.png"
              alt="Instagram"
              style={{
                width: '28px',
                height: '28px'
              }}
            />
          </a>
          
          {/* behance */}
          <a 
            href="https://www.behance.net/sofagarrido5"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: '55px',
              height: '55px',
              border: '3px solid #e8e8e8',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.backgroundColor = '#e8e8e8';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <img
              src="/behance.png"
              alt="Behance"
              style={{
                width: '28px',
                height: '28px'
              }}
            />
          </a>
        </div>
      </div>
    </main>
  );
}

export default Contacto;