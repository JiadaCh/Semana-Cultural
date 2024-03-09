export interface Empresa {

  id: number;
  nombre: string;
  descripcion: string;
  imagen: string;
  web: string;
  direccion: string;
  anoFundacion: number;
  ultimaActualizacion: string;

  latitud: number;
  longitud: number;
}


export const empresasLoad = [
  {
    id: 1,
    nombre: 'Indra',
    descripcion: "Indra es una de las principales compañías globales de tecnología y consultoría y el socio tecnológico para las operaciones clave de los negocios de sus clientes en todo el mundo. ",
    imagen: 'https://www.indracompany.com/sites/all/themes/custom/indracompany_bs/logo.png',
    web: "https://www.indracompany.com/es",
    direccion: "Calle San Rafael 4, 29008, Málaga",
    anoFundacion: 1922,
    ultimaActualizacion: "08-03-202-13:45:20",
    latitud: 36.72338,
    longitud: -4.425217

  }, {
    id: 2,
    nombre: 'Accenture',
    descripcion: "Accenture Limited es una empresa multinacional de consultoría estratégica, servicios tecnológicos y externalización.",
    imagen: '../assets/imagen/Acentur.png',
    web: "https://www.accenture.com/es-es",
    direccion: "Parque Tecnológico de Andalucía - Edificio I+D6, Severo Ochoa 21, Edificio I+D 6, 29590, Campanillas (Malaga)",
    anoFundacion: 1989,
    ultimaActualizacion: "08-03-202-13:45:20",
    latitud: 36.73488,
    longitud: -4.557127
  }, {
    id: 3,
    nombre: 'Oracle',
    descripcion: "Oracle Corporation es una compañía especializada en el desarrollo de soluciones de nube y locales.",
    imagen: '../assets/imagen/Oracle.png',
    web: "https://www.oracle.com",
    direccion: "Calle Severo Ochoa 55, 29590, Málaga",
    anoFundacion: 1977,
    ultimaActualizacion: "08-03-202-13:45:20",
    latitud: 36.73855,
    longitud: -4.553434
  }, {
    id: 4,
    nombre: 'IBM',
    descripcion: "",
    imagen: '../assets/imagen/IBM.png',
    web: "https://www.ibm.com/es-es",
    direccion: "CALLE DON CRISTIAN 2, 29007, Málaga",
    anoFundacion: 1989,
    ultimaActualizacion: "08-03-202-13:45:20",
    latitud: 36.719274,
    longitud: -4.429985
  }, {
    id: 5,
    nombre: 'NTT DATA',
    descripcion: "NTT DATA Corporation es una compañía japonesa de comunicaciones especializada en la integración de sistemas.",
    imagen: '../assets/imagen/NTT.png',
    web: "https://es.nttdata.com/",
    direccion: "CALLE PUERTA DEL MAR, 29005, Malaga (Málaga)",
    anoFundacion: 1988,
    ultimaActualizacion: "08-03-202-13:45:20",
    latitud: 36.718149,
    longitud: -4.422757
  },{
    id: 6,
    nombre: 'Dulaan',
    descripcion: "",
    imagen: 'https://portal.dulann.com/images/dulann/DULANN.png',
    web: "https://www.dulann.com/es",
    direccion: "Calle Fiscal Luis Portero García 3, 29010 Málaga",
    anoFundacion: 2004,
    ultimaActualizacion: "08-03-202-13:45:20",
    latitud: 36.717592,
    longitud: -4.460599
  },{
    id: 7,
    nombre: 'T-Systems Iberia',
    descripcion: "T-Systems Iberia es una empresa de servicios de tecnologías de la información y comunicación (TIC) con sede en Málaga. Proporciona soluciones de tecnología de la información para empresas y organizaciones",
    imagen: 'https://www.t-systems.com/resource/crblob/4136/bd88591b7daf9da413c65e4e207decbf/logo-t-systems-white.svg-data.svg',
    web: "https://www.t-systems.com",
    direccion: "Calle Convento 0, 29120, Alhaurín El Grande (Málaga)",
    anoFundacion: 1995,
    ultimaActualizacion: "08-03-202-13:45:20",
    latitud: 36.642079,
    longitud: -4.691237
  },{
    id: 8,
    nombre: 'CGI',
    descripcion: "Se trata de una de las firmas de servicios de consultoría de TI y negocios más grandes del mundo.",
    imagen: '../assets/imagen/CGI.png',
    web: "https://www.cgi.com/en",
    direccion: "CALLE BULEVAR LOUIS PASTEUR 47, 29010, Malaga",
    anoFundacion: 1976,
    ultimaActualizacion: "08-03-202-13:45:20",
    latitud: 36.71888,
    longitud: -4.497097
  },
];
