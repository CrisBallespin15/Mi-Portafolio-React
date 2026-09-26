import { useState } from 'react';

function About() {
  const [mostrarMas, setMostrarMas] = useState(false);

  return (
    <section className="about">
      <h2>Sobre mí</h2>
      <p>
        Soy Cristian Ballespin, desarrollador frontend de Tucumán, Argentina.
        Me gusta que las cosas se vean bien pero sobre todo que funcionen.
      </p>

      {mostrarMas && (
        <p>
          Empecé a programar en 2022 haciendo páginas para mí mismo y desde
          entonces no paré. Ahora estoy aprendiendo React y buscando mi
          primer trabajo como desarrollador.
        </p>
      )}

      <button onClick={() => setMostrarMas(!mostrarMas)}>
        {mostrarMas ? 'Ver menos' : 'Ver más'}
      </button>
    </section>
  );
}

export default About;