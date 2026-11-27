/** Áreas de servicio del grupo Arcansi (complementan la consultoría). */

export type Pregunta = { q: string; a: string };
export type Bloque = {
  id: string;
  titulo: string;
  texto: string;
  items?: string[];
  preguntas?: Pregunta[];
};
export type Ficha = { t: string; d: string };
export type Area = {
  slug: string;
  nombre: string;
  lomo: string;
  seoTitle: string;
  seoDescription: string;
  resumen: string;
  intro: string[];
  bloques: Bloque[];
  fichas?: { titulo: string; texto?: string; items: Ficha[] };
  pasos?: { titulo: string; texto?: string; items: Ficha[] };
  ventajas?: { titulo: string; items: Ficha[] };
  cierre?: string;
  nota?: string;
};

export const AREAS: Area[] = [
  {
    slug: "legal-y-mediacion",
    nombre: "Legal y mediación",
    lomo: "Legal",
    seoTitle: "Pactos de socios, protocolo familiar y mediación para pymes",
    seoDescription:
      "Pactos de socios, protocolos familiares y relevo generacional, y mediación extrajudicial en conflictos civiles y mercantiles. Mediadores colegiados y certificados.",
    resumen:
      "Pactos de socios, protocolos familiares y mediación en conflictos. Para que los desacuerdos no frenen la empresa ni rompan relaciones.",
    intro: [
      "Acompañamos a empresas, socios y familias en la prevención y gestión de conflictos, y en la planificación de decisiones clave para dar continuidad a sus proyectos.",
      "Lo que más daña a una pyme no suele ser el mercado: son las reglas que nunca se escribieron entre las personas que la dirigen.",
    ],
    bloques: [
      {
        id: "pactos-de-socios",
        titulo: "Pactos de socios",
        texto:
          "Acuerdos que recogen cómo se organizará la relación entre las personas socias y cómo se tomarán las decisiones relevantes para la empresa: gestión, entrada o salida de socios y forma de actuar ante desacuerdos.",
        preguntas: [
          {
            q: "¿Cuándo recurrir a ellos?",
            a: "Al crear una sociedad, incorporar a nuevos socios o anticiparse a posibles cambios y desacuerdos. También pueden revisarse cuando cambian las circunstancias de la empresa o de sus socios.",
          },
          {
            q: "¿Qué ventajas ofrecen?",
            a: "Dejan por escrito las reglas acordadas, aclaran funciones y expectativas, y prevén cómo abordar decisiones importantes o situaciones de bloqueo. Así, las partes cuentan con una referencia común si surgen diferencias.",
          },
          {
            q: "¿En qué casos son útiles?",
            a: "Cuando hay varios socios con responsabilidades distintas, se incorpora un inversor o un nuevo socio, se quiere regular la transmisión de participaciones o la salida de un socio, o se busca prevenir conflictos antes de que afecten a la actividad.",
          },
        ],
      },
      {
        id: "protocolo-familiar",
        titulo: "Protocolos familiares y relevo generacional",
        texto:
          "Acuerdos que ordenan la relación entre familia, propiedad y empresa, y planifican la continuidad del negocio familiar con criterios compartidos.",
        preguntas: [
          {
            q: "¿Cuándo recurrir a ellos?",
            a: "Cuando se prevé un relevo generacional, se incorporan familiares a la empresa o se quiere acordar con antelación cómo participarán las distintas generaciones en el negocio.",
          },
          {
            q: "¿Qué ventajas ofrecen?",
            a: "Permiten poner en común expectativas, definir pautas para la participación familiar y preparar la sucesión de forma ordenada. También ayudan a separar los asuntos familiares de las decisiones propias de la empresa.",
          },
          {
            q: "¿En qué casos son útiles?",
            a: "En empresas familiares que preparan la sucesión, tienen varios familiares en la propiedad o en la gestión, quieren fijar criterios para incorporar familiares o necesitan acordar cómo se decidirá y cómo se resolverán los desacuerdos.",
          },
        ],
      },
      {
        id: "mediacion",
        titulo: "Mediación extrajudicial",
        texto:
          "La vía más rápida, práctica y confidencial para resolver conflictos civiles y mercantiles. Un mediador neutral no impone una decisión: ayuda a las partes a alcanzar un acuerdo útil y sostenible. Guiamos todo el proceso con seguridad, confidencialidad y resultados reales.",
        preguntas: [
          {
            q: "¿Cuándo recurrir a la mediación?",
            a: "La normativa española fomenta los medios alternativos de solución de conflictos (MASC) y, en muchos casos, exige acreditar un intento de mediación o conciliación antes de presentar una demanda (salvo urgencias o medidas cautelares). Nos encargamos de documentar y cumplir correctamente este trámite.",
          },
          {
            q: "¿En qué conflictos es útil?",
            a: "Impagos o incumplimientos contractuales, discrepancias entre socios o administradores, problemas de suministro o distribución, servicios profesionales o arrendamientos, y desavenencias mercantiles de cualquier tipo.",
          },
        ],
      },
    ],
    ventajas: {
      titulo: "Por qué mediar antes que pleitear",
      items: [
        { t: "Semanas, no años", d: "Se resuelve mucho antes que en un procedimiento judicial." },
        { t: "Menos coste", d: "Reduce los costes frente a un pleito." },
        { t: "Control del resultado", d: "Decidís las partes, no un juez." },
        { t: "Confidencial", d: "El proceso y el acuerdo quedan entre las partes." },
        { t: "Relaciones a salvo", d: "Preserva relaciones comerciales o personales valiosas." },
        { t: "Reputación protegida", d: "Evita distracciones internas y ruido hacia fuera." },
      ],
    },
    pasos: {
      titulo: "Cómo trabajamos una mediación",
      items: [
        { t: "Sesión informativa", d: "Explicamos el proceso, las reglas y los beneficios de la mediación a todas las partes." },
        { t: "Acuerdo y agenda", d: "Formalizamos el compromiso y fijamos los temas a tratar y el calendario de sesiones." },
        { t: "Sesiones conjuntas y privadas", d: "Alternamos reuniones con todas las partes y entrevistas individuales para construir opciones." },
        { t: "Acta final de acuerdos", d: "Documento con lo acordado, que puede elevarse a escritura pública para darle título ejecutivo." },
      ],
    },
    cierre:
      "Somos mediadores judiciales colegiados y certificados, con amplia experiencia en mediación civil y mercantil. Buscamos acuerdos equilibrados, sostenibles y que de verdad se cumplan.",
    nota: "El contenido es orientativo: cada acuerdo se adapta a las circunstancias de la empresa y se revisa con asesoramiento jurídico.",
  },
  {
    slug: "seguros-y-prevision-social",
    nombre: "Seguros y previsión social",
    lomo: "Seguros",
    seoTitle: "Seguros para empresas y previsión social para pymes",
    seoDescription:
      "Seguros de vida para socios y persona clave, seguros de salud para empleados, retribución flexible, jubilación de directivos y rentabilidad para excedentes de tesorería, de la mano de MAPFRE.",
    resumen:
      "Proteger a la empresa, a los socios y al equipo, de la mano de MAPFRE. Seguros de vida, salud, retribución flexible y previsión para directivos.",
    intro: [
      "Una pyme puede estar perfectamente ordenada y quedar en el aire por un imprevisto: la falta de un socio, de una persona clave o la salida de alguien que costó años formar.",
      "De la mano de MAPFRE, diseñamos soluciones de previsión social empresarial que protegen la continuidad del negocio, ayudan a retener talento y dan un mejor destino a los excedentes de tesorería.",
    ],
    bloques: [
      {
        id: "proteccion-socios",
        titulo: "Protección de socios y sucesión empresarial",
        texto:
          "Seguro de vida colectivo para que, si falta uno de los socios, el resto perciba el capital suficiente para comprar sus participaciones a los herederos. La empresa sigue en manos de quienes la dirigen.",
        items: [
          "La empresa es tomadora; los socios, asegurados",
          "Capital asegurado ligado al valor de las participaciones",
          "Complemento natural de un protocolo familiar o pacto de socios",
        ],
      },
      {
        id: "persona-clave",
        titulo: "Seguro de vida de persona clave",
        texto:
          "Protege a la empresa ante la pérdida de un trabajador clave, socio o administrador, con un capital que equilibre el balance y garantice la continuidad a corto y medio plazo.",
      },
      {
        id: "beneficios-sociales",
        titulo: "Beneficios sociales y convenios",
        texto:
          "Pólizas de vida e invalidez para trabajadores y directivos, y externalización de los compromisos de fallecimiento o invalidez que fijan los convenios colectivos, con actualización automática del convenio.",
      },
      {
        id: "salud",
        titulo: "Seguro de salud para empresas",
        texto:
          "Una herramienta de retención y de negociación salarial: mejora la motivación, reduce el absentismo y da a los empleados asistencia sanitaria de calidad con ventajas fiscales para ambas partes.",
      },
      {
        id: "retribucion-jubilacion",
        titulo: "Retribución flexible, fidelización y jubilación",
        texto:
          "Fórmulas para premiar y retener a trabajadores clave y directivos: seguro de empresas para directivos (salario diferido a la jubilación), seguros colectivos unit linked, incentivos a varios años y planes de retribución flexible.",
      },
      {
        id: "excedentes",
        titulo: "Rentabilidad para excedentes de tesorería",
        texto:
          "Capitales diferidos a plazo con capital garantizado al vencimiento para que el dinero que la empresa no necesita hoy no se quede parado.",
      },
    ],
    fichas: {
      titulo: "Cinco frentes de la previsión social",
      items: [
        { t: "Protección familiar", d: "Socios, persona clave y sucesión." },
        { t: "Fidelizar y retribuir", d: "Incentivos y retribución flexible." },
        { t: "Seguros de salud", d: "Para la empresa y sus empleados." },
        { t: "Jubilación y salidas pactadas", d: "Previsión para directivos." },
        { t: "Inversión", d: "Excedentes de tesorería con garantía." },
      ],
    },
    cierre:
      "Lo planteamos como lo que es: una decisión de dirección. Primero entendemos la empresa y a sus socios; después elegimos el producto que encaja.",
  },
  {
    slug: "externalizacion-de-personal",
    nombre: "Personas: externalización profesional",
    lomo: "Personas",
    seoTitle: "Externalización de personal para pymes",
    seoDescription:
      "Externalización profesional para pymes: atención al cliente, back office, comercial y ventas, soporte IT y operaciones, con coordinación y continuidad durante todo el servicio.",
    resumen:
      "No necesitas otra empresa de selección. Incorporamos y coordinamos los profesionales que te faltan, sin sobredimensionar tu estructura.",
    intro: [
      "No necesitas otra empresa de selección: necesitas una solución que funcione durante toda la prestación del servicio.",
      "El reto es cubrir necesidades profesionales sin sobredimensionar la estructura interna. Nuestra respuesta: externalizar capacidad profesional mediante un servicio adaptado a cada operación. No terminamos cuando encontramos al profesional; nuestro servicio empieza con su incorporación.",
    ],
    bloques: [],
    pasos: {
      titulo: "Qué hacemos",
      texto: "Externalización profesional con alcance, responsabilidades y condiciones acordadas.",
      items: [
        { t: "Definimos la necesidad", d: "Funciones, dedicación, perfil y objetivos del servicio." },
        { t: "Configuramos la solución", d: "Profesionales y modalidad de prestación acordada." },
        { t: "Coordinamos la operación", d: "Interlocución, seguimiento y gestión de novedades." },
        { t: "Damos continuidad", d: "Un servicio recurrente que evoluciona con tus necesidades." },
      ],
    },
    fichas: {
      titulo: "Perfiles y modalidades",
      texto: "Perfiles y alcance sujetos a disponibilidad, evaluación y acuerdo.",
      items: [
        { t: "Atención al cliente", d: "Contact center, soporte y gestión de incidencias." },
        { t: "Back office", d: "Administración, compras y apoyo documental." },
        { t: "Comercial y ventas", d: "SDR, BDR y gestión comercial." },
        { t: "Tecnología", d: "Soporte IT y funciones digitales." },
        { t: "Operaciones", d: "Apoyo operativo y coordinación." },
      ],
    },
    ventajas: {
      titulo: "Qué obtiene tu empresa",
      items: [
        { t: "Capacidad sin sobredimensionar", d: "Funciones profesionales concretas sin ampliar innecesariamente tu estructura." },
        { t: "Costes previsibles", d: "Una cuota mensual definida y un alcance claro facilitan la planificación." },
        { t: "Continuidad operativa", d: "La coordinación y el seguimiento se mantienen durante todo el servicio, no solo al incorporar." },
      ],
    },
    cierre:
      "Diagnóstico, definición, selección, incorporación, prestación y seguimiento. Tu empresa se concentra en su actividad; nosotros coordinamos el servicio acordado.",
  },
  {
    slug: "ciberseguridad",
    nombre: "Ciberseguridad",
    lomo: "Ciber",
    seoTitle: "Ciberseguridad gestionada (SOC) para pymes",
    seoDescription:
      "Centro de operaciones de ciberseguridad (SOC) para pymes: monitorización, detección y respuesta a incidentes, análisis forense, pentesting y soporte a cumplimiento ISO 27001, ENS y NIS2.",
    resumen:
      "Un centro de operaciones de ciberseguridad a tu servicio: vigilancia continua, detección y respuesta. La seguridad como capacidad gestionada, no como gasto de urgencia.",
    intro: [
      "La operación de una empresa hoy combina equipos, nube, proveedores y personas que trabajan desde cualquier sitio. Eso amplía la superficie de ataque y la complejidad.",
      "La ciberseguridad efectiva exige capacidad permanente, no acciones puntuales. Por eso ofrecemos un Centro Extendido de Operaciones de Ciberseguridad (SOC): plataforma, automatización y analistas que vigilan tu empresa de forma continua.",
    ],
    bloques: [],
    pasos: {
      titulo: "Qué hace un SOC por tu empresa",
      items: [
        { t: "Monitorización", d: "Vigilancia continua de sistemas y redes." },
        { t: "Detección", d: "De amenazas y desviaciones operativas." },
        { t: "Respuesta", d: "Ante incidentes de seguridad, coordinada y trazable." },
        { t: "Mantenimiento", d: "Control de la exposición al riesgo en el tiempo." },
      ],
    },
    fichas: {
      titulo: "Qué cubrimos",
      items: [
        { t: "Equipos y servidores", d: "Endpoints y servidores de la empresa." },
        { t: "Redes y firewalls", d: "El perímetro y el tráfico interno." },
        { t: "Identidades", d: "Cuentas y accesos (AD / Azure AD)." },
        { t: "Nube y SaaS", d: "Infraestructura cloud y aplicaciones en la nube." },
        { t: "Aplicaciones críticas", d: "Las herramientas de las que depende el negocio." },
        { t: "Exposición externa", d: "Lo que tu empresa enseña a internet." },
        { t: "Vulnerabilidades", d: "Fallos de configuración y parches pendientes." },
        { t: "Fugas de información", d: "Filtraciones de datos y credenciales." },
      ],
    },
    ventajas: {
      titulo: "Qué se gana",
      items: [
        { t: "Técnico", d: "Detección temprana, menor impacto de los incidentes y control continuo." },
        { t: "Operativo", d: "Respuesta coordinada, menos dependencia de personas concretas y trazabilidad." },
        { t: "Económico", d: "Menos incidentes graves y un coste previsible: seguridad gestionada, no coste reactivo." },
      ],
    },
    cierre:
      "Catálogo de servicios: monitorización y detección, respuesta a incidentes, análisis forense, threat hunting, inteligencia de amenazas, ingeniería de ciberseguridad continua, pentesting programado e informes técnicos y para dirección. Con soporte a cumplimiento de ISO 27001, ENS y NIS2.",
  },
  {
    slug: "ia-software-y-digital",
    nombre: "IA, software y presencia digital",
    lomo: "Digital",
    seoTitle: "IA, software a medida, web y marca para pymes",
    seoDescription:
      "Formación en IA para equipos, software a medida, web corporativa, tienda online, estudio de marca y gestión de redes sociales para pymes de toda España.",
    resumen:
      "Formación en IA, software a medida, web, tienda online, marca y redes. La tecnología y la imagen que ejecutan lo que la consultoría ha decidido.",
    intro: [
      "La consultoría ordena tu empresa; la tecnología hace que ese orden se mantenga sin esfuerzo. Y la imagen hace que se note hacia fuera.",
      "No vendemos tecnología por vender. Cada proyecto parte de cómo trabaja tu empresa de verdad.",
    ],
    bloques: [
      {
        id: "formacion-ia",
        titulo: "Formación en IA para empresas",
        texto:
          "Que cada puesto de tu equipo use la inteligencia artificial en su trabajo real. No es un curso estándar: lo preparamos a medida después de conocer cada puesto, en dirección, administración, ventas, marketing u operaciones.",
        items: [
          "Visita para conocer cada puesto",
          "Formación a medida, presencial o en remoto",
          "Instrucciones y asistentes reutilizables",
          "Revisión a los 15-30 días",
        ],
      },
      {
        id: "software-a-medida",
        titulo: "Software a medida",
        texto:
          "Estudiamos tu empresa y desarrollamos una aplicación adaptada a tus procesos: facturas, inventario, costes, márgenes o pedidos en un solo sitio.",
        items: [
          "Estudio de tus procesos",
          "Primera versión de alcance definido",
          "Datos preparados y migrados",
          "Equipo formado para usarla",
        ],
      },
      {
        id: "web-corporativa",
        titulo: "Web corporativa",
        texto:
          "Una web clara y rápida que explique bien lo que haces y esté preparada para recibir consultas de clientes.",
        items: ["Hasta cinco páginas", "Diseño propio y textos claros", "Preparada para recibir consultas"],
      },
      {
        id: "tienda-online",
        titulo: "Tienda online",
        texto: "Diseño, catálogo y compra online para vender tus productos por internet sin complicaciones.",
        items: ["Diseño de la tienda", "Catálogo de productos", "Proceso de compra online"],
      },
      {
        id: "marca",
        titulo: "Estudio de marca y rebranding",
        texto:
          "Estudiamos y renovamos la identidad de tu empresa para que se presente como lo que es: un negocio profesional.",
        items: ["Estudio de la marca actual", "Dirección creativa", "Dos rondas de cambios"],
      },
      {
        id: "redes-sociales",
        titulo: "Redes sociales",
        texto:
          "Planificamos el mes, diseñamos y escribimos cada publicación y la programamos. Tú revisas y apruebas antes de que salga.",
        items: ["Nueve publicaciones al mes", "Diseño, textos y programación", "Instagram y Facebook"],
      },
    ],
  },
];
