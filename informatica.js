const TOPICS = [
  {id:'board',category:'hardware',area:'Hardware',title:'Historia de la tarjeta madre',description:'Las primeras computadoras ocupaban salas y usaban varias placas especializadas. Con los microprocesadores y la computadora personal, más funciones se integraron en una placa principal; los formatos como ATX ayudaron a estandarizar tamaños y conexiones.',example:'Ejemplo: una placa ATX reúne zócalo de CPU, ranuras de RAM, conectores de almacenamiento y puertos de expansión.',visual:'board'},
  {id:'processor',category:'hardware',area:'Hardware',title:'Historia de los procesadores',description:'El procesador ejecuta instrucciones y realiza operaciones. El Intel 4004, presentado en 1971, fue uno de los primeros microprocesadores comerciales en un solo chip. Desde entonces crecieron la integración y la eficiencia, y hoy son comunes los diseños multinúcleo.',example:'Ejemplo: un procesador de cuatro núcleos puede atender varias tareas a la vez; el rendimiento también depende de la memoria y del software.',visual:'chip'},
  {id:'operating-systems',category:'systems',area:'Sistemas operativos',title:'Sistemas operativos: qué son y clasificación',description:'El sistema operativo administra el hardware, los archivos y los programas, y ofrece una interfaz para la persona usuaria. Puede ser de escritorio, servidor, móvil, integrado o de tiempo real.',example:'Ejemplos: Windows, distribuciones GNU/Linux y macOS en equipos personales; Android e iOS en móviles.',visual:'desktop'},
  {id:'mobile-os',category:'systems',area:'Sistemas operativos',title:'Sistemas operativos móviles',description:'Un sistema móvil coordina pantalla táctil, aplicaciones, sensores, redes y consumo de batería. Está diseñado para teléfonos y tabletas y suele distribuir aplicaciones mediante tiendas digitales.',example:'Ejemplo: Android y iOS gestionan permisos; revisa qué aplicaciones pueden usar ubicación, micrófono o cámara.',visual:'phone'},
  {id:'install-os',category:'systems',area:'Sistemas operativos',title:'Instalación de Windows y Linux',description:'Instalar un sistema operativo implica verificar requisitos, preparar un medio de instalación, elegir el disco y configurar idioma, cuenta y actualizaciones. Antes de empezar, respalda los archivos y confirma que tienes autorización para modificar el equipo.',example:'Ejemplo: probar una distribución Linux desde una memoria USB en modo “sesión en vivo” permite conocerla sin instalarla en el disco.',visual:'install'},
  {id:'dos',category:'systems',area:'Sistemas operativos',title:'Comandos de DOS y consola',description:'Las interfaces de línea de comandos permiten escribir instrucciones para navegar por archivos y administrar el sistema. DOS es una familia histórica; Windows actual ofrece herramientas como Símbolo del sistema y PowerShell.',example:'Ejemplos seguros: dir muestra archivos; cd cambia de carpeta; mkdir crea una carpeta. Comprueba la ruta antes de mover o borrar datos.',visual:'terminal'},
  {id:'system-tools',category:'systems',area:'Sistemas operativos',title:'Herramientas del sistema',description:'Son utilidades incluidas para revisar el estado del equipo, administrar archivos, diagnosticar problemas y ajustar su configuración.',example:'Ejemplos: Administrador de tareas para revisar procesos, Monitor de actividad en macOS, y herramientas de discos para comprobar almacenamiento.',visual:'tools'},
  {id:'programming-languages',category:'programming',area:'Programación y software',title:'Lenguajes de programación: clasificación y ejemplos',description:'Los lenguajes expresan instrucciones y algoritmos. Pueden clasificarse por nivel, paradigma y forma de ejecución; algunos son compilados, otros interpretados o combinan ambos enfoques.',example:'Ejemplos: Python se usa en automatización y ciencia de datos; JavaScript en la web; C en sistemas; SQL en consultas a bases de datos.',visual:'code'},
  {id:'application-software',category:'programming',area:'Programación y software',title:'Software aplicativo y de desarrollo',description:'El software aplicativo ayuda a realizar tareas de usuario. Las herramientas de desarrollo sirven para crear, probar y mantener otros programas.',example:'Ejemplos: un procesador de texto es aplicativo; un editor de código, compilador y depurador forman parte de un entorno de desarrollo.',visual:'apps'},
  {id:'free-software',category:'programming',area:'Programación y software',title:'Software libre',description:'El software libre respeta libertades para ejecutar, estudiar, modificar y compartir el programa. “Libre” se refiere a esas libertades, no necesariamente a que no tenga costo.',example:'Ejemplos: GNU/Linux, LibreOffice y GIMP. Sus licencias indican cómo se pueden usar y redistribuir.',visual:'freedom'},
  {id:'network-topologies',category:'networks',area:'Redes',title:'Redes y topologías',description:'Una topología describe cómo se conectan los dispositivos en una red, física o lógicamente. La elección afecta el costo, el rendimiento y la tolerancia a fallos.',example:'Ejemplos: en estrella los equipos se conectan a un punto central; en malla existen varias rutas posibles entre nodos.',visual:'network'},
  {id:'osi-model',category:'networks',area:'Redes',title:'Modelo OSI',description:'El modelo OSI organiza la comunicación en siete capas: física, enlace, red, transporte, sesión, presentación y aplicación. Es un marco conceptual para estudiar redes y resolver problemas.',example:'Ejemplo: al abrir una página web intervienen la aplicación, el transporte y la red, además de las capas que transmiten señales y tramas.',visual:'layers'},
  {id:'virtual-disks',category:'systems',area:'Sistemas operativos',title:'Discos virtuales',description:'Un disco virtual es un archivo o volumen que un sistema presenta como almacenamiento. Se utiliza con máquinas virtuales, copias de seguridad y para probar sistemas aislados.',example:'Ejemplo: una máquina virtual puede guardar su disco en un archivo VDI o VHDX. Mantén copias y evita abrir imágenes de origen desconocido.',visual:'disk'},
  {id:'remote-support',category:'security',area:'Seguridad',title:'Asistencia remota',description:'La asistencia remota permite que alguien ayude a diagnosticar o configurar un dispositivo a distancia. Debe realizarse con consentimiento explícito y herramientas legítimas.',example:'Ejemplo seguro: comparte un código de sesión temporal solo con el técnico que contactaste; observa la sesión y revoca el acceso al terminar.',visual:'remote'},
  {id:'cybersecurity',category:'security',area:'Seguridad',title:'Seguridad informática',description:'La seguridad informática protege dispositivos, cuentas y datos. Combina actualizaciones, contraseñas únicas, autenticación multifactor, copias de seguridad y prudencia ante mensajes inesperados.',example:'Ejemplo: usa un gestor de contraseñas, activa MFA y verifica el dominio antes de iniciar sesión desde un enlace recibido.',visual:'shield'},
  {id:'cybercrime',category:'security',area:'Seguridad',title:'Delitos informáticos',description:'Son conductas ilegales que involucran sistemas o datos, como el fraude digital, la suplantación, el acceso no autorizado o el robo de identidad. Las leyes y definiciones varían por país.',example:'Ejemplo de prevención: guarda mensajes sospechosos, no pagues ni compartas códigos, y denuncia el fraude a tu banco y a las autoridades locales.',visual:'alert'},
  {id:'cybercriminals',category:'security',area:'Seguridad',title:'Ciberdelincuentes y prevención',description:'Las personas que cometen delitos digitales pueden actuar solas o en grupos y perseguir dinero, datos o acceso. Conocer sus tácticas ayuda a reconocer y reportar riesgos, no a imitarlos.',example:'Señales de alerta: urgencia inesperada, remitente dudoso, solicitud de códigos de verificación o petición de instalar programas de control remoto.',visual:'identity'},
  {id:'malware',category:'security',area:'Seguridad',title:'Software malicioso',description:'El malware es software diseñado para robar información, interrumpir equipos o acceder sin permiso. Incluye troyanos, spyware, ransomware y virus; puede llegar por archivos, enlaces o aplicaciones falsas.',example:'Defensa: actualiza el sistema, descarga desde fuentes oficiales, conserva copias desconectadas y no habilites macros en archivos inesperados.',visual:'bug'},
  {id:'artificial-intelligence',category:'ai',area:'Inteligencia artificial',title:'Inteligencia artificial',description:'La inteligencia artificial agrupa técnicas que permiten a sistemas realizar tareas como reconocer patrones, generar texto o clasificar imágenes. Los modelos dependen de datos y pueden equivocarse o reproducir sesgos.',example:'Ejemplos: filtros de correo no deseado, subtítulos automáticos y asistentes de texto. Verifica los datos importantes y evita compartir información confidencial.',visual:'ai'}
];

const TOPIC_DETAILS = {
  board: {
    detail: 'La tarjeta madre es la placa principal que permite que los componentes intercambien datos y energía. Conecta el procesador, la memoria RAM, el almacenamiento y los periféricos mediante buses, zócalos y controladores. Su diseño determina qué piezas son compatibles y qué posibilidades de ampliación tiene el equipo.',
    evolution: [['Décadas de 1940–1960','Las computadoras ocupaban salas y sus circuitos se distribuían en muchas placas y módulos.'],['Décadas de 1970–1980','Los microprocesadores y computadores personales integraron más funciones en placas compactas; se extendió el formato IBM PC.'],['1995–actualidad','El formato ATX y sus variantes estandarizan medidas y conexiones; las placas modernas incorporan varios controladores y ranuras de expansión.']]
  },
  processor: {
    detail: 'La unidad central de procesamiento (CPU) busca, interpreta y ejecuta instrucciones de los programas. Su arquitectura, frecuencia, cantidad de núcleos, memoria caché y consumo influyen en el desempeño. Un procesador rápido no compensa por sí solo la falta de memoria o un almacenamiento lento.',
    evolution: [['1940–1950','Las primeras computadoras electrónicas utilizaban válvulas de vacío y ocupaban grandes espacios.'],['Décadas de 1950–1960','Los transistores redujeron tamaño y consumo; los circuitos integrados reunieron varios componentes.'],['1971–actualidad','El Intel 4004 popularizó el microprocesador en un chip; después llegaron CPU multinúcleo y diseños eficientes para móviles y servidores.']]
  },
  'operating-systems': {
    detail: 'El sistema operativo administra los recursos compartidos del equipo: reparte tiempo de CPU y memoria, organiza archivos, controla dispositivos y aplica permisos. También ofrece servicios para que las aplicaciones funcionen sin tener que comunicarse directamente con cada pieza de hardware.',
    evolution: [['Décadas de 1950–1960','Los primeros sistemas automatizaron trabajos por lotes y luego permitieron compartir el tiempo de una computadora entre varias tareas.'],['Décadas de 1970–1980','UNIX y otros sistemas impulsaron herramientas multiusuario; los computadores personales popularizaron sistemas para un solo usuario.'],['1990–actualidad','Se extendieron interfaces gráficas, sistemas abiertos, virtualización, teléfonos inteligentes y servicios conectados a la nube.']]
  },
  'mobile-os': {
    detail: 'Un sistema operativo móvil adapta la gestión del procesador y la memoria a un dispositivo portátil. Coordina pantalla táctil, cámaras, sensores, redes y batería; además, controla permisos y el ciclo de vida de las aplicaciones.',
    evolution: [['Décadas de 1990–2000','Agendas electrónicas y primeros teléfonos inteligentes combinaron comunicación con aplicaciones sencillas.'],['2007–2008','Las interfaces táctiles modernas y las tiendas de aplicaciones cambiaron la distribución de software móvil.'],['Actualidad','Android e iOS ofrecen aislamiento de aplicaciones, permisos por recurso, servicios de accesibilidad y sincronización entre dispositivos.']]
  },
  'install-os': {
    detail: 'Instalar un sistema operativo consiste en preparar el equipo, iniciar un instalador confiable, elegir una configuración y crear una cuenta. Antes de cambiar particiones o reemplazar un sistema es fundamental respaldar archivos, revisar compatibilidad y contar con autorización sobre el dispositivo.',
    evolution: [['Décadas de 1970–1980','Las instalaciones se realizaban desde cintas o disquetes y requerían configurar muchos componentes manualmente.'],['Décadas de 1990–2000','Los CD y asistentes gráficos simplificaron la copia de archivos y la detección de hardware.'],['Actualidad','Memorias USB, recuperación del fabricante y despliegues en red permiten instalar o restaurar sistemas con asistentes automatizados.']]
  },
  dos: {
    detail: 'Una consola recibe comandos escritos y devuelve texto como respuesta. Las interfaces de DOS se hicieron comunes en los computadores personales de los años ochenta. En la actualidad, la terminal y shells como PowerShell permiten tareas administrativas; conviene entender cada comando y revisar la carpeta antes de cambiar archivos.',
    evolution: [['Décadas de 1960–1970','Teletipos y terminales conectados a grandes sistemas permitían interactuar mediante instrucciones escritas.'],['1981–1990','MS-DOS se distribuyó con muchos computadores personales IBM compatibles y popularizó comandos como DIR y CD.'],['Actualidad','Windows, macOS y Linux ofrecen shells modernos para administración, automatización y desarrollo.']]
  },
  'system-tools': {
    detail: 'Las herramientas del sistema ayudan a observar y mantener el dispositivo: muestran procesos, uso de recursos, almacenamiento, dispositivos y registros de errores. Sirven para diagnosticar problemas cotidianos; cualquier cambio avanzado debe hacerse con cuidado y, si el equipo no es propio, con permiso.',
    evolution: [['Décadas de 1960–1970','Los sistemas multiusuario empezaron a ofrecer utilidades para observar procesos y gestionar recursos compartidos.'],['Décadas de 1980–1990','Los computadores personales incorporaron paneles de control, utilidades de disco y monitores de tareas gráficos.'],['Actualidad','Las herramientas integradas incluyen diagnósticos, administración de almacenamiento y paneles de privacidad y rendimiento.']]
  },
  'programming-languages': {
    detail: 'Un lenguaje de programación define cómo expresar datos, operaciones y algoritmos de manera que una computadora pueda ejecutarlos. Algunos lenguajes se compilan a código máquina; otros se ejecutan mediante intérpretes o máquinas virtuales. La elección depende del problema, el entorno y las herramientas disponibles.',
    evolution: [['Década de 1950','FORTRAN y COBOL acercaron la programación científica y empresarial a notaciones más legibles.'],['Décadas de 1970–1990','C, SQL, Smalltalk, C++ y Python ampliaron los lenguajes de sistemas, datos y aplicaciones.'],['Actualidad','JavaScript domina gran parte de la web; Python, Rust, Java y otros lenguajes atienden áreas distintas y evolucionan con comunidades y estándares.']]
  },
  'application-software': {
    detail: 'El software aplicativo está diseñado para tareas de personas usuarias, como escribir, comunicarse o editar imágenes. El software de desarrollo —editores, compiladores, pruebas y control de versiones— ayuda a construir y mantener aplicaciones. Son categorías por propósito, no por el dispositivo en el que funcionan.',
    evolution: [['Décadas de 1950–1960','El software era específico de cada computadora y se distribuía principalmente junto con sistemas institucionales.'],['Décadas de 1970–1990','El computador personal hizo comunes las hojas de cálculo, procesadores de texto y herramientas de programación.'],['Actualidad','Aplicaciones de escritorio, web y móvil se actualizan por internet y pueden colaborar en tiempo real.']]
  },
  'free-software': {
    detail: 'El software libre protege cuatro libertades: ejecutar el programa, estudiar cómo funciona, modificarlo y compartir copias y versiones modificadas. El acceso al código fuente y la licencia son esenciales. Puede ser gratuito o comercial; “libre” no significa automáticamente “sin precio”.',
    evolution: [['Décadas de 1960–1970','Compartir programas y código entre investigadores era una práctica habitual en varias comunidades informáticas.'],['1983–1985','El proyecto GNU y la Free Software Foundation promovieron explícitamente las libertades del software y licencias que las protegen.'],['Década de 1990–actualidad','Linux y numerosos proyectos colaborativos sostienen sistemas, herramientas web y aplicaciones utilizadas mundialmente.']]
  },
  'network-topologies': {
    detail: 'La topología describe la organización de enlaces y dispositivos en una red. En estrella, los equipos se conectan a un punto central; en bus comparten un medio; en anillo siguen un circuito; en malla existen rutas alternativas. Las redes reales suelen combinar varias estructuras.',
    evolution: [['Décadas de 1960–1970','Las primeras redes de paquetes conectaron centros de investigación mediante enlaces entre nodos.'],['Décadas de 1980–1990','Ethernet y las redes locales en estrella facilitaron conectar computadoras en oficinas y hogares.'],['Actualidad','Wi-Fi, fibra, centros de datos y redes malladas combinan topologías según cobertura, costo y resiliencia.']]
  },
  'osi-model': {
    detail: 'El modelo OSI es una referencia de siete capas para describir la comunicación: física, enlace, red, transporte, sesión, presentación y aplicación. Los protocolos de internet no siempre se corresponden uno a uno con esas capas; el modelo ayuda a separar funciones y localizar problemas.',
    evolution: [['1974','El modelo de capas ayudó a organizar las funciones de comunicación entre sistemas diferentes.'],['1984','La ISO publicó el modelo de referencia OSI con siete capas claramente diferenciadas.'],['Actualidad','Internet utiliza principalmente la familia TCP/IP; OSI sigue siendo una herramienta didáctica para explicar redes y diagnosticar fallos.']]
  },
  'virtual-disks': {
    detail: 'Un disco virtual presenta almacenamiento a un sistema como si fuera una unidad física, aunque sus datos pueden guardarse dentro de un archivo. Se usa con máquinas virtuales, copias y pruebas. Montar una imagen desconocida puede ser riesgoso; utiliza fuentes confiables y realiza respaldos.',
    evolution: [['Décadas de 1960–1970','La virtualización de almacenamiento permitió que varios usuarios compartieran recursos de discos centrales.'],['Décadas de 1990–2000','Las máquinas virtuales empezaron a usar archivos de disco que contienen sistemas completos.'],['Actualidad','Formatos como VDI, VHDX y QCOW2 respaldan laboratorios virtuales, instantáneas y entornos de prueba.']]
  },
  'remote-support': {
    detail: 'La asistencia remota permite que una persona autorizada vea una pantalla o controle un dispositivo para ayudar a resolver un problema. Debe iniciarse con consentimiento, mediante una herramienta legítima y una sesión temporal. No compartas códigos de acceso con llamadas o mensajes inesperados.',
    evolution: [['Décadas de 1960–1980','Los operadores y administradores daban soporte a sistemas mediante terminales conectadas a distancia.'],['Décadas de 1990–2000','Internet y las interfaces gráficas hicieron posible compartir pantallas y controlar equipos con autorización.'],['Actualidad','Las herramientas de soporte permiten sesiones cifradas y temporales; es importante confirmar quién solicita el acceso y revocarlo al terminar.']]
  },
  cybersecurity: {
    detail: 'La seguridad informática protege confidencialidad, integridad y disponibilidad de información y servicios. Se logra con varias capas: actualizaciones, contraseñas únicas, autenticación multifactor, copias de seguridad y atención a los permisos. Ninguna medida por sí sola elimina todos los riesgos.',
    evolution: [['Décadas de 1970–1980','La conexión entre computadoras hizo necesario controlar identidades y accesos además de proteger equipos físicos.'],['Décadas de 1990–2000','La web extendió el comercio y los servicios conectados, impulsando cifrado, antivirus y normas de seguridad.'],['Actualidad','La protección combina MFA, actualizaciones, copias, monitoreo y educación para responder a amenazas cambiantes.']]
  },
  cybercrime: {
    detail: 'Los delitos informáticos incluyen fraudes, suplantación, robo de identidad y acceso no autorizado a datos o sistemas. Las definiciones legales dependen del país. Ante un incidente, prioriza la seguridad de tus cuentas, guarda evidencia y contacta a la plataforma, al banco o a las autoridades competentes.',
    evolution: [['Décadas de 1970–1980','La expansión de redes y sistemas compartidos planteó nuevos problemas de acceso y uso indebido.'],['Décadas de 1990–2000','La popularización de internet amplió los fraudes a distancia y el robo de identidad digital.'],['Actualidad','Las estafas se adaptan a redes sociales, mensajería y pagos digitales; la denuncia y protección de cuentas son respuestas clave.']]
  },
  cybercriminals: {
    detail: 'Los ciberdelincuentes pueden actuar individualmente o en redes y perseguir dinero, datos o acceso. Para reconocer riesgos sin imitarlos, presta atención a mensajes urgentes, remitentes falsos, peticiones de códigos y solicitudes de instalar software de control remoto. Verifica por un canal oficial independiente.',
    evolution: [['Décadas de 1980–1990','Los incidentes pasaron de entornos académicos y especializados a computadoras personales conectadas.'],['Décadas de 2000–2010','El fraude organizado y el robo de credenciales crecieron con el comercio electrónico y las redes sociales.'],['Actualidad','Los engaños se adaptan a nuevos servicios y herramientas; la capacitación y la verificación independiente ayudan a prevenirlos.']]
  },
  malware: {
    detail: 'El malware es software diseñado para realizar acciones no autorizadas, como robar información o interrumpir equipos. Virus, troyanos, spyware y ransomware describen comportamientos distintos. Mantén actualizaciones y copias de seguridad, y evita abrir archivos inesperados o instalar programas de fuentes dudosas.',
    evolution: [['Década de 1970','Los primeros programas autorreplicantes circularon en entornos de investigación; no todos fueron diseñados para causar daño.'],['Décadas de 1980–1990','Los virus para computadoras personales y los troyanos motivaron el desarrollo de herramientas antivirus.'],['Actualidad','El malware puede buscar ganancias mediante robo o extorsión; respaldos aislados y actualizaciones reducen el impacto.']]
  },
  'artificial-intelligence': {
    detail: 'La inteligencia artificial incluye métodos que permiten a los sistemas reconocer patrones, generar contenido o apoyar decisiones. El aprendizaje automático ajusta modelos a partir de datos; sus resultados pueden contener errores o sesgos. Revisa la información importante y evita introducir datos privados en servicios que no conoces.',
    evolution: [['1950–1956','Las preguntas sobre máquinas que razonan dieron lugar a investigaciones formales y al nombre “inteligencia artificial”.'],['Décadas de 1980–2000','Los sistemas expertos y luego el aprendizaje automático aplicaron reglas y datos a problemas concretos.'],['2010–actualidad','Más datos y capacidad de cómputo impulsaron aprendizaje profundo y modelos generativos con usos y limitaciones nuevos.']]
  }
};

const TOPIC_IMAGES = {
  board: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b6/2023_P%C5%82yta_g%C5%82%C3%B3wna_ASRock_A320M-DVS.jpg/960px-2023_P%C5%82yta_g%C5%82%C3%B3wna_ASRock_A320M-DVS.jpg',
    alt: 'Placa madre ASRock A320M-DVS con sus ranuras y conectores visibles',
    author: 'Jacek Halicki',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    source: 'https://commons.wikimedia.org/wiki/File:2023_P%C5%82yta_g%C5%82%C3%B3wna_ASRock_A320M-DVS.jpg'
  },
  processor: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/21/Intel_80186_processor_microphoto_005_%2850622222851%29.jpg/960px-Intel_80186_processor_microphoto_005_%2850622222851%29.jpg',
    alt: 'Microfotografía de las conexiones internas de un procesador Intel 80186',
    author: 'Jan Helebrant',
    license: 'CC BY-SA 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
    source: 'https://commons.wikimedia.org/wiki/File:Intel_80186_processor_microphoto_005_(50622222851).jpg'
  },
  'operating-systems': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/74/COSMIC_Epoch_1.0.0_alpha_with_apps.png/960px-COSMIC_Epoch_1.0.0_alpha_with_apps.png',
    alt: 'Escritorio COSMIC de Linux con varias aplicaciones abiertas',
    author: 'System76',
    license: 'GPLv3',
    licenseUrl: 'https://www.gnu.org/licenses/gpl-3.0.html',
    source: 'https://commons.wikimedia.org/wiki/File:COSMIC_Epoch_1.0.0_alpha_with_apps.png'
  },
  'mobile-os': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/be/Blackview_A60_Smartphone_Android_mobile_phone_and_folio_case.jpg/960px-Blackview_A60_Smartphone_Android_mobile_phone_and_folio_case.jpg',
    alt: 'Teléfono inteligente Blackview con Android',
    author: 'Acabashi',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    source: 'https://commons.wikimedia.org/wiki/File:Blackview_A60_Smartphone_Android_mobile_phone_and_folio_case.jpg'
  },
  dos: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Command_Prompt_Animation_-_Command_example%2C_Time.gif',
    alt: 'Ejemplo animado de un comando en una consola de texto',
    author: 'Onlinecontributorguy',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    source: 'https://commons.wikimedia.org/wiki/File:Command_Prompt_Animation_-_Command_example,_Time.gif'
  },
  'application-software': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/42/Libreoffice_Impress_prezentace.jpg/960px-Libreoffice_Impress_prezentace.jpg',
    alt: 'Presentación abierta en LibreOffice Impress',
    author: 'Lugubelenus',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    source: 'https://commons.wikimedia.org/wiki/File:Libreoffice_Impress_prezentace.jpg'
  },
  'free-software': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e0/Calculate_Linux_Desktop_14.png/960px-Calculate_Linux_Desktop_14.png',
    alt: 'Escritorio de la distribución libre Calculate Linux',
    author: 'Aaaaaadrien',
    license: 'GPL',
    licenseUrl: 'https://www.gnu.org/licenses/gpl.html',
    source: 'https://commons.wikimedia.org/wiki/File:Calculate_Linux_Desktop_14.png'
  },
  'network-topologies': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d2/Internet_map_1024.jpg/960px-Internet_map_1024.jpg',
    alt: 'Mapa visual de conexiones entre nodos de Internet',
    author: 'The Opte Project',
    license: 'CC BY 2.5',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.5/',
    source: 'https://commons.wikimedia.org/wiki/File:Internet_map_1024.jpg'
  },
  'osi-model': {
    src: 'https://upload.wikimedia.org/wikipedia/commons/4/41/OSI-model-Communication.svg',
    alt: 'Diagrama de comunicación entre las capas del modelo OSI',
    author: 'Runtux',
    license: 'Dominio público',
    licenseUrl: 'https://commons.wikimedia.org/wiki/File:OSI-model-Communication.svg',
    source: 'https://commons.wikimedia.org/wiki/File:OSI-model-Communication.svg'
  },
  'virtual-disks': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/86/ST3320620AS.jpg/960px-ST3320620AS.jpg',
    alt: 'Disco duro físico, un medio que puede representarse como almacenamiento virtual',
    author: 'User5515',
    license: 'CC0',
    licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
    source: 'https://commons.wikimedia.org/wiki/File:ST3320620AS.jpg'
  },
  cybersecurity: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Computer_locked.jpg',
    alt: 'Computadora protegida con un candado de seguridad',
    author: 'Juan Pablo Olmo',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0/',
    source: 'https://commons.wikimedia.org/wiki/File:Computer_locked.jpg'
  },
  cybercrime: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Example_bank_phishing_email.svg',
    alt: 'Ejemplo ficticio de un correo fraudulento que suplanta a un banco',
    author: 'Isochrone y Belbury',
    license: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
    source: 'https://commons.wikimedia.org/wiki/File:Example_bank_phishing_email.svg'
  },
  malware: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/da/Brain-virus.jpg/960px-Brain-virus.jpg',
    alt: 'Pantalla de una computadora de 1989 que muestra el virus Brain',
    author: 'Avinash Meetoo',
    license: 'CC BY 2.5',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.5/',
    source: 'https://commons.wikimedia.org/wiki/File:Brain-virus.jpg'
  },
  'artificial-intelligence': {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/27/Artificial_Neural_Network_with_Chip.png/960px-Artificial_Neural_Network_with_Chip.png',
    alt: 'Visualización de una red neuronal artificial junto a un chip',
    author: 'mikemacmarketing y Liam Huang',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0/',
    source: 'https://commons.wikimedia.org/wiki/File:Artificial_Neural_Network_with_Chip.png'
  }
};

const ICONS = {
  board: '<rect x="44" y="46" width="232" height="118" rx="14" fill="#24365e" stroke="#5a97f5" stroke-width="4"/><rect x="126" y="73" width="70" height="56" rx="5" fill="#12142b" stroke="#d9953a" stroke-width="4"/><path d="M56 64h50v18H56zm152 0h48v18h-48zM56 128h50v20H56zm152 0h48v20h-48zM91 46v20m38-20v17m39-17v17m40-17v20m-117 81v19m43-19v19m43-19v19m43-19v19M44 96h81m71 0h80m-150 33v18m44-18v18" fill="none" stroke="#33b8aa" stroke-width="4"/>',
  chip: '<rect x="95" y="48" width="130" height="112" rx="12" fill="#24365e" stroke="#d9953a" stroke-width="5"/><rect x="126" y="76" width="68" height="56" rx="5" fill="#12142b" stroke="#5a97f5" stroke-width="4"/><path d="M115 33v15m30-15v15m30-15v15m30-15v15m-90 112v15m30-15v15m30-15v15m30-15v15M78 68h17m-17 30h17m-17 30h17m130-60h17m-17 30h17m-17 30h17" stroke="#33b8aa" stroke-width="5"/>',
  desktop: '<rect x="58" y="40" width="204" height="119" rx="10" fill="#12142b" stroke="#5a97f5" stroke-width="5"/><path d="M58 67h204" stroke="#5a97f5" stroke-width="4"/><circle cx="76" cy="54" r="4" fill="#d9953a"/><circle cx="91" cy="54" r="4" fill="#33b8aa"/><path d="M84 91h68m-68 20h113m-113 20h83" stroke="#ecebf7" stroke-width="7" stroke-linecap="round" opacity=".8"/><path d="M160 159v20m-45 0h90" stroke="#d9953a" stroke-width="6" stroke-linecap="round"/>',
  phone: '<rect x="113" y="29" width="80" height="150" rx="16" fill="#12142b" stroke="#33b8aa" stroke-width="5"/><rect x="123" y="49" width="60" height="104" rx="5" fill="#24365e"/><circle cx="153" cy="166" r="5" fill="#d9953a"/><rect x="131" y="61" width="44" height="22" rx="4" fill="#5a97f5"/><path d="M132 96h41m-41 13h34m-34 13h39" stroke="#ecebf7" stroke-width="5" stroke-linecap="round"/>',
  install: '<path d="M67 93h66v56H67zM82 76h36v17H82zm18 73v22m-25 0h50" fill="#24365e" stroke="#5a97f5" stroke-width="5" stroke-linejoin="round"/><path d="M165 70a40 40 0 1 1-3 44" fill="none" stroke="#d9953a" stroke-width="10" stroke-linecap="round"/><path d="m151 112 12 9 2-17" fill="#d9953a"/><path d="M221 108h50v43h-50zm10 12h30m-30 12h22" fill="#12142b" stroke="#33b8aa" stroke-width="4"/>',
  terminal: '<rect x="48" y="43" width="224" height="128" rx="12" fill="#12142b" stroke="#33b8aa" stroke-width="5"/><path d="M48 72h224" stroke="#33b8aa" stroke-width="4"/><circle cx="67" cy="58" r="4" fill="#d9953a"/><circle cx="82" cy="58" r="4" fill="#5a97f5"/><path d="m77 96 16 13-16 13m31 1h55m-86 18h42" stroke="#ecebf7" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>',
  tools: '<path d="M83 146a42 42 0 0 1 50-57l-22 22 32 32 22-22a42 42 0 0 1-57 50l-47 47-27-27z" transform="translate(24 -35)" fill="#24365e" stroke="#d9953a" stroke-width="7" stroke-linejoin="round"/><circle cx="218" cy="77" r="23" fill="none" stroke="#5a97f5" stroke-width="7"/><path d="M218 42v-12m0 94v-12m35-35h13m-96 0h13m60-25 9-9m-68 68 9-9m50 0 9 9m-68-68 9 9" stroke="#33b8aa" stroke-width="6"/>',
  code: '<path d="m115 71-45 42 45 42m90-84 45 42-45 42m-30-102-24 120" fill="none" stroke="#5a97f5" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/><rect x="44" y="38" width="232" height="150" rx="16" fill="none" stroke="#33b8aa" stroke-width="4"/>',
  apps: '<rect x="57" y="45" width="83" height="62" rx="9" fill="#24365e" stroke="#5a97f5" stroke-width="4"/><rect x="171" y="45" width="83" height="62" rx="9" fill="#24365e" stroke="#33b8aa" stroke-width="4"/><rect x="57" y="126" width="83" height="48" rx="9" fill="#24365e" stroke="#d9953a" stroke-width="4"/><rect x="171" y="126" width="83" height="48" rx="9" fill="#24365e" stroke="#d0559a" stroke-width="4"/><path d="M78 79h42m72-14h41m-41 14h30m-142 66h42m49 0h41" stroke="#ecebf7" stroke-width="6" stroke-linecap="round"/>',
  freedom: '<path d="M84 156c-15-67 31-111 137-116 1 94-35 142-111 133" fill="#24365e" stroke="#33b8aa" stroke-width="6"/><path d="M91 167 192 74m-79 74 1-42m29 14 29-1m-50 47 43-2" stroke="#d9953a" stroke-width="6" stroke-linecap="round"/>',
  network: '<path d="m83 83 77 30 72-40m-72 40-57 53m57-53 71 52" stroke="#5a97f5" stroke-width="6"/><circle cx="83" cy="83" r="19" fill="#12142b" stroke="#d9953a" stroke-width="6"/><circle cx="160" cy="113" r="22" fill="#12142b" stroke="#33b8aa" stroke-width="6"/><circle cx="232" cy="73" r="19" fill="#12142b" stroke="#5a97f5" stroke-width="6"/><circle cx="103" cy="166" r="19" fill="#12142b" stroke="#d0559a" stroke-width="6"/><circle cx="231" cy="165" r="19" fill="#12142b" stroke="#86b85f" stroke-width="6"/>',
  layers: '<rect x="70" y="35" width="180" height="19" rx="6" fill="#d9953a"/><rect x="79" y="61" width="162" height="19" rx="6" fill="#5a97f5"/><rect x="88" y="87" width="144" height="19" rx="6" fill="#33b8aa"/><rect x="97" y="113" width="126" height="19" rx="6" fill="#d0559a"/><rect x="106" y="139" width="108" height="19" rx="6" fill="#86b85f"/><path d="M123 177h74" stroke="#ecebf7" stroke-width="9" stroke-linecap="round"/>',
  disk: '<ellipse cx="160" cy="61" rx="76" ry="25" fill="#24365e" stroke="#5a97f5" stroke-width="5"/><path d="M84 61v87c0 14 34 25 76 25s76-11 76-25V61" fill="#24365e" stroke="#5a97f5" stroke-width="5"/><path d="M84 103c0 14 34 25 76 25s76-11 76-25M138 70c10 6 35 6 45 0" fill="none" stroke="#33b8aa" stroke-width="5"/>',
  remote: '<rect x="45" y="54" width="90" height="70" rx="9" fill="#12142b" stroke="#5a97f5" stroke-width="5"/><rect x="185" y="54" width="90" height="70" rx="9" fill="#12142b" stroke="#33b8aa" stroke-width="5"/><path d="M90 124v18m-23 0h46m117-18v18m-23 0h46M137 88h47m-13-13 13 13-13 13" fill="none" stroke="#d9953a" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/><circle cx="90" cy="88" r="12" fill="#24365e"/><circle cx="230" cy="88" r="12" fill="#24365e"/>',
  shield: '<path d="M160 30 239 59v48c0 49-31 80-79 102-48-22-79-53-79-102V59z" fill="#24365e" stroke="#33b8aa" stroke-width="6"/><path d="m121 109 26 26 53-57" fill="none" stroke="#d9953a" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/>',
  alert: '<path d="m160 37 112 132H48z" fill="#24365e" stroke="#d9953a" stroke-width="7" stroke-linejoin="round"/><path d="M160 82v42m0 21v3" stroke="#ecebf7" stroke-width="11" stroke-linecap="round"/><circle cx="160" cy="145" r="5" fill="#ecebf7"/>',
  identity: '<circle cx="118" cy="91" r="29" fill="#24365e" stroke="#5a97f5" stroke-width="5"/><path d="M63 169c6-35 25-53 55-53s49 18 55 53" fill="#24365e" stroke="#5a97f5" stroke-width="5"/><rect x="184" y="76" width="62" height="82" rx="9" fill="#12142b" stroke="#d9953a" stroke-width="5"/><circle cx="215" cy="105" r="10" fill="none" stroke="#33b8aa" stroke-width="5"/><path d="M198 137h34m-17-22v22" stroke="#33b8aa" stroke-width="5" stroke-linecap="round"/>',
  bug: '<path d="M160 74a40 40 0 0 0-40 40v35a40 40 0 0 0 80 0v-35a40 40 0 0 0-40-40z" fill="#24365e" stroke="#d0559a" stroke-width="6"/><circle cx="145" cy="106" r="5" fill="#ecebf7"/><circle cx="175" cy="106" r="5" fill="#ecebf7"/><path d="M160 75V52m-42 45-27-17m27 48H82m36 24-27 21m91-78 27-17m-27 45h36m-36 33 27 21" stroke="#d9953a" stroke-width="6" stroke-linecap="round"/><path d="M132 48h56" stroke="#5a97f5" stroke-width="6" stroke-linecap="round"/>',
  ai: '<circle cx="160" cy="111" r="31" fill="#24365e" stroke="#d9953a" stroke-width="5"/><circle cx="76" cy="62" r="15" fill="#24365e" stroke="#5a97f5" stroke-width="5"/><circle cx="245" cy="68" r="15" fill="#24365e" stroke="#33b8aa" stroke-width="5"/><circle cx="79" cy="163" r="15" fill="#24365e" stroke="#d0559a" stroke-width="5"/><circle cx="244" cy="163" r="15" fill="#24365e" stroke="#86b85f" stroke-width="5"/><path d="m90 70 43 26m56 0 43-20m-111 47-40 32m109-32 40 32" stroke="#ecebf7" stroke-width="5"/><circle cx="150" cy="105" r="4" fill="#ecebf7"/><circle cx="170" cy="105" r="4" fill="#ecebf7"/><path d="M150 123q10 10 20 0" fill="none" stroke="#ecebf7" stroke-width="4" stroke-linecap="round"/>'
};

const ERA_ART = {
  hardware: [
    '<path d="M130 42h60v20l-8 12v48a29 29 0 0 1-44 0V74l-8-12z" fill="#24365e" stroke="#d9953a" stroke-width="5"/><path d="M145 48v24m30-24v24m-15 51v24m-19 0h38" stroke="#33b8aa" stroke-width="5" stroke-linecap="round"/><circle cx="160" cy="93" r="9" fill="#d9953a" opacity=".8"/>',
    '<rect x="95" y="52" width="130" height="90" rx="8" fill="#24365e" stroke="#33b8aa" stroke-width="5"/><path d="M116 71h20v42h-20zm36-7h34v18h-34zm0 38h34v18h-34zM106 151h108" fill="none" stroke="#d9953a" stroke-width="5"/><path d="M126 113v22m38-18v18m18-18v18" stroke="#5a97f5" stroke-width="4"/>',
    '<rect x="81" y="45" width="158" height="102" rx="10" fill="#24365e" stroke="#5a97f5" stroke-width="5"/><rect x="137" y="73" width="48" height="45" rx="4" fill="#12142b" stroke="#d9953a" stroke-width="4"/><path d="M98 61h26v12H98zm98 0h24v12h-24zM99 126h34m54 0h33M111 45v-12m29 12v-12m29 12v-12m29 12v-12" fill="none" stroke="#33b8aa" stroke-width="4"/>'
  ],
  systems: [
    '<path d="M88 51h144v92H88z" fill="#d9953a" opacity=".18" stroke="#d9953a" stroke-width="5"/><path d="M105 69h110m-110 18h110m-110 18h110m-110 18h70" stroke="#ecebf7" stroke-width="5" stroke-dasharray="7 7"/>',
    '<rect x="73" y="48" width="174" height="99" rx="8" fill="#12142b" stroke="#33b8aa" stroke-width="5"/><path d="M91 77h48m-48 18 13 10-13 10m26 0h75m-101 18h52" fill="none" stroke="#86b85f" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M124 148v15m-38 0h110" stroke="#d9953a" stroke-width="5"/>',
    '<rect x="66" y="43" width="188" height="108" rx="9" fill="#12142b" stroke="#5a97f5" stroke-width="5"/><path d="M83 68h154" stroke="#33b8aa" stroke-width="4"/><circle cx="91" cy="56" r="4" fill="#d9953a"/><path d="M91 91h93m-93 17h125m-125 17h76" stroke="#ecebf7" stroke-width="6" stroke-linecap="round"/><path d="M148 151v16m-34 0h68" stroke="#d9953a" stroke-width="5"/>'
  ],
  programming: [
    '<path d="M92 48h136v100H92z" fill="#24365e" stroke="#d9953a" stroke-width="5"/><path d="M109 65h19m11 0h19m11 0h19m-79 20h19m11 0h19m11 0h19m-79 20h19m11 0h19m11 0h19m-79 20h19m11 0h19m11 0h19" stroke="#ecebf7" stroke-width="5" stroke-linecap="round"/>',
    '<rect x="75" y="49" width="170" height="98" rx="8" fill="#12142b" stroke="#33b8aa" stroke-width="5"/><path d="M94 75h25m13 0h55m-93 20h47m13 0h69m-104 20h27m13 0h49m-98 17h61" stroke="#86b85f" stroke-width="5" stroke-linecap="round"/><path d="M130 148v15m-35 0h112" stroke="#d9953a" stroke-width="5"/>',
    '<rect x="63" y="43" width="194" height="110" rx="10" fill="#12142b" stroke="#5a97f5" stroke-width="5"/><path d="M63 68h194" stroke="#5a97f5" stroke-width="4"/><circle cx="80" cy="56" r="4" fill="#d9953a"/><path d="m89 88 12 9-12 9m26-18h46m-72 34 12 9-12 9m26-18h75" fill="none" stroke="#33b8aa" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'
  ],
  networks: [
    '<path d="M90 73h140v70H90z" fill="#24365e" stroke="#d9953a" stroke-width="5"/><circle cx="110" cy="95" r="8" fill="#33b8aa"/><circle cx="158" cy="95" r="8" fill="#33b8aa"/><circle cx="207" cy="95" r="8" fill="#33b8aa"/><path d="M118 95h32m17 0h32m-89 27h106" stroke="#ecebf7" stroke-width="4"/><path d="M117 73V55m42 18V55m48 18V55" stroke="#5a97f5" stroke-width="4"/>',
    '<rect x="110" y="64" width="100" height="77" rx="10" fill="#24365e" stroke="#33b8aa" stroke-width="5"/><path d="M127 89h66m-66 16h66m-66 16h42" stroke="#ecebf7" stroke-width="5" stroke-linecap="round"/><circle cx="135" cy="153" r="5" fill="#d9953a"/><circle cx="160" cy="153" r="5" fill="#d9953a"/><circle cx="185" cy="153" r="5" fill="#d9953a"/><path d="m87 83 23 10m100-10 23-10M91 142l19-9m100 9 19 9" stroke="#5a97f5" stroke-width="4"/>',
    '<path d="M160 69c0-25 45-25 45 0 24-4 35 27 16 41 13 23-14 43-33 31-15 19-44 9-44-13-24 0-33-30-14-43 0-9 13-16 30-16z" fill="#24365e" stroke="#5a97f5" stroke-width="5"/><path d="M160 128V96m-27 12 27-12 27 12" fill="none" stroke="#33b8aa" stroke-width="5"/><circle cx="160" cy="93" r="7" fill="#d9953a"/><circle cx="133" cy="110" r="6" fill="#d9953a"/><circle cx="187" cy="110" r="6" fill="#d9953a"/>'
  ],
  security: [
    '<rect x="91" y="84" width="138" height="75" rx="12" fill="#24365e" stroke="#d9953a" stroke-width="5"/><path d="M119 84V68a41 41 0 0 1 82 0v16" fill="none" stroke="#ecebf7" stroke-width="8"/><circle cx="160" cy="116" r="8" fill="#33b8aa"/><path d="M160 124v16" stroke="#33b8aa" stroke-width="6"/>',
    '<rect x="81" y="82" width="158" height="75" rx="12" fill="#24365e" stroke="#5a97f5" stroke-width="5"/><path d="M113 82V66a47 47 0 0 1 94 0v16" fill="none" stroke="#33b8aa" stroke-width="8"/><circle cx="127" cy="118" r="5" fill="#ecebf7"/><circle cx="145" cy="118" r="5" fill="#ecebf7"/><circle cx="163" cy="118" r="5" fill="#ecebf7"/><circle cx="181" cy="118" r="5" fill="#ecebf7"/><path d="M217 54v22m-11-11h22" stroke="#d9953a" stroke-width="5" stroke-linecap="round"/>',
    '<path d="M160 40 223 62v39c0 41-25 67-63 87-38-20-63-46-63-87V62z" fill="#24365e" stroke="#33b8aa" stroke-width="6"/><path d="m129 106 21 21 42-46" fill="none" stroke="#d9953a" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/><circle cx="220" cy="65" r="15" fill="#5a97f5"/><path d="M213 65h14m-7-7v14" stroke="#ecebf7" stroke-width="3"/>'
  ],
  ai: [
    '<circle cx="160" cy="103" r="50" fill="#24365e" stroke="#d9953a" stroke-width="5"/><circle cx="160" cy="103" r="24" fill="none" stroke="#33b8aa" stroke-width="5"/><path d="M160 47V28m-56 34L89 48m-1 55H68m36 40-17 18m73-2v20m56-38 18 18m1-56h20m-39-55 16-18" stroke="#ecebf7" stroke-width="5" stroke-linecap="round"/><path d="m144 108 11 11 22-29" fill="none" stroke="#5a97f5" stroke-width="5"/>',
    '<circle cx="160" cy="104" r="17" fill="#d9953a"/><circle cx="95" cy="65" r="11" fill="#5a97f5"/><circle cx="226" cy="65" r="11" fill="#33b8aa"/><circle cx="93" cy="145" r="11" fill="#d0559a"/><circle cx="227" cy="145" r="11" fill="#86b85f"/><path d="m105 71 41 25m44 0 26-25m-66 50-47 18m68-18 46 18" stroke="#ecebf7" stroke-width="5"/>',
    '<rect x="78" y="48" width="164" height="111" rx="12" fill="#12142b" stroke="#5a97f5" stroke-width="5"/><path d="M78 75h164" stroke="#5a97f5" stroke-width="4"/><circle cx="95" cy="62" r="4" fill="#d9953a"/><path d="M112 96h30m-30 17h95m-95 17h63" stroke="#33b8aa" stroke-width="6" stroke-linecap="round"/><circle cx="208" cy="96" r="7" fill="#d9953a"/><circle cx="176" cy="130" r="7" fill="#d0559a"/>'
  ]
};

function createIllustration(topic, title, description, art, className) {
  return `<svg class="${className}" viewBox="0 0 320 210" role="img" aria-labelledby="${title}" xmlns="http://www.w3.org/2000/svg"><title id="${title}">${description}</title><rect width="320" height="210" fill="#171a35"/><circle cx="267" cy="44" r="46" fill="${topicColor(topic)}" opacity=".13"/>${art}</svg>`;
}

function topicColor(topic) {
  return {hardware:'#5a97f5',systems:'#33b8aa',programming:'#d9953a',networks:'#5a97f5',security:'#d0559a',ai:'#86b85f'}[topic.category];
}

function renderTopicCredit(image) {
  return `Imagen: <a href="${image.source}" target="_blank" rel="noopener noreferrer">${image.author}</a> · <a href="${image.licenseUrl}" target="_blank" rel="noopener noreferrer">${image.license}</a>`;
}

function renderTopicPhoto(topic, className) {
  const image = TOPIC_IMAGES[topic.id];
  if (!image) return null;
  return `<figure class="${className}"><img src="${image.src}" alt="${image.alt}" loading="lazy" decoding="async"></figure>`;
}

function createEvolutionIllustration(topic, stage, index) {
  const stageTitle = stage[0];
  const art = ERA_ART[topic.category][index];
  const id = `evolution-art-${index}`;
  return createIllustration(topic, id, `${topic.title}: ${stageTitle}`, art, 'it-evolution-art');
}

const FILTER_LABELS = {
  hardware: 'Hardware',
  systems: 'Sistemas operativos',
  programming: 'Programación y software',
  networks: 'Redes',
  security: 'Seguridad',
  ai: 'Inteligencia artificial'
};
const topicGrid = document.querySelector('#topic-grid');
const searchInput = document.querySelector('#topic-search');
const resultLabel = document.querySelector('#topic-results');
const emptyMessage = document.querySelector('#topic-empty');
let activeFilter = 'all';

function renderTopics() {
  topicGrid.innerHTML = TOPICS.map((topic, index) => `
    <article class="it-card" data-category="${topic.category}" data-search="${`${topic.title} ${topic.description} ${topic.example} ${topic.area}`.toLocaleLowerCase('es')}">
      <a class="it-card-main" href="tema-informatica.html?tema=${topic.id}" aria-label="Abrir ficha: ${topic.title}">
        ${renderTopicPhoto(topic, 'it-card-photo') || `<svg class="it-art" viewBox="0 0 320 210" role="img" aria-labelledby="art-title-${index} art-desc-${index}" xmlns="http://www.w3.org/2000/svg">
          <title id="art-title-${index}">${topic.title}</title>
          <desc id="art-desc-${index}">Ilustración esquemática de ${topic.title.toLocaleLowerCase('es')}.</desc>
          <rect width="320" height="210" fill="#171a35"/>
          <circle cx="267" cy="44" r="46" fill="${['#5a97f5','#33b8aa','#d9953a','#d0559a','#86b85f'][index % 5]}" opacity=".12"/>
          ${ICONS[topic.visual]}
          <text x="160" y="198" fill="#a4a7c6" font-family="system-ui,sans-serif" font-size="10" letter-spacing="2" text-anchor="middle">${String(index + 1).padStart(2, '0')} / ${String(TOPICS.length).padStart(2, '0')}</text>
        </svg>`}
        <div class="it-card-body">
          <div class="it-card-meta"><span>${topic.area}</span><b>${String(index + 1).padStart(2, '0')}</b></div>
          <h3 class="it-card-title">${topic.title}<span aria-hidden="true">↗</span></h3>
          <p>${topic.description}</p>
          <div class="it-example"><strong>Ejemplo:</strong> ${topic.example}</div>
        </div>
      </a>
      ${TOPIC_IMAGES[topic.id] ? `<p class="it-image-credit">${renderTopicCredit(TOPIC_IMAGES[topic.id])}</p>` : ''}
    </article>`).join('');
  applyFilters();
}

function applyFilters() {
  const query = searchInput.value.trim().toLocaleLowerCase('es');
  let visibleCount = 0;
  topicGrid.querySelectorAll('.it-card').forEach((card) => {
    const matchesFilter = activeFilter === 'all' || card.dataset.category === activeFilter;
    const matchesSearch = !query || card.dataset.search.includes(query);
    card.hidden = !(matchesFilter && matchesSearch);
    if (!card.hidden) visibleCount += 1;
  });
  resultLabel.textContent = `${visibleCount} ${visibleCount === 1 ? 'tema' : 'temas'}${activeFilter !== 'all' ? ` · ${FILTER_LABELS[activeFilter]}` : ''}${query ? ` · búsqueda: “${searchInput.value.trim()}”` : ''}`;
  emptyMessage.hidden = visibleCount > 0;
}

if (topicGrid && searchInput && resultLabel && emptyMessage) {
  document.querySelectorAll('.it-filters button').forEach((button) => {
    button.addEventListener('click', () => {
      activeFilter = button.dataset.filter;
      document.querySelectorAll('.it-filters button').forEach((filterButton) => {
        const selected = filterButton === button;
        filterButton.classList.toggle('is-active', selected);
        filterButton.setAttribute('aria-pressed', String(selected));
      });
      applyFilters();
    });
  });
  searchInput.addEventListener('input', applyFilters);
  renderTopics();
}

const topicDetailRoot = document.querySelector('#topic-detail');

if (topicDetailRoot) {
  const topicId = new URLSearchParams(window.location.search).get('tema');
  const topic = TOPICS.find((item) => item.id === topicId);
  const details = topic && TOPIC_DETAILS[topic.id];

  if (!topic || !details) {
    document.title = 'Tema no encontrado · Guía de informática';
    topicDetailRoot.innerHTML = `
      <section class="it-detail-not-found">
        <p class="it-kicker">Guía de informática</p>
        <h1>Tema no encontrado</h1>
        <p>Elige un tema del temario para abrir su ficha completa.</p>
        <a class="it-detail-back" href="informatica.html#temario">Volver a todos los temas</a>
      </section>`;
  } else {
    const topicIndex = TOPICS.indexOf(topic) + 1;
    const categoryVideos = {
      hardware: 'hardware+placa+base+procesador+explicacion+corta+espa%C3%B1ol',
      systems: 'sistemas+operativos+windows+linux+explicacion+breve+espa%C3%B1ol',
      programming: 'programacion+software+explicacion+corta+espa%C3%B1ol',
      networks: 'redes+informaticas+modelo+OSI+explicacion+corta+espa%C3%B1ol',
      security: 'seguridad+informatica+proteccion+cuentas+explicacion+corta+espa%C3%B1ol',
      ai: 'inteligencia+artificial+como+funciona+explicacion+corta+espa%C3%B1ol'
    };
    const evolution = details.evolution.map((stage, index) => `
      <li class="it-evolution-step">
        <span class="it-evolution-number">${String(index + 1).padStart(2, '0')}</span>
        <figure class="it-evolution-figure">
          ${createEvolutionIllustration(topic, stage, index)}
          <figcaption>Representación visual · ${stage[0]}</figcaption>
        </figure>
        <div class="it-evolution-copy"><h3>${stage[0]}</h3><p>${stage[1]}</p></div>
      </li>`).join('');
    const topicImage = TOPIC_IMAGES[topic.id];
    const detailFigure = topicImage
      ? `<figure class="it-detail-figure it-detail-photo"><img src="${topicImage.src}" alt="${topicImage.alt}" decoding="async"><figcaption>${renderTopicCredit(topicImage)}</figcaption></figure>`
      : `<figure class="it-detail-figure">
        <svg class="it-detail-art" viewBox="0 0 320 210" role="img" aria-labelledby="detail-art-title detail-art-description" xmlns="http://www.w3.org/2000/svg">
          <title id="detail-art-title">${topic.title}</title>
          <desc id="detail-art-description">Ilustración educativa de ${topic.title.toLocaleLowerCase('es')}.</desc>
          <rect width="320" height="210" fill="#171a35"/>
          <circle cx="267" cy="44" r="46" fill="${topicColor}" opacity=".14"/>
          ${ICONS[topic.visual]}
        </svg>
        <figcaption>Ilustración educativa · ${topic.title}</figcaption>
      </figure>`;

    document.title = `${topic.title} · Guía de informática`;
    topicDetailRoot.innerHTML = `
      <a class="it-detail-back" href="informatica.html#temario">← Volver al temario</a>
      <div class="it-detail-heading">
        <div><p class="it-kicker">${topic.area} · tema ${String(topicIndex).padStart(2, '0')}</p><h1>${topic.title}</h1></div>
        <a class="it-detail-index" href="informatica.html#temario">Ver los 19 temas</a>
      </div>
      ${detailFigure}
      <div class="it-detail-summary">
        <section class="it-detail-card"><p class="it-kicker">Descripción</p><p>${details.detail}</p></section>
        <section class="it-detail-card it-detail-example">
          <p class="it-kicker">Ejemplo cotidiano</p>
          <p>${topic.example.replace(/^Ejemplo(?:s)?(?: seguro| de prevención)?:\\s*/i, '')}</p>
          <figure class="it-example-figure">
            ${createIllustration(topic, 'example-art-title', `Ilustración del ejemplo: ${topic.title}`, ICONS[topic.visual], 'it-example-art')}
            <figcaption>Ilustración del tema · ${topic.title}</figcaption>
          </figure>
        </section>
      </div>
      <section class="it-evolution">
        <p class="it-kicker">Del origen a la actualidad</p>
        <h2>Línea de evolución</h2>
        <ol class="it-evolution-list">${evolution}</ol>
      </section>
      <section class="it-detail-video">
        <div><p class="it-kicker">Para seguir aprendiendo</p><h2>Video explicativo</h2><p>Encuentra explicaciones breves en español sobre ${topic.title.toLocaleLowerCase('es')}.</p></div>
        <a href="https://www.youtube.com/results?search_query=${categoryVideos[topic.category]}" target="_blank" rel="noopener noreferrer">Buscar videos cortos ↗</a>
      </section>
      <a class="it-detail-back it-detail-bottom-back" href="informatica.html#temario">← Explorar otro tema</a>`;
  }
}
