import { Category } from "@prisma/client";

const categories: Category[] = [
  {
    "id": 2,
    "slug": "desks",
    "title": "Escritorios",
    "description": "El escritorio es la parte parte principal de tu área de trabajo o home office. Los escritorios ergonómicos consisten de una base motorizada de altura ajustable y un sobre de mesa. Puedes escoger el material, color y tamaño del sobre que más te guste.",
    "images": [
      "desks/standing-desk-bl-1.jpg"
    ],
    "priority": 1,
    "createdAt": new Date("2022-02-07T05:57:41.000Z"),
    "updatedAt": new Date("2022-02-07T05:57:41.000Z"),
    "createdBy": "gabriel@torus-digital.com",
    "updatedBy": null
  },
  {
    "id": 7,
    "slug": "seating",
    "title": "Sillas",
    "description": "Sillas y stools ergonómicos de alta calidad para tu home office. Nuestras sillas son especiales para esas personas que pasan largas horas frente a la computadora. Son una parte esencial de tu configuración para el home office.",
    "images": [
      "seating/chair-category-image.jpg"
    ],
    "priority": 2,
    "createdAt": new Date("2022-02-07T05:57:41.000Z"),
    "updatedAt": new Date("2022-02-07T05:57:41.000Z"),
    "createdBy": "gabriel@torus-digital.com",
    "updatedBy": null
  },
  {
    "id": 5,
    "slug": "stands",
    "title": "Soportes",
    "description": "Soporte para todos tu dispositivos incluyendo los celulares, tabletas, laptops, cpus y monitores. Los brazos de monitor junto con los otros soportes ayudan a que tengas un flow de trabajo más eficiente y productivo.",
    "images": [
      "stands/stands-category-image.jpg"
    ],
    "priority": 3,
    "createdAt": new Date("2022-02-07T05:57:41.000Z"),
    "updatedAt": new Date("2022-02-07T05:57:41.000Z"),
    "createdBy": "gabriel@torus-digital.com",
    "updatedBy": null
  },
  {
    "id": 10,
    "slug": "accesories",
    "title": "Accesorios",
    "description": "Accesorios para agregar a tu standing desks que te ayudan a mejorar la ergonomía y a organizar tu área de trabajo. Incluye alfombras antifatiga, pads de eco leather, lamparas, gabinetes, manejo de cables y otros.",
    "images": [
      "accesories/accesories-category-image.jpg"
    ],
    "priority": 4,
    "createdAt": new Date("2022-02-07T05:57:41.000Z"),
    "updatedAt": new Date("2022-02-07T05:57:41.000Z"),
    "createdBy": "gabriel@torus-digital.com",
    "updatedBy": null
  },
  {
    "id": 6,
    "slug": "hubs_adapters",
    "title": "Hubs & adaptadores",
    "description": "Hubs USB, hubs tipo C, cables HDMI y tipo C, adaptadores para tu laptops y dispositivos, HDMI Splitters, y otros productos que te facilitan las conexiones y también expanden la capacidad de tu laptop o computadora.",
    "images": [
      "hubs_adapters/hubs-adap-category.jpg"
    ],
    "priority": 5,
    "createdAt": new Date("2022-02-07T05:57:41.000Z"),
    "updatedAt": new Date("2022-02-07T05:57:41.000Z"),
    "createdBy": "gabriel@torus-digital.com",
    "updatedBy": null
  },
  {
    "id": 8,
    "slug": "keyboard_mouse",
    "title": "Teclados & mouses",
    "description": "Teclados inalámbricos, teclados mecanicos, mouses de oficina, mouses ergonómicos, mouses gamer y otros productos para tu home office.",
    "images": [
      "keyboard_mouse/keyboard-mouse-category.jpg"
    ],
    "priority": 6,
    "createdAt": new Date("2022-02-07T05:57:41.000Z"),
    "updatedAt": new Date("2022-02-07T05:57:41.000Z"),
    "createdBy": "gabriel@torus-digital.com",
    "updatedBy": null
  },
  {
    "id": 11,
    "slug": "chargers",
    "title": "Cargadores",
    "description": "Tomacorrientes, cargadores USB y cargadores inalámbricos para tu dispositivos como celulares, computadoras y 110v.",
    "images": [
      "chargers/charge-strip-6outlet-bl-1.jpg"
    ],
    "priority": 7,
    "createdAt": new Date("2022-02-07T05:57:41.000Z"),
    "updatedAt": new Date("2022-02-07T05:57:41.000Z"),
    "createdBy": "gabriel@torus-digital.com",
    "updatedBy": null
  },
  {
    "id": 3,
    "slug": "sound",
    "title": "Sonido",
    "description": "Bocinas de escritorio, soundbars, headphones y productos para el sonido.",
    "images": [
      "sound/sound-bookshelf-BT4in-bl-2.jpg"
    ],
    "priority": 8,
    "createdAt": new Date("2022-02-07T05:57:41.000Z"),
    "updatedAt": new Date("2022-02-07T05:57:41.000Z"),
    "createdBy": "gabriel@torus-digital.com",
    "updatedBy": null
  },
  {
    "id": 1,
    "slug": "health",
    "title": "Salud",
    "description": "Productos prar mantener tu cuerpo saludable y libres de dolor. Incluyen yoga mats, masajeadores, rollers, y otros.",
    "images": [
      "health/health-body-minigun-bl-1.jpg"
    ],
    "priority": 9,
    "createdAt": new Date("2022-02-07T05:57:41.000Z"),
    "updatedAt": new Date("2022-02-07T05:57:41.000Z"),
    "createdBy": "gabriel@torus-digital.com",
    "updatedBy": null
  },
  {
    "id": 9,
    "slug": "decoration",
    "title": "Decoración",
    "description": "Decoraciónes para crear un ambiente de trabajo que te de ganas de trabajar como cuadros, artes, plantas y otros productos que le dan personalidad a tu home office.",
    "images": [
      "decoration/decoration-category-image.jpg"
    ],
    "priority": 10,
    "createdAt": new Date("2022-02-07T05:57:41.000Z"),
    "updatedAt": new Date("2022-02-07T05:57:41.000Z"),
    "createdBy": "gabriel@torus-digital.com",
    "updatedBy": null
  },
  {
    "id": 4,
    "slug": "monitors",
    "title": "Monitores",
    "description": "Monitores de oficina y gaming de marcas LG y Samsung",
    "images": [
      "monitors/monitors-category.jpg"
    ],
    "priority": 11,
    "createdAt": new Date("2022-02-07T05:57:41.000Z"),
    "updatedAt": new Date("2022-02-07T05:57:41.000Z"),
    "createdBy": "gabriel@torus-digital.com",
    "updatedBy": null
  }
];
export default categories;