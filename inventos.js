const inventions = [
  {
    id: 'rueda',
    name: 'La rueda',
    date: 'c. 3500 a. C.',
    sortDate: -3500,
    category: 'Antigüedad',
    group: 'ancient',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f2/Romania_Bronze_wheel_1000_BC.jpg/960px-Romania_Bronze_wheel_1000_BC.jpg',
    alt: 'Rueda de bronce hallada en Rumanía y fechada alrededor del año 1000 a. C.',
    source: 'https://commons.wikimedia.org/wiki/File:Romania_Bronze_wheel_1000_BC.jpg',
    credit: 'Yelkrokoyade · CC BY-SA 3.0',
    license: 'https://creativecommons.org/licenses/by-sa/3.0',
    description: 'La rueda fue una solución que surgió en distintas sociedades de Eurasia hace más de cinco mil años. Sus primeros usos incluyeron el torno de alfarero; después, los carros la hicieron esencial para transportar cargas.',
    context: 'La pieza fotografiada es una rueda de bronce de Rumanía de alrededor del 1000 a. C.; es una muestra posterior de una tecnología mucho más antigua.',
    examples: ['Torno de alfarero para dar forma a vasijas.', 'Carros para mover personas, cosechas y materiales.', 'Ruedas y engranajes en mecanismos actuales.'],
    tags: 'rueda transporte torno carro herramienta'
  },
  {
    id: 'mesopotamia-escritura',
    name: 'Escritura cuneiforme',
    date: 'c. 3400 a. C.',
    sortDate: -3400,
    category: 'Antigüedad',
    group: 'ancient',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Cuneiform_tablet_with_Sumerian_inscription%2C_Ur_III%2C_Museum_of_Archaeology_and_Anthropology.jpg',
    alt: 'Tablilla de arcilla con una inscripción cuneiforme sumeria.',
    source: 'https://commons.wikimedia.org/wiki/File:Cuneiform_tablet_with_Sumerian_inscription,_Ur_III,_Museum_of_Archaeology_and_Anthropology.jpg',
    credit: 'SpeakingArch · CC BY-SA 4.0',
    license: 'https://creativecommons.org/licenses/by-sa/4.0',
    description: 'En Mesopotamia, los escribas presionaban una caña sobre arcilla húmeda para dejar marcas en forma de cuña. El sistema empezó a utilizarse para administrar bienes y, con el tiempo, también registró leyes, relatos y observaciones.',
    context: 'Esta tablilla conserva una inscripción sumeria del período Ur III, siglos después de los primeros ejemplos de escritura cuneiforme.',
    examples: ['Registrar cantidades de grano y animales.', 'Conservar contratos y cuentas de templos.', 'Escribir himnos, leyes y relatos como la Epopeya de Gilgamesh.'],
    tags: 'escritura arcilla sumeria tablilla comunicación'
  },
  {
    id: 'molino-agua',
    name: 'Molino de agua',
    date: 'c. siglo III a. C.',
    sortDate: -250,
    category: 'Antigüedad',
    group: 'ancient',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/07/Water_mill%2C_Perahora%2C_Greece%2C_4th_century_BC_%28reconstruction%29.jpg/960px-Water_mill%2C_Perahora%2C_Greece%2C_4th_century_BC_%28reconstruction%29.jpg',
    alt: 'Reconstrucción de un molino de agua de la antigua Peracora, Grecia.',
    source: 'https://commons.wikimedia.org/wiki/File:Water_mill,_Perahora,_Greece,_4th_century_BC_(reconstruction).jpg',
    credit: 'Gts-tg · CC BY-SA 4.0',
    license: 'https://creativecommons.org/licenses/by-sa/4.0',
    description: 'Al encauzar la corriente sobre una rueda, el agua podía producir un movimiento giratorio que accionaba piedras de moler. Esta máquina aprovechaba una fuente de energía renovable para realizar trabajo cotidiano.',
    context: 'La imagen muestra una reconstrucción de un molino griego antiguo; la obra conservada y las primeras referencias escritas permiten estudiar estas máquinas.',
    examples: ['Moler grano para obtener harina.', 'Mover mecanismos de talleres.', 'Aprovechar la fuerza del agua sin depender solo de personas o animales.'],
    tags: 'agua molino harina energía corriente grecia'
  },
  {
    id: 'papiro',
    name: 'El papiro',
    date: 'c. 3000 a. C.',
    sortDate: -3000,
    category: 'Antigüedad',
    group: 'ancient',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6f/Papyrus_manuscript_of_the_Gospel_of_Luke_%28Papyrus_97%29_%28CBL_BP_XVII%29.jpg/960px-Papyrus_manuscript_of_the_Gospel_of_Luke_%28Papyrus_97%29_%28CBL_BP_XVII%29.jpg',
    alt: 'Fragmento antiguo de un manuscrito griego sobre papiro.',
    source: 'https://commons.wikimedia.org/wiki/File:Papyrus_manuscript_of_the_Gospel_of_Luke_(Papyrus_97)_(CBL_BP_XVII).jpg',
    credit: 'Dominio público',
    license: 'https://creativecommons.org/publicdomain/mark/1.0/',
    description: 'En el antiguo Egipto se obtenían hojas para escribir de la planta del papiro, abundante en las riberas del Nilo. Las fibras se colocaban en capas, se prensaban y se secaban hasta formar una superficie ligera para textos y dibujos.',
    context: 'El fragmento fotografiado es un manuscrito griego posterior escrito en papiro; ilustra la durabilidad de este material, no un texto egipcio del momento de su invención.',
    examples: ['Registrar documentos administrativos y cartas.', 'Crear rollos de literatura y textos religiosos.', 'Consultar un soporte más ligero y manejable que una tablilla de arcilla.'],
    tags: 'papiro egipto escritura papel manuscrito nilo'
  },
  {
    id: 'acueducto',
    name: 'Acueducto romano',
    date: 'c. siglo I a. C.',
    sortDate: -50,
    category: 'Antigüedad',
    group: 'ancient',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/19/Acueducto_de_Segovia_01.jpg/960px-Acueducto_de_Segovia_01.jpg',
    alt: 'Arcos de piedra del acueducto de Segovia.',
    source: 'https://commons.wikimedia.org/wiki/File:Acueducto_de_Segovia_01.jpg',
    credit: 'David Corral Gadea · CC BY-SA 3.0 ES',
    license: 'https://creativecommons.org/licenses/by-sa/3.0/es/deed.en',
    description: 'Los acueductos conducían agua desde manantiales hasta ciudades y asentamientos. Los ingenieros combinaban canales con pendientes suaves, túneles, puentes y arcos cuando el terreno lo exigía.',
    context: 'El acueducto de Segovia, construido durante la época romana, es un ejemplo de esta ingeniería; sus grandes arcos corresponden al tramo elevado.',
    examples: ['Llevar agua a fuentes, termas y hogares.', 'Sortear valles con arcos de piedra.', 'Mantener la pendiente necesaria para que el agua fluyera.'],
    tags: 'roma agua ingeniería puente canal acueducto'
  },
  {
    id: 'astrolabio',
    name: 'Astrolabio',
    date: 'c. siglo II a. C.',
    sortDate: -150,
    category: 'Ciencia',
    group: 'science',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/63/A_reconstruction_of_the_spherical_astrolabe_of_Ptolemy%2C_Kotsanas_Museum_of_Ancient_Greek_Technology.jpg',
    alt: 'Reconstrucción de un astrolabio esférico en un museo de tecnología griega.',
    source: 'https://commons.wikimedia.org/wiki/File:A_reconstruction_of_the_spherical_astrolabe_of_Ptolemy,_Kotsanas_Museum_of_Ancient_Greek_Technology.jpg',
    credit: 'Denexeitelos · CC BY 4.0',
    license: 'https://creativecommons.org/licenses/by/4.0',
    description: 'El astrolabio representaba el cielo mediante piezas que podían girar una sobre otra. Permitía resolver problemas astronómicos y realizar mediciones; las versiones planas se perfeccionaron durante siglos en distintos centros de aprendizaje.',
    context: 'La imagen muestra una reconstrucción de un astrolabio esférico atribuido a la tradición de Ptolomeo, no un instrumento original de la época.',
    examples: ['Estimar la altura del Sol o de una estrella.', 'Relacionar la posición de los astros con la hora.', 'Apoyar cálculos de navegación y observación astronómica.'],
    tags: 'astrolabio astronomía cielo navegación griego ciencia'
  },
  {
    id: 'brujula',
    name: 'Brújula magnética',
    date: 'c. siglo XI',
    sortDate: 1050,
    category: 'Edad Media',
    group: 'medieval',
    illustration: 'compass',
    alt: 'Ilustración esquemática de una brújula con aguja magnética.',
    credit: 'Ilustración propia del Atlas antiguo',
    description: 'La magnetita, un mineral que puede orientar una aguja, permitió desarrollar instrumentos para reconocer direcciones. En China se documentaron brújulas de uso náutico durante la dinastía Song; su uso se difundió gradualmente por otras regiones.',
    context: 'La ilustración es un esquema didáctico, no una brújula medieval original.',
    examples: ['Orientarse cuando las estrellas no son visibles.', 'Complementar el conocimiento de vientos y costas.', 'Facilitar viajes y navegación de larga distancia.'],
    tags: 'brújula navegación china magnetismo dirección'
  },
  {
    id: 'gafas',
    name: 'Gafas',
    date: 'c. finales del siglo XIII',
    sortDate: 1280,
    category: 'Edad Media',
    group: 'medieval',
    illustration: 'glasses',
    alt: 'Ilustración esquemática de unas gafas medievales con lentes.',
    credit: 'Ilustración propia del Atlas antiguo',
    description: 'Las primeras gafas conocidas aparecieron en Italia a finales del siglo XIII. Sus lentes convexas ayudaban sobre todo a leer de cerca; no se conoce con certeza quién las inventó.',
    context: 'La ilustración es una representación esquemática de gafas antiguas, no un objeto histórico fotografiado.',
    examples: ['Ayudar a los copistas a leer manuscritos.', 'Facilitar tareas finas de artesanos.', 'Mostrar cómo la óptica puede compensar algunos cambios de la vista.'],
    tags: 'gafas lentes óptica vista lectura italia'
  },
  {
    id: 'reloj-mecanico',
    name: 'Reloj mecánico',
    date: 'c. siglo XIV',
    sortDate: 1300,
    category: 'Edad Media',
    group: 'medieval',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ad/Astronomical_Clock%2C_Prague.jpg/960px-Astronomical_Clock%2C_Prague.jpg',
    alt: 'Reloj astronómico histórico en la torre del Ayuntamiento de Praga.',
    source: 'https://commons.wikimedia.org/wiki/File:Astronomical_Clock,_Prague.jpg',
    credit: 'Jay8085 · CC BY 2.0',
    license: 'https://creativecommons.org/licenses/by/2.0',
    description: 'Los relojes mecánicos utilizaron pesas, ruedas dentadas y mecanismos reguladores para marcar el paso de las horas. Su instalación en torres y edificios públicos hizo que el tiempo urbano pudiera oírse en las campanas.',
    context: 'El reloj astronómico de Praga se instaló en 1410; muestra una evolución posterior de los primeros relojes mecánicos.',
    examples: ['Coordinar las campanas de iglesias y ciudades.', 'Organizar horarios de trabajo y actividades comunes.', 'Representar información astronómica mediante esferas y figuras.'],
    tags: 'reloj mecánico hora engranaje campana astronomía'
  },
  {
    id: 'imprenta',
    name: 'Imprenta de tipos móviles',
    date: 'c. 1450',
    sortDate: 1450,
    category: 'Comunicación',
    group: 'communication',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/96/Gutenberg_press.png/960px-Gutenberg_press.png',
    alt: 'Prensa de impresión reconstruida para mostrar el método de Gutenberg.',
    source: 'https://commons.wikimedia.org/wiki/File:Gutenberg_press.png',
    credit: 'International Printing Museum · CC0',
    license: 'https://creativecommons.org/publicdomain/zero/1.0/deed.en',
    description: 'En Europa, Johannes Gutenberg perfeccionó un sistema de impresión con letras metálicas reutilizables, tinta y prensa. La técnica permitió producir muchas copias de un mismo texto, aunque la impresión con tipos móviles ya existía antes en Asia.',
    context: 'La fotografía muestra una reconstrucción de una prensa de Gutenberg.',
    examples: ['Imprimir varios ejemplares de un libro.', 'Acelerar la difusión de ideas científicas y religiosas.', 'Abaratar y ampliar el acceso a materiales de lectura.'],
    tags: 'imprenta libro tipos móviles impresión guttenberg comunicación'
  },
  {
    id: 'telescopio',
    name: 'Telescopio',
    date: '1608',
    sortDate: 1608,
    category: 'Ciencia',
    group: 'science',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3b/18th_century_telescopes_in_Galileo_Museum_0669.jpg/960px-18th_century_telescopes_in_Galileo_Museum_0669.jpg',
    alt: 'Telescopios antiguos conservados en el Museo Galileo de Florencia.',
    source: 'https://commons.wikimedia.org/wiki/File:18th_century_telescopes_in_Galileo_Museum_0669.jpg',
    credit: 'C messier · CC BY 4.0',
    license: 'https://creativecommons.org/licenses/by/4.0',
    description: 'El telescopio refractor reúne lentes para ampliar objetos lejanos. En 1608 se presentaron en los Países Bajos instrumentos de este tipo; al año siguiente Galileo construyó versiones mejoradas para observar el cielo.',
    context: 'La imagen muestra instrumentos conservados en un museo, fabricados después de las primeras observaciones telescópicas.',
    examples: ['Observar montañas y cráteres de la Luna.', 'Registrar los satélites de Júpiter.', 'Explorar cuerpos celestes demasiado distantes para la vista.'],
    tags: 'telescopio galileo estrellas astronomía lente ciencia'
  },
  {
    id: 'maquina-vapor',
    name: 'Máquina de vapor de Watt',
    date: '1769',
    sortDate: 1769,
    category: 'Industria',
    group: 'industry',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Boulton_%26_Watt_beam_engine_%28engine_floor%29_-_Kew_Bridge_Steam_Museum.jpg',
    alt: 'Máquina de vapor de balancín Boulton y Watt conservada en un museo.',
    source: 'https://commons.wikimedia.org/wiki/File:Boulton_%26_Watt_beam_engine_(engine_floor)_-_Kew_Bridge_Steam_Museum.jpg',
    credit: 'Chris Allen · CC BY-SA 2.0',
    license: 'https://creativecommons.org/licenses/by-sa/2.0',
    description: 'James Watt patentó un condensador separado que mejoró la eficiencia de las máquinas de vapor. La idea se combinó con el trabajo previo de otras personas: no inventó la máquina de vapor desde cero.',
    context: 'La máquina fotografiada es un motor de balancín Boulton y Watt preservado en un museo.',
    examples: ['Bombear agua de minas.', 'Accionar maquinaria en fábricas.', 'Impulsar el desarrollo posterior de trenes y barcos.'],
    tags: 'vapor watt industria energía motor revolución industrial'
  },
  {
    id: 'vacuna',
    name: 'Vacunación contra la viruela',
    date: '1796',
    sortDate: 1796,
    category: 'Ciencia',
    group: 'science',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/be/Benjamin_Jesty._Oil_painting_by_M.W._Sharp%2C_1805._Wellcome_L0042108.jpg/960px-Benjamin_Jesty._Oil_painting_by_M.W._Sharp%2C_1805._Wellcome_L0042108.jpg',
    alt: 'Retrato al óleo de Benjamin Jesty, pionero de la inoculación con viruela vacuna.',
    source: 'https://commons.wikimedia.org/wiki/File:Benjamin_Jesty._Oil_painting_by_M.W._Sharp,_1805._Wellcome_L0042108.jpg',
    credit: 'Wellcome Collection · CC BY 4.0',
    license: 'https://creativecommons.org/licenses/by/4.0',
    description: 'Edward Jenner observó que la exposición a la viruela vacuna podía proteger frente a la viruela humana. En 1796 puso a prueba la idea y ayudó a impulsar el desarrollo de la vacunación moderna.',
    context: 'La imagen es un retrato de Benjamin Jesty, quien inoculó con viruela vacuna antes de los experimentos de Jenner; no representa a Jenner.',
    examples: ['La primera vacuna de Jenner protegía contra la viruela.', 'La vacunación se convirtió en una herramienta de salud pública.', 'Los programas internacionales contribuyeron a erradicar la viruela en 1980.'],
    tags: 'vacuna viruela jenner medicina salud prevención'
  },
  {
    id: 'telefono',
    name: 'Teléfono',
    date: '1876',
    sortDate: 1876,
    category: 'Comunicación',
    group: 'communication',
    illustration: 'telephone',
    alt: 'Ilustración esquemática de un teléfono de pared de la época de Bell.',
    credit: 'Ilustración propia del Atlas antiguo',
    description: 'El teléfono convirtió las vibraciones de la voz en señales eléctricas que podían enviarse por un cable y transformarse de nuevo en sonido. Alexander Graham Bell obtuvo una patente clave en 1876, en una historia con varios inventores e investigadores.',
    context: 'La ilustración es un esquema de un teléfono antiguo, no una fotografía del prototipo de 1876.',
    examples: ['Conversar a distancia sin enviar un mensajero.', 'Conectar hogares, oficinas y servicios públicos.', 'Sentar las bases de redes de comunicación de voz.'],
    tags: 'teléfono bell voz comunicación distancia electricidad'
  },
  {
    id: 'bombilla',
    name: 'Lámpara incandescente práctica',
    date: '1879',
    sortDate: 1879,
    category: 'Industria',
    group: 'industry',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/80/Edison_incandescent_lights.jpg',
    alt: 'Primeras lámparas incandescentes fabricadas durante el desarrollo de Edison.',
    source: 'https://commons.wikimedia.org/wiki/File:Edison_incandescent_lights.jpg',
    credit: 'William J. Hammer · Dominio público',
    license: 'https://creativecommons.org/publicdomain/mark/1.0/',
    description: 'La lámpara incandescente produce luz al calentar un filamento mediante electricidad. En 1879, el equipo de Thomas Edison desarrolló una versión práctica de duración prolongada, en un campo que también avanzaban otras personas.',
    context: 'La imagen muestra lámparas incandescentes asociadas con el trabajo del equipo de Edison.',
    examples: ['Iluminar viviendas y talleres por la noche.', 'Extender la actividad de espacios urbanos después del anochecer.', 'Impulsar la creación de redes de generación y distribución eléctrica.'],
    tags: 'bombilla luz electricidad edison iluminación energía'
  },
  {
    id: 'descubrimiento-calendario-solar',
    name: 'El calendario solar egipcio',
    date: 'c. 3000 a. C.',
    sortDate: -3000,
    type: 'discovery',
    category: 'Astronomía',
    group: 'discovery',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5f/Kom_Ombo_Temple_Calendar.JPG/960px-Kom_Ombo_Temple_Calendar.JPG',
    alt: 'Relieve del calendario del templo egipcio de Kom Ombo, con días del mes y temporadas del año.',
    source: 'https://commons.wikimedia.org/wiki/File:Kom_Ombo_Temple_Calendar.JPG',
    credit: 'Ad Meskens · CC BY-SA 3.0',
    license: 'https://creativecommons.org/licenses/by-sa/3.0/',
    description: 'La observación de las estaciones y del ciclo anual del Nilo permitió a los egipcios organizar un calendario civil de 365 días, dividido en doce meses y cinco días adicionales.',
    context: 'El relieve fotografiado conserva un calendario del templo de Kom Ombo con días del mes y referencias a las temporadas agrícolas.',
    examples: ['Prever las temporadas de siembra y cosecha.', 'Organizar ceremonias y registros administrativos.', 'Comparar los cambios estacionales con el calendario.'],
    tags: 'egipto calendario sol estaciones año astronomía descubrimiento'
  },
  {
    id: 'descubrimiento-circunferencia-tierra',
    name: 'Medición de la circunferencia de la Tierra',
    date: 'c. 240 a. C.',
    sortDate: -240,
    type: 'discovery',
    category: 'Geografía',
    group: 'discovery',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Eratosthenes.png',
    alt: 'Diagrama del cálculo de Eratóstenes para estimar la circunferencia terrestre usando las sombras en Alejandría y Siena.',
    source: 'https://commons.wikimedia.org/wiki/File:Eratosthenes.png',
    credit: 'Lookang; simulación original: Todd K. Timberlake y Francisco Esquembre · CC BY-SA 3.0',
    license: 'https://creativecommons.org/licenses/by-sa/3.0',
    description: 'Eratóstenes comparó la posición del Sol y las sombras en dos lugares de Egipto. A partir de la diferencia de ángulos y la distancia entre ellos, estimó la circunferencia terrestre.',
    context: 'Su cálculo, realizado en el siglo III a. C., fue notablemente cercano al valor moderno. La cifra exacta que obtuvo es objeto de debate porque las unidades antiguas admiten distintas interpretaciones.',
    examples: ['Comparar sombras en lugares distintos.', 'Relacionar un ángulo medido con la circunferencia completa.', 'Aplicar geometría para estudiar el tamaño de la Tierra.'],
    tags: 'eratóstenes tierra geografía circunferencia sombras egipto descubrimiento'
  },
  {
    id: 'descubrimiento-heliocentrismo',
    name: 'Publicación del modelo heliocéntrico',
    date: '1543',
    sortDate: 1543,
    type: 'discovery',
    category: 'Astronomía',
    group: 'discovery',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/28/Copernican_heliocentrism_diagram-2.jpg/960px-Copernican_heliocentrism_diagram-2.jpg',
    alt: 'Diagrama histórico del modelo heliocéntrico de Copérnico publicado en De revolutionibus.',
    source: 'https://commons.wikimedia.org/wiki/File:Copernican_heliocentrism_diagram-2.jpg',
    credit: 'Basado en Copérnico (1543); adaptación: Professor marginalia · Dominio público',
    license: 'https://creativecommons.org/publicdomain/mark/1.0/',
    description: 'Nicolás Copérnico publicó un modelo matemático que situaba al Sol cerca del centro del sistema y a la Tierra en movimiento. Su propuesta transformó el debate sobre la organización del cosmos.',
    context: 'La idea de una Tierra en movimiento ya había sido planteada en la Antigüedad por Aristarco de Samos; Copérnico presentó un sistema detallado que impulsó nuevas investigaciones.',
    examples: ['Replantear la explicación de los movimientos planetarios.', 'Estimular nuevas observaciones y cálculos astronómicos.', 'Iniciar una transformación gradual de la astronomía europea.'],
    tags: 'copérnico heliocentrismo sol tierra planetas astronomía descubrimiento'
  },
  {
    id: 'descubrimiento-orbitas-elipticas',
    name: 'Las órbitas elípticas de los planetas',
    date: '1609',
    sortDate: 1609,
    type: 'discovery',
    category: 'Astronomía',
    group: 'discovery',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e9/Kepler_Mars_retrograde.jpg/960px-Kepler_Mars_retrograde.jpg',
    alt: 'Diagrama de Kepler del movimiento retrógrado aparente de Marte, tomado de Astronomia Nova (1609).',
    source: 'https://commons.wikimedia.org/wiki/File:Kepler_Mars_retrograde.jpg',
    credit: 'Johannes Kepler, Astronomia Nova (1609); imagen digitalizada por Grantb · Dominio público',
    license: 'https://creativecommons.org/publicdomain/mark/1.0/',
    description: 'Johannes Kepler concluyó que los planetas se desplazan en órbitas elípticas y no en círculos perfectos. Publicó esta primera ley en 1609, apoyándose en las observaciones astronómicas de Tycho Brahe.',
    context: 'El diagrama original muestra el movimiento aparente de Marte que Kepler estudió; sus cálculos sobre esas observaciones sustentaron la ley de las órbitas elípticas.',
    examples: ['Explicar los cambios de distancia entre un planeta y el Sol.', 'Predecir posiciones planetarias con mayor precisión.', 'Comprender que la órbita terrestre también es elíptica.'],
    tags: 'kepler planeta órbita elipse brahe astronomía descubrimiento'
  },
  {
    id: 'descubrimiento-lunas-jupiter',
    name: 'Las cuatro lunas principales de Júpiter',
    date: '1610',
    sortDate: 1610,
    type: 'discovery',
    category: 'Astronomía',
    group: 'discovery',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Sidereus_Nuncius_Medicean_Stars.jpg',
    alt: 'Página de Sidereus Nuncius de Galileo que muestra las observaciones de los satélites de Júpiter.',
    source: 'https://commons.wikimedia.org/wiki/File:Sidereus_Nuncius_Medicean_Stars.jpg',
    credit: 'Galileo Galilei; digitalización: History of Science Collections, University of Oklahoma Libraries · Dominio público',
    license: 'https://creativecommons.org/publicdomain/mark/1.0/',
    description: 'Con un telescopio, Galileo Galilei observó cuatro cuerpos que cambiaban de posición alrededor de Júpiter. Comprendió que eran lunas y no estrellas fijas: Ío, Europa, Ganimedes y Calisto.',
    context: 'El descubrimiento, publicado en 1610, mostró que no todo giraba alrededor de la Tierra y aportó evidencia a los debates sobre el modelo heliocéntrico.',
    examples: ['Observar el movimiento orbital de las cuatro lunas.', 'Ampliar el conocimiento del sistema joviano.', 'Usar un telescopio para cuestionar modelos astronómicos previos.'],
    tags: 'galileo júpiter lunas europa ío ganímedes calisto telescopio descubrimiento'
  },
  {
    id: 'descubrimiento-gravitacion',
    name: 'La gravitación universal',
    date: '1687',
    sortDate: 1687,
    type: 'discovery',
    category: 'Física',
    group: 'discovery',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2f/Newton%27s_Principia_%281846%29.djvu/page1-960px-Newton%27s_Principia_%281846%29.djvu.jpg',
    alt: 'Primera página de la edición estadounidense del Principia de Isaac Newton, publicada en 1846.',
    source: 'https://commons.wikimedia.org/wiki/File:Newton%27s_Principia_(1846).djvu',
    credit: 'Isaac Newton, Principia; edición estadounidense de 1846 · Dominio público',
    license: 'https://creativecommons.org/publicdomain/mark/1.0/',
    description: 'Isaac Newton publicó una ley matemática que describe cómo la gravedad actúa entre los cuerpos. Su teoría relacionó la caída de los objetos en la Tierra con el movimiento de la Luna y los planetas.',
    context: 'Newton no descubrió que los objetos caen: desarrolló una explicación general para la atracción gravitatoria y el movimiento celeste, recogida en los Principia de 1687.',
    examples: ['Explicar la caída de los objetos y las mareas.', 'Calcular las órbitas de la Luna y los planetas.', 'Unificar fenómenos terrestres y celestes en una teoría.'],
    tags: 'newton gravedad gravitación luna tierra física descubrimiento'
  },
  {
    id: 'descubrimiento-tabla-periodica',
    name: 'La tabla periódica',
    date: '1869',
    sortDate: 1869,
    type: 'discovery',
    category: 'Química',
    group: 'discovery',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Mendelejevs_periodiska_system_1871.png',
    alt: 'Tabla periódica manuscrita por Dmitri Mendeléyev en 1871, con espacios para elementos aún no descubiertos.',
    source: 'https://commons.wikimedia.org/wiki/File:Mendelejevs_periodiska_system_1871.png',
    credit: 'Dmitri Mendeléyev (1871); digitalización: Den fjättrade ankan · Dominio público',
    license: 'https://creativecommons.org/publicdomain/mark/1.0/',
    description: 'Dmitri Mendeléyev organizó los elementos conocidos según sus propiedades y masas atómicas, y dejó espacios para elementos que aún no se habían identificado. Algunas de sus predicciones fueron confirmadas después.',
    context: 'En 1869 se publicó una de las primeras versiones de su tabla. Otros científicos también contribuyeron a clasificar los elementos; la tabla moderna se ordena por número atómico.',
    examples: ['Agrupar elementos con propiedades parecidas.', 'Predecir elementos aún no identificados.', 'Usar patrones periódicos para organizar el conocimiento químico.'],
    tags: 'mendeléyev química elementos tabla ciencia descubrimiento'
  },
  {
    id: 'descubrimiento-penicilina',
    name: 'La penicilina',
    date: '1928',
    sortDate: 1928,
    type: 'discovery',
    category: 'Medicina',
    group: 'discovery',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Penicillin_Past%2C_Present_and_Future-_the_Development_and_Production_of_Penicillin%2C_England%2C_1944_D17802.jpg',
    alt: 'Alexander Fleming examina una placa de cultivo en su laboratorio mientras investiga la penicilina, en 1944.',
    source: 'https://commons.wikimedia.org/wiki/File:Penicillin_Past,_Present_and_Future-_the_Development_and_Production_of_Penicillin,_England,_1944_D17802.jpg',
    credit: 'Ministry of Information Photo Division · Dominio público',
    license: 'https://creativecommons.org/publicdomain/mark/1.0/',
    description: 'Alexander Fleming observó que un moho del género Penicillium impedía el crecimiento de bacterias en una placa de laboratorio. Aquel hallazgo abrió el camino a la penicilina como medicamento.',
    context: 'Fleming describió la observación en 1929; convertir la penicilina en un tratamiento utilizable requirió el trabajo posterior de otros investigadores y equipos médicos.',
    examples: ['Iniciar el desarrollo de antibióticos contra ciertas infecciones bacterianas.', 'Mostrar la importancia de una observación inesperada en el laboratorio.', 'Recordar que un descubrimiento requiere investigación para convertirse en tratamiento.'],
    tags: 'fleming penicilina moho bacterias antibiótico medicina descubrimiento'
  }
];

const orderedInventions = [...inventions].sort((first, second) => first.sortDate - second.sortDate);
const list = document.querySelector('#invention-list');
const detail = document.querySelector('#invention-detail');
const searchInput = document.querySelector('#invention-search');
const results = document.querySelector('#invention-results');
const emptyMessage = document.querySelector('#invention-empty');
const filters = [...document.querySelectorAll('.invention-filters button')];
const filterLabels = {
  all: 'Todos',
  ancient: 'Antigüedad',
  medieval: 'Edad Media',
  science: 'Ciencia',
  industry: 'Industria',
  communication: 'Comunicación',
  discovery: 'Descubrimientos'
};

let activeFilter = 'all';
let selectedId = null;
let visibleInventions = [];

function imageFor(invention) {
  if (invention.image) return invention.image;

  const illustrations = {
    compass: '<circle cx="200" cy="140" r="95" fill="#f3eee1" stroke="#26294a" stroke-width="8"/><circle cx="200" cy="140" r="62" fill="none" stroke="#b37c34" stroke-width="4"/><path d="M200 52 222 140 200 228 178 140z" fill="#bd4960"/><path d="m200 52 0 176" stroke="#26294a" stroke-width="4"/><circle cx="200" cy="140" r="10" fill="#26294a"/><text x="200" y="34" text-anchor="middle" fill="#26294a" font-size="17" font-family="sans-serif">N</text>',
    glasses: '<path d="M22 104q0-42 44-42h53q38 0 38 41t-40 41H66q-44 0-44-40zm178-1q0-41 38-41h53q44 0 44 42t-44 40h-51q-40 0-40-41z" fill="#f3eee1" stroke="#26294a" stroke-width="10"/><path d="M157 92q21-24 43 0M22 88 8 71m310 17 14-17" fill="none" stroke="#b37c34" stroke-width="8" stroke-linecap="round"/><circle cx="83" cy="103" r="8" fill="#78a8c9"/><circle cx="252" cy="103" r="8" fill="#78a8c9"/>',
    telephone: '<path d="M102 32h110v104H102z" fill="#e1b54e" stroke="#26294a" stroke-width="8"/><path d="M132 50h50v44h-50z" fill="#26294a"/><path d="M157 136v61m-38 0h77m-65-4 9-45m43 45-9-45" fill="none" stroke="#26294a" stroke-width="10" stroke-linecap="round"/><path d="m98 48-40-17m-3 0h-16m-7 0 0 26m181-9 40-17m3 0h16m7 0v26" fill="none" stroke="#8c5636" stroke-width="9" stroke-linecap="round"/><path d="M113 223q44 24 88 0" fill="none" stroke="#bd4960" stroke-width="9" stroke-linecap="round"/>'
  };
  const content = illustrations[invention.illustration];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280"><rect width="400" height="280" rx="8" fill="#e6e1d3"/><g transform="translate(0 0)">${content}</g><text x="200" y="260" text-anchor="middle" fill="#35344a" font-size="14" font-family="sans-serif">${invention.name}</text></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

function renderList() {
  const query = searchInput.value.trim().toLocaleLowerCase('es');
  visibleInventions = orderedInventions.filter(invention => {
    const matchesFilter = activeFilter === 'all' || invention.group === activeFilter;
    const matchesQuery = `${invention.name} ${invention.date} ${invention.category} ${invention.tags}`.toLocaleLowerCase('es').includes(query);
    return matchesFilter && matchesQuery;
  });

  list.replaceChildren();
  visibleInventions.forEach(invention => {
    const item = document.createElement('li');
    item.id = `card-${invention.id}`;
    item.dataset.inventionId = invention.id;
    item.className = 'invention-item';

    const date = document.createElement('time');
    date.className = 'invention-date';
    date.classList.toggle('is-discovery', invention.type === 'discovery');
    date.dateTime = String(invention.sortDate);
    date.textContent = invention.date;

    const card = document.createElement('article');
    card.className = `invention-card${invention.id === selectedId ? ' is-selected' : ''}${invention.type === 'discovery' ? ' is-discovery' : ''}`;

    const image = document.createElement('img');
    image.src = imageFor(invention);
    image.alt = invention.alt;
    image.loading = 'lazy';
    image.decoding = 'async';

    const copy = document.createElement('div');
    copy.className = 'invention-card-content';

    const meta = document.createElement('p');
    meta.className = 'invention-meta';
    meta.textContent = invention.type === 'discovery'
      ? `Descubrimiento · ${invention.category}`
      : `Invento · ${invention.category}`;

    const heading = document.createElement('h3');
    heading.textContent = invention.name;

    const description = document.createElement('p');
    description.textContent = invention.description;

    const selectButton = document.createElement('button');
    selectButton.type = 'button';
    selectButton.className = 'invention-select';
    selectButton.textContent = 'Abrir ficha ↓';
    selectButton.setAttribute('aria-pressed', String(invention.id === selectedId));
    selectButton.setAttribute('aria-label', `Abrir ficha: ${invention.name}`);
    selectButton.addEventListener('click', () => selectInvention(invention.id, true));

    copy.append(meta, heading, description, selectButton);
    card.append(image, copy);
    item.append(date, card);
    list.append(item);
  });

  const count = visibleInventions.length;
  results.textContent = `${count} ${count === 1 ? 'hito encontrado' : 'hitos encontrados'} · ${filterLabels[activeFilter]}`;
  emptyMessage.hidden = count > 0;

  if (!visibleInventions.some(invention => invention.id === selectedId)) {
    selectedId = visibleInventions[0]?.id ?? null;
    const url = selectedId ? `#${selectedId}` : `${window.location.pathname}${window.location.search}`;
    history.replaceState(null, '', url);
  }
  renderDetail();
}

function renderDetail() {
  detail.replaceChildren();
  const invention = inventions.find(item => item.id === selectedId);
  if (!invention) {
    const message = document.createElement('p');
    message.textContent = 'Elige una categoría distinta o borra la búsqueda para volver a explorar las fichas.';
    detail.append(message);
    return;
  }

  const layout = document.createElement('article');
  layout.className = 'invention-detail';
  layout.id = invention.id;

  const figure = document.createElement('figure');
  figure.className = 'invention-detail-figure';

  const image = document.createElement('img');
  image.src = imageFor(invention);
  image.alt = invention.alt;
  image.loading = 'lazy';
  image.decoding = 'async';

  const caption = document.createElement('figcaption');
  if (invention.source) {
    const source = document.createElement('a');
    source.href = invention.source;
    source.target = '_blank';
    source.rel = 'noopener noreferrer';
    source.textContent = invention.credit.includes(' · ')
      ? `Ver imagen original · ${invention.credit.split(' · ')[0]}`
      : 'Ver imagen original';
    caption.append(source);
  } else {
    caption.textContent = invention.credit;
  }
  if (invention.license) {
    const license = document.createElement('a');
    license.href = invention.license;
    license.target = '_blank';
    license.rel = 'noopener noreferrer';
    license.textContent = ` · ${invention.credit.includes('Dominio público') ? 'Dominio público' : invention.credit.split(' · ').pop()}`;
    caption.append(license);
  }
  figure.append(image, caption);

  const copy = document.createElement('div');
  copy.className = 'invention-detail-copy';

  const kicker = document.createElement('p');
  kicker.className = 'inventions-kicker';
  kicker.classList.toggle('is-discovery', invention.type === 'discovery');
  kicker.textContent = invention.type === 'discovery'
    ? `Descubrimiento · ${invention.category}`
    : `Invento · ${invention.category}`;

  const heading = document.createElement('h2');
  heading.textContent = invention.name;

  const date = document.createElement('p');
  date.className = 'invention-detail-date';
  date.textContent = invention.date;

  const description = document.createElement('p');
  description.textContent = invention.description;

  const contextHeading = document.createElement('h3');
  contextHeading.textContent = 'Contexto y evolución';

  const context = document.createElement('p');
  context.textContent = invention.context;

  const examplesHeading = document.createElement('h3');
  examplesHeading.textContent = '¿Para qué se utilizó?';

  const examples = document.createElement('ul');
  invention.examples.forEach(example => {
    const item = document.createElement('li');
    item.textContent = example;
    examples.append(item);
  });

  const related = document.createElement('a');
  related.className = 'invention-related';
  related.href = 'civilizaciones.html';
  related.textContent = 'Seguir explorando civilizaciones →';

  copy.append(kicker, heading, date, description, contextHeading, context, examplesHeading, examples, related);
  layout.append(figure, copy);
  detail.append(layout);
}

function selectInvention(id, updateHash) {
  selectedId = id;
  const invention = inventions.find(item => item.id === id);
  if (!invention) return;

  if (updateHash) history.replaceState(null, '', `#${id}`);
  list.querySelectorAll('.invention-item').forEach(item => {
    const isSelected = item.dataset.inventionId === id;
    item.querySelector('.invention-card').classList.toggle('is-selected', isSelected);
    item.querySelector('.invention-select').setAttribute('aria-pressed', String(isSelected));
  });
  renderDetail();
  if (updateHash) detail.scrollIntoView({ block: 'start' });
}

filters.forEach(button => button.addEventListener('click', () => {
  activeFilter = button.dataset.filter;
  filters.forEach(filter => {
    const isActive = filter === button;
    filter.classList.toggle('is-active', isActive);
    filter.setAttribute('aria-pressed', String(isActive));
  });
  renderList();
}));

searchInput.addEventListener('input', renderList);
window.addEventListener('hashchange', () => {
  const id = window.location.hash.slice(1);
  if (inventions.some(invention => invention.id === id)) selectInvention(id, false);
});

const requestedId = window.location.hash.slice(1);
if (requestedId === 'descubrimientos') {
  activeFilter = 'discovery';
  filters.forEach(button => {
    const isActive = button.dataset.filter === 'discovery';
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
}
selectedId = inventions.some(invention => invention.id === requestedId)
  ? requestedId
  : orderedInventions.find(invention => invention.group === activeFilter)?.id ?? orderedInventions[0].id;
renderList();
if (requestedId) document.getElementById(requestedId)?.scrollIntoView({ block: 'start', behavior: 'instant' });
