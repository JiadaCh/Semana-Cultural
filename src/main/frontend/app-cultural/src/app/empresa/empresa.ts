export interface Empresa {

  id: number;
  nombre: string;
  descripcion: string;
  imagen: string;
  web: string;
  direccion: string;
  anoFundacion: number;
  ultimaActualizacion: string;
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
    ultimaActualizacion: "08-03-202-13:45:20"
  }, {
    id: 2,
    nombre: 'Accenture',
    descripcion: "Accenture Limited es una empresa multinacional de consultoría estratégica, servicios tecnológicos y externalización.",
    imagen: '../assets/imagen/Acentur.png',
    web: "https://www.accenture.com/es-es",
    direccion: "Parque Tecnológico de Andalucía - Edificio I+D6, Severo Ochoa 21, Edificio I+D 6, 29590, Campanillas (Malaga)",
    anoFundacion: 1989,
    ultimaActualizacion: "08-03-202-13:45:20"
  }, {
    id: 3,
    nombre: 'Oracle',
    descripcion: "Oracle Corporation es una compañía especializada en el desarrollo de soluciones de nube y locales.",
    imagen: '../assets/imagen/Oracle.png',
    web: "https://www.oracle.com",
    direccion: "Calle Severo Ochoa 55, 29590, Málaga",
    anoFundacion: 1977,
    ultimaActualizacion: "08-03-202-13:45:20"
  }, {
    id: 4,
    nombre: 'IBM',
    descripcion: "",
    imagen: '../assets/imagen/IBM.png',
    web: "https://www.ibm.com/es-es",
    direccion: "CALLE DON CRISTIAN 2, 29007, Málaga",
    anoFundacion: 1989,
    ultimaActualizacion: "08-03-202-13:45:20"
  },
];
