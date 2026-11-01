const PENSADORES = [
  {
    id: 'tales',
    name: 'Tales de Mileto',
    years: 'c. 624–545 a. C. · Jonia',
    color: '#5a97f5',
    short: 'Buscó explicaciones naturales para los fenómenos y es recordado como uno de los primeros filósofos griegos.',
    bio: 'Tales nació en Mileto, una ciudad portuaria de Jonia, en la actual Turquía. Se sabe poco de su vida y no se conserva ninguna obra escrita por él: los relatos sobre sus ideas fueron transmitidos por autores posteriores. La tradición lo incluyó entre los Siete Sabios de Grecia.',
    thought: 'Intentó explicar el mundo mediante principios naturales y no únicamente por relatos míticos. Según Aristóteles, Tales propuso que el agua era el principio de todas las cosas. También se le atribuyen razonamientos geométricos y observaciones astronómicas, aunque algunas historias sobre sus logros pueden ser leyendas posteriores.',
    workTitle: 'Geometría atribuida a Tales',
    workText: 'No se conserva un invento material suyo. Esta figura muestra el teorema del ángulo inscrito en una semicircunferencia, conocido como teorema de Tales. La atribución histórica y la formulación actual se desarrollaron a lo largo del tiempo.',
    portrait: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/10/Arte_romana%2C_testa_di_talete_di_mileto%2C_II_sec..JPG/330px-Arte_romana%2C_testa_di_talete_di_mileto%2C_II_sec..JPG',
    portraitAlt: 'Cabeza escultórica romana identificada tradicionalmente como Tales de Mileto',
    portraitCaption: 'Cabeza romana atribuida a Tales; no es un retrato contemporáneo.',
    portraitCredit: 'https://commons.wikimedia.org/wiki/File:Arte_romana,_testa_di_talete_di_mileto,_II_sec..JPG',
    workImage: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/44/Thales%27_Theorem_Simple.svg/330px-Thales%27_Theorem_Simple.svg.png',
    workAlt: 'Diagrama geométrico del teorema de Tales',
    workCaption: 'Diagrama moderno de un resultado geométrico asociado a Tales.',
    workCredit: 'https://commons.wikimedia.org/wiki/File:Thales%27_Theorem_Simple.svg',
    source: 'https://en.wikipedia.org/wiki/Thales_of_Miletus'
  },
  {
    id: 'pitagoras',
    name: 'Pitágoras',
    years: 'c. 570–495 a. C. · Samos y Crotona',
    color: '#33b8aa',
    short: 'Su escuela relacionó los números con la música, la geometría y una forma de vida filosófica.',
    bio: 'Pitágoras nació en la isla de Samos y, según la tradición, se estableció en Crotona, al sur de Italia. Allí reunió a una comunidad que combinaba estudio, reglas de vida y creencias religiosas. Como no dejó escritos conocidos, muchos detalles de su biografía son inciertos y sus ideas se mezclan con las de sus seguidores.',
    thought: 'Los pitagóricos vieron en las relaciones numéricas una clave para comprender el orden del universo. Estudiaron proporciones musicales y cultivaron las matemáticas. El teorema que lleva su nombre ya era conocido en otras culturas; no hay certeza de que Pitágoras lo descubriera personalmente.',
    workTitle: 'El teorema de Pitágoras',
    workText: 'No se conoce un artefacto inventado personalmente por Pitágoras. Esta ilustración muestra la relación geométrica entre los lados de un triángulo rectángulo: a² + b² = c², resultado que la tradición asocia con la escuela pitagórica.',
    portrait: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e0/Pythagoras_in_the_Roman_Forum%2C_Colosseum.jpg/330px-Pythagoras_in_the_Roman_Forum%2C_Colosseum.jpg',
    portraitAlt: 'Estatua antigua identificada como Pitágoras en el Foro Romano',
    portraitCaption: 'Estatua identificada como Pitágoras; la apariencia real del filósofo es desconocida.',
    portraitCredit: 'https://commons.wikimedia.org/wiki/File:Pythagoras_in_the_Roman_Forum,_Colosseum.jpg',
    workImage: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d2/Pythagorean.svg/330px-Pythagorean.svg.png',
    workAlt: 'Diagrama de cuadrados sobre los lados de un triángulo rectángulo',
    workCaption: 'Diagrama moderno del teorema; no es un objeto antiguo.',
    workCredit: 'https://commons.wikimedia.org/wiki/File:Pythagorean.svg',
    source: 'https://en.wikipedia.org/wiki/Pythagoras'
  },
  {
    id: 'socrates',
    name: 'Sócrates',
    years: '470–399 a. C. · Atenas',
    color: '#e0a04a',
    short: 'Enseñaba mediante preguntas y examinaba las ideas sobre la justicia, la virtud y la vida.',
    bio: 'Sócrates vivió en Atenas durante el siglo V a. C. No escribió libros; conocemos sus conversaciones principalmente por los diálogos de Platón y los escritos de Jenofonte, además de referencias de otros autores. Fue juzgado por la ciudad y murió tras beber cicuta en 399 a. C.',
    thought: 'Su manera de dialogar, hoy llamada método socrático, utilizaba preguntas y repreguntas para aclarar conceptos y poner a prueba contradicciones. Se interesó especialmente por cómo vivir bien y qué significan la justicia, el valor y la virtud. El retrato de Sócrates en los diálogos de Platón también está mediado por la interpretación de su discípulo.',
    workTitle: 'El diálogo socrático',
    workText: 'Sócrates no dejó un invento material conocido. La pintura muestra una interpretación artística, realizada muchos siglos después, de Sócrates conversando con Alcibíades; ilustra el diálogo, no una escena documentada.',
    portrait: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a4/Socrates_Louvre.jpg/330px-Socrates_Louvre.jpg',
    portraitAlt: 'Busto de mármol de Sócrates conservado en el Louvre',
    portraitCaption: 'Busto atribuido a Sócrates; es una representación escultórica, no una fotografía.',
    portraitCredit: 'https://commons.wikimedia.org/wiki/File:Socrates_Louvre.jpg',
    workImage: 'imagenes/pensadores/socrates-dialogo.svg',
    workAlt: 'Ilustración de dos personas conversando mediante preguntas',
    workCaption: 'Ilustración del diálogo socrático; no representa un invento ni una escena histórica.',
    workCredit: null,
    source: 'https://en.wikipedia.org/wiki/Socrates'
  },
  {
    id: 'platon',
    name: 'Platón',
    years: 'c. 428–348 a. C. · Atenas',
    color: '#d0559a',
    short: 'Fundó la Academia y escribió diálogos sobre la justicia, el conocimiento y la política.',
    bio: 'Platón fue un filósofo ateniense y discípulo de Sócrates. Después de viajar por el Mediterráneo, regresó a Atenas y fundó la Academia, un centro de estudio que perduró durante siglos. Sus escritos, en su mayoría diálogos, son una de las fuentes principales para conocer la filosofía griega.',
    thought: 'Exploró la diferencia entre lo que percibimos y las formas o principios que, según su filosofía, hacen inteligible la realidad. En La República examinó la justicia, la educación y el gobierno. Sus ideas se presentan como conversaciones, no como manuales de respuestas definitivas.',
    workTitle: 'La Academia y los diálogos',
    workText: 'La Academia fue una institución educativa fundada por Platón, no un invento técnico. La imagen es un fresco renacentista de Rafael que imagina a filósofos antiguos reunidos; no representa fielmente el edificio de la Academia.',
    portrait: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/21/Plato_Silanion_Musei_Capitolini_MC1377.png/330px-Plato_Silanion_Musei_Capitolini_MC1377.png',
    portraitAlt: 'Busto antiguo de Platón en los Museos Capitolinos',
    portraitCaption: 'Busto antiguo identificado como Platón; no se conservan fotografías de época.',
    portraitCredit: 'https://commons.wikimedia.org/wiki/File:Plato_Silanion_Musei_Capitolini_MC1377.png',
    workImage: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg/330px-%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg',
    workAlt: 'Fresco renacentista La escuela de Atenas, de Rafael',
    workCaption: 'Rafael, La escuela de Atenas (1509–1511): interpretación renacentista de filósofos.',
    workCredit: 'https://commons.wikimedia.org/wiki/File:%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg',
    source: 'https://en.wikipedia.org/wiki/Plato'
  },
  {
    id: 'aristoteles',
    name: 'Aristóteles',
    years: '384–322 a. C. · Estagira',
    color: '#86b85f',
    short: 'Estudió lógica, política, naturaleza y ética; fundó su propia escuela en Atenas.',
    bio: 'Aristóteles nació en Estagira y estudió durante años en la Academia de Platón. Más tarde enseñó a Alejandro de Macedonia y fundó el Liceo en Atenas. Sus escritos abarcan numerosos campos, aunque buena parte de lo que se conserva parece proceder de materiales de enseñanza y compilaciones posteriores.',
    thought: 'Aristóteles valoró la observación y la clasificación de los seres vivos y los fenómenos naturales. En lógica analizó cómo se construyen argumentos válidos; en ética defendió que la virtud se forma con hábitos y busca un equilibrio adecuado a las circunstancias. Sus conclusiones científicas fueron históricamente influyentes, pero no todas son válidas según la ciencia actual.',
    workTitle: 'El Organon y la lógica',
    workText: 'No se le atribuye un invento físico concreto. El Organon reúne tratados de lógica vinculados a su obra; la imagen muestra un manuscrito medieval, no un ejemplar escrito por Aristóteles.',
    portrait: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ae/Aristotle_Altemps_Inv8575.jpg/330px-Aristotle_Altemps_Inv8575.jpg',
    portraitAlt: 'Busto de Aristóteles conservado en el Palacio Altemps',
    portraitCaption: 'Busto romano identificado como Aristóteles; es una representación posterior.',
    portraitCredit: 'https://commons.wikimedia.org/wiki/File:Aristotle_Altemps_Inv8575.jpg',
    workImage: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ee/Aristotele%2C_organon%2C_XIII_secolo_%28bml%2C_pluteo_11_sin_1%29_01.jpg/330px-Aristotele%2C_organon%2C_XIII_secolo_%28bml%2C_pluteo_11_sin_1%29_01.jpg',
    workAlt: 'Página de un manuscrito medieval del Organon de Aristóteles',
    workCaption: 'Manuscrito medieval del Organon, siglos después de la vida de Aristóteles.',
    workCredit: 'https://commons.wikimedia.org/wiki/File:Aristotele,_organon,_XIII_secolo_(bml,_pluteo_11_sin_1)_01.jpg',
    source: 'https://en.wikipedia.org/wiki/Aristotle'
  },
  {
    id: 'euclides',
    name: 'Euclides',
    years: 'Activo hacia 300 a. C. · Alejandría',
    color: '#5a97f5',
    short: 'Organizó la geometría en definiciones, postulados y demostraciones en sus Elementos.',
    bio: 'Euclides enseñó matemáticas en Alejandría durante el reinado de Ptolomeo I. Se sabe muy poco de su vida y no existe una biografía contemporánea fiable. Su obra más conocida, Elementos, reunió y ordenó resultados geométricos y matemáticos que ya circulaban en el mundo griego.',
    thought: 'Su método parte de definiciones, nociones comunes y postulados para demostrar proposiciones paso a paso. La estructura lógica de Elementos se convirtió en modelo para enseñar geometría durante muchos siglos. Euclides organizó conocimientos previos; no todos los teoremas del libro fueron descubrimientos personales suyos.',
    workTitle: 'Elementos: geometría demostrada',
    workText: 'Elementos es una obra matemática, no un dispositivo inventado por Euclides. La imagen muestra un fragmento antiguo relacionado con el tratado y permite ver cómo se copiaban los diagramas geométricos.',
    portrait: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/73/Italian_-_Euclid_-_Google_Art_Project.jpg/330px-Italian_-_Euclid_-_Google_Art_Project.jpg',
    portraitAlt: 'Pintura histórica que representa a Euclides',
    portraitCaption: 'Representación artística posterior; el aspecto real de Euclides es desconocido.',
    portraitCredit: 'https://commons.wikimedia.org/wiki/File:Italian_-_Euclid_-_Google_Art_Project.jpg',
    workImage: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/21/P.Penn._Museum_inv._E02748_Euclid%27s_Elements_2.5.jpg/330px-P.Penn._Museum_inv._E02748_Euclid%27s_Elements_2.5.jpg',
    workAlt: 'Fragmento manuscrito de Elementos de Euclides con texto matemático',
    workCaption: 'Fragmento de una copia antigua de Elementos; no es el manuscrito original de Euclides.',
    workCredit: 'https://commons.wikimedia.org/wiki/File:P.Penn._Museum_inv._E02748_Euclid%27s_Elements_2.5.jpg',
    source: 'https://en.wikipedia.org/wiki/Euclid'
  },
  {
    id: 'arquimedes',
    name: 'Arquímedes',
    years: 'c. 287–212 a. C. · Siracusa',
    color: '#33b8aa',
    short: 'Matemático e ingeniero; estudió la flotación, las palancas y máquinas para mover agua.',
    bio: 'Arquímedes nació en Siracusa, en la isla de Sicilia, y trabajó como matemático, físico e ingeniero. Sus escritos estudiaron áreas y volúmenes, el equilibrio y la flotación. Murió durante la toma romana de Siracusa en 212 a. C.; los relatos sobre sus últimas palabras pertenecen a la tradición posterior.',
    thought: 'Combinó razonamiento matemático con problemas concretos. Su tratado Sobre los cuerpos flotantes explica principios de flotación, y en Sobre el equilibrio de los planos analiza la palanca. También exploró métodos para calcular áreas y volúmenes con una intuición cercana a ideas que luego se desarrollarían en el cálculo.',
    workTitle: 'El tornillo de Arquímedes',
    workText: 'La tradición asocia a Arquímedes con el uso o perfeccionamiento de un tornillo para elevar agua. Es difícil demostrar que lo inventara: dispositivos semejantes pudieron existir antes. La animación muestra un modelo moderno del mecanismo.',
    portrait: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e7/Domenico-Fetti_Archimedes_1620.jpg/330px-Domenico-Fetti_Archimedes_1620.jpg',
    portraitAlt: 'Pintura de Domenico Fetti que representa a Arquímedes',
    portraitCaption: 'Domenico Fetti, retrato imaginado de Arquímedes (c. 1620).',
    portraitCredit: 'https://commons.wikimedia.org/wiki/File:Domenico-Fetti_Archimedes_1620.jpg',
    workImage: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/22/Archimedes-screw_one-screw-threads_with-ball_3D-view_animated_small.gif/330px-Archimedes-screw_one-screw-threads_with-ball_3D-view_animated_small.gif',
    workAlt: 'Animación esquemática de un tornillo de Arquímedes elevando una esfera',
    workCaption: 'Animación moderna del tornillo; no es una reconstrucción de un diseño original suyo.',
    workCredit: 'https://commons.wikimedia.org/wiki/File:Archimedes-screw_one-screw-threads_with-ball_3D-view_animated_small.gif',
    source: 'https://en.wikipedia.org/wiki/Archimedes'
  },
  {
    id: 'hipocrates',
    name: 'Hipócrates',
    years: 'c. 460–370 a. C. · isla de Cos',
    color: '#e0a04a',
    short: 'Figura asociada con una medicina que observa al paciente y busca explicar la enfermedad.',
    bio: 'Hipócrates de Cos fue un médico griego de la época clásica. Los datos seguros sobre su vida son escasos. El Corpus hipocrático, una colección de alrededor de sesenta tratados médicos escritos por distintas personas, quedó asociado con su nombre, pero no se considera que él redactara todos esos textos.',
    thought: 'Los tratados hipocráticos describen enfermedades, observaciones clínicas, pronósticos y normas de conducta profesional. Intentaron explicar la salud mediante causas naturales y no solo sobrenaturales. Algunas teorías antiguas, como el equilibrio de los humores, ya no forman parte de la medicina basada en evidencia.',
    workTitle: 'Medicina griega y el Corpus hipocrático',
    workText: 'No se conoce un invento individual de Hipócrates. La imagen muestra un recipiente griego relacionado con el cuidado médico; es un objeto de la cultura material de la época, no una herramienta atribuida directamente a él.',
    portrait: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7c/Hippocrates.jpg/330px-Hippocrates.jpg',
    portraitAlt: 'Busto histórico identificado como Hipócrates',
    portraitCaption: 'Representación escultórica atribuida a Hipócrates; no es un retrato contemporáneo.',
    portraitCredit: 'https://commons.wikimedia.org/wiki/File:Hippocrates.jpg',
    workImage: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6c/Medicine_aryballos_Louvre_CA1989-2183_n2.jpg/330px-Medicine_aryballos_Louvre_CA1989-2183_n2.jpg',
    workAlt: 'Vasija griega antigua relacionada con prácticas médicas',
    workCaption: 'Recipiente de la antigua Grecia vinculado a la medicina; no perteneció a Hipócrates.',
    workCredit: 'https://commons.wikimedia.org/wiki/File:Medicine_aryballos_Louvre_CA1989-2183_n2.jpg',
    source: 'https://en.wikipedia.org/wiki/Hippocrates'
  }
];

const profileRoot = document.querySelector('#pensador-profile');

if (profileRoot) {
  const personId = new URLSearchParams(window.location.search).get('persona');
  const person = PENSADORES.find((thinker) => thinker.id === personId);

  if (!person) {
    document.title = 'Pensador no encontrado · Atlas antiguo';
    profileRoot.className = 'wrap thinker-not-found';
    profileRoot.innerHTML = `
      <h1>Elige un pensador</h1>
      <p class="lead">No encontramos esa ficha. Puedes explorar cualquiera de estos perfiles:</p>
      <nav class="thinker-list" aria-label="Pensadores disponibles">
        ${PENSADORES.map((thinker) => `<a href="pensador.html?persona=${thinker.id}">${thinker.name}</a>`).join('')}
      </nav>`;
  } else {
    document.title = `${person.name} · Atlas antiguo`;
    document.documentElement.style.setProperty('--a', person.color);
    profileRoot.innerHTML = `
      <a class="thinker-back" href="index.html#pensadores">← Volver a pensadores</a>
      <p class="thinker-kicker">Pensadores de Grecia · ${person.years}</p>
      <h1>${person.name}</h1>
      <p class="thinker-intro">${person.short}</p>
      <div class="thinker-images">
        <figure class="thinker-figure">
          <img src="${person.portrait}" alt="${person.portraitAlt}" fetchpriority="high">
          <figcaption>${person.portraitCaption}<a href="${person.portraitCredit}" target="_blank" rel="noopener noreferrer">Crédito de imagen</a></figcaption>
        </figure>
        <figure class="thinker-figure">
          <img src="${person.workImage}" alt="${person.workAlt}" loading="lazy">
          <figcaption>${person.workCaption}${person.workCredit ? `<a href="${person.workCredit}" target="_blank" rel="noopener noreferrer">Crédito de imagen</a>` : '<span>Ilustración propia</span>'}</figcaption>
        </figure>
      </div>
      <p class="thinker-note">No existen fotografías de la antigua Grecia. Los retratos son esculturas o representaciones artísticas posteriores.</p>
      <div class="thinker-content">
        <article><h2>Biografía</h2><p>${person.bio}</p></article>
        <article><h2>Pensamiento</h2><p>${person.thought}</p></article>
        <article class="thinker-work"><h2>Inventos, obras y legado</h2><p>${person.workText}</p></article>
      </div>
      <div class="thinker-sources">Consulta también: <a href="${person.source}" target="_blank" rel="noopener noreferrer">biografía y referencias</a> · Las imágenes enlazan a sus fichas de Wikimedia Commons.</div>`;
  }
}
