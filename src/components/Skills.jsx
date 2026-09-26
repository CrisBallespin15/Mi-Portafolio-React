function Skills() {
  const habilidades = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Git',
    'GitHub',
  ];

  return (
    <section className="skills">
      <h2>Habilidades</h2>
      <ul>
        {habilidades.map((habilidad) => (
          <li key={habilidad}>{habilidad}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;