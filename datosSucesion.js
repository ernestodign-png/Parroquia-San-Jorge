// datosSucesion.js
// Base de datos de la Sucesión Apostólica de Antioquía

const datosSucesion = [
    // I. FUNDACIÓN
    { id: 1, nombre: "San Pedro Apóstol", periodo: "c. 45 – c. 53", seccion: "fundacion", descripcion: "Fundador y Primer Obispo. Unificador de judeocristianos y gentiles. Resolvió las tensiones descritas en Gálatas.", destacado: true },
    { id: 2, nombre: "San Evodio", periodo: "c. 53 – c. 68", seccion: "fundacion", descripcion: "Primer Sucesor. Bajo su episcopado se oficializó el término 'Cristianos' (Hechos 11:26).", destacado: true },
    { id: 3, nombre: "San Ignacio I (El Teóforo)", periodo: "c. 68 – 107", seccion: "fundacion", descripcion: "Padre Apostólico y Mártir. Articuló la eclesiología monárquica: 'Donde está el obispo, allí está la Iglesia'. Devorado por fieras en Roma.", destacado: true },
    { id: 4, nombre: "San Herón", periodo: "107 – 127", seccion: "fundacion", descripcion: "Discípulo de Ignacio.", destacado: true },
    { id: 5, nombre: "San Cornelio", periodo: "127 – 154", seccion: "fundacion", descripcion: "Preservó la sucesión bajo Antonino Pío.", destacado: true },
    { id: 6, nombre: "San Heros II", periodo: "154 – 169", seccion: "fundacion", descripcion: "", destacado: true },
    { id: 7, nombre: "San Teófilo", periodo: "169 – 182", seccion: "fundacion", descripcion: "Apologista Mayor. Primero en usar el término teológico 'Trinidad' (Trias).", destacado: true },
    { id: 8, nombre: "San Máximo I", periodo: "182 – 191", seccion: "fundacion", descripcion: "", destacado: true },
    { id: 9, nombre: "San Serapión", periodo: "191 – 211", seccion: "fundacion", descripcion: "Rechazó el Evangelio de Pedro por docetista.", destacado: true },
    
    // II. SIGLO III
    { id: 10, nombre: "San Asclepíades", periodo: "211 – 220", seccion: "siglo3", descripcion: "El Confesor. Sobrevivió torturas sin apostatar.", destacado: true },
    { id: 11, nombre: "Fileto", periodo: "220 – 231", seccion: "siglo3", descripcion: "", destacado: false },
    { id: 12, nombre: "Zebinos", periodo: "231 – 237", seccion: "siglo3", descripcion: "", destacado: false },
    { id: 13, nombre: "San Babilas Mártir", periodo: "237 – 253", seccion: "siglo3", descripcion: "Negó la entrada al emperador al templo por regicidio. Murió encadenado.", destacado: false },
    { id: 14, nombre: "Fabio", periodo: "253 – 256", seccion: "siglo3", descripcion: "Enfrentó la crisis de los 'lapsi'.", destacado: false },
    { id: 15, nombre: "San Demetriano", periodo: "256 – 260", seccion: "siglo3", descripcion: "Capturado por los persas y deportado. Murió en el exilio sirviendo a los cautivos.", destacado: false },
    { id: 16, nombre: "Pablo de Samosata", periodo: "260 – 268", seccion: "siglo3", descripcion: "(Depuesto por herejía). Promovió el monarquianismo. Expulsado con ayuda secular en 272.", destacado: false },
    { id: 17, nombre: "Domno I", periodo: "268 – 273", seccion: "siglo3", descripcion: "Restaurador de la ortodoxia.", destacado: false },
    { id: 18, nombre: "Timeo", periodo: "273 – 282", seccion: "siglo3", descripcion: "", destacado: false },
    { id: 19, nombre: "Cirilo I", periodo: "283 – 303", seccion: "siglo3", descripcion: "Sufrió la Gran Persecución de Diocleciano.", destacado: false },

    // III. SIGLO IV
    { id: 20, nombre: "Tirano", periodo: "304 – 314", seccion: "siglo4", descripcion: "Punto álgido de las persecuciones.", destacado: false },
    { id: 21, nombre: "Vital", periodo: "314 – 320", seccion: "siglo4", descripcion: "Inició la reconstrucción física tras el Edicto de Milán.", destacado: false },
    { id: 22, nombre: "San Filogonio", periodo: "320 – 323", seccion: "siglo4", descripcion: "Abogado elegido obispo. Luchó contra el arrianismo incipiente.", destacado: false },
    { id: 23, nombre: "Paulino de Tiro", periodo: "323 – 324", seccion: "siglo4", descripcion: "Simpatizante de Arrio.", destacado: false },
    { id: 24, nombre: "San Eustacio", periodo: "324 – 330", seccion: "siglo4", descripcion: "Campeón de Nicea (325). Depuesto y exiliado por los arrianos.", destacado: false },
    { id: 25, nombre: "San Melecio", periodo: "360 – 381", seccion: "siglo4", descripcion: "Presidió el II Concilio Ecuménico. Santo confesor.", destacado: false },
    { id: 26, nombre: "San Flaviano I", periodo: "381 – 404", seccion: "siglo4", descripcion: "Obispo de San Juan Crisóstomo. Logró la paz con Roma.", destacado: false },
    { id: 27, nombre: "Porfirio", periodo: "404 – 412", seccion: "siglo4", descripcion: "", destacado: false },
    { id: 28, nombre: "Alejandro", periodo: "412 – 417", seccion: "siglo4", descripcion: "El Gran Pacificador. Puso fin al cisma de los Eustacianos.", destacado: false },

    // IV. SIGLO V
    { id: 29, nombre: "Teódoto", periodo: "417 – 428", seccion: "siglo5", descripcion: "", destacado: false },
    { id: 30, nombre: "Juan I", periodo: "428 – 442", seccion: "siglo5", descripcion: "Protagonista en Éfeso (431). Firmó la 'Fórmula de Reunión' con San Cirilo.", destacado: false },
    { id: 31, nombre: "Domno II", periodo: "442 – 449", seccion: "siglo5", descripcion: "Depuesto en el Latrocinio de Éfeso.", destacado: false },
    { id: 32, nombre: "Máximo II", periodo: "449 – 455", seccion: "siglo5", descripcion: "Aceptó el Concilio de Calcedonia (451).", destacado: true },
    { id: 33, nombre: "Basilio", periodo: "456 – 458", seccion: "siglo5", descripcion: "", destacado: false },
    { id: 34, nombre: "Acacio", periodo: "458 – 461", seccion: "siglo5", descripcion: "", destacado: false },
    { id: 35, nombre: "Martirio", periodo: "461 – 469", seccion: "siglo5", descripcion: "", destacado: false },
    { id: 36, nombre: "Pedro II (El Fullón)", periodo: "469 – 471", seccion: "siglo5", descripcion: "Anti-Calcedoniano radical. Introdujo el teopasquismo en el Trisagio.", destacado: false },
    { id: 37, nombre: "Julián", periodo: "471 – 476", seccion: "siglo5", descripcion: "Exiliado por El Fullón.", destacado: false },
    { id: 38, nombre: "Juan II Codonato", periodo: "476 – 477", seccion: "siglo5", descripcion: "", destacado: false },
    { id: 39, nombre: "Esteban II", periodo: "477 – 479", seccion: "siglo5", descripcion: "Mártir calcedoniano, asesinado en la catedral.", destacado: false },
    { id: 40, nombre: "Calandión", periodo: "479 – 485", seccion: "siglo5", descripcion: "Exiliado por negarse a firmar el Henoticon.", destacado: false },
    { id: 41, nombre: "Paladio", periodo: "488 – 498", seccion: "siglo5", descripcion: "", destacado: false },
    { id: 42, nombre: "Flaviano II", periodo: "498 – 512", seccion: "siglo5", descripcion: "", destacado: false },
    { id: 43, nombre: "Severo de Antioquía", periodo: "512 – 518", seccion: "siglo5", descripcion: "Intelectual brillante anti-calcedoniano. Su deposición marca el Gran Cisma definitivo con la Iglesia Siríaca.", destacado: false },

    // V. PERIODO BIZANTINO Y ÁRABE
    { id: 44, nombre: "Pablo II (El Judío)", periodo: "519 – 521", seccion: "bizantino", descripcion: "Primer patriarca de la restauración ortodoxa.", destacado: false },
    { id: 46, nombre: "San Efrén de Amida", periodo: "527 – 545", seccion: "bizantino", descripcion: "Defensor vigoroso de Calcedonia.", destacado: false },
    { id: 48, nombre: "San Anastasio I (El Sinaíta)", periodo: "561 – 571", seccion: "bizantino", descripcion: "Erudito y confesor.", destacado: true },
    { id: 53, nombre: "Macedonio", periodo: "628 – 640", seccion: "bizantino", descripcion: "Testigo de la Conquista Árabe (637). Exiliado.", destacado: false },
    { id: 55, nombre: "Macario I", periodo: "656 – 681", seccion: "bizantino", descripcion: "(Depuesto por herejía). Líder del monotelismo, condenado en el VI Concilio Ecuménico.", destacado: false },
    { id: 60, nombre: "Esteban IV", periodo: "742 – 744", seccion: "bizantino", descripcion: "Restauró la jerarquía local bajo los Abasíes tras 40 años de vacante.", destacado: false },
    { id: 75, nombre: "Cristóbal", periodo: "960 – 969", seccion: "bizantino", descripcion: "Mártir en las intrigas de la reconquista bizantina.", destacado: false },

    // VI. CRUZADAS Y EXILIO
    { id: 83, nombre: "Pedro III", periodo: "1052 – 1056", seccion: "cruzadas", descripcion: "Patriarca durante el Cisma de 1054.", destacado: false },
    { id: 89, nombre: "Juan V (El Oxita)", periodo: "1090 – 1100", seccion: "cruzadas", descripcion: "Expulsado por los Cruzados Latinos. Exilio en Constantinopla.", destacado: false },
    { id: 95, nombre: "Teodoro IV Balsamón", periodo: "1185 – 1199", seccion: "cruzadas", descripcion: "El Gran Canonista. Definió la jurisprudencia ortodoxa desde el exilio.", destacado: true },
    { id: 99, nombre: "Eutimio I", periodo: "1268 – 1273", seccion: "cruzadas", descripcion: "Bajo su titularidad, los mamelucos destruyen Antioquía (1268).", destacado: false },

    // VII. DAMASCO Y OTOMANOS
    { id: 100, nombre: "Teodosio V", periodo: "1275 – 1283", seccion: "damasco", descripcion: "Hijo de príncipe franco, de fe ortodoxa.", destacado: false },
    { id: 103, nombre: "Marcos I", periodo: "1308 – 1342", seccion: "damasco", descripcion: "Se oficializa el traslado de la sede a Damasco.", destacado: false },
    { id: 111, nombre: "Doroteo II", periodo: "1436 – 1454", seccion: "damasco", descripcion: "Rechazó la unión de Florencia. Testigo de la caída de Constantinopla.", destacado: false },
    { id: 116, nombre: "Doroteo III", periodo: "1497 – 1523", seccion: "damasco", descripcion: "Conquista Otomana (1516).", destacado: false },
    { id: 128, nombre: "Macario III (Zaim)", periodo: "1647 – 1672", seccion: "damasco", descripcion: "El Viajero. Participó en el sínodo de Moscú contra Nikon.", destacado: true },
    { id: 132, nombre: "Silvestre (El Chipriota)", periodo: "1724 – 1766", seccion: "damasco", descripcion: "Salvador de la Ortodoxia tras el cisma Melquita Católico (1724).", destacado: true },
    { id: 140, nombre: "Espiridón", periodo: "1891 – 1898", seccion: "damasco", descripcion: "El último patriarca griego. Renunció por presión árabe.", destacado: false },

    // VIII. MODERNA
    { id: 141, nombre: "Melecio II (Doumani)", periodo: "1899 – 1906", seccion: "moderna", descripcion: "Primer Patriarca Árabe desde 1724. Hito del renacimiento antioqueno.", imagen: "Img/patriarca_meletios.jpg", destacado: true },
    { id: 142, nombre: "Gregorio IV (Haddad)", periodo: "1906 – 1928", seccion: "moderna", descripcion: "El Santo de la Caridad. Vendió sus joyas para alimentar a pobres en la I Guerra Mundial.", imagen: "Img/patriarca_gregorio.jpg", destacado: true },
    { id: 143, nombre: "Alejandro III (Tahan)", periodo: "1928 – 1958", seccion: "moderna", descripcion: "Modernizador. Revitalizó el seminario de Balamand.", destacado: true },
    { id: 144, nombre: "Teodosio VI (Abourjaily)", periodo: "1958 – 1970", seccion: "moderna", descripcion: "", destacado: true },
    { id: 145, nombre: "Elías IV (Muawad)", periodo: "1970 – 1979", seccion: "moderna", descripcion: "El 'Crisóstomo moderno' por su elocuencia.", destacado: true },
    { id: 146, nombre: "Ignacio IV (Hazim)", periodo: "1979 – 2012", seccion: "moderna", descripcion: "Gigante de la teología. Fundador de la Universidad de Balamand.", imagen: "https://upload.wikimedia.org/wikipedia/commons/3/30/Ignatius_IV_of_Antioch.jpg", destacado: true },
    { id: 147, nombre: "Juan X (Yazigi)", periodo: "2012 – Presente", seccion: "moderna", descripcion: "Patriarca actual. Pastor en tiempos de guerra y expansión global.", imagen: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Patriarch_John_X_of_Antioch.jpg", destacado: true }
];