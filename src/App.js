import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import About from './paginas/About';
import Ilustracion from './paginas/Ilustracion';
import Diseño from './paginas/Diseño';
import Arte from './paginas/Arte';
import Contacto from './paginas/Contacto';
import DetalleProyecto from './paginas/DetalleProyecto';

// componente del header que aparece en todas las paginas
function Header() {
  const ubicacion = useLocation();
  
  // lista de las secciones del menu
  const secciones = [
    { nombre: 'About', ruta: '/' },
    { nombre: 'Ilustración', ruta: '/ilustracion' },
    { nombre: 'Diseño', ruta: '/diseno' },
    { nombre: 'Arte', ruta: '/arte' },
    { nombre: 'Contacto', ruta: '/contacto' }
  ];

  // funcion para cambiar el banner dependiendo de en que pagina estoy
  const cambioFondo = () => {
  if (ubicacion.pathname.includes('/ilustracion')) {
    return 'url(/fondo2.jpg)';
  } else if (ubicacion.pathname.includes('/diseno')) {
    return 'url(/fondo3.jpg)';
  } else if (ubicacion.pathname.includes('/arte')) {
    return 'url(/fondo4.jpg)';
  } else if (ubicacion.pathname.includes('/contacto')) {
    return 'url(/fondo5.jpg)';
  } else {
    return 'url(/fondo1.jpg)';
  }
}

  return (
    <header style={{
      backgroundImage: cambioFondo(),
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      padding: '30px 20px',
      textAlign: 'center',
      position: 'relative',
      transition: 'background-image 0.5s ease' // transicion bonita que nadie mas va a notar :,)
    }}>
      {/* logo */}
      <div style={{ marginBottom: '20px' }}>
        <img 
          src="/logo negro.png"
          alt="Logo"
          style={{
            width: '150px',
            height: 'auto',
            objectFit: 'contain'
          }}
        />
      </div>

      {/* menu de navegacion */}
      <nav>
        <ul style={{
          listStyle: 'none',
          padding: 0,
          margin: 0,
          display: 'flex',
          justifyContent: 'center',
          gap: '40px',
          flexWrap: 'wrap'
        }}>
          {secciones.map((seccion) => (
            <li key={seccion.nombre}>
              <Link 
                to={seccion.ruta}
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '18px',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                  // pone en bold la seccion donde estoy porque se ve cute
                  fontWeight: ubicacion.pathname === seccion.ruta ? 'bold' : 'normal'
                }}
              >
                {seccion.nombre}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

// componente principal
function App() {
  return (
    <BrowserRouter>
      <div style={{ fontFamily: 'Arial, sans-serif' }}>
        <Header />

        {/* aca van todas las rutas del portafolio */}
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/ilustracion" element={<Ilustracion />} />
          <Route path="/diseno" element={<Diseño />} />
          <Route path="/arte" element={<Arte />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/:categoria/:id" element={<DetalleProyecto />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;