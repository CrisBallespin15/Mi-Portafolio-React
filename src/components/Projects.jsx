import ProjectCard from './ProjectCard';

function Projects() {
  const proyectos = [
    {
      id: 1,
      titulo: 'Infinit Indumentaria',
      descripcion: 'Tienda online de ropa urbana para hombre. Catálogo con carrito, favoritos, modo claro/oscuro y contacto directo por WhatsApp.',
      tecnologias: ['HTML', 'CSS', 'JavaScript'],
      codigo: 'https://github.com/CrisBallespin15/infinit-indumentaria',
      demo: 'https://infinit-indumentaria.netlify.app/',
    },
    {
      id: 2,
      titulo: 'Bazar La Esquina',
      descripcion: 'Tienda online para un bazar de barrio con más de 150 productos, buscador, filtros por categoría, paginación y carrito que manda el pedido por WhatsApp.',
      tecnologias: ['HTML', 'CSS', 'JavaScript', 'localStorage'],
      codigo: 'https://github.com/CrisBallespin15/bazar',
      demo: 'https://crisballespin15.github.io/bazar/index.html',
    },
    {
      id: 3,
      titulo: 'Barbería Del Norte',
      descripcion: 'Web para una barbería con reserva de turnos en 5 pasos y un panel para los barberos con agenda, bloqueo de horarios y facturación estimada.',
      tecnologias: ['JavaScript', 'localStorage', 'CSS Grid'],
      codigo: 'https://github.com/CrisBallespin15/barberia',
      demo: 'https://crisballespin15.github.io/barberia/index.html',
    },
  ];

  return (
    <section className="projects">
      <h2>Proyectos</h2>
      <div className="projects-grid">
        {proyectos.map((proyecto) => (
          <ProjectCard key={proyecto.id} {...proyecto} />
        ))}
      </div>
    </section>
  );
}

export default Projects;