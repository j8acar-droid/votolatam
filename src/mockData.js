const images = [
  'https://picsum.photos/seed/p1/600/600',
  'https://picsum.photos/seed/p2/600/600',
  'https://picsum.photos/seed/p3/600/600',
  'https://picsum.photos/seed/p4/600/600',
  'https://picsum.photos/seed/p5/600/600'
]

const DATA = {
  pe: [
    { id:'pe_1', nombre:'María Aguirre', partido:'Partido del Futuro', cargo:'Alcaldesa - Distrito X', photo: images[0], summary:'Abogada y activista comunitaria con 10 años de trabajo local.', education:[{grado:'LLB', institucion:'Universidad Nacional', ano_fin:2008}], experience:[{entidad:'Municipalidad', cargo:'Regidora', inicio:'2015', fin:'2018'}], source_url:'https://jne.gob.pe/' },
    { id:'pe_2', nombre:'Carlos Mejía', partido:'Movimiento Progreso', cargo:'Congresista', photo: images[1], summary:'Economista y emprendedor, ex-director de ONG.', education:[{grado:'MA', institucion:'Universidad de Lima', ano_fin:2012}], experience:[], source_url:'https://infogob.pe/' }
  ],
  mx: [
    { id:'mx_1', nombre:'Ana López', partido:'Unidos por México', cargo:'Gobernadora', photo: images[2], summary:'Gestora pública enfocada en salud y educación.', education:[], experience:[], source_url:'https://ine.mx/' }
  ],
  co: [
    { id:'co_1', nombre:'Andrés Gómez', partido:'Cambio Ciudadano', cargo:'Alcalde', photo: images[3], summary:'Ingeniero y gestor social.', education:[], experience:[], source_url:'https://registraduria.gov.co/' }
  ],
  es: [
    { id:'es_1', nombre:'Lucía Martínez', partido:'Partido Verde', cargo:'Diputada', photo: images[4], summary:'Periodista y activista.', education:[], experience:[], source_url:'https://www.interior.gob.es/' }
  ],
  us: [
    { id:'us_1', nombre:'John Smith', partido:'Independent', cargo:'Mayor', photo: images[0], summary:'Community leader with focus on urban renewal.', education:[], experience:[], source_url:'https://fec.gov/' }
  ],
  br: [
    { id:'br_1', nombre:'Mariana Silva', partido:'Partido Verde', cargo:'Deputada', photo: images[1], summary:'Activista ambiental.', education:[], experience:[], source_url:'https://tse.jus.br/' }
  ]
}

export default {
  getCandidates(country){ return DATA[country] || []; },
  getById(id){ return Object.values(DATA).flat().find(x=>x.id===id) || null; }
}
