export const SITE = {
  name: "Arcansi",
  url: "https://arcansi.com",
  email: "consultoria@arcansi.com",
  tagline: "Consultoría empresarial pragmática para pymes",
  description:
    "Consultoría empresarial para pymes de toda España. Ordenamos estructura, finanzas, procesos, compras y ventas para que tu empresa no dependa todo de ti.",
  builder: { name: "liriacrea.com", url: "https://liriacrea.com" },
};

export const NAV = [
  { href: "/situaciones/", label: "Situaciones" },
  { href: "/servicios/", label: "Servicios" },
  { href: "/metodologia/", label: "Metodología" },
  { href: "/sobre-arcansi/", label: "Sobre Arcansi" },
];

export type Situacion = {
  id: string;
  titulo: string;
  puntos: string[];
  respuesta: string;
  servicios: string[];
};

export const SITUACIONES: Situacion[] = [
  {
    id: "negocio-te-ha-devorado",
    titulo: "El negocio te ha devorado",
    puntos: [
      "Has crecido, y mucho, pero a costa de tu tiempo y tu salud.",
      "Si faltas tres días, todo se para.",
      "Trabajas más horas que cualquiera de tus empleados.",
    ],
    respuesta:
      "Definimos quién hace qué, documentamos lo que hoy solo está en tu cabeza y montamos una delegación que funcione sin que tengas que vigilarla.",
    servicios: ["organizacion-empresarial", "gestion-y-direccion"],
  },
  {
    id: "facturacion-sin-beneficio",
    titulo: "Facturación sin beneficio",
    puntos: [
      "Facturas mucho, pero no ves que ganes algo.",
      "No hay control de tesorería ni presupuesto.",
      "Navegas a ciegas sin ver el fruto de tanto esfuerzo.",
    ],
    respuesta:
      "Ponemos números donde hoy hay intuición: margen real por producto o servicio, previsión de tesorería y un cuadro de mando mensual que entiendas.",
    servicios: ["control-financiero", "estrategia-comercial"],
  },
  {
    id: "el-equipo-no-responde",
    titulo: "El equipo no responde",
    puntos: [
      "Poca implicación, parece que nadie tiene sentido común.",
      "Todos los problemas acaban inevitablemente en tu mesa.",
      "No hay procedimientos claros ni roles bien definidos.",
    ],
    respuesta:
      "Antes de culpar a las personas revisamos el sistema: puestos definidos, procedimientos escritos y reuniones cortas que reparten responsabilidad.",
    servicios: ["organizacion-empresarial", "gestion-y-direccion"],
  },
  {
    id: "familia-socios-y-negocio",
    titulo: "Familia, amistad y negocios mezclados",
    puntos: [
      "Un socio trabaja doble, otro hace poco.",
      "Gastos personales se mezclan con empresa.",
      "Conflictos personales invaden decisiones empresariales.",
    ],
    respuesta:
      "Aportamos la mirada externa que nadie de dentro puede dar: separamos lo personal de lo empresarial, ordenamos funciones y cuentas, y, si hace falta, sumamos asesoría legal y societaria.",
    servicios: ["gestion-y-direccion", "control-financiero"],
  },
  {
    id: "techo-de-cristal",
    titulo: "Techo de cristal",
    puntos: [
      "Eres muy bueno en tu oficio, pero gestionar tu empresa te supera.",
      "Solo hay tiempo para «apagar fuegos», no para plantear una estrategia.",
      "A veces te arrepientes de haber contratado personal.",
    ],
    respuesta:
      "Te acompañamos para pasar de oficio a dirección: planificación anual, indicadores sencillos y decisiones con criterio económico.",
    servicios: ["gestion-y-direccion", "organizacion-empresarial"],
  },
  {
    id: "procesos-lentos",
    titulo: "Procesos lentos y comunicación ineficiente",
    puntos: [
      "Las tareas simples se hacen con demasiados pasos inútiles.",
      "La comunicación interna es confusa y deficiente.",
      "No hay automatización básica en procesos.",
    ],
    respuesta:
      "Analizamos dónde se atasca el trabajo, eliminamos pasos que no aportan y automatizamos lo básico, apoyándonos en colaboradores de IA cuando tiene sentido.",
    servicios: ["procesos-de-produccion", "logistica-y-compras"],
  },
];

export type Servicio = {
  slug: string;
  nombre: string;
  lomo: string;
  seoTitle: string;
  seoDescription: string;
  resumen: string;
  intro: string[];
  checks: string[];
  senales: string[];
};

export const SERVICIOS: Servicio[] = [
  {
    slug: "organizacion-empresarial",
    nombre: "Organización y estructura",
    lomo: "Organización",
    seoTitle: "Organización empresarial para pymes",
    seoDescription:
      "Organigramas y fichas de puesto reales para pymes. Definimos quién hace qué y montamos una delegación efectiva para que la empresa no dependa de ti.",
    resumen:
      "Organigramas y fichas de puesto reales. Quién hace qué, cómo y cuándo, para que no tengas que recordarlo todo cada día.",
    intro: [
      "En muchas pymes la estructura es la memoria del dueño. Funciona mientras estás encima; en cuanto faltas, se para.",
      "Ponemos por escrito lo que hoy depende de ti: puestos con funciones claras, procesos clave documentados y una forma de delegar que no te obligue a revisarlo todo.",
    ],
    checks: [
      "Definición estricta de puestos y funciones",
      "Documentación de procesos clave",
      "Protocolos de delegación efectiva",
    ],
    senales: [
      "Si faltas tres días, todo se para.",
      "Todos los problemas acaban en tu mesa.",
      "Nadie sabe exactamente qué le toca a quién.",
    ],
  },
  {
    slug: "control-financiero",
    nombre: "Control financiero",
    lomo: "Finanzas",
    seoTitle: "Control financiero para pymes",
    seoDescription:
      "Cuadro de mando financiero que entiendas, control de márgenes reales por producto o servicio y previsiones de tesorería para pymes de toda España.",
    resumen:
      "Un cuadro de mando que entiendas. Control de márgenes reales y previsiones de liquidez para dormir tranquilo.",
    intro: [
      "Facturar mucho y no ver el beneficio es una de las situaciones más frecuentes en una pyme. Casi siempre falta lo mismo: saber qué deja cada cosa que vendes y cuándo va a entrar y salir el dinero.",
      "Implantamos un control financiero a tu medida, sencillo de mantener, para que tomes decisiones con números y no a ciegas.",
    ],
    checks: [
      "Cuadro de mando financiero mensual",
      "Control de márgenes por producto/servicio",
      "Previsiones reales de tesorería",
    ],
    senales: [
      "Facturas mucho, pero no ves que ganes algo.",
      "No hay presupuesto ni control de tesorería.",
      "Te enteras de cómo fue el año cuando cierra el gestor.",
    ],
  },
  {
    slug: "gestion-y-direccion",
    nombre: "Gestión y dirección",
    lomo: "Dirección",
    seoTitle: "Dirección estratégica y KPIs para pymes",
    seoDescription:
      "Planificación estratégica anual, reuniones ejecutivas cortas y útiles e indicadores de gestión (KPIs) para que dirijas tu pyme con criterio económico.",
    resumen:
      "Reuniones ejecutivas cortas y útiles, planificación basada en datos y decisiones con criterio económico.",
    intro: [
      "Cuando todo el tiempo se va en apagar fuegos, nadie dirige la empresa: la empresa te dirige a ti.",
      "Instauramos los hábitos de dirección que una pyme necesita: un plan anual realista, pocas reuniones pero buenas, e indicadores que te digan a tiempo si vas bien.",
    ],
    checks: [
      "Planificación estratégica anual",
      "Implementación de reuniones ejecutivas",
      "Indicadores de gestión (KPIs)",
    ],
    senales: [
      "Solo hay tiempo para apagar fuegos.",
      "Las reuniones son largas y no deciden nada.",
      "No sabes si este año va mejor o peor hasta que acaba.",
    ],
  },
  {
    slug: "procesos-de-produccion",
    nombre: "Procesos de producción",
    lomo: "Producción",
    seoTitle: "Mejora de procesos de producción en pymes",
    seoDescription:
      "Análisis de cuellos de botella, estandarización de la calidad y optimización de tiempos de entrega para que el margen no se escape en la fábrica o el taller.",
    resumen:
      "Estandarización de la calidad y eliminación de mermas. Que el margen no se escape en la fábrica o el taller.",
    intro: [
      "El margen que se gana vendiendo se puede perder en el taller: tiempos muertos, retrabajos, mermas y entregas que se retrasan.",
      "Recorremos tus procesos contigo, localizamos dónde se atasca el trabajo y fijamos estándares sencillos que el equipo pueda mantener.",
    ],
    checks: [
      "Análisis de cuellos de botella",
      "Estandarización de la calidad",
      "Optimización de tiempos de entrega",
    ],
    senales: [
      "Las tareas simples llevan demasiados pasos.",
      "La calidad depende de quién haga el trabajo.",
      "Los plazos de entrega se incumplen a menudo.",
    ],
  },
  {
    slug: "logistica-y-compras",
    nombre: "Logística y compras",
    lomo: "Compras",
    seoTitle: "Gestión de compras y stock para pymes",
    seoDescription:
      "Negociación y gestión de proveedores, optimización del nivel de stock y análisis de la cadena de suministro para pymes. Sin dinero parado en el almacén.",
    resumen:
      "Gestión dura de proveedores y rotación de stock. Que no pare la producción sin inmovilizar dinero en el almacén.",
    intro: [
      "Un almacén lleno de cosas que no rotan es dinero parado; uno vacío para la producción. Las dos cosas pasan a la vez en muchas pymes.",
      "Ordenamos la relación con proveedores y ajustamos el stock a lo que de verdad necesitas para trabajar sin sobresaltos.",
    ],
    checks: [
      "Negociación y gestión de proveedores",
      "Optimización del nivel de stock",
      "Análisis de la cadena de suministro",
    ],
    senales: [
      "Tienes material que no rota y a la vez te falta lo urgente.",
      "Compras por costumbre, sin comparar.",
      "Un retraso de un proveedor para toda la producción.",
    ],
  },
  {
    slug: "estrategia-comercial",
    nombre: "Estrategia comercial",
    lomo: "Comercial",
    seoTitle: "Estrategia comercial y precios para pymes",
    seoDescription:
      "Política de precios y descuentos, sistematización de ventas y fidelización de cuentas clave. Menos humo y más margen para tu pyme.",
    resumen:
      "Menos humo y más márgenes. Precios claros, propuesta de valor realista y clientes clave sin regalar el trabajo.",
    intro: [
      "Vender más no sirve si cada venta deja menos. Muchas pymes fijan precios por miedo a perder al cliente y acaban trabajando casi gratis.",
      "Definimos una política de precios y descuentos con criterio, sistematizamos cómo se vende y cuidamos a los clientes que sostienen el negocio.",
    ],
    checks: [
      "Política de precios y descuentos",
      "Sistematización de ventas",
      "Fidelización de cuentas clave",
    ],
    senales: [
      "Haces descuentos para no perder clientes.",
      "Las ventas dependen de una o dos personas.",
      "Unos pocos clientes concentran casi todo.",
    ],
  },
];

export const COLABORADORES = [
  "Asesoría legal y societaria",
  "Seguros",
  "Marketing digital",
  "Aplicaciones de IA",
  "Ciberseguridad",
];

export type Estacion = { titulo: string; sello: string; texto: string };

export const ANALISIS: Estacion[] = [
  {
    titulo: "Escuchamos",
    sello: "Escuchado",
    texto:
      "Hablamos contigo, con tu equipo, visitamos tu negocio. Necesitamos entender tu situación real, no la versión ideal.",
  },
  {
    titulo: "Estudiamos",
    sello: "Estudiado",
    texto:
      "Analizamos qué funciona, qué no y por qué. Te decimos lo que vemos con sinceridad, aunque no sea lo que quieras oír. Siempre de forma constructiva.",
  },
  {
    titulo: "Diagnóstico",
    sello: "Diagnosticado",
    texto:
      "Te entregamos un documento de análisis completo que muestra la situación objetiva en la que se encuentra tu empresa.",
  },
  {
    titulo: "Propuesta",
    sello: "Propuesto",
    texto:
      "Si consideramos que podemos ayudarte, te presentamos una propuesta de consultoría para cambiar, corregir o mejorar lo que mostró el diagnóstico.",
  },
];

export const CONSULTORIA: Estacion[] = [
  {
    titulo: "Actuamos",
    sello: "En marcha",
    texto:
      "Un plan de acción concreto: qué hacer, quién lo hace, cuándo estará listo. Trabajamos contigo en tu negocio y desde nuestro despacho.",
  },
  {
    titulo: "Te formamos",
    sello: "Formado",
    texto:
      "Nuestro compromiso es que dejes de necesitarnos. Te dejamos las herramientas, los procesos y el conocimiento para que tu equipo y tú sigáis solos.",
  },
  {
    titulo: "Y, si quieres, seguimos",
    sello: "Seguimiento",
    texto:
      "La colaboración termina cuando tú decidas. Si lo pides, hacemos un seguimiento para consolidar el cambio.",
  },
];

export const PRINCIPIOS = ["Claro", "Constructivo", "Pragmático", "Orientado a resultados"];

export const VALORES = [
  "Sinceridad ante todo",
  "Soluciones prácticas, no teóricas",
  "Siempre constructivos",
  "El objetivo es que no nos necesites",
];
