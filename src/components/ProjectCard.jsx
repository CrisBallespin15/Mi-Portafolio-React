function ProjectCard({ titulo, descripcion, tecnologias, codigo, demo }) {
  return (
    <div className="project-card">
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      <ul className="tech-list">
        {tecnologias.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <div className="project-links">
        <a href={codigo} target="_blank" rel="noreferrer">Código</a>
        <a href={demo} target="_blank" rel="noreferrer">Demo</a>
      </div>
    </div>
  );
}

export default ProjectCard;