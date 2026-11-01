const topics = {
  'egipto-escritura': {
    civilization: 'Civilización I · Egipto', number: '01 / 09', title: 'La escritura egipcia', accent: 'var(--terracotta)',
    lead: 'Los egipcios desarrollaron un sistema de escritura para registrar la vida religiosa, la administración y la memoria de sus gobernantes.',
    body: 'Los jeroglíficos combinaban signos que representaban sonidos, objetos e ideas. Se escribían sobre piedra en templos y tumbas, pero también sobre papiro, un material ligero fabricado con fibras vegetales del Nilo. Los escribas eran una clase educada y fundamental para cobrar impuestos, llevar cuentas y conservar documentos.',
    points: ['Jeroglíficos: signos sagrados usados en monumentos.', 'Papiro: soporte flexible parecido al papel.', 'Piedra de Rosetta: clave para descifrar los jeroglíficos.'], resource: 'https://www.britannica.com/topic/hieroglyphic-writing'
  },
  'egipto-ingenieria': {
    civilization: 'Civilización I · Egipto', number: '02 / 09', title: 'Ingeniería y monumentos', accent: 'var(--terracotta)',
    lead: 'Construir pirámides y templos exigía organizar personas, materiales y conocimientos matemáticos con una precisión extraordinaria.',
    body: 'Los egipcios utilizaban rampas, trineos, rodillos y sistemas de poleas para mover bloques de piedra desde las canteras hasta las obras. También construyeron canales de irrigación y caminos acondicionados. La arquitectura monumental no solo mostraba poder: estaba conectada con sus creencias sobre la vida después de la muerte.',
    points: ['Rampas para elevar bloques pesados.', 'Canales para aprovechar las crecidas del Nilo.', 'Pirámides, templos y obeliscos como arquitectura simbólica.'], resource: 'https://www.britannica.com/technology/Egyptian-architecture'
  },
  'egipto-medicina': {
    civilization: 'Civilización I · Egipto', number: '03 / 09', title: 'Medicina y cuidado', accent: 'var(--terracotta)',
    lead: 'La medicina egipcia mezclaba observación práctica, tratamientos, cirugía y creencias religiosas sobre la salud.',
    body: 'Los médicos, llamados sunu o sinu, se especializaban en distintas áreas. Los papiros de Smith y Ebers describían heridas, enfermedades, remedios e instrumentos. También existen evidencias de prótesis para los pies y de conocimientos de odontología, oftalmología y cirugía.',
    points: ['Papiro de Smith: lesiones, diagnósticos y tratamientos.', 'Papiro de Ebers: recetas y tratamientos médicos.', 'Prótesis y herramientas quirúrgicas para atender lesiones.'], resource: 'https://www.britannica.com/science/medicine/Medicine-in-the-ancient-world'
  },
  'grecia-democracia': {
    civilization: 'Civilización II · Grecia', number: '04 / 09', title: 'La democracia ateniense', accent: 'var(--lapis)',
    lead: 'En Atenas nació una forma de participación política en la que los ciudadanos podían intervenir directamente en las decisiones de la ciudad.',
    body: 'La democracia ateniense se organizaba en la Asamblea, donde los ciudadanos varones libres debatían y votaban. También existían consejos y tribunales. No era igualitaria según los criterios actuales: mujeres, esclavos y extranjeros quedaban fuera de la ciudadanía, pero el modelo cambió la historia de la política.',
    points: ['La Asamblea debatía y votaba las decisiones.', 'El ágora era un espacio de intercambio y discusión.', 'La ciudadanía estaba limitada a una parte de la población.'], resource: 'https://www.britannica.com/topic/democracy/Ancient-Greece'
  },
  'grecia-teatro': {
    civilization: 'Civilización II · Grecia', number: '05 / 09', title: 'Teatro y pensamiento', accent: 'var(--lapis)',
    lead: 'El teatro griego convirtió las celebraciones religiosas en un espacio para contar historias, cuestionar normas y comprender los conflictos humanos.',
    body: 'Las tragedias presentaban decisiones difíciles, destino y responsabilidad; las comedias se burlaban de costumbres y personajes públicos. Las obras se representaban en teatros al aire libre con coros, máscaras y una arquitectura pensada para proyectar la voz.',
    points: ['Tragedia: conflictos sobre destino, poder y responsabilidad.', 'Comedia: crítica social mediante humor y sátira.', 'El coro guiaba la historia y comentaba la acción.'], resource: 'https://www.britannica.com/art/Western-theatre/The-Greeks'
  },
  'grecia-arte': {
    civilization: 'Civilización II · Grecia', number: '06 / 09', title: 'Arte y deporte', accent: 'var(--lapis)',
    lead: 'El arte griego buscó representar el cuerpo humano con equilibrio, movimiento y proporción; el deporte celebraba esa misma idea de excelencia.',
    body: 'Los templos usaban columnas y proporciones cuidadosamente calculadas. Los escultores estudiaban la anatomía y creaban figuras que parecían estar en movimiento. En los juegos atléticos, los participantes competían en carreras, lucha y lanzamiento como parte de festividades dedicadas a los dioses.',
    points: ['Columnas dóricas, jónicas y corintias.', 'Esculturas que exploraban proporción y movimiento.', 'Juegos atléticos vinculados a festividades religiosas.'], resource: 'https://www.britannica.com/art/Greek-art'
  },
  'mesopotamia-escritura': {
    civilization: 'Civilización III · Mesopotamia', number: '07 / 09', title: 'La escritura cuneiforme', accent: '#866545',
    lead: 'En Mesopotamia, la escritura nació de una necesidad muy concreta: recordar qué se producía, se intercambiaba y se debía.',
    body: 'Los escribas presionaban una caña sobre tablillas de arcilla húmeda para formar marcas en forma de cuña. Con el tiempo, la escritura sirvió para registrar leyes, himnos, relatos y correspondencia. La ciudad podía así administrar recursos y conservar conocimientos más allá de la memoria de una sola persona.',
    points: ['Tablillas de arcilla como soporte resistente.', 'Signos en forma de cuña hechos con una caña.', 'Registros de comercio, impuestos, leyes y relatos.'], resource: 'https://www.britannica.com/topic/cuneiform'
  },
  'mesopotamia-leyes': {
    civilization: 'Civilización III · Mesopotamia', number: '08 / 09', title: 'Las leyes de Hammurabi', accent: '#866545',
    lead: 'El Código de Hammurabi reunió normas para ordenar la vida de Babilonia y fijar responsabilidades dentro de la sociedad.',
    body: 'El código fue escrito en una gran estela de piedra durante el reinado de Hammurabi. Sus artículos trataban asuntos como el comercio, los salarios, la propiedad, el matrimonio y los castigos. Aunque establecía diferencias según la posición social, es una de las colecciones legales antiguas mejor conservadas.',
    points: ['Regulaba comercio, trabajo, familia y propiedad.', 'Las penas dependían de la situación social.', 'La estela hacía las normas visibles y permanentes.'], resource: 'https://www.britannica.com/topic/Code-of-Hammurabi'
  },
  'mesopotamia-astronomia': {
    civilization: 'Civilización III · Mesopotamia', number: '09 / 09', title: 'Astronomía y tiempo', accent: '#866545',
    lead: 'Observar el cielo ayudó a los pueblos mesopotámicos a organizar calendarios, anticipar ciclos y tomar decisiones agrícolas y religiosas.',
    body: 'Los sacerdotes-astrónomos registraban la posición de estrellas, planetas y fenómenos como eclipses. Sus cálculos contribuyeron a dividir el círculo en 360 grados y el tiempo en unidades basadas en 60, una herencia que todavía usamos en minutos y segundos.',
    points: ['Calendarios ligados a los ciclos de la Luna.', 'Registros sistemáticos de estrellas y planetas.', 'Sistema sexagesimal: base de nuestras horas y minutos.'], resource: 'https://www.britannica.com/science/astronomy/History-of-astronomy'
  },
  'roma-republica': {
    civilization: 'Civilización IV · Roma', number: '10 / 15', title: 'República y ciudadanía', accent: 'var(--terracotta)',
    lead: 'Roma construyó una república basada en leyes, magistraturas y una ciudadanía que se fue ampliando con la expansión territorial.',
    body: 'La República romana surgió tradicionalmente en 509 a. C. y organizó el poder mediante magistrados, el Senado y asambleas. Las Doce Tablas hicieron públicas algunas normas y limitaron la arbitrariedad. Aunque la sociedad mantuvo profundas desigualdades, sus instituciones influyeron en muchas ideas políticas posteriores.',
    points: ['Las Doce Tablas fueron uno de los primeros códigos públicos romanos.', 'El Senado asesoraba y orientaba las decisiones políticas.', 'La ciudadanía se extendió gradualmente a comunidades aliadas.'], resource: 'https://www.britannica.com/place/ancient-Rome'
  },
  'roma-ingenieria': {
    civilization: 'Civilización IV · Roma', number: '11 / 15', title: 'Ingeniería y ciudades', accent: 'var(--terracotta)',
    lead: 'Carreteras, puentes, acueductos y edificios públicos hicieron posible administrar un territorio enorme y conectar sus ciudades.',
    body: 'Los romanos perfeccionaron el arco, la bóveda y el uso del hormigón. Sus acueductos transportaban agua a fuentes, termas y viviendas; las calzadas permitían mover personas, mercancías y ejércitos. La ingeniería era una herramienta de gobierno y también una muestra visible del poder imperial.',
    points: ['Los acueductos llevaban agua desde fuentes lejanas.', 'Las calzadas conectaron puertos, ciudades y fronteras.', 'El hormigón permitió construir cúpulas y grandes espacios.'], resource: 'https://www.worldhistory.org/Roman_Engineering/'
  },
  'roma-derecho': {
    civilization: 'Civilización IV · Roma', number: '12 / 15', title: 'Derecho y legado', accent: 'var(--terracotta)',
    lead: 'El derecho romano creó conceptos sobre propiedad, contratos, ciudadanía y obligaciones que todavía influyen en los sistemas jurídicos.',
    body: 'Juristas romanos clasificaron normas y desarrollaron procedimientos para resolver conflictos. El Corpus Juris Civilis, compilado en época del emperador Justiniano, conservó gran parte de esa tradición. Su legado no fue una democracia moderna, sino una forma sistemática de pensar la ley y las relaciones entre personas.',
    points: ['La ley distinguía derechos y deberes de ciudadanos y no ciudadanos.', 'Los contratos y la propiedad recibieron un tratamiento detallado.', 'El Corpus Juris Civilis preservó textos jurídicos romanos.'], resource: 'https://www.britannica.com/topic/Roman-law'
  },
  'edad-media-feudalismo': {
    civilization: 'Civilización V · Edad Media', number: '13 / 15', title: 'Señores, campesinos y feudos', accent: 'var(--lapis)',
    lead: 'En buena parte de la Europa medieval, la tierra organizó la economía, las relaciones sociales y el poder local.',
    body: 'El feudalismo no fue igual en todos los lugares, pero en muchas regiones existieron vínculos entre señores, vasallos y campesinos. Los castillos protegían territorios, mientras los campos producían alimentos. Con el crecimiento de las ciudades y del comercio, estas relaciones comenzaron a transformarse.',
    points: ['La tierra era la principal fuente de riqueza.', 'Los campesinos trabajaban parcelas y entregaban rentas o servicios.', 'Los castillos funcionaban como residencias y centros de defensa.'], resource: 'https://www.worldhistory.org/Feudalism/'
  },
  'edad-media-ciudades': {
    civilization: 'Civilización V · Edad Media', number: '14 / 15', title: 'Ciudades, comercio y universidades', accent: 'var(--lapis)',
    lead: 'Desde el siglo XI, el comercio y el crecimiento urbano abrieron nuevas oportunidades para artesanos, mercaderes y estudiantes.',
    body: 'Las ferias y rutas comerciales conectaron regiones distantes. Los gremios regulaban oficios y formaban aprendices, mientras las universidades de Bolonia, París y Oxford desarrollaban estudios de derecho, medicina, artes y teología. La vida medieval fue mucho más urbana y diversa de lo que suele sugerir el estereotipo.',
    points: ['Los gremios organizaban la producción y el aprendizaje de oficios.', 'Las ferias impulsaron el intercambio de telas, metales y alimentos.', 'Las universidades crearon comunidades dedicadas al estudio.'], resource: 'https://www.britannica.com/money/medieval-european-trade'
  },
  'edad-media-ciencia': {
    civilization: 'Civilización V · Edad Media', number: '15 / 15', title: 'Conocimiento y transmisión', accent: 'var(--lapis)',
    lead: 'La Edad Media conservó, tradujo y amplió saberes de distintas tradiciones: latina, griega, árabe, persa, judía y asiática.',
    body: 'En centros como la Casa de la Sabiduría de Bagdad se tradujeron obras de matemáticas, medicina y astronomía. En Europa, monasterios y universidades copiaron manuscritos y debatieron nuevas ideas. La imprenta de tipos móviles, difundida en Europa por Gutenberg hacia 1450, aceleró después la circulación del conocimiento.',
    points: ['Al-Juarismi ayudó a difundir métodos algebraicos y el sistema decimal.', 'Las traducciones conectaron obras griegas con lectores medievales.', 'La imprenta multiplicó la circulación de libros y noticias.'], resource: 'https://www.britannica.com/place/Islamic-world/Science-and-technology'
  }
};

const content = document.querySelector('#detail-content');
const key = window.location.hash.slice(1) || 'egipto-escritura';
const topic = topics[key] || topics['egipto-escritura'];
document.title = `${topic.title} · Atlas antiguo`;
content.style.setProperty('--accent', topic.accent);
content.innerHTML = `
  <div class="detail-kicker"><span class="detail-number">${topic.number}</span> &nbsp; ${topic.civilization}</div>
  <h1>${topic.title}</h1>
  <p class="detail-lead">${topic.lead}</p>
  <div class="detail-layout">
    <div class="detail-copy"><h2>¿Qué hacían?</h2><p>${topic.body}</p><p class="detail-note">Resumen histórico integrado en el atlas.</p></div>
    <aside class="detail-list"><h3>Ideas clave</h3><ul>${topic.points.map((point) => `<li>${point}</li>`).join('')}</ul></aside>
  </div>`;
