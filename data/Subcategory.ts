import { Subcategory } from "@prisma/client";

const subcategories: Subcategory[] = [
    {
      "id": 24,
      "slug": "desk_casters",
      "title": "Ruedas para base de standing desk",
      "description": "Ruedas para las bases de standing desks.  ",
      "images": [
        "desk_casters/desk caster 1.png"
      ],
      "categoryId": 10,
      "priority": 0,
      "createdAt": new Date("2022-08-24T23:10:54.000Z"),
      "updatedAt": new Date("2022-08-24T23:10:55.498Z"),
      "createdBy": "lucas@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 23,
      "slug": "flat",
      "title": "Planos",
      "description": "Monitores planos último modelos de las marcas LG y Samsung.",
      "images": [
        "flat/monitors-flat.jpg"
      ],
      "categoryId": 4,
      "priority": 1,
      "createdAt": new Date("2022-02-07T05:58:49.000Z"),
      "updatedAt": new Date("2022-02-07T05:58:49.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 38,
      "slug": "bookshelf_speakers",
      "title": "Bocinas De Escritorio",
      "description": "Las bocinas de escritorio con bluetooth son de tamaño compacto ideal para tu escritorio.  El sonido es impactante y de alta calidad. ",
      "images": [
        "bookshelf_speakers/sound-bookshelf-BT4in-bl-1.jpg"
      ],
      "categoryId": 3,
      "priority": 1,
      "createdAt": new Date("2022-02-07T05:58:49.000Z"),
      "updatedAt": new Date("2022-02-07T05:58:49.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 34,
      "slug": "power_strips",
      "title": "Tomacorrientes",
      "description": "Tomacorrientes heavy duty para que puedan conectar todos tus dispositivos organizadamente. ",
      "images": [
        "power_strips/charge-strip-6outlet-bl-1.jpg"
      ],
      "categoryId": 11,
      "priority": 1,
      "createdAt": new Date("2022-02-07T05:58:49.000Z"),
      "updatedAt": new Date("2022-02-07T05:58:49.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 32,
      "slug": "body",
      "title": "Cuerpo",
      "description": "Todos los productos que ayuden a tu cuerpo mantenerse saludable como yoga mats, masajeadores, y otros.",
      "images": [
        "body/health-body-minigun-bl-1.jpg"
      ],
      "categoryId": 1,
      "priority": 1,
      "createdAt": new Date("2022-02-07T05:58:49.000Z"),
      "updatedAt": new Date("2022-02-07T05:58:49.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 2,
      "slug": "monitor_arms",
      "title": "Brazos De Monitor",
      "description": "Los Brazos para monitores son esencial para tener las pantallas en la posición correcta.",
      "images": [
        "monitor_arms/stand-arm-alum-double-bl-1.jpg"
      ],
      "categoryId": 5,
      "priority": 1,
      "createdAt": new Date("2022-02-07T05:58:49.000Z"),
      "updatedAt": new Date("2022-02-07T05:58:49.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 14,
      "slug": "usbc_hubs",
      "title": "Hubs Tipo C",
      "description": "Hubs con salida tipo c.  ",
      "images": [
        "usbc_hubs/hubs-usbc-6in1-1-gr-2.jpg"
      ],
      "categoryId": 6,
      "priority": 1,
      "createdAt": new Date("2022-02-07T05:58:49.000Z"),
      "updatedAt": new Date("2022-02-07T05:58:49.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 15,
      "slug": "desk_frames",
      "title": "Bases",
      "description": "Las bases motorizadas para tus escritorios de altura ajustables / standing desks. Puedes escoger el modelo y color que más se ajuste a tu necesidad.",
      "images": [
        "desk_frames/frame-double-wh-1.jpg"
      ],
      "categoryId": 2,
      "priority": 1,
      "createdAt": new Date("2022-02-07T05:58:49.000Z"),
      "updatedAt": new Date("2022-02-07T05:58:49.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 16,
      "slug": "keyboards",
      "title": "Teclados",
      "description": "Los teclado inalámbricos y mecánicos de buena calidad para tu setup.   ",
      "images": [
        "keyboards/keyboard-btoffice-us-gr-1.jpg"
      ],
      "categoryId": 8,
      "priority": 1,
      "createdAt": new Date("2022-02-07T05:58:49.000Z"),
      "updatedAt": new Date("2022-02-07T05:58:49.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 29,
      "slug": "art",
      "title": "Decoración",
      "description": "Los productos de decoración incluyen cuadros, artes para colgar en las paredes , plantas en potes y otros.",
      "images": [
        "art/decoration-category-image.jpg"
      ],
      "categoryId": 9,
      "priority": 1,
      "createdAt": new Date("2022-02-07T05:58:49.000Z"),
      "updatedAt": new Date("2022-02-07T05:58:49.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 19,
      "slug": "chairs",
      "title": "Sillas Ergonómicas",
      "description": "Sillas ergonómicas de alta calidad para tu home office.",
      "images": [
        "chairs/chair-ajax-bl-1.jpg"
      ],
      "categoryId": 7,
      "priority": 1,
      "createdAt": new Date("2022-02-07T05:58:49.000Z"),
      "updatedAt": new Date("2022-02-07T05:58:49.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 20,
      "slug": "anti_fatigue_mats",
      "title": "Alfombras Antifatiga",
      "description": "La alfombras antifatiga son esenciales para la configuración de tu escritorio o standing desk ergonómico.  Reducen la tensión de estar parado.  Cuando lo pruebes sentirás la diferencia al instante.",
      "images": [
        "anti_fatigue_mats/anti-mat-shape1-bl-1.jpg"
      ],
      "categoryId": 10,
      "priority": 1,
      "createdAt": new Date("2022-02-07T05:58:49.000Z"),
      "updatedAt": new Date("2022-02-07T05:58:49.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 41,
      "slug": "usb_hubs",
      "title": "Hubs Usb",
      "description": "Hubs con salida USB.",
      "images": [
        "usb_hubs/hubs-usb-7port-1-gr-1.jpg"
      ],
      "categoryId": 6,
      "priority": 2,
      "createdAt": new Date("2022-02-07T05:58:49.000Z"),
      "updatedAt": new Date("2022-02-07T05:58:49.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 26,
      "slug": "mouse",
      "title": "Mouses",
      "description": "Mouses ergonómicos de oficina y de gamers.     ",
      "images": [
        "mouse/mouse-vertical-rg-bl-1.jpg"
      ],
      "categoryId": 8,
      "priority": 2,
      "createdAt": new Date("2022-02-07T05:58:49.000Z"),
      "updatedAt": new Date("2022-02-07T05:58:49.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 40,
      "slug": "usb_chargers",
      "title": "Cargadores Usb",
      "description": "Los cargadores USB de alta velocidad te permiten conectar todos tus dispositivos USB que necesitan carga en un solo cargador.",
      "images": [
        "usb_chargers/charge-usb-10port-bl-1.jpg"
      ],
      "categoryId": 11,
      "priority": 2,
      "createdAt": new Date("2022-02-07T05:58:49.000Z"),
      "updatedAt": new Date("2022-02-07T05:58:49.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 31,
      "slug": "pads",
      "title": "Pads",
      "description": "Los pads te protegen el sobre de la mesa y le dan  personalizada a tu escritorio. ",
      "images": [
        "pads/pad-ecoleather-80x40-gr-1.jpg"
      ],
      "categoryId": 10,
      "priority": 2,
      "createdAt": new Date("2022-02-07T05:58:49.000Z"),
      "updatedAt": new Date("2022-02-07T05:58:49.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 36,
      "slug": "curved",
      "title": "Curvos",
      "description": "Monitores curvos último modelos de las marcas LG y Samsung.",
      "images": [
        "curved/monitors-curved.jpg"
      ],
      "categoryId": 4,
      "priority": 2,
      "createdAt": new Date("2022-02-07T05:58:49.000Z"),
      "updatedAt": new Date("2022-02-07T05:58:49.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 43,
      "slug": "table_tops",
      "title": "Sobres",
      "description": "Los sobres para tu standing desk.  Puedes escoger el tamaño, color y acabado.",
      "images": [
        "table_tops/top-mela-white-152-1.jpg"
      ],
      "categoryId": 2,
      "priority": 2,
      "createdAt": new Date("2022-02-07T05:58:49.000Z"),
      "updatedAt": new Date("2022-02-07T05:58:49.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 9,
      "slug": "stools",
      "title": "Stool",
      "description": "Los stools son una solución ergonómica para tu standing desk.",
      "images": [
        "stools/stool-wobble-bl-1.jpg"
      ],
      "categoryId": 7,
      "priority": 2,
      "createdAt": new Date("2022-02-07T05:58:49.000Z"),
      "updatedAt": new Date("2022-02-07T05:58:49.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 27,
      "slug": "laptop_stands",
      "title": "Soporte De Laptops",
      "description": "Los soportes de laptops te ayudan a tener la configuración más eficiente y a mantener tu escritorio organizado.",
      "images": [
        "laptop_stands/stand-laptop-x-gr-1.jpg"
      ],
      "categoryId": 5,
      "priority": 2,
      "createdAt": new Date("2022-02-07T05:58:49.000Z"),
      "updatedAt": new Date("2022-02-07T05:58:49.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 11,
      "slug": "air",
      "title": "Aire",
      "description": "Los productos para el aire incluyen purificadores de aire con filtros HEPA, difusores de aceites esenciales y otro productos que mantienen el el aire limpio y fresco.",
      "images": [
        "air/health-air-deskhepa-bl-2.jpg"
      ],
      "categoryId": 1,
      "priority": 2,
      "createdAt": new Date("2022-02-07T05:58:49.000Z"),
      "updatedAt": new Date("2022-02-07T05:58:49.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 21,
      "slug": "soundbars",
      "title": "Soundbar",
      "description": "Las bocinas soundbar con bluetooth tienen una forma y tamaño ideal para diferentes configuraciones.   El sonido es impactante y de alta calidad. ",
      "images": [
        "soundbars/sound-soundbar-speaker28in-bl-1.jpg"
      ],
      "categoryId": 3,
      "priority": 2,
      "createdAt": new Date("2022-02-07T05:58:49.000Z"),
      "updatedAt": new Date("2022-02-07T05:58:49.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 22,
      "slug": "adapters",
      "title": "Adaptadores",
      "description": "Adaptadores para USB, Tipo C, y diferentes conexiones/salidas.  ",
      "images": [
        "adapters/hubs-adap-usbctohdmi-bl-1.jpg"
      ],
      "categoryId": 6,
      "priority": 3,
      "createdAt": new Date("2022-02-07T05:58:49.000Z"),
      "updatedAt": new Date("2022-02-07T05:58:49.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 12,
      "slug": "wireless_chargers",
      "title": "Cargadores Inalámbricos",
      "description": "Los cargadores inalámbricos te mantienen tu escritorio organizado y al mismo tiempo cargando tus dispositivos.  ",
      "images": [
        "wireless_chargers/charge-wireless-fastpad-bl-4.jpg"
      ],
      "categoryId": 11,
      "priority": 3,
      "createdAt": new Date("2022-02-07T05:58:49.000Z"),
      "updatedAt": new Date("2022-02-07T05:58:49.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 1,
      "slug": "Executive",
      "title": "Sillas Ejecutivas",
      "description": "Sillas ejecutivas de cuero para oficinas en panama",
      "images": [
        "Executive/Asset 11-100 (1).jpg"
      ],
      "categoryId": 7,
      "priority": 3,
      "createdAt": new Date("2023-01-18T21:40:32.000Z"),
      "updatedAt": new Date("2023-01-18T21:40:32.611Z"),
      "createdBy": "lucas@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 25,
      "slug": "headphones",
      "title": "Headphones",
      "description": "Los headphones con active noise cancelling te permite escuchar tu música sin interrupciones de ruido en tu ambiente.",
      "images": [
        "headphones/sound-head-anchead1-bl-1.jpg"
      ],
      "categoryId": 3,
      "priority": 3,
      "createdAt": new Date("2022-02-07T05:58:49.000Z"),
      "updatedAt": new Date("2022-02-07T05:58:49.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 30,
      "slug": "sanitizers",
      "title": "Sanitizadores",
      "description": "Los sanitizadores son una solución eficiente para mantener la higiene en tus manos y no ensuciar los dispositivos.",
      "images": [
        "sanitizers/health-sani-atom-bl-1.jpg"
      ],
      "categoryId": 1,
      "priority": 3,
      "createdAt": new Date("2022-02-07T05:58:49.000Z"),
      "updatedAt": new Date("2022-02-07T05:58:49.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 33,
      "slug": "tablet_stands",
      "title": "Soporte De Tabletas",
      "description": "Los soportes de tabletas ayudan a mantener tus dispositivos organizados y    de fácil alcance. ",
      "images": [
        "tablet_stands/stand-tablet-adjus-sl-1.jpg"
      ],
      "categoryId": 5,
      "priority": 3,
      "createdAt": new Date("2022-02-07T05:58:49.000Z"),
      "updatedAt": new Date("2022-02-07T05:58:49.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 39,
      "slug": "cabinets",
      "title": "Gabinetes",
      "description": "Los gabinetes te ayudan a mantener todos tus documentos organizados y seguros.",
      "images": [
        "cabinets/cabinet-3drawer-wh-1.jpg"
      ],
      "categoryId": 10,
      "priority": 3,
      "createdAt": new Date("2022-02-07T05:58:49.000Z"),
      "updatedAt": new Date("2022-02-07T05:58:49.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 28,
      "slug": "phone_stands",
      "title": "Soporte De Celulares",
      "description": "Los soportes de celular ayudan a mantener tu dispositivos organizados y siempre al alcance.",
      "images": [
        "phone_stands/stand-phone-clasic-gr-1.jpg"
      ],
      "categoryId": 5,
      "priority": 4,
      "createdAt": new Date("2022-02-07T05:58:49.000Z"),
      "updatedAt": new Date("2022-02-07T05:58:49.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 6,
      "slug": "cables",
      "title": "Cables",
      "description": "Cables para conectar los monitores a tu laptop o PC. ",
      "images": [
        "cables/hubs-cables-hdmibraid1_5-gold-1.jpg"
      ],
      "categoryId": 6,
      "priority": 4,
      "createdAt": new Date("2022-02-07T05:58:49.000Z"),
      "updatedAt": new Date("2022-02-07T05:58:49.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 3,
      "slug": "headphone_stands",
      "title": "Soporte De Headphones",
      "description": "Los soportes de headphone ayudan a mantener tu auriculares organizados y protegidos.",
      "images": [
        "headphone_stands/stand-head-desk-sl-1.jpg"
      ],
      "categoryId": 5,
      "priority": 4,
      "createdAt": new Date("2022-02-07T05:58:49.000Z"),
      "updatedAt": new Date("2022-02-07T05:58:49.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 4,
      "slug": "Gamer",
      "title": "Sillas Gamers",
      "description": "Sillas gamers ergonomicas de lujo",
      "images": [
        "Gamer/ ynynny-100.jpg"
      ],
      "categoryId": 7,
      "priority": 4,
      "createdAt": new Date("2023-01-19T05:26:04.000Z"),
      "updatedAt": new Date("2023-01-19T05:26:05.104Z"),
      "createdBy": "lucas@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 18,
      "slug": "lighting",
      "title": "Iluminación",
      "description": "La iluminación correcta es esencial para tener un ambiente de trabajo productivo.",
      "images": [
        "lighting/light-screenbar-bl-1.jpg"
      ],
      "categoryId": 10,
      "priority": 4,
      "createdAt": new Date("2022-02-07T05:58:49.000Z"),
      "updatedAt": new Date("2022-02-07T05:58:49.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 5,
      "slug": "cable_management",
      "title": "Manejo De Cables",
      "description": "Los accesorios para manejo de cable te mantienen tu escritorio organizado y visualmente impecable.  ",
      "images": [
        "cable_management/cable-tray-bl-1.jpg"
      ],
      "categoryId": 10,
      "priority": 5,
      "createdAt": new Date("2022-02-07T05:58:49.000Z"),
      "updatedAt": new Date("2022-02-07T05:58:49.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 13,
      "slug": "splitters",
      "title": "Splitters",
      "description": "Spitters te permiten agregar una configuración de dos pantallas o más a través de una sola salida HDMI, Tipo C y otras conexiones.",
      "images": [
        "splitters/hubs-split-usbctodualhdmi-bl-1.jpg"
      ],
      "categoryId": 6,
      "priority": 5,
      "createdAt": new Date("2022-02-07T05:58:49.000Z"),
      "updatedAt": new Date("2022-02-07T05:58:49.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 37,
      "slug": "cpu_stands",
      "title": "Soporte De Cpu",
      "description": "Los soportes de CPU te ayudan a ahorrar espacio y mantener tu escritorio organizado.  ",
      "images": [
        "cpu_stands/stand-cpu-under-bl-1.jpg"
      ],
      "categoryId": 5,
      "priority": 6,
      "createdAt": new Date("2022-02-07T05:58:49.000Z"),
      "updatedAt": new Date("2022-02-07T05:58:49.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 10,
      "slug": "iphone_hubs",
      "title": "Hubs Iphone",
      "description": "Hubs para el iphone.",
      "images": [
        "iphone_hubs/hubs-iphone-hdmi-1-wh-1.jpg"
      ],
      "categoryId": 6,
      "priority": 6,
      "createdAt": new Date("2022-02-07T05:58:49.000Z"),
      "updatedAt": new Date("2022-02-07T05:58:49.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 8,
      "slug": "wrist_rests",
      "title": "Reposamuñecas",
      "description": "El reposamuñecas hace la experiencia de tipear más agradable y te protege las muñecas.",
      "images": [
        "wrist_rests/wrist-rest-combo-bl-1.jpg"
      ],
      "categoryId": 10,
      "priority": 6,
      "createdAt": new Date("2022-02-07T05:58:49.000Z"),
      "updatedAt": new Date("2022-02-07T05:58:49.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 42,
      "slug": "monitor_risers",
      "title": "Alza Monitor",
      "description": "Los alza monitor te permite poner las pantallas a una mayor altura.",
      "images": [
        "monitor_risers/stand-riser-monitor-sl-1.jpg"
      ],
      "categoryId": 5,
      "priority": 7,
      "createdAt": new Date("2022-02-07T05:58:49.000Z"),
      "updatedAt": new Date("2022-02-07T05:58:49.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 17,
      "slug": "balance_boards",
      "title": "Tablas De Balance",
      "description": "Las tablas de balance te mantienen activos durante el trabajo, ayudan a fortalecer tu core y a reducir los dolores de espalda.  ",
      "images": [
        "balance_boards/balance-board-1-bl-1.jpg"
      ],
      "categoryId": 10,
      "priority": 7,
      "createdAt": new Date("2022-02-07T05:58:49.000Z"),
      "updatedAt": new Date("2022-02-07T05:58:49.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 7,
      "slug": "under_desk_drawer",
      "title": "Gavetas",
      "description": "Gavetas para debajo del escritorio.  Son especiales para tu standing desk o cualquier escritorio donde quieres agregar una gaveta. ",
      "images": [],
      "categoryId": 10,
      "priority": 8,
      "createdAt": new Date("2022-08-14T21:30:50.000Z"),
      "updatedAt": new Date("2022-08-19T01:16:38.000Z"),
      "createdBy": "lucas@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 35,
      "slug": "foot_rest",
      "title": "Reposapiés",
      "description": "Reposapiés para la oficina.  Te ayuda a mantener la postura correcta cuando estas sentado.  Úsalo en conjunto con tu silla y espacio de trabajo ergonómico.  ",
      "images": [
        "foot_rest/footrest-rocking-1.jpg"
      ],
      "categoryId": 10,
      "priority": 8,
      "createdAt": new Date("2022-08-14T20:02:10.000Z"),
      "updatedAt": new Date("2022-08-14T20:02:11.367Z"),
      "createdBy": "lucas@torus-digital.com",
      "updatedBy": null
    }
];
export default subcategories;