import { Product } from "@prisma/client"

const products: Product[] = [
    {
      "id": 1,
      "sku": "top-mela-white-182",
      "skuGroup": "top-mela",
      "title": "Sobre de melamina",
      "description": "El sobre de mesa para tu standing desk. Hecho de MDF hidrófugo de 1 pulgada de grueso con un laminado de melamina de alta calidad.",
      "subcategoryId": 43,
      "price": 115,
      "stock": 4,
      "color": "white",
      "size": "182",
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Durables",
          "Resistente a la humedad",
          "Ligero",
          "Fácil de limpiar",
          "Difícil de rayar",
          "Resistente a  contacto con objetos calientes"
        ],
        "dimensions": "182x75x2.5",
        "specifications": {
          "Espesor": "1 pulgada",
          "Laminado": "Melamina",
          "Material": "MDF",
          "Hidrofóbico": "Si"
        }
      } as Product["specs"],
      "images": [
        "top-mela-white-182/top-mela-white-182-1.jpg"
      ],
      "assembly": 10,
      "shipping": {
        "colon": 20,
        "panama_otro": 20,
        "panama_ciudad": 0,
        "otras_provincias": 20
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-08-26T02:59:23.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 2,
      "sku": "chair-gamer-apexelite-bl",
      "skuGroup": "chair-gamer-apexelite",
      "title": "Silla Gamer Ergonómica Apex Elite",
      "description": "\"Experimenta una comodidad y soporte sin igual con la silla gamer Apex Elite. Su diseño ergonómico con soporte lumbar ajustable es especial para proteger tu columna durante horas de juego intensas. Tiene acabado de cuero eco con suede para mantenerte fresco en todo momento.  No solo es perfecta para jugar, sino que también cuenta con un diseño elegante y moderno, ideal para usar en tu oficina o en cualquier espacio de trabajo. Incluye almohadas magnéticas. ",
      "subcategoryId": 4,
      "price": 450,
      "stock": 4,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "4",
      "specs": {
        "details": [
          "[Cuero PU y suede de alta calidad, Soporte lumbar ajustable interno, mecanismo de bloqueo, BIFMA certified, Class 4 gaslift, almohadas magnéticas, ruedas de patín de 3\", reposabrazos 4D magnéticos, base de aluminio de 350mm, respaldar ajustable hasta 175 grados]"
        ],
        "dimensions": "",
        "specifications": {}
      } as Product["specs"],
      "images": [
        "chair-gamer-apexelite-bl/rgsrthrw rt-100.jpg",
        "chair-gamer-apexelite-bl/wrb rwbnw -100.jpg",
        "chair-gamer-apexelite-bl/wynwynwy-100.jpg",
        "chair-gamer-apexelite-bl/ergegerg rg-100 (1).jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 0,
        "panama_otro": 0,
        "panama_ciudad": 0,
        "otras_provincias": 0
      },
      "display": true,
      "createdAt": new Date("2023-01-19T05:56:35.000Z"),
      "updatedAt": new Date("2023-01-19T05:56:36.882Z"),
      "createdBy": "lucas@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 3,
      "sku": "top-mela-onyx-182",
      "skuGroup": "top-mela",
      "title": "Sobre de melamina",
      "description": "El sobre de mesa para tu standing desk. Hecho de MDF hidrófugo de 1 pulgada de grueso con un laminado de melamina de alta calidad.",
      "subcategoryId": 43,
      "price": 115,
      "stock": 1,
      "color": "onyx",
      "size": "182",
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Durables",
          "Resistente a la humedad",
          "Ligero",
          "Fácil de limpiar",
          "Difícil de rayar",
          "Resistente a  contacto con objetos calientes"
        ],
        "dimensions": "182x75x2.5",
        "specifications": {
          "Espesor": "1 pulgada",
          "Laminado": "Melamina",
          "Material": "MDF",
          "Hidrofóbico": "Si"
        }
      } as Product["specs"],
      "images": [
        "top-mela-onyx-182/top-mela-onyx-182-1.jpg"
      ],
      "assembly": 10,
      "shipping": {
        "colon": 20,
        "panama_otro": 20,
        "panama_ciudad": 0,
        "otras_provincias": 20
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-06-09T18:36:02.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "josemiguel@ergonomicadesk.com"
    },
    {
      "id": 4,
      "sku": "chair-vergex-bl",
      "skuGroup": "chair-vergex",
      "title": "Silla Ergonomica Verge X",
      "description": "Silla ergonómica altamente avanzada para el home office.  Tiene dos aspectos que la distinguen; El respaldar se puede inclinar 16 grados hacia el frente y el asiento se también se puede inclinar hacia el frente.  Cuenta con acabado de malla de lujo (asiento y respaldar), soporte lumbar y respladar de altura ajustable y súper cómoda. Diseñado especialmente para personas que pasan muchas horas trabajando frente a la computadora. Brinda un excelente soporte para toda la espalda ayudándote a mantener una buena postura. Reduce la tensión de las piernas con un diseño que permite una mejor circulación. Construido con materiales de alta calidad y una malla especial transpirable que te mantiene fresco todo el día.",
      "subcategoryId": 19,
      "price": 550,
      "stock": 5,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "4",
      "specs": {
        "details": [
          "Respaldar con altura ajustable,Asiento deslizante e inclinable, Asiento y respaldar de malla completo,Mecanismo avanzado, Reposacabezas 3D, Base de nylon de 350 mm con ruedas de nylon PU de 60 mm"
        ],
        "dimensions": "",
        "specifications": {}
      } as Product["specs"],
      "images": [
        "chair-vergex-bl/Asset 40.jpeg",
        "chair-vergex-bl/Asset 41.jpeg",
        "chair-vergex-bl/Asset 42.jpeg",
        "chair-vergex-bl/fghrt.jpeg",
        "chair-vergex-bl/Asset 43.jpeg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 20,
        "panama_otro": 20,
        "panama_ciudad": 0,
        "otras_provincias": 20
      },
      "display": true,
      "createdAt": new Date("2022-08-31T19:59:22.000Z"),
      "updatedAt": new Date("2023-02-06T21:44:49.000Z"),
      "createdBy": "lucas@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 5,
      "sku": "chair-axis-wh",
      "skuGroup": "chair-axis",
      "title": "Silla Ergonomica Axis",
      "description": "Silla ergonómica de home office con un diseño moderno,  respladar dinámico que se ajusta a tus movimientos y asiento de espuma moldeada de alta densidad. Brinda una comodidad extrema y un excelente soporte para toda la espalda. Diseñado especialmente para profesionales que pasan muchas horas al día sentados frente a una computadora.",
      "subcategoryId": 19,
      "price": 550,
      "stock": 0,
      "color": "wh",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "4",
      "specs": {
        "details": [
          "Ángulo de inclinación y tensión ajustables,Asiento deslizante con altura ajustable,Asiento de espuma moldeada de alta densidad,Reposacabezas ajustable 3D y removible,Apoyabrazos 4D"
        ],
        "dimensions": "",
        "specifications": {}
      } as Product["specs"],
      "images": [
        "chair-axis-wh/Asset 29.jpg",
        "chair-axis-wh/Asset 30.jpg",
        "chair-axis-wh/Asset 31.jpg",
        "chair-axis-wh/Asset 32.jpg",
        "chair-axis-wh/Asset 33.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 0,
        "panama_otro": 0,
        "panama_ciudad": 0,
        "otras_provincias": 0
      },
      "display": true,
      "createdAt": new Date("2022-08-31T18:59:08.000Z"),
      "updatedAt": new Date("2022-10-05T20:57:29.000Z"),
      "createdBy": "lucas@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 6,
      "sku": "chair-phaser-bl",
      "skuGroup": "chair-phaser",
      "title": "Silla Ergonómica Phaser",
      "description": "Silla ergonómica premium para el home office con acabado de malla completa (asiento y respaldar), soporte lumbar, altamente ajustable y súper cómoda. Diseñado especialmente para personas que pasan muchas horas trabajando frente a la computadora. Brinda un excelente soporte para toda la espalda ayudándote a mantener una buena postura. Reduce la tensión de las piernas con un diseño que permite una mejor circulación. Construido con materiales de alta calidad y una malla especial transpirable que te mantiene fresco todo el día.",
      "subcategoryId": 19,
      "price": 590,
      "stock": 5,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "4",
      "specs": {
        "details": [
          "Altura del respaldar ajustable,Soporte lumbar ajustable,Ángulo de inclinación y tensión ajustables,Mecanismo de control de lujo,Asiento deslizante con altura ajustable,Reposacabezas ajustable 3D,Apoyabrazos giratorio con brazo de aluminio 5 D"
        ],
        "dimensions": "74x58x66",
        "specifications": {
          "Base": "350mm",
          "Lift": "Class 4 gas lift",
          "Peso_de_la_silla": "21 kgs",
          "Certificación_BIFMA": "Si",
          "Material_del_respaldo": "Malla",
          "Peso_máximo_soportado_(silla)": "125 kgs"
        }
      } as Product["specs"],
      "images": [
        "chair-phaser-bl/phaser-black-1-01.png",
        "chair-phaser-bl/phaser-black-2-01.png",
        "chair-phaser-bl/phaser-black-3-01.png"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 20,
        "panama_otro": 20,
        "panama_ciudad": 0,
        "otras_provincias": 20
      },
      "display": true,
      "createdAt": new Date("2022-08-14T00:34:58.000Z"),
      "updatedAt": new Date("2022-10-05T17:39:55.000Z"),
      "createdBy": "lucas@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 7,
      "sku": "chair-function-bl",
      "skuGroup": "chair-function",
      "title": "Silla Ergonómica Function",
      "description": "Silla ergonómica de home office super avanzada con marco de aluminio y un respaldar 100% dinámico que se ajusta a tu espalda.  La única silla con soporte lumbar y soporte para la parte alta de la espalda que se adapta a tu cuerpo.  Brinda excelente soporte sin puntos de presión.  Es de malla premium completa (asiento y respaldar).  Diseñado para los profesionales más exigentes y ocupados que pasan más de 8 horas al día frente a la computadora. Su diseño centrado en el ser humano te ayuda a mantener una postura adecuada. Esta silla se siente igual de bien como se ve.  Construido solo con los mejores materiales disponible para que te dure un largo tiempo.",
      "subcategoryId": 19,
      "price": 649.99,
      "stock": 5,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "4",
      "specs": {
        "details": [
          "[]"
        ],
        "dimensions": "",
        "specifications": {}
      } as Product["specs"],
      "images": [
        "chair-function-bl/chair-function-1.png",
        "chair-function-bl/chair-function-2.png",
        "chair-function-bl/chair-function-3.png",
        "chair-function-bl/chair-function-4.png"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 20,
        "panama_otro": 20,
        "panama_ciudad": 0,
        "otras_provincias": 20
      },
      "display": true,
      "createdAt": new Date("2022-08-14T18:47:27.000Z"),
      "updatedAt": new Date("2022-10-05T17:41:06.000Z"),
      "createdBy": "lucas@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 8,
      "sku": "chair-xtc-gr",
      "skuGroup": "chair-xtc",
      "title": "Silla Ergonómica XTC",
      "description": "Silla ergonómica de home office para el profesional más exigente. Con su soporte lumbar dinámico, alta capacidad de ajuste / funcionalidad y su diseño centrado en el ser humano; la XTC proporciona un excelente soporte para toda la espalda ayudándote a mantener una mejor postura y un cuerpo más saludable. Construida con un marco trasero de aleación de aluminio sólido, materiales de la más alta calidad y una malla transpirable altamente resistente, esta silla te va a durar bastante tiempo. La mejor configuración de oficina no está completa sin la mejor silla.",
      "subcategoryId": 19,
      "price": 655,
      "stock": 2,
      "color": "gr",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "4",
      "specs": {
        "details": [
          "Malla especial transpirable y cómoda,Soporte lumbar dinámico,Ángulo y tensión del respaldar ajustable,Asiento deslizante,Apoyabrazos 4D,Marco trasero de aluminio,Mecanismo de bloqueo especial de aluminio"
        ],
        "dimensions": "",
        "specifications": {
          "Base": "350mm de aluminum aluminio",
          "Lift": "Class 4 gas lift",
          "Peso_de_la_silla": "22kgs",
          "Certificación_BIFMA": "Si",
          "Material_del_asiento": "Malla",
          "Material_del_respaldo": "Malla",
          "Peso_máximo_soportado_(silla)": "154kgs"
        }
      } as Product["specs"],
      "images": [
        "chair-xtc-gr/chair-xtc-1.png",
        "chair-xtc-gr/chair-xtc-2.png",
        "chair-xtc-gr/chair-xtc-3.png",
        "chair-xtc-gr/chair-xtc-4.png",
        "chair-xtc-gr/chair-xtc-dimensions.png"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 20,
        "panama_otro": 20,
        "panama_ciudad": 0,
        "otras_provincias": 20
      },
      "display": true,
      "createdAt": new Date("2022-08-14T01:34:01.000Z"),
      "updatedAt": new Date("2022-12-29T22:57:48.000Z"),
      "createdBy": "lucas@torus-digital.com",
      "updatedBy": "josemiguel@ergonomicadesk.com"
    },
    {
      "id": 9,
      "sku": "chair-stack-gr",
      "skuGroup": "chair-stack",
      "title": "Silla Ergonómica Stack",
      "description": "Una elegante silla de oficina ergonómica de malla completa con soporte lumbar dinámico. La silla se adapta a su espalda proporcionando un gran apoyo para su espalda.",
      "subcategoryId": 19,
      "price": 355,
      "stock": 30,
      "color": "gr",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "3 years",
      "specs": {
        "details": [
          "Asiento deslizante",
          "Asiento y respaldar de malla completo",
          "Mecanismo multifuncional con respaldo reclinable y función de bloqueo de 3 posiciones",
          "Base de aluminio de 350 mm con ruedas de nylon PU de 60 mm"
        ],
        "dimensions": "74x58x66",
        "specifications": {
          "Material": "Marco trasero de nylon + Malla de nylon",
          "Peso_soportado": "130kg",
          "Certificación_BIFMA": "Si"
        }
      } as Product["specs"],
      "images": [
        "chair-stack-gr/chair-stack-gr-1.jpeg",
        "chair-stack-gr/chair-stack-gr-1.jpg",
        "chair-stack-gr/chair-stack-gr-2.jpeg",
        "chair-stack-gr/chair-stack-gr-2.jpg",
        "chair-stack-gr/chair-stack-gr-3.jpg",
        "chair-stack-gr/chair-stack-gr-4.jpg",
        "chair-stack-gr/image - 2022-08-14T143230.047.png",
        "chair-stack-gr/stackk chairs332.png"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 20,
        "panama_otro": 20,
        "panama_ciudad": 0,
        "otras_provincias": 20
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2023-01-16T22:32:14.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 10,
      "sku": "stand-tablet-adjus-sl",
      "skuGroup": "stand-tablet-adjus",
      "title": "Soporte ajustable de tablets",
      "description": "Soporte de aluminio sólido para tus tabletas, celulares y consolas de videojuegos portátiles.   Mantén tu espacio de trabajo organizado con tus dispositivos a disposición listos para usar. ",
      "subcategoryId": 33,
      "price": 18,
      "stock": 33,
      "color": "sl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Universal. Funciona con todas las tabletas de tamaño hasta de 13 pulgadas incluyendo el iPad Pro / iPad Air / iPad mini / Samsung tablet / Nintendo Switch / Kindle E-reader /  iPhone 12 / iPhone 11 Max Pro / Samsung Galaxy  y otros",
          "Ajustable para diferentes ángulos y alturas",
          "Gomillas de silicona antideslizantes y antirayaduras"
        ],
        "dimensions": "13x11x8",
        "specifications": {
          "Material": "Aluminio",
          "Peso_del_producto": "180g",
          "Soporte_de_dispositivo": "4 - 12.9 pulgadas"
        }
      } as Product["specs"],
      "images": [
        "stand-tablet-adjus-sl/stand-tablet-adjus-sl-1.jpg",
        "stand-tablet-adjus-sl/stand-tablet-adjus-sl-2.jpg",
        "stand-tablet-adjus-sl/stand-tablet-adjus-sl-3.jpg",
        "stand-tablet-adjus-sl/stand-tablet-adjus-sl-4.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 11,
      "sku": "stand-cpu-under-bl",
      "skuGroup": "stand-cpu-under",
      "title": "Soporte de CPU para debajo de la mesa",
      "description": "El soporte de PC te permite colocar la PC debajo del escritorio sujetado al sobre de la mesa.  Ideal para espacios de trabajos reducidos y para mantener el lugar de trabajo más organizado.  ",
      "subcategoryId": 37,
      "price": 37,
      "stock": 18,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Seguro y estable",
          "Peso máximo de 30 kgs",
          "Brinda mayor ventilación a la pc",
          "Gira 360 grados"
        ],
        "dimensions": "37x18x18",
        "specifications": {
          "Material": "Metal",
          "Ajuste_de_altura": "30-53.3cm",
          "Peso_del_producto": "2.8kg",
          "Capacidad_de_carga": "0-30 kg"
        }
      } as Product["specs"],
      "images": [
        "stand-cpu-under-bl/stand-cpu-under-bl-1.jpg",
        "stand-cpu-under-bl/stand-cpu-under-bl-2.jpg",
        "stand-cpu-under-bl/stand-cpu-under-bl-3.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 4,
        "panama_otro": 4,
        "panama_ciudad": 1.5,
        "otras_provincias": 4
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 12,
      "sku": "chair-sprinter-bl",
      "skuGroup": "chair-sprinter",
      "title": "Silla Ergonomica Sprinter",
      "description": "  Silla ergonómica para el home office con acabado de malla completa (asiento y respaldar), soporte lumbar ajustable y un diseño moderno. Brinda buen soporte para toda la espalda ayudándote a mantener una buena postura. Reduce la tensión de las piernas con un diseño que permite una mejor circulación. Construido con materiales de alta calidad y una malla especial transpirable y elástica que te mantiene fresco todo el día.",
      "subcategoryId": 19,
      "price": 450,
      "stock": 5,
      "color": "bl",
      "size": null,
      "brand": "",
      "warranty": "4",
      "specs": {
        "details": [
          "Soporte lumbar ajustable,Ángulo de inclinación y tensión ajustables,Asiento deslizante con altura ajustable,Mecanismo de bloqueo de aluminio,Reposacabezas ajustable y removible,Apoyabrazos 4D"
        ],
        "dimensions": "",
        "specifications": {}
      } as Product["specs"],
      "images": [
        "chair-sprinter-bl/Asset 25.jpg",
        "chair-sprinter-bl/Asset 26.jpg",
        "chair-sprinter-bl/Asset 27.jpg",
        "chair-sprinter-bl/Asset 28.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 20,
        "panama_otro": 20,
        "panama_ciudad": 0,
        "otras_provincias": 20
      },
      "display": true,
      "createdAt": new Date("2022-08-31T18:35:36.000Z"),
      "updatedAt": new Date("2022-10-05T17:20:38.000Z"),
      "createdBy": "lucas@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 13,
      "sku": "frame-double-wh",
      "skuGroup": "frame-double",
      "title": "Base doble motor para standing desk",
      "description": "La base de altura ajustable de doble motor es ideal para una configuración de standing desk con sobre grande de hasta 220cm de largo o sobre pesado de madera sólida.  La base es rápida con una velocidad de 32 mm/s y silenciosa con ruido menor a <48 db.  Se adapta a cualquier sobre de mesa que tenga un largo entre 100-220 cm y un ancho entre 58-90 cm.  Incluye una pantalla con 3 memorias, tecnología anticolisión y 5 años de garantía. Ideal para tu home office of cualquier espacio de trabajo.  Es la mejor inversión que puedes hacer para tu salud y productividad.",
      "subcategoryId": 15,
      "price": 450,
      "stock": 20,
      "color": "wh",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "5 years",
      "specs": {
        "details": [
          "Tecnología anticolisión: el marco se detiene automáticamente si la mesa choca con un objeto",
          "Pantalla táctil con 3 memorias",
          "Los motores están ocultos dentro de las patas de la base",
          "Capacidad máxima de peso de 120 kg",
          "Distancia de altura: 70-120cm",
          "Se adapta a cualquier tablero de mesa con dimensiones: largo 100-220 cm y ancho 58-90 cm",
          "Muy silencioso con niveles de ruido <48 dB",
          "Se incluyen las instrucciones de montaje y todas las herramientas necesarias"
        ],
        "dimensions": "106x27.5x19.6",
        "specifications": {
          "Velocidad": "32mm/s",
          "Peso_máximo": "120kg",
          "Altura_máxima": "120 cm",
          "Altura_mínima": "70 cm",
          "Nivel_de_ruido": "<48dB",
          "Ancho_del_sobre": "58-90cm",
          "Largo_del_sobre": "100-220cm",
          "Peso_del_producto": "27kgs"
        }
      } as Product["specs"],
      "images": [
        "frame-double-wh/frame-double-wh-1.jpg",
        "frame-double-wh/frame-double-wh-2.jpg",
        "frame-double-wh/frame-double-wh-3.jpg",
        "frame-double-wh/frame-double-wh-4.jpg"
      ],
      "assembly": 10,
      "shipping": {
        "colon": 20,
        "panama_otro": 20,
        "panama_ciudad": 0,
        "otras_provincias": 20
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-11-29T16:34:26.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 14,
      "sku": "mouse-game-cabl-1-bl",
      "skuGroup": "mouse-game-cabl-1",
      "title": "Mouse RGB de alta precisión",
      "description": "Mouse de alta precisión y sensibilidad hasta 7200 DPI especial para los gamers. Con su diseño ergonómico y de honeycomb, el mouse se siente muy bien al usarse. ",
      "subcategoryId": 26,
      "price": 23,
      "stock": 24,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Luces RGB con diferentes efectos",
          "Diseño ergonómico de honeycomb para que tengas ventilación y no te suden las manos",
          "Sensibilidad ajustable 800 / 1600 / 2400 /  3200 / 4800 / 7200 DPI",
          "Sensor óptico de alta precisión",
          "Cable trenzado resistente",
          "Compatible con todos sistemas operativos incluyendo Windows / Linux / Mac",
          ""
        ]
      } as Product["specs"],
      "images": [
        "mouse-game-cabl-1-bl/mouse-game-cabl-1-bl-1.jpg",
        "mouse-game-cabl-1-bl/mouse-game-cabl-1-bl-2.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-05-30T22:25:03.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 15,
      "sku": "health-body-minigun-bl",
      "skuGroup": "health-body-minigun-bl",
      "title": "Mini massage gun",
      "description": "Esta pistola de masaje compacta de tejido profundo es el arma secreta en la lucha contra el dolor de cuello y espalda. Una vez que lo pruebes, entenderás de qué estamos hablando.",
      "subcategoryId": 32,
      "price": 33,
      "stock": 10,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Diseño compacto",
          "Recarga rápida",
          "Masaje de tejido profundo",
          "Acelera hasta 3200 rpms",
          "4 cabezales de masaje incluidos"
        ],
        "dimensions": "21x20.5x6.5",
        "specifications": {
          "Material": "ABS",
          "Velocidad": "1800-3200 rpm",
          "Peso_del_producto": "570g"
        }
      } as Product["specs"],
      "images": [
        "health-body-minigun-bl/health-body-minigun-bl-1.jpg",
        "health-body-minigun-bl/health-body-minigun-bl-2.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 16,
      "sku": "charge-usb-10port-bl",
      "skuGroup": "charge-usb-10port-bl",
      "title": "Cargador USB rápido de 10 puertos",
      "description": "Cargador de alta velocidad con 10 puertos USB de 10A cada uno.  ",
      "subcategoryId": 40,
      "price": 29,
      "stock": 19,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Compatibilidad universal",
          "compacto y ligero",
          "Luz led indicadora de carga",
          "Protección inteligente de sobre corriente / sobre voltaje y corto circuito",
          "construido con material antiflama",
          "Cable de 1.6 m",
          "Certificación CE/FCC/ROHS"
        ],
        "dimensions": "12x10x5",
        "specifications": {
          "Material": "ABS",
          "Peso_del_producto": "320g",
          "Número_de_puertos": "10"
        }
      } as Product["specs"],
      "images": [
        "charge-usb-10port-bl/charge-usb-10port-bl-1.jpg",
        "charge-usb-10port-bl/charge-usb-10port-bl-2.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 17,
      "sku": "chair-somatic-gr",
      "skuGroup": "chair-somatic",
      "title": "Silla Ergonómica Somatic",
      "description": "  Silla ergonómica para el home office con acabado de malla completa (asiento y respaldar), soporte lumbar ajustable y un diseño ergonomico. Brinda buen soporte para toda la espalda ayudándote a mantener una buena postura. Reduce la tensión de las piernas con un diseño que permite una mejor circulación. Construido con materiales de alta calidad y una malla especial transpirable y elástica que te mantiene fresco todo el día.",
      "subcategoryId": 19,
      "price": 450,
      "stock": 5,
      "color": "gr",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "4",
      "specs": {
        "details": [
          "Soporte lumbar ajustable,Ángulo de inclinación y tensión ajustables,Asiento deslizante con altura ajustable y ángulo ajustable,Mecanismo de bloqueo de 3 posiciones ,Reposacabezas ajustable, Apoyabrazos 3D, Malla especial transpirable"
        ],
        "dimensions": "",
        "specifications": {}
      } as Product["specs"],
      "images": [
        "chair-somatic-gr/Asset 4-100.jpg",
        "chair-somatic-gr/Asset 3-100.jpg",
        "chair-somatic-gr/Asset 2-100.jpg",
        "chair-somatic-gr/Asset 1-100.jpg",
        "chair-somatic-gr/Asset 5-100.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 0,
        "panama_otro": 0,
        "panama_ciudad": 0,
        "otras_provincias": 0
      },
      "display": true,
      "createdAt": new Date("2023-01-16T23:18:16.000Z"),
      "updatedAt": new Date("2023-01-16T23:18:17.491Z"),
      "createdBy": "lucas@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 18,
      "sku": "sound-head-anchead3-bl",
      "skuGroup": "sound-head-anchead3",
      "title": "Headphones bluetooth ANC 3",
      "description": "Headphones inalámbricos con cancelación de ruido activos.  Estos auriculares tienen un sonido de alta calidad y son muy cómodos al usarlos.",
      "subcategoryId": 25,
      "price": 32,
      "stock": 0,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Bluetooth 5.0",
          "ANC Active Noise Cancelling hasta 20 dbs",
          "28 horas de reproducción y recarga rápida",
          "Orejeras suaves y cómodas"
        ],
        "specifications": {
          "SNR": ">85dB",
          "BT Chip": "JL6955F",
          "Batería": "600mah",
          "BT version": "5.0",
          "Impendancia": "32ohm",
          "Tiempo_de_trabajo": "28hrs",
          "Potencia_de_salida": "90mw",
          "Diámetro_del_altavoz": "40mm",
          "Frecuencia_de_respuesta": "20hz - 20khz",
          "Material_de_las_orejeras": "corteza de albúmina",
          "Sensitividad_del_altavoz": "115dB",
          "Cancelación_activa_de_ruido": "yes",
          "Nivel_de_reducción_de_ruido": "20db"
        }
      } as Product["specs"],
      "images": [
        "sound-head-anchead3-bl/sound-head-anchead3-bl-1.jpg",
        "sound-head-anchead3-bl/sound-head-anchead3-bl-2.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 19,
      "sku": "top-mela-pecan-182",
      "skuGroup": "top-mela",
      "title": "Sobre de melamina",
      "description": "El sobre de mesa para tu standing desk. Hecho de MDF hidrófugo de 1 pulgada de grueso con un laminado de melamina de alta calidad.",
      "subcategoryId": 43,
      "price": 115,
      "stock": 3,
      "color": "pecan",
      "size": "182",
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Durables",
          "Resistente a la humedad",
          "Ligero",
          "Fácil de limpiar",
          "Difícil de rayar",
          "Resistente a  contacto con objetos calientes"
        ],
        "dimensions": "182x75x2.5",
        "specifications": {
          "Espesor": "1 pulgada",
          "Laminado": "Melamina",
          "Material": "MDF",
          "Hidrofóbico": "Si"
        }
      } as Product["specs"],
      "images": [
        "top-mela-pecan-182/top-mela-pecan-182-1.jpg"
      ],
      "assembly": 10,
      "shipping": {
        "colon": 20,
        "panama_otro": 20,
        "panama_ciudad": 0,
        "otras_provincias": 20
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-07-21T17:58:42.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "josemiguel@ergonomicadesk.com"
    },
    {
      "id": 20,
      "sku": "top-mela-ash-152",
      "skuGroup": "top-mela",
      "title": "Sobre de melamina",
      "description": "El sobre de mesa para tu standing desk. Hecho de MDF hidrófugo de 1 pulgada de grueso con un laminado de melamina de alta calidad.",
      "subcategoryId": 43,
      "price": 95,
      "stock": 3,
      "color": "ash",
      "size": "152",
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Durables",
          "Resistente a la humedad",
          "Ligero",
          "Fácil de limpiar",
          "Difícil de rayar",
          "Resistente a  contacto con objetos calientes"
        ],
        "dimensions": "152x75x2.5",
        "specifications": {
          "Espesor": "1 pulgada",
          "Laminado": "Melamina",
          "Material": "MDF",
          "Hidrofóbico": "Si"
        }
      } as Product["specs"],
      "images": [
        "top-mela-ash-152/top-mela-ash-152-1.jpg"
      ],
      "assembly": 10,
      "shipping": {
        "colon": 20,
        "panama_otro": 20,
        "panama_ciudad": 10,
        "otras_provincias": 20
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 21,
      "sku": "chair-radix-bl",
      "skuGroup": "chair-radix",
      "title": "Silla Ergonómica Radix",
      "description": "Silla ergonómica de home office con un diseño moderno,  altamente ajustable y súper cómodo con un asiento de espuma moldeada de alta densidad. Brinda una comodidad extrema y un excelente soporte para toda la espalda. Diseñado especialmente para profesionales que pasan muchas horas al día sentados frente a una computadora.",
      "subcategoryId": 19,
      "price": 440,
      "stock": 0,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "4 years",
      "specs": {
        "details": [
          "Respaldar y soporte lumbar con altura ajustable",
          "Ángulo de inclinación y tensión ajustables",
          "Asiento deslizante con altura ajustable",
          "Asiento de espuma moldeada de alta densidad",
          "Reposacabezas ajustable 4D",
          "Apoyabrazos giratorio 5D"
        ],
        "dimensions": "74x58x66",
        "specifications": {
          "Base": "350mm de aluminum base",
          "Lift": "Class 4 gas lift",
          "Cubiertas": "60mm de cubierta de cromo",
          "Ensamblado": "Requerido",
          "Peso_de_la_silla": "20.5 kgs",
          "Certificación_BIFMA": "Si",
          "Material_del_asiento": "Foam moldeada de alta densidad con malla",
          "Material_del_respaldo": "Malla",
          "Peso_máximo_soportado_(silla)": "125 kgs"
        }
      } as Product["specs"],
      "images": [
        "chair-radix-bl/chair-radix-bl-1.JPG",
        "chair-radix-bl/chair-radix-bl-2.JPG",
        "chair-radix-bl/chair-radix-bl-3.JPG",
        "chair-radix-bl/chair-radix-bl-4.JPG",
        "chair-radix-bl/chair-radix-bl-5.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 20,
        "panama_otro": 20,
        "panama_ciudad": 0,
        "otras_provincias": 20
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-08-17T16:31:05.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 22,
      "sku": "cable-grommet-50-bl",
      "skuGroup": "cable-grommet-50",
      "title": "Grommets 5cm",
      "description": "El ojal de 50 mm es ideal para organizar sus cables. Le ayuda con la gestión de sus cables.",
      "subcategoryId": 5,
      "price": 6,
      "stock": 50,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Hecho de metal de zinc",
          "Funciona con cualquier tablero de mesa",
          "Necesita instalación"
        ],
        "dimensions": "5x6x8",
        "specifications": {
          "Material": "Zinc",
          "Peso_del_producto": "200g"
        }
      } as Product["specs"],
      "images": [
        "cable-grommet-50-bl/cable-grommet-50-bl-1.jpg"
      ],
      "assembly": 25,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 23,
      "sku": "hubs-usbc-6in1-2-gr",
      "skuGroup": "hubs-usbc-6in1-2",
      "title": "Hub Tipo C 6 en 1 con HDMI 4K",
      "description": "El USBC 6 en 1 funciona con todas las macbooks, ipads y todos los otros dispositivos más recientes. Expande tu computador con conexiones adicionales. Cuenta con las siguientes entradas: 3 x USB 3.0 / 1 x 4k HDMI / 2 x SD Card",
      "subcategoryId": 14,
      "price": 21,
      "stock": 17,
      "color": "gr",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Plug & Play",
          "Compatibilidad universal con los dispositivos con conexiones tipo c",
          "Incluye entrada HDMI 4K",
          "Carcasa de aluminio"
        ],
        "dimensions": "10.31x16.4x2.2",
        "specifications": {
          "Material": "Aluminio",
          "Resolución": "4K x 2K",
          "Peso_del_producto": "86g",
          "Número_de_Puertos": "6"
        }
      } as Product["specs"],
      "images": [
        "hubs-usbc-6in1-2-gr/hubs-usbc-6in1-2-gr-1.jpg",
        "hubs-usbc-6in1-2-gr/hubs-usbc-6in1-2-gr-2.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 24,
      "sku": "chair-jargonX-bl",
      "skuGroup": "chair-jargonX-bl",
      "title": "  Silla Ergonómica Jargon X",
      "description": "Silla ergonómica para el home office con soporte lumbar dinámico, de malla completa (silla y asiento) y altamente ajustable. Diseñado para brindarte el mejor soporte para tu espalda durante largas horas de trabajo. Construido con los mejores materiales incluyendo una malla especial transpirable que te mantiene fresco todo el día.",
      "subcategoryId": 19,
      "price": 475,
      "stock": 5,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "4",
      "specs": {
        "details": [
          ",Soporte lumbar dinámico,Ángulo de inclinación y tensión ajustables,Asiento deslizante con altura ajustable,Reposacabezas 3D,Apoyabrazos 4D,Asiento y respaldar de malla premium"
        ],
        "dimensions": "",
        "specifications": {}
      } as Product["specs"],
      "images": [
        "chair-jargonX-bl/Asset 6-100.jpg",
        "chair-jargonX-bl/Asset 7-100.jpg",
        "chair-jargonX-bl/Asset 8-100.jpg",
        "chair-jargonX-bl/Asset 9-100.jpg",
        "chair-jargonX-bl/ssdfsdfdsfdsfdsfds-100 (1).jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 0,
        "panama_otro": 0,
        "panama_ciudad": 0,
        "otras_provincias": 0
      },
      "display": true,
      "createdAt": new Date("2023-01-16T23:06:35.000Z"),
      "updatedAt": new Date("2023-01-18T22:37:12.000Z"),
      "createdBy": "lucas@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 25,
      "sku": "frame-3stage-bl",
      "skuGroup": "frame-3stage",
      "title": "Base doble motor X para standing desk",
      "description": "La base de altura ajustable doble motor X es la solución más potente y rápida con un diseño de patas triple etapa que le da mayor funcionalidad. Tiene un rango de movimiento de altura de 60-125 cm, capacidad de peso de hasta 140 kgs y una velocidad de 38 mm/s. Ideal para personas de estatura más baja o alta, para poner sobres grandes de hasta 220cm de largo y sobres pesados de madera sólida.",
      "subcategoryId": 15,
      "price": 465,
      "stock": 8,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "5 years",
      "specs": {
        "details": [
          "Tecnología anticolisión: el marco se detiene automáticamente si la mesa choca con un objeto",
          "Pantalla táctil con 3 memorias",
          "Se incluyen las instrucciones de montaje y todas las herramientas necesarias",
          "Capacidad máxima de peso de 140 kg",
          "Distancia de altura: 60-125 cm",
          "Muy silencioso con niveles de ruido <48dB"
        ],
        "dimensions": "106x35x19",
        "specifications": {
          "Velocidad": "38 mm/s",
          "Peso_máximo": "140kg",
          "Altura_máxima": "125 cm",
          "Altura_mínima": "60 cm",
          "Ancho_del_sobre": "58-90cm",
          "Largo_del_sobre": "100-220cm",
          "Nivel_de _ruido": "<48dB",
          "Peso_del_producto": "27kgs"
        }
      } as Product["specs"],
      "images": [
        "frame-3stage-bl/frame-3stage-bl-1.jpg",
        "frame-3stage-bl/frame-3stage-bl-2.jpg",
        "frame-3stage-bl/frame-3stage-bl-3.jpg",
        "frame-3stage-bl/frame-3stage-bl-4.jpg",
        "frame-3stage-bl/frame-3stage-bl-5.jpg",
        "frame-3stage-bl/frame-3stage-bl-6.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 20,
        "panama_otro": 20,
        "panama_ciudad": 0,
        "otras_provincias": 20
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-11-29T16:34:01.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 26,
      "sku": "Chair-anion-gr",
      "skuGroup": "chair-anion",
      "title": "Silla Ergonomica Anion",
      "description": "Silla ergonómica de home office de alta calidad con marco de aluminio y mecanismo de bloqueo avanzado, altamente ajustable con soporte lumbar ajustable y un acabado de malla especial (asiento y respaldar).  Diseñado para los profesionales más exigentes que pasan varias horas al día trabajando.  Su diseño centrado en el ser humano brinda un excelente soporte para toda la espalda ayudándote a mantener una postura adecuada. Esta silla se siente igual de bien como se ve.  Construido solo con los mejores materiales disponible para que te dure un largo tiempo.",
      "subcategoryId": 19,
      "price": 650,
      "stock": 5,
      "color": "gr",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "4",
      "specs": {
        "details": [
          "Marco de Aluminio,Asiento deslizante con altura ajustable,ángulo de inclinación y tensión ajustables,Reposabrazos 4D,Reposacabezas 3D,Soporte lumbar ajustable,Base de aluminio,mecanismo de bloqueo avanzado,Asiento y respaldar de malla especial transpirable y elástica"
        ],
        "dimensions": "",
        "specifications": {}
      } as Product["specs"],
      "images": [
        "Chair-anion-gr/Asset 15.jpg",
        "Chair-anion-gr/Asset 16.jpg",
        "Chair-anion-gr/Asset 17.jpg",
        "Chair-anion-gr/Asset 18.jpg",
        "Chair-anion-gr/Asset 19.jpg",
        "Chair-anion-gr/Asset 22.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 20,
        "panama_otro": 20,
        "panama_ciudad": 0,
        "otras_provincias": 20
      },
      "display": true,
      "createdAt": new Date("2022-08-31T17:00:12.000Z"),
      "updatedAt": new Date("2022-10-05T17:38:01.000Z"),
      "createdBy": "lucas@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 27,
      "sku": "stool-wobble-bl",
      "skuGroup": "stool-wobble",
      "title": "Wobble stool",
      "description": "El wobble stool es una solución especial para personas con problemas de espalda.  El diseño sin respaldar mantiene todos los músculos de tu cuerpo involucrados sobre todo el core ayudándote a corregir tu postura.  Es recomendable para una configuración ergonómica de tu home office.  ",
      "subcategoryId": 9,
      "price": 135,
      "stock": 8,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "2 years",
      "specs": {
        "details": [
          "Diseño liviano",
          "Altura ajustable",
          "Auto equilibrado",
          "La base curva antideslizante ofrece un amplio rango de movimiento",
          "El asiento es de espuma de alta densidad con cubierta de vinilo para que sea fresco y  fácil de limpiar"
        ],
        "dimensions": "72x42x20",
        "specifications": {
          "Peso": "11.5kg",
          "Material": "PP + Asiento de foam moldeado",
          "Ajustamiento": "15 cm Altura ajustable - 30 grado de inclinación"
        }
      } as Product["specs"],
      "images": [
        "stool-wobble-bl/stool-wobble-bl-1.jpg",
        "stool-wobble-bl/stool-wobble-bl-2.jpg",
        "stool-wobble-bl/stool-wobble-bl-3.jpg",
        "stool-wobble-bl/stool-wobble-bl-4.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 20,
        "panama_otro": 20,
        "panama_ciudad": 0,
        "otras_provincias": 20
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-08-26T02:51:31.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 28,
      "sku": "chair-executive-stratus-gr",
      "skuGroup": "chair-executive-stratus",
      "title": "Silla Ejecutiva Ergónomica Stratus",
      "description": "Silla ejecutiva de cuero PU de alta calidad.  Diseño moderno y altamente cómoda.",
      "subcategoryId": 1,
      "price": 350,
      "stock": 5,
      "color": "gr",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "4",
      "specs": {
        "details": [
          "[Cuero PU de alta calidad,asiento de foam de alta densidad,BIFMA certified,gaslift class 4,base de alumino de 350mm con ruedas de nylon de 60mm,  mechani]"
        ],
        "dimensions": "",
        "specifications": {}
      } as Product["specs"],
      "images": [
        "chair-executive-stratus-gr/Asset 11-100 (1).jpg",
        "chair-executive-stratus-gr/qwdqwdqwd-100.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 0,
        "panama_otro": 0,
        "panama_ciudad": 0,
        "otras_provincias": 0
      },
      "display": true,
      "createdAt": new Date("2023-01-18T22:35:52.000Z"),
      "updatedAt": new Date("2023-01-18T22:35:54.363Z"),
      "createdBy": "lucas@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 29,
      "sku": "light-arm-bl",
      "skuGroup": "light-arm",
      "title": "Brazo Lámpara LED",
      "description": "Funciona muy bien para cualquier configuración de espacio de trabajo. Tiene una fuente de luz de alta calidad para ayudar a proteger los ojos.  El brazo es largo y flexible para que puedas colocarlo en el ángulo ideal para que alumbre desde arriba.  ",
      "subcategoryId": 18,
      "price": 27,
      "stock": 29,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Brazo articulado de gran flexibilidad",
          "Ajusta la intensidad y el color de la luz de 3200k a 6500k",
          "CRI> 95",
          "sin parpadeo",
          "Bajo consumo energético"
        ],
        "dimensions": "10x10x10",
        "specifications": {
          "Material": "metal",
          "Vida_útil": "50,000 hours",
          "Fuente_de_la_luz": "LED",
          "Peso_del_producto": "800g",
          "Entrada_de_voltaje": "110V",
          "Temperatura_del_color": "3200k-6500k"
        }
      } as Product["specs"],
      "images": [
        "light-arm-bl/light-arm-bl-1.jpg",
        "light-arm-bl/light-arm-bl-2.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-11-29T16:35:04.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 30,
      "sku": "top-glass-152",
      "skuGroup": "top-glass",
      "title": "Sobre de vidrio templado",
      "description": "Sobre de mesa de vidrio templado de 10mm de grosor.  Es una solución moderna, fina y práctica. Viene con agujeros listos para adaptarse a las bases de standing desks de Ergonomica.  Pedido especial, por favor contactarnos al whatsapp par poner una orden",
      "subcategoryId": 43,
      "price": 195,
      "stock": 0,
      "color": null,
      "size": "152",
      "brand": "Ergonomica",
      "warranty": "2 years",
      "specs": {
        "details": [
          "Vidrio templado claro de 10 mm de espesor con bordes biselados"
        ],
        "dimensions": "152x75x2.5",
        "specifications": {
          "Espesor": "10 mm",
          "Material": "Vidrio templado"
        }
      } as Product["specs"],
      "images": [
        "top-glass-152/top-glass-152-1.jpg"
      ],
      "assembly": 10,
      "shipping": {
        "colon": 20,
        "panama_otro": 20,
        "panama_ciudad": 0,
        "otras_provincias": 20
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 31,
      "sku": "charge-wireless-stand-bl",
      "skuGroup": "charge-wireless-stand",
      "title": "Soporte de celular con cargador inalámbrico",
      "description": "Un soporte de cargador inalámbrico para su teléfono. Mejore tu ergonomía mientras carga su teléfono al mismo tiempo.",
      "subcategoryId": 12,
      "price": 9,
      "stock": 17,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Un simple soporte inalámbrico para cargar el teléfono",
          "Funciona con cualquier dispositivo compatible con Qi como Iphone/ Android y cualquier teléfono nuevo modelo"
        ],
        "dimensions": "12x10x13",
        "specifications": {
          "Material": "ABS material de protección del medio ambiente",
          "Peso_del_producto": "150g"
        }
      } as Product["specs"],
      "images": [
        "charge-wireless-stand-bl/charge-wireless-stand-bl-1.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 32,
      "sku": "top-wood-tiger-121",
      "skuGroup": "top-wood",
      "title": "Sobre de madera natural",
      "description": "Sobre de mesa hecho de madera sólida Tigerwood, Goncalo Alves, de Panamá con un acabado semi-mate. Las vetas de esta madera son realmente increíbles. Transforma tu standing desk en una obra de arte única. Esta madera es dura, densa y muy duradera.",
      "subcategoryId": 43,
      "price": 220,
      "stock": 0,
      "color": "tiger",
      "size": "121",
      "brand": "Ergonomica",
      "warranty": "2 years",
      "specs": {
        "details": [
          "Madera sólida de Panamá de origen ético",
          "Acabado con 6 capas de poliuretano semi mate",
          "1.5 pulgadas de grosor con bordes biselados"
        ],
        "dimensions": "121x60x2.5",
        "specifications": {
          "Acabado": "6 capas de poliuretano semi mate",
          "Espesor": "1.5 pulgadas",
          "Material": "Madera Tropical dura"
        }
      } as Product["specs"],
      "images": [
        "top-wood-tiger-121/top-wood-tiger-121-1.jpg"
      ],
      "assembly": 10,
      "shipping": {
        "colon": 20,
        "panama_otro": 20,
        "panama_ciudad": 0,
        "otras_provincias": 20
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-05-31T20:58:31.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 33,
      "sku": "stand-laptop-x-gr",
      "skuGroup": "stand-laptop-x",
      "title": "Soporte vertical X para laptop",
      "description": "El soporte vertical para laptops permite colocar tu laptop cerrada en posición vertical sobre el escritorio. Ayuda a mantener tu escritorio organizado y a maximizar el espacio de trabajo. Es perfecto para configuraciones con pantalla grande, múltiple pantallas o para espacios reducidos.",
      "subcategoryId": 27,
      "price": 29,
      "stock": 28,
      "color": "gr",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Hecho de aleación de aluminio sólido de alta calidad",
          "Diseño moderno y elegante",
          "Aumenta el flujo de aire",
          "Compatible con todos los laptops",
          "Base de silicona para evitar rayones en el sobre"
        ],
        "dimensions": "20x10x10",
        "specifications": {
          "Material": "Aluminio",
          "Ajuste_de_anchura": ".5cm - 2.8cm",
          "Peso_del_producto": "500g"
        }
      } as Product["specs"],
      "images": [
        "stand-laptop-x-gr/stand-laptop-x-gr-1.jpg",
        "stand-laptop-x-gr/stand-laptop-x-gr-2.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 34,
      "sku": "stand-laptop-adjus-sl",
      "skuGroup": "stand-laptop-adjus",
      "title": "Soporte ajustable para laptop",
      "description": "El soporte ajustable para laptop te permite ajustar la altura y el ángulo. Ayuda a mantener tu escritorio organizado y maximizar tu espacio de trabajo. Es el complemento perfecto para la configuración de tu standing desk permitiendote trabajar fluidamente con otros monitores.  ",
      "subcategoryId": 27,
      "price": 35,
      "stock": 0,
      "color": "sl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Aleación de aluminio de alta calidad",
          "Altura y ángulo ajustables",
          "Altura máxima de 11 pulgadas",
          "Compatible con todos los laptops de 10 a 17 pulgadas",
          "Proporciona una buena ventilación",
          "Fácil de plegar y transportar"
        ],
        "dimensions": "32x23x8",
        "specifications": {
          "Material": "Aluminio",
          "Peso_del_producto": "1040g"
        }
      } as Product["specs"],
      "images": [
        "stand-laptop-adjus-sl/stand-laptop-adjus-sl-1.jpg",
        "stand-laptop-adjus-sl/stand-laptop-adjus-sl-2.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 6,
        "panama_otro": 6,
        "panama_ciudad": 1.5,
        "otras_provincias": 6
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-12-29T22:51:54.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "josemiguel@ergonomicadesk.com"
    },
    {
      "id": 35,
      "sku": "cabinet-3drawer-wh",
      "skuGroup": "cabinet-3drawer",
      "title": "Archivador compacto de 3 gavetas",
      "description": "El archivador de 3 cajones tiene el tamaño perfecto para caber debajo de tu escritorio para incorporarlo con tu flujo de trabajo. Los dos primeros cajones están hechos para todos sus suministros de oficina. El último armario es para almacenar los archivos.",
      "subcategoryId": 39,
      "price": 170,
      "stock": 10,
      "color": "wh",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Bloqueo con llave",
          "Acero laminado en frío de alta calidad",
          "Pintura de recubrimiento en polvo electrostático",
          "Impermeable y resistente a la humedad",
          "Muy estable",
          "Capacidad de peso: 125 kgs"
        ],
        "dimensions": "60x39x52",
        "specifications": {
          "Material": "Placa de acero laminado en frío",
          "Peso_del_producto": "19kg"
        }
      } as Product["specs"],
      "images": [
        "cabinet-3drawer-wh/cabinet-3drawer-wh-1.jpg",
        "cabinet-3drawer-wh/cabinet-3drawer-wh-2.jpg",
        "cabinet-3drawer-wh/cabinet-3drawer-wh-3.jpg",
        "cabinet-3drawer-wh/cabinet-3drawer-wh-4.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 15,
        "panama_otro": 15,
        "panama_ciudad": 0,
        "otras_provincias": 15
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-11-29T16:35:24.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 36,
      "sku": "hubs-adap-usbctohdmi-bl",
      "skuGroup": "hubs-adap-usbctohdmi",
      "title": "Adaptador Tipo C a HDMI",
      "description": "Adaptador tipo C a HDMI con puertos de carga USB y PD adicionales. Contiene los siguientes puertos: 1x HDMI 1x USB 3.0 1x USB C",
      "subcategoryId": 22,
      "price": 12,
      "stock": 18,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Resolución 4K",
          "puertos de USB y PD adicionales"
        ],
        "dimensions": "18x8.2x2",
        "specifications": {
          "Material": "Aluminio",
          "Peso_del_producto": "44.2g",
          "Número_de_puertos": "3"
        }
      } as Product["specs"],
      "images": [
        "hubs-adap-usbctohdmi-bl/hubs-adap-usbctohdmi-bl-1.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 37,
      "sku": "chair-binary-gr",
      "skuGroup": "chair-binary",
      "title": "Silla Ergonómica Binary",
      "description": "Silla ergonómica para el home office con acabado de malla completa (asiento y respaldar), moderna, altamente ajustable y súper cómoda. Diseñado especialmente para personas que pasan muchas horas trabajando frente a la computadora. Brinda un excelente soporte para toda la espalda ayudándote a mantener una buena postura. Reduce la tensión de las piernas con un diseño que permite una mejor circulación. Construido con materiales de alta calidad y una malla especial transpirable que te mantiene fresco todo el día.",
      "subcategoryId": 19,
      "price": 495,
      "stock": 0,
      "color": "gr",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "4",
      "specs": {
        "details": [
          "Respaldar y soporte lumbar de altura ajustable,Ángulo de inclinación y tensión ajustables,Asiento deslizante con altura del asiento ajustable,Panel de control con una manija y botones,Soporte lumbar ajustable,Reposacabezas 3D,Reposabrazos 4D"
        ],
        "dimensions": "74x58x66",
        "specifications": {
          "Base": "350mm aluminio",
          "Peso_de_la_silla": "21 kgs",
          "Certificación_BIFMA": "Si",
          "Material_del_asiento": "Malla",
          "Material_del_respaldo": "Malla",
          "Peso_máximo_soportado_(silla)": "125 kgs"
        }
      } as Product["specs"],
      "images": [
        "chair-binary-gr/binary-gray-1.png",
        "chair-binary-gr/binary-gray-2.png",
        "chair-binary-gr/binary-gray-3.png"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 20,
        "panama_otro": 20,
        "panama_ciudad": 0,
        "otras_provincias": 20
      },
      "display": true,
      "createdAt": new Date("2022-08-14T00:50:49.000Z"),
      "updatedAt": new Date("2022-12-29T22:56:15.000Z"),
      "createdBy": "lucas@torus-digital.com",
      "updatedBy": "josemiguel@ergonomicadesk.com"
    },
    {
      "id": 38,
      "sku": "stand-arm-alum-double-gr",
      "skuGroup": "stand-arm-alum-double",
      "title": "Brazo de aluminio para doble monitor",
      "description": "El brazo de aluminio para dos monitores te permite ajustar tus pantallas a la altura, profundidad y ángulo de visión correctos reduciendo la tensión de tu cuello.   El brazo es altamente ajustable y utiliza un mecanismo de resorte neumático de contrapeso dándote la sensación que el monitor estuviera flotando. Solo mueves la pantalla y se queda en el lugar donde lo dejastes. Es el complemento perfecto para la configuración de tu standing desk en el home office. ",
      "subcategoryId": 2,
      "price": 87,
      "stock": 34,
      "color": "gr",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "2 years",
      "specs": {
        "details": [
          "Aplicación universal. Funciona con todas las pantallas VESA de tamaño 13 a 32 pulgadas",
          "Totalmente ajustable. El monitor puede girar 360 grados a orientación vertical y horizontal",
          "mecanismo de resorte de gas de contrapeso robusto",
          "Gestión de cables",
          "Fácil instalación. Todas las herramientas necesarias están incluidas",
          "Dos opciones de montaje: sistema de abrazadera ajustable (clamp on) o con ojal (grommet)"
        ],
        "dimensions": "41x31x17",
        "specifications": {
          "Giro": "180°",
          "Vesa": "7.5x7.5 and 10x10",
          "Material": "Aluminio",
          "Mecanismo": "Resorte de gas",
          "Rotación": "360°",
          "Inclinación": "+90° to -90°",
          "Min-max_altura": "17-48cm",
          "Peso_del_producto": "5kg",
          "Capacidad_de_carga": "2-9kg por brazo",
          "Tamaño_de_pantalla": "13-32in",
          "Espesor_del_escritorio": "1-8cm"
        }
      } as Product["specs"],
      "images": [
        "stand-arm-alum-double-gr/stand-arm-alum-double-bl-1.jpg",
        "stand-arm-alum-double-gr/stand-arm-alum-double-bl-2.jpg",
        "stand-arm-alum-double-gr/stand-arm-alum-double-bl-3.jpg",
        "stand-arm-alum-double-gr/stand-arm-alum-double-bl-4.jpg",
        "stand-arm-alum-double-gr/stand-arm-alum-double-bl-5.jpg",
        "stand-arm-alum-double-gr/stand-arm-alum-double-bl-6.jpg"
      ],
      "assembly": 10,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 39,
      "sku": "monitor-lg-27mp60g-b-bl",
      "skuGroup": "monitor-lg-27mp60g-b",
      "title": "Monitor LG de 27 pulgadas Full HD IPS ",
      "description": "El monitor LG con la tecnología IPS destaca el rendimiento de las pantallas de cristal líquido. Los tiempos de respuesta se acortan, se mejora la reproducción del color y los usuarios pueden ver la pantalla en ángulos amplios.",
      "subcategoryId": 23,
      "price": 215,
      "stock": 0,
      "color": "bl",
      "size": null,
      "brand": "LG",
      "warranty": "3 years",
      "specs": {
        "details": [
          "Pantalla Full HD IPS",
          "Diseño sin borde",
          "AMD FreeSync™",
          "MBR (Reducción de desenfoque de movimiento) de 1ms",
          "Modo de lectura sin parpadeos",
          "Control en pantalla"
        ],
        "specifications": {
          "Brillo": "250_ cd/m2",
          "Tamaño": "27in",
          "Frequencia": "75hz",
          "Antireflejo": "si",
          "Resolución": "1920_x_1080",
          "Tipo_de_panel": "IPS",
          "Ángulo_de_visión": "178˚(R/L)_78˚(U/D)",
          "Tiempo_de_respuesta": "5ms",
          "Índice_de_contraste": "1000:1",
          "Relación_de_contraste": "600:1"
        }
      } as Product["specs"],
      "images": [
        "monitor-lg-27mp60g-b-bl/monitor-lg-27mp60g-b-bl-1.jpg",
        "monitor-lg-27mp60g-b-bl/monitor-lg-27mp60g-b-bl-2.jpg",
        "monitor-lg-27mp60g-b-bl/monitor-lg-27mp60g-b-bl-3.jpg",
        "monitor-lg-27mp60g-b-bl/monitor-lg-27mp60g-b-bl-4.jpg",
        "monitor-lg-27mp60g-b-bl/monitor-lg-27mp60g-b-bl-5.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 20,
        "panama_otro": 20,
        "panama_ciudad": 4,
        "otras_provincias": 20
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 40,
      "sku": "light-ambient-ch",
      "skuGroup": "light-ambient",
      "title": "Luz de tungsteno para el ambiente",
      "description": "La lámpara de ambiente con bombilla de tungsteno crea un ambiente acogedor para su entorno de trabajo.",
      "subcategoryId": 18,
      "price": 27,
      "stock": 18,
      "color": "ch",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Bombilla de tungsteno",
          "Ajusta la intensidad de luz",
          "Recargable"
        ],
        "dimensions": "9.6x9.6x15",
        "specifications": {
          "Poder": "5W",
          "Batería": "1800mAh",
          "Material": "ABS+PS",
          "Fuente_de_poder": "USB Connector",
          "Fuente_de_la_luz": "Bombilla de filamento de tungsteno",
          "Peso_del_producto": "500g",
          "Tiempo_de_trabajo": "6-8 hours",
          "Temperatura_del_color": "2700k"
        }
      } as Product["specs"],
      "images": [
        "light-ambient-ch/light-ambient-ch-1.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 6,
        "panama_otro": 6,
        "panama_ciudad": 4,
        "otras_provincias": 6
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 41,
      "sku": "top-glass-182",
      "skuGroup": "top-glass",
      "title": "Sobre de vidrio templado",
      "description": "Sobre de mesa de vidrio templado de 10mm de grosor.  Es una solución moderna, fina y práctica. Viene con agujeros listos para adaptarse a las bases de standing desks de Ergonomica.  Pedido especial, por favor contactarnos al whatsapp par poner una orden",
      "subcategoryId": 43,
      "price": 230,
      "stock": 0,
      "color": null,
      "size": "182",
      "brand": "Ergonomica",
      "warranty": "2 years",
      "specs": {
        "details": [
          "Vidrio templado claro de 10 mm de espesor con bordes biselados"
        ],
        "dimensions": "182x75x2.5",
        "specifications": {
          "Espesor": "10 mm",
          "Material": "Vidrio templado"
        }
      } as Product["specs"],
      "images": [
        "top-glass-182/top-glass-182-1.jpg"
      ],
      "assembly": 10,
      "shipping": {
        "colon": 20,
        "panama_otro": 20,
        "panama_ciudad": 0,
        "otras_provincias": 20
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 42,
      "sku": "top-wood-purple-152",
      "skuGroup": "top-wood",
      "title": "Sobre de madera natural",
      "description": "Sobre de mesa hecho de madera sólida de Nazareno panameño con un acabado semi-mate de poliuretano.   El Nazareno Peltogyne purpure Pittier es una madera dura, densa y pesada de color morado. Es un sobre que te va a durar toda la vida.",
      "subcategoryId": 43,
      "price": 275,
      "stock": 0,
      "color": "purple",
      "size": "152",
      "brand": "Ergonomica",
      "warranty": "2 years",
      "specs": {
        "details": [
          "Madera sólida de Panamá de origen ético",
          "Acabado con 6 capas de poliuretano semi mate",
          "1.5 pulgadas de grosor con bordes biselados"
        ],
        "dimensions": "152x75x2.5",
        "specifications": {
          "Acabado": "6 capas de poliuretano semi mate",
          "Espesor": "1.5 pulgadas",
          "Material": "Madera Tropical dura"
        }
      } as Product["specs"],
      "images": [
        "top-wood-purple-152/top-wood-purple-152-1.jpg"
      ],
      "assembly": 10,
      "shipping": {
        "colon": 20,
        "panama_otro": 20,
        "panama_ciudad": 0,
        "otras_provincias": 20
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-05-31T20:59:02.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 43,
      "sku": "stand-tablet-arm-sl",
      "skuGroup": "stand-tablet-arm",
      "title": "Brazo de aluminio ajustable para tablets",
      "description": "Brazo de aluminio ajustable para tablets o celulares.   Es altamente ajustable y puede rotar en 360 grados. Funciona con tSe adapta a cualquier sobre de mesa con su sistema de clamp on.  ",
      "subcategoryId": 33,
      "price": 35,
      "stock": 14,
      "color": "sl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1",
      "specs": {
        "details": [
          "Universal. Funciona con todas las tabletas de tamaño hasta de 13 pulgadas incluyendo el iPad Pro / iPad Air / iPad mini / Samsung tablet / Nintendo Switch / Kindle E-reader /  iPhone 12 / iPhone 11 Max Pro / Samsung Galaxy  y otros,Ajustable para diferentes ángulos y alturas, sistema de clamp on "
        ],
        "dimensions": "78cm",
        "specifications": {}
      } as Product["specs"],
      "images": [
        "stand-tablet-arm-sl/Asset 7 (1).jpg",
        "stand-tablet-arm-sl/ergerherherh.jpg",
        "stand-tablet-arm-sl/Asset 5.jpg",
        "stand-tablet-arm-sl/Asset 4.jpg",
        "stand-tablet-arm-sl/sdsdfgsdg.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 6,
        "panama_otro": 6,
        "panama_ciudad": 1.5,
        "otras_provincias": 6
      },
      "display": true,
      "createdAt": new Date("2022-09-17T20:32:47.000Z"),
      "updatedAt": new Date("2022-09-17T20:46:08.000Z"),
      "createdBy": "lucas@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 44,
      "sku": "top-mela-ash-121",
      "skuGroup": "top-mela",
      "title": "Sobre de melamina",
      "description": "El sobre de mesa para tu standing desk. Hecho de MDF hidrófugo de 1 pulgada de grueso con un laminado de melamina de alta calidad.",
      "subcategoryId": 43,
      "price": 65,
      "stock": 3,
      "color": "ash",
      "size": "121",
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Durables",
          "Resistente a la humedad",
          "Ligero",
          "Fácil de limpiar",
          "Difícil de rayar",
          "Resistente a  contacto con objetos calientes"
        ],
        "dimensions": "121x60x2.5",
        "specifications": {
          "Espesor": "1 pulgada",
          "Laminado": "Melamina",
          "Material": "MDF",
          "Hidrofóbico": "Si"
        }
      } as Product["specs"],
      "images": [
        "top-mela-ash-121/top-mela-ash-121-1.jpg"
      ],
      "assembly": 10,
      "shipping": {
        "colon": 15,
        "panama_otro": 15,
        "panama_ciudad": 10,
        "otras_provincias": 15
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 45,
      "sku": "chair-synapse-bl",
      "skuGroup": "chair-synapse",
      "title": "Silla Ergonómica Synapse",
      "description": "Silla ergonómica de home office con un diseño moderno, respaldar de malla y asiento de espuma moldeada de alta densidad de 8cm de grueso. Esta silla brinda una comodidad extrema y un excelente soporte para toda la espalda. Diseñado especialmente para profesionales que pasan muchas horas al día sentados frente a una computadora.",
      "subcategoryId": 19,
      "price": 230,
      "stock": 20,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "4",
      "specs": {
        "details": [
          "[BIFMA certified, asiento de espuma moldeada de 8cm de grueso, mecanísmo de bloqueo syncro tilt con 5 posiciones reposabrazos 3D, class 4 gas lift, reposacabezas,asiento deslizable, soporte lumbar, base de nylon de 350mm, ruedas de nylon de60mm, ]"
        ],
        "dimensions": "",
        "specifications": {}
      } as Product["specs"],
      "images": [
        "chair-synapse-bl/efwefwefw-100.jpg",
        "chair-synapse-bl/regergergerg-100.jpg",
        "chair-synapse-bl/rherherherh-100.jpg",
        "chair-synapse-bl/wefef-100.jpg",
        "chair-synapse-bl/wefwewfwgwrgrg-100.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 0,
        "panama_otro": 0,
        "panama_ciudad": 0,
        "otras_provincias": 0
      },
      "display": true,
      "createdAt": new Date("2023-01-18T23:26:16.000Z"),
      "updatedAt": new Date("2023-02-28T20:27:52.000Z"),
      "createdBy": "lucas@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 46,
      "sku": "health-body-backmass-br",
      "skuGroup": "health-body-backmass-br",
      "title": "Masajeador de espalda compacto 1",
      "description": "Un masajeador de espalda compacto pero potente. Úsalo para liberar esos puntos de presión y nudos difíciles de alcanzar.",
      "subcategoryId": 32,
      "price": 22,
      "stock": 9,
      "color": "br",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Cabezales de masaje infrarrojos",
          "Motor potente para masajes fuertes",
          "Compacto"
        ],
        "dimensions": "57x33x20",
        "specifications": {
          "Material": "Silicona",
          "Peso_del_producto": "1180g"
        }
      } as Product["specs"],
      "images": [
        "health-body-backmass-br/health-body-backmass-br-1.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 47,
      "sku": "light-desktop-1-gr",
      "skuGroup": "light-desktop",
      "title": "Lampara LED para el escritorio",
      "description": "Lampara led con touchscreen para el escritorio.  ",
      "subcategoryId": 18,
      "price": 45,
      "stock": 7,
      "color": "gr",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "8W Leds",
          "Ajuste de intensidad",
          "CRI>85"
        ]
      } as Product["specs"],
      "images": [
        "light-desktop-1-gr/light-desktop-1-gr-1.jpg",
        "light-desktop-1-gr/light-desktop-1-gr-2.jpg",
        "light-desktop-1-gr/light-desktop-1-gr-3.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 6,
        "panama_otro": 6,
        "panama_ciudad": 4,
        "otras_provincias": 6
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 48,
      "sku": "health-body-yogamat-1-co",
      "skuGroup": "health-body-yogamat-1",
      "title": "Yoga mat de corcho ecológico",
      "description": "El yoga mat está hecho de corcho natural ecológico y caucho natural libre de sustancias nocivas. Es ideal tener uno en su lugar de trabajo o home office para tus estiramientos diarios. Recomendamos estirar al menos dos veces al día durante 10 minutos.  Vas a ver que te sentirás mucho mejor y junto con un standing desk podrás despedirte de todos esos dolores de espalda y cuello.",
      "subcategoryId": 32,
      "price": 45,
      "stock": 10,
      "color": "co",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Materiales ecológicos libre de químicos nocivos y tóxicos",
          "Corcho Natural",
          "Caucho natural de alta densidad",
          "Grosor de 3 mm"
        ],
        "dimensions": "15x15x75",
        "specifications": {
          "Material": "PU+Caucho natural",
          "Peso_del_producto": "3.2kg"
        }
      } as Product["specs"],
      "images": [
        "health-body-yogamat-1-co/health-body-yogamat-1-co-1.jpg",
        "health-body-yogamat-1-co/health-body-yogamat-1-co-2.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 49,
      "sku": "stand-arm-alum-single-bl",
      "skuGroup": "stand-arm-alum-single",
      "title": "Brazo de aluminio para un monitor",
      "description": "El brazo de aluminio para un monitor de te permite ajustar sin problemas la pantalla a la altura, profundidad y ángulo de visión correctos reduciendo la tensión de tu cuello. El brazo es altamente ajustable y utiliza un mecanismo de resorte neumático de contrapeso dándote una sensación que el monitor estuviera flotando. Es el complemento perfecto para la configuración de tu standing desk en el home office. ",
      "subcategoryId": 2,
      "price": 55,
      "stock": 23,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "2 years",
      "specs": {
        "details": [
          "Aplicación universal. Funciona con todas las pantallas VESA de tamaño 13 a 33 pulgadas",
          "Totalmente ajustable. El monitor puede girar 360 grados a orientación vertical y horizontal",
          "mecanismo de resorte de gas de contrapeso robusto",
          "Gestión de cables",
          "Fácil instalación. Todas las herramientas necesarias están incluidas",
          "Dos opciones de montaje: sistema de abrazadera ajustable (clamp on) o con ojal (grommet)"
        ],
        "dimensions": "46x40.5x21",
        "specifications": {
          "Giro": "180°",
          "Vesa": "7.5x7.5 and 10x10",
          "Material": "Aluminio",
          "Mecanismo": "Resorte de gas",
          "Rotación": "360°",
          "Inclinación": "+90° to -90°",
          "Min-max_altura": "17-48cm",
          "Peso_del_producto": "2.5kg",
          "Capacidad_de_carga": "2-9kg",
          "Tamaño_de_pantalla": "13-33in",
          "Espesor_del_escritorio": "1-8cm"
        }
      } as Product["specs"],
      "images": [
        "stand-arm-alum-single-bl/stand-arm-alum-single-bl-1.jpg",
        "stand-arm-alum-single-bl/stand-arm-alum-single-bl-2.jpg",
        "stand-arm-alum-single-bl/stand-arm-alum-single-bl-3.jpg",
        "stand-arm-alum-single-bl/stand-arm-alum-single-bl-4.jpg",
        "stand-arm-alum-single-bl/stand-arm-alum-single-bl-5.jpg",
        "stand-arm-alum-single-bl/stand-arm-alum-single-bl-6.jpg"
      ],
      "assembly": 10,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 50,
      "sku": "light-screenbar-bl",
      "skuGroup": "light-screenbar",
      "title": "Barra de luz para monitor",
      "description": "El screenbar de Ergonomica crea un ambiente de trabajo productivo y te protege la vista de la exposición de muchas horas de pantalla al complementar la fuente de luz de tu monitor. Usa LEDs especiales de alta reproducción de color CRI >95 que son anti-glare y anti-flicker.",
      "subcategoryId": 18,
      "price": 47,
      "stock": 48,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Control inalámbrico recargable",
          "Ajusta la intensidad y el color de la luz de 3000k-6000k",
          "CRI >95",
          "Luces LED antirreflejo y sin parpadeo",
          "Se adapta a la mayoría de los diseños de pantallas",
          "Conexión vía USB"
        ],
        "specifications": {
          "Poder": "6W",
          "Batería": "750mAh",
          "Material": "ABS/Aluminio",
          "Claridad_de_la_luz": "Cambiable",
          "Entrada_de_voltaje": "5V 2A"
        }
      } as Product["specs"],
      "images": [
        "light-screenbar-bl/light-screenbar-bl-1.jpg",
        "light-screenbar-bl/light-screenbar-bl-2.jpg",
        "light-screenbar-bl/light-screenbar-bl-3.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 51,
      "sku": "sound-head-anchead1-bl",
      "skuGroup": "sound-head-anchead1",
      "title": "Headphones bluetooth ANC 1",
      "description": "Headphones inalámbricos con cancelación de ruido activos.  Estos auriculares tienen un sonido de alta calidad y son muy cómodos al usarlos.",
      "subcategoryId": 25,
      "price": 35,
      "stock": 3,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Bluetooth 5.0",
          "ANC Active Noise Cancelling hasta 20 dbs",
          "28 horas de reproducción y recarga rápida",
          "Orejeras suaves y cómodas"
        ],
        "specifications": {
          "SNR": ">85dB",
          "BT Chip": "JL6955F",
          "Batería": "600mah",
          "BT version": "5.0",
          "Impendancia": "32ohm",
          "Tiempo_de_trabajo": "28hrs",
          "Potencia_de_salida": "90mw",
          "Diámetro_del_altavoz": "40mm",
          "Frecuencia_de_respuesta": "20hz - 20khz",
          "Material_de_las_orejeras": "corteza de albúmina",
          "Sensitividad_del_altavoz": "115dB",
          "Cancelación_activa_de_ruido": "Si",
          "Nivel_de_reducción_de_ruido": "20db"
        }
      } as Product["specs"],
      "images": [
        "sound-head-anchead1-bl/sound-head-anchead1-bl-1.jpg",
        "sound-head-anchead1-bl/sound-head-anchead1-bl-2.jpg",
        "sound-head-anchead1-bl/sound-head-anchead1-bl-3.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-04-29T01:27:12.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "josemiguel@ergonomicadesk.com"
    },
    {
      "id": 52,
      "sku": "anti-mat-shape1-bl",
      "skuGroup": "anti-mat-shape1",
      "title": "Alfombra antifatiga ergonómica 1",
      "description": "La alfombra antifatiga es esencial para trabajar parado de pie en tu standing desk. Te proporciona un inmenso alivio de presión para las articulaciones al ponerte de pie. Sentirás la diferencia de inmediato al usarlo. Tiene un diseño ergonómico con diferentes puntos de alivio de presión.",
      "subcategoryId": 20,
      "price": 55,
      "stock": 44,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Poliuretano de alta densidad",
          "Durable y fácil de limpiar",
          "0.75 pulgadas de espesor"
        ],
        "dimensions": "67x56x4",
        "specifications": {
          "Material": "Poliuretano",
          "Peso_del_producto": "1.8kgs"
        }
      } as Product["specs"],
      "images": [
        "anti-mat-shape1-bl/anti-mat-shape1-bl-1.jpg",
        "anti-mat-shape1-bl/anti-mat-shape1-bl-2.jpg",
        "anti-mat-shape1-bl/anti-mat-shape1-bl-3.jpg",
        "anti-mat-shape1-bl/anti-mat-shape1-bl-4.jpg",
        "anti-mat-shape1-bl/anti-mat-shape1-bl-5.jpg",
        "anti-mat-shape1-bl/anti-mat-shape1-bl-6jpg.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 6,
        "panama_otro": 6,
        "panama_ciudad": 4,
        "otras_provincias": 6
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 53,
      "sku": "top-mela-ash-182",
      "skuGroup": "top-mela",
      "title": "Sobre de melamina",
      "description": "El sobre de mesa para tu standing desk. Hecho de MDF hidrófugo de 1 pulgada de grueso con un laminado de melamina de alta calidad.",
      "subcategoryId": 43,
      "price": 115,
      "stock": 9,
      "color": "ash",
      "size": "182",
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Durables",
          "Resistente a la humedad",
          "Ligero",
          "Fácil de limpiar",
          "Difícil de rayar",
          "Resistente a  contacto con objetos calientes"
        ],
        "dimensions": "182x75x2.5",
        "specifications": {
          "Espesor": "1 pulgada",
          "Laminado": "Melamina",
          "Material": "MDF",
          "Hidrofóbico": "Si"
        }
      } as Product["specs"],
      "images": [
        "top-mela-ash-182/top-mela-ash-182-1.jpg"
      ],
      "assembly": 10,
      "shipping": {
        "colon": 20,
        "panama_otro": 20,
        "panama_ciudad": 0,
        "otras_provincias": 20
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-08-14T22:04:24.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 54,
      "sku": "cable-sleeve-bl",
      "skuGroup": "cable-sleeve",
      "title": "Manga para cables",
      "description": "El cable sleeve es una solución fácil y práctica para la gestión de cables. Mantiene todos sus cables organizados y protegidos.",
      "subcategoryId": 5,
      "price": 7,
      "stock": 0,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Práctica y fácil de instalar",
          "Mantiene todos tus cables organizados en una sola funda",
          "1",
          "9 cm de diámetro (3/4 pulgadas)",
          "Material antiflama"
        ]
      } as Product["specs"],
      "images": [
        "cable-sleeve-bl/cable-sleeve-bl.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 55,
      "sku": "stand-arm-single-bl",
      "skuGroup": "stand-arm-single",
      "title": "Brazo para un monitor",
      "description": "El brazo para un monitor te permite ajustar sin problemas la pantalla a la altura, profundidad y ángulo de visión correctos reduciendo la tensión de tu cuello. El brazo es altamente ajustable y utiliza un mecanismo de resorte neumático de contrapeso dándote una sensación que el monitor estuviera flotando. Es el complemento perfecto para la configuración de tu standing desk en el home office. ",
      "subcategoryId": 2,
      "price": 38,
      "stock": 0,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "2 years",
      "specs": {
        "details": [
          "Aplicación universal. Funciona con todas las pantallas VESA de tamaño 13 a 28 pulgadas",
          "Totalmente ajustable. El monitor puede girar 360 grados a orientación vertical y horizontal",
          "mecanismo de resorte de gas de contrapeso",
          "Gestión de cables",
          "Fácil instalación. Todas las herramientas necesarias están incluidas",
          "Dos opciones de montaje: sistema de abrazadera ajustable (clamp on) o con ojal (grommet)"
        ],
        "dimensions": "46x40.5x21",
        "specifications": {
          "Giro": "180°",
          "Vesa": "7.5x7.5 y 10x10",
          "Material": "Metal",
          "Mecanismo": "Resorte de gas",
          "Rotación": "360°",
          "Inclinación": "+90° to -45°",
          "Altura_min-max": "16-41cm",
          "Peso_del_producto": "2.2kg",
          "Capacidad_de_carga": "2-8kg",
          "Tamaño_de_pantalla": "13-28in",
          "Espesor_del_escritorio": "1-8cm"
        }
      } as Product["specs"],
      "images": [
        "stand-arm-single-bl/stand-arm-single-bl-1.jpg",
        "stand-arm-single-bl/stand-arm-single-bl-2.jpg",
        "stand-arm-single-bl/stand-arm-single-bl-3.jpg",
        "stand-arm-single-bl/stand-arm-single-bl-4.jpg",
        "stand-arm-single-bl/stand-arm-single-bl-5.jpg",
        "stand-arm-single-bl/stand-arm-single-bl-6.jpg"
      ],
      "assembly": 10,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-12-29T22:49:56.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "josemiguel@ergonomicadesk.com"
    },
    {
      "id": 56,
      "sku": "frame-L-wh",
      "skuGroup": "frame-L",
      "title": "Base en forma L para standing desk",
      "description": "Con la base de altura ajustable en forma de L puedes aprovechar al máximo la esquina de tu home office o espacio de trabajo. La base se puede convertir horizontal en 180 grados permitiendo poner un sobre de hasta 360 cm de largo.",
      "subcategoryId": 15,
      "price": 660,
      "stock": 12,
      "color": "wh",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "5 years",
      "specs": {
        "details": [
          "Convertible: puedes colocar el escritorio en forma de L 90 grados o cambiarlo a uan forma recta de 180 grados",
          "En 180 grados se puede colocar un sobre de hasta 360cm de largo y ancho de 58-90cm",
          "En 90 grados se puede colocar un sobre con largo de 100-180cm y ancho de 58-80cm en cada lado",
          "Tecnología anticolisión: la mesa se detiene automáticamente si choca con un objeto",
          "Pantalla táctil con 3 memorias",
          "Capacidad de peso máximo de 160 kg",
          "Distancia de altura: 60-125 cm",
          "Muy silencioso con niveles de ruido de <48dB",
          "Incluye las instrucciones de montaje y todas las herramientas necesarias"
        ],
        "dimensions": "106x35x35",
        "specifications": {
          "Velocidad": "38 mm/s",
          "Peso_máximo": "160kg",
          "Altura_máxima": "125 cm",
          "Altura_mínima": "60 cm",
          "Nivel_de_ruido": "<50dB",
          "Ancho_del_sobre": "58-90cm",
          "Largo_del_sobre": "100-220 cm en cada lado",
          "Peso_del_producto": "35kgs"
        }
      } as Product["specs"],
      "images": [
        "frame-L-wh/desk-frame-L-wh-1.jpg",
        "frame-L-wh/desk-frame-L-wh-2.jpg"
      ],
      "assembly": 10,
      "shipping": {
        "colon": 20,
        "panama_otro": 20,
        "panama_ciudad": 0,
        "otras_provincias": 20
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2023-01-16T22:39:18.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 57,
      "sku": "top-mela-black-152",
      "skuGroup": "top-mela",
      "title": "Sobre de melamina",
      "description": "El sobre de mesa para tu standing desk. Hecho de MDF hidrófugo de 1 pulgada de grueso con un laminado de melamina de alta calidad.",
      "subcategoryId": 43,
      "price": 95,
      "stock": 5,
      "color": "black",
      "size": "152",
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Durables",
          "Resistente a la humedad",
          "Ligero",
          "Fácil de limpiar",
          "Difícil de rayar",
          "Resistente a  contacto con objetos calientes"
        ],
        "dimensions": "152x75x2.5",
        "specifications": {
          "Espesor": "1 pulgada",
          "Laminado": "Melamina",
          "Material": "MDF",
          "Hidrofóbico": "Si"
        }
      } as Product["specs"],
      "images": [
        "top-mela-black-152/top-mela-black-152-1.jpg"
      ],
      "assembly": 10,
      "shipping": {
        "colon": 15,
        "panama_otro": 15,
        "panama_ciudad": 10,
        "otras_provincias": 15
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2023-01-18T20:31:23.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 58,
      "sku": "hubs-usbc-10in1-modu-gr",
      "skuGroup": "hubs-usbc-10in1-modu",
      "title": "Hub Tipo C Modular 10 en 1",
      "description": "El HUB modular Tipo C 10 en 1 le brinda toda la flexibilidad de 2 conectores diferentes en 1. Funciona con los últimos modelos de macbooks, ipads y cualquier dispositivo con entrada Tipo C. Cuenta con: 2 x PD / 3 x puertos USB 3.0 / 2 x entradas HDMI de 4k / 1 x slot SD / 1 x slot TF 3.0 / 1 x puerto USB C",
      "subcategoryId": 14,
      "price": 39,
      "stock": 19,
      "color": "gr",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Plug & Play",
          "Transferencia de datos de alta velocidad",
          "Diseño modular con fijación magnética",
          "Pasar por la carga de DP",
          "Carcasa de aluminio"
        ],
        "dimensions": "15.6x9x2",
        "specifications": {
          "Material": "Aluminio",
          "Peso_del_producto": "110g",
          "Número_de_puertos": "10"
        }
      } as Product["specs"],
      "images": [
        "hubs-usbc-10in1-modu-gr/hubs-usbc-10in1-modu-gr-1.jpg",
        "hubs-usbc-10in1-modu-gr/hubs-usbc-10in1-modu-gr-2.jpg",
        "hubs-usbc-10in1-modu-gr/hubs-usbc-10in1-modu-gr-3.jpg",
        "hubs-usbc-10in1-modu-gr/hubs-usbc-10in1-modu-gr-4.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 59,
      "sku": "mouse-vertical-rg-bl",
      "skuGroup": "mouse-vertical-rg",
      "title": "Mouse vertical ergonomico",
      "description": "El mouse vertical está diseñado ergonómicamente para adaptarse a las posiciones naturales de su muñeca en una posición vertical. Simplemente se siente más cómodo y reduce cualquier tensión o daño a largo plazo en sus muñecas durante períodos prolongados de uso del mouse.",
      "subcategoryId": 26,
      "price": 24,
      "stock": 10,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Diseño ergonómico",
          "Te protege tu muñeca del desgaste",
          "Tiene la forma de tu mano",
          "Sensibilidad ajustables hasta 1600 DPI",
          ""
        ],
        "dimensions": "12.5x6.5x8",
        "specifications": {
          "PPP": "1600",
          "Material": "ABS",
          "Connectividad": "Wireless",
          "Peso_del_producto": "98g"
        }
      } as Product["specs"],
      "images": [
        "mouse-vertical-rg-bl/mouse-vertical-rg-bl-1.jpg",
        "mouse-vertical-rg-bl/mouse-vertical-rg-bl-2.jpg",
        "mouse-vertical-rg-bl/mouse-vertical-rg-bl-3.jpg",
        "mouse-vertical-rg-bl/mouse-vertical-rg-bl-4.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-12-29T22:51:03.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "josemiguel@ergonomicadesk.com"
    },
    {
      "id": 60,
      "sku": "charge-usb-wall-1-bl",
      "skuGroup": "charge-usb-wall-1",
      "title": "Cargador USB y PD de pared",
      "description": "Un cargador de pared USB y PD con tecnología de carga rápida.",
      "subcategoryId": 40,
      "price": 7,
      "stock": 0,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Carga rápida",
          "Universal - puedes usarlo con cualquier dispositivo"
        ],
        "dimensions": "7x3.5x10",
        "specifications": {
          "Enchufe": "110v ",
          "Material": "PC Fireproof",
          "Peso_del_producto": "54g",
          "Número_de_puertos": "2"
        }
      } as Product["specs"],
      "images": [
        "charge-usb-wall-1-bl/charge-usb-wall-1-bl-1.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 61,
      "sku": "top-wood-rose-121",
      "skuGroup": "top-wood",
      "title": "Sobre de madera natural",
      "description": "Sobre de mesa hecho de madera sólida de palo de rosa, Dalbergia, panameño con un acabado semi-mate. Transforma tu standing desk o escritorio en una obra de arte.",
      "subcategoryId": 43,
      "price": 220,
      "stock": 0,
      "color": "rose",
      "size": "121",
      "brand": "Ergonomica",
      "warranty": "2 years",
      "specs": {
        "details": [
          "Madera sólida de Panamá de origen ético",
          "Acabado con 6 capas de poliuretano semi mate",
          "1.5 pulgadas de grosor con bordes biselados"
        ],
        "dimensions": "121x60x2.5",
        "specifications": {
          "Acabado": "6 capas de poliuretano semi mate",
          "Espesor": "1.5 pulgadas",
          "Material": "Madera Tropical dura"
        }
      } as Product["specs"],
      "images": [
        "top-wood-rose-121/top-wood-rose-121-1.jpg"
      ],
      "assembly": 10,
      "shipping": {
        "colon": 20,
        "panama_otro": 20,
        "panama_ciudad": 0,
        "otras_provincias": 20
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-05-31T20:59:18.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 62,
      "sku": "top-mela-onyx-152",
      "skuGroup": "top-mela",
      "title": "Sobre de melamina",
      "description": "El sobre de mesa para tu standing desk. Hecho de MDF hidrófugo de 1 pulgada de grueso con un laminado de melamina de alta calidad.",
      "subcategoryId": 43,
      "price": 95,
      "stock": 10,
      "color": "onyx",
      "size": "152",
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Durables",
          "Resistente a la humedad",
          "Ligero",
          "Fácil de limpiar",
          "Difícil de rayar",
          "Resistente a  contacto con objetos calientes"
        ],
        "dimensions": "152x75x2.5",
        "specifications": {
          "Espesor": "1 pulgada",
          "Laminado": "Melamina",
          "Material": "MDF",
          "Hidrofóbico": "Si"
        }
      } as Product["specs"],
      "images": [
        "top-mela-onyx-152/top-mela-onyx-152-1.jpg"
      ],
      "assembly": 10,
      "shipping": {
        "colon": 15,
        "panama_otro": 15,
        "panama_ciudad": 10,
        "otras_provincias": 15
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-08-14T22:03:58.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 63,
      "sku": "hubs-split-hdmi-bl",
      "skuGroup": "hubs-split-hdmi",
      "title": "Divisor HDMI a dos salidas de HDMI",
      "description": "Este divisor le permite conectar dos HDMI a una entrada HDMI.  ",
      "subcategoryId": 13,
      "price": 11,
      "stock": 14,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Plug & Play",
          "Compatibilidad universal",
          "Doble HDMI con resolución 4K"
        ],
        "dimensions": "21.5x12.7x1.5",
        "specifications": {
          "Material": "Aluminio",
          "Peso_del_producto": "119g",
          "Número_de_puertos": "2"
        }
      } as Product["specs"],
      "images": [
        "hubs-split-hdmi-bl/hubs-split-hdmi-bl-1.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-05-17T00:17:49.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 64,
      "sku": "cabinet-3drawer-bl",
      "skuGroup": "cabinet-3drawer",
      "title": "Archivador compacto de 3 gavetas",
      "description": "El archivador de 3 cajones tiene el tamaño perfecto para caber debajo de tu escritorio para incorporarlo con tu flujo de trabajo. Los dos primeros cajones están hechos para todos sus suministros de oficina. El último armario es para almacenar los archivos.",
      "subcategoryId": 39,
      "price": 170,
      "stock": 10,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Bloqueo con llave",
          "Acero laminado en frío de alta calidad",
          "Pintura de recubrimiento en polvo electrostático",
          "Impermeable y resistente a la humedad",
          "Muy estable",
          "Capacidad de peso: 125 kgs"
        ],
        "dimensions": "60x39x52",
        "specifications": {
          "Material": "Placa de acero laminado en frío",
          "Peso_del_producto": "19kg"
        }
      } as Product["specs"],
      "images": [
        "cabinet-3drawer-bl/cabinet-3drawer-bl-1.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 15,
        "panama_otro": 15,
        "panama_ciudad": 0,
        "otras_provincias": 15
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-11-29T16:35:32.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 65,
      "sku": "chair-ajax-bl",
      "skuGroup": "chair-ajax",
      "title": "Silla Ergonómica Ajax",
      "description": "Silla ergonómica de home office de primera calidad para el profesional más exigente. Con su alta capacidad de ajuste / funcionalidad y su diseño centrado en el ser humano; la Ajax proporciona un excelente soporte para toda la espalda ayudándote a mantener una mejor postura, reduce la tensión de tu cuerpo y permite una mejor circulación.  Construida con un marco trasero de aleación de aluminio sólido, materiales ecológicos y una malla transpirable altamente resistente, esta silla te va a durar bastante tiempo. La mejor configuración de oficina no está completa sin la mejor silla.",
      "subcategoryId": 19,
      "price": 620,
      "stock": 0,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "4 years",
      "specs": {
        "details": [
          "Malla especial transpirable y elástica",
          "Sistema de paleta en los reposabrazos con 11 posiciones ajustables",
          "Soporte lumbar ajustable",
          "Ángulo y tensión del respaldar ajustable con 15 posiciones",
          "Asiento deslizante",
          "Apoyabrazos con control de cable 4D",
          "Marco trasero de aluminio",
          "Mecanismo de bloqueo especial de aluminio"
        ],
        "dimensions": "86x66x55",
        "specifications": {
          "Base": "350mm de aluminum base",
          "Lift": "Class 4 gas lift",
          "Cubiertas": "65mm de cubierta de cromo",
          "Ensamblado": "Requerido",
          "Peso_de_la_silla": "21 kgs",
          "Certificación_BIFMA": "Si",
          "Material_del_asiento": "Malla",
          "Material_del_respaldo": "Malla",
          "Peso_máximo soportado_(silla)": "130 kgs"
        }
      } as Product["specs"],
      "images": [
        "chair-ajax-bl/chair-ajax-bl-1.jpg",
        "chair-ajax-bl/chair-ajax-bl-2.jpg",
        "chair-ajax-bl/chair-ajax-bl-3.jpg",
        "chair-ajax-bl/chair-ajax-bl-4.jpg",
        "chair-ajax-bl/chair-ajax-bl-5.jpg",
        "chair-ajax-bl/chair-ajax-bl-6.jpg",
        "chair-ajax-bl/chair-ajax-bl-7.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 20,
        "panama_otro": 20,
        "panama_ciudad": 0,
        "otras_provincias": 20
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-08-17T22:46:37.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 66,
      "sku": "top-wood-teak-152",
      "skuGroup": "top-wood",
      "title": "Sobre de madera natural",
      "description": "Sobre de mesa hecho de madera Teca Panameña con acabado de poliuretano semi mate.  La teca es un madera bien fuerte y liviana. Es un sobre que te va a durar toda la vida.",
      "subcategoryId": 43,
      "price": 275,
      "stock": 2,
      "color": "teak",
      "size": "152",
      "brand": "Ergonomica",
      "warranty": "2 years",
      "specs": {
        "details": [
          "Madera sólida de Panamá de origen ético",
          "Acabado con 6 capas de poliuretano semi mate",
          "1.5 pulgadas de grosor con bordes biselados"
        ],
        "dimensions": "152x75x2.5",
        "specifications": {
          "Acabado": "6 capas de poliuretano semi mate",
          "Espesor": "1.5 pulgadas",
          "Material": "Madera Tropical dura"
        }
      } as Product["specs"],
      "images": [
        "top-wood-teak-152/top-wood-teak-152-1.jpg"
      ],
      "assembly": 10,
      "shipping": {
        "colon": 20,
        "panama_otro": 20,
        "panama_ciudad": 0,
        "otras_provincias": 20
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-08-14T22:03:45.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 67,
      "sku": "top-wood-teak-182",
      "skuGroup": "top-wood",
      "title": "Sobre de madera natural",
      "description": "Sobre de mesa hecho de madera Teca Panameña con un acabado ecológico a base de agua semi mate.  La teca es un madera bien fuerte y liviana. Es un sobre que te va a durar toda la vida.",
      "subcategoryId": 43,
      "price": 310,
      "stock": 3,
      "color": "teak",
      "size": "182",
      "brand": "Ergonomica",
      "warranty": "2",
      "specs": {
        "details": [
          "Madera sólida de Panamá de origen ético,Acabado con 6 capas de base eco de agua semi mate,1.5 pulgadas de grosor con bordes biselados"
        ],
        "dimensions": "182x75x4",
        "specifications": {}
      } as Product["specs"],
      "images": [
        "top-wood-teak-182/top-wood-teak-152-1.png"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 20,
        "panama_otro": 20,
        "panama_ciudad": 0,
        "otras_provincias": 20
      },
      "display": true,
      "createdAt": new Date("2022-08-24T22:43:54.000Z"),
      "updatedAt": new Date("2022-08-24T22:45:37.000Z"),
      "createdBy": "lucas@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 68,
      "sku": "top-mela-white-152",
      "skuGroup": "top-mela",
      "title": "Sobre de melamina",
      "description": "El sobre de mesa para tu standing desk. Hecho de MDF hidrófugo de 1 pulgada de grueso con un laminado de melamina de alta calidad.",
      "subcategoryId": 43,
      "price": 95,
      "stock": 10,
      "color": "white",
      "size": "152",
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Durables",
          "Resistente a la humedad",
          "Ligero",
          "Fácil de limpiar",
          "Difícil de rayar",
          "Resistente a  contacto con objetos calientes"
        ],
        "dimensions": "152x75x2.5",
        "specifications": {
          "Espesor": "1 pulgada",
          "Laminado": "Melamina",
          "Material": "MDF",
          "Hidrofóbico": "Si"
        }
      } as Product["specs"],
      "images": [
        "top-mela-white-152/top-mela-white-152-1.jpg"
      ],
      "assembly": 10,
      "shipping": {
        "colon": 15,
        "panama_otro": 15,
        "panama_ciudad": 10,
        "otras_provincias": 15
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-08-14T22:03:33.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 69,
      "sku": "health-air-diffuser-1-wo",
      "skuGroup": "health-air-diffuser-1",
      "title": "Difusor de aceites esenciales",
      "description": "Difusor ultrasónico para aceites esenciales recargable y compacto ideal para tu escritorio.  Las investigaciones han demostrado que los aromas pueden influir en nuestro estado de ánimo y productividad. Prueba una mezcla de romero y limón si necesita más energía o una mezcla de lavanda y menta para un estado más calmado pero alerta.",
      "subcategoryId": 11,
      "price": 15,
      "stock": 13,
      "color": "wo",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Recargable",
          "Crea una fina niebla con su difusor ultrasónico",
          "Silencioso",
          "Programable"
        ],
        "dimensions": "10x10.5",
        "specifications": {
          "Material": "ABS",
          "Capacidad": "130ml",
          "Peso_del_producto": "150g"
        }
      } as Product["specs"],
      "images": [
        "health-air-diffuser-1-wo/health-air-diffuser-1-wo-1.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 70,
      "sku": "anti-mat-20x32-bl",
      "skuGroup": "anti-mat-20x32",
      "title": "Alfombra antifatiga",
      "description": "La alfombra antifatiga es esencial para trabajar parado de pie en tu standing desk. Te proporciona un inmenso alivio de presión para las articulaciones al ponerte de pie. Sentirás la diferencia de inmediato al usarlo.  Es 100% recomendable para la configuración de tu home office.",
      "subcategoryId": 20,
      "price": 35,
      "stock": 46,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Poliuretano de alta densidad",
          "libre de químicos nocivos",
          "Durable",
          "Antibacterial",
          "Fácil de limpiar"
        ],
        "dimensions": "20x32x0.75",
        "specifications": {
          "Material": "Poliuretano",
          "Peso_del_producto": "1.5kgs"
        }
      } as Product["specs"],
      "images": [
        "anti-mat-20x32-bl/anti-mat-20x32-bl-1.jpg",
        "anti-mat-20x32-bl/anti-mat-20x32-bl-2.jpg",
        "anti-mat-20x32-bl/anti-mat-20x32-bl-3.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 6,
        "panama_otro": 6,
        "panama_ciudad": 4,
        "otras_provincias": 6
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 71,
      "sku": "hubs-cables-hdmi-2m-bl",
      "skuGroup": "hubs-cables-hdmi-2m",
      "title": "Cable HDMI slim de 1.8m",
      "description": "Cable HDMI 4k 2M de alta velocidad con conectores chapados en oro.",
      "subcategoryId": 6,
      "price": 6,
      "stock": 30,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Conectores HDMI de cobre chapados en oro de 24K",
          "2 metros de largo"
        ],
        "specifications": {
          "Material": "Nylon + Aluminio",
          "Peso_del_producto": "168g"
        }
      } as Product["specs"],
      "images": [
        "hubs-cables-hdmi-2m-bl/hubs-cables-hdmi-2m-bl-1.jpg",
        "hubs-cables-hdmi-2m-bl/hubs-cables-hdmi-2m-bl-2.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 72,
      "sku": "health-body-under-elliptical-bl",
      "skuGroup": "health-body-under-elliptical",
      "title": "Máquina Elíptica mini",
      "description": "Ejercitate y quema calorías mientras trabajas.  La máquina elíptica compacta va debajo de tu escritorio para que puedas estar en movimiento mientras estás sentado. ",
      "subcategoryId": 32,
      "price": 145,
      "stock": 0,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "8 niveles de tensión",
          "peso máximo de 110 kgs",
          ""
        ],
        "dimensions": "53x43x25cm"
      } as Product["specs"],
      "images": [
        "health-body-under-elliptical-bl/health-body-under-elliptical-bl-1.jpg",
        "health-body-under-elliptical-bl/health-body-under-elliptical-bl-2.jpg",
        "health-body-under-elliptical-bl/health-body-under-elliptical-bl-3.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 73,
      "sku": "chair-gamer-prodigy-gr",
      "skuGroup": "chair-gamer-prodigy",
      "title": "Silla Gamer Ergonómica Prodigy",
      "description": "Experimenta una comodidad y soporte sin igual con la silla gamer Prodigy. Su diseño ergonómico te proteger tu columna durante horas de juego intensas. Tiene un tapizado de tela transpirable para mantenerte fresco en todo momento. No solo es perfecta para gaming, sino que también cuenta con un diseño elegante y moderno, ideal para usar en tu oficina o en cualquier espacio de trabajo. Incluye almohadas para la cabeza y lumbar.",
      "subcategoryId": 4,
      "price": 395,
      "stock": 5,
      "color": "gr",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "4",
      "specs": {
        "details": [
          "Tapizado de tela transpirable de alta calidad, mecanismo de bloqueo de lujo, BIFMA certified, Class 4 gaslift, almohada de cabeza y lumbar incluidas, ruedas de patín de 3\", reposabrazos 4D, base de aluminio de 350mm, respaldar ajustable hasta 175 grados"
        ],
        "dimensions": "",
        "specifications": {}
      } as Product["specs"],
      "images": [
        "chair-gamer-prodigy-gr/ ynynny-100.jpg",
        "chair-gamer-prodigy-gr/nwynwynyn y n-100.jpg",
        "chair-gamer-prodigy-gr/ ynwrnywrn-100.jpg",
        "chair-gamer-prodigy-gr/ynrynwrynwry-100.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 0,
        "panama_otro": 0,
        "panama_ciudad": 0,
        "otras_provincias": 0
      },
      "display": true,
      "createdAt": new Date("2023-01-19T06:09:36.000Z"),
      "updatedAt": new Date("2023-01-19T06:09:36.887Z"),
      "createdBy": "lucas@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 74,
      "sku": "cabinet-3drawer-slim-bl",
      "skuGroup": "cabinet-3drawer-slim",
      "title": "Archivador compacto slim de 3 gavetas",
      "description": "El archivador de 3 cajones slim tiene el tamaño perfecto para caber debajo de tu escritorio. Los dos primeros cajones están hechos para todos sus suministros de oficina. El último armario es para almacenar los archivos.",
      "subcategoryId": 39,
      "price": 155,
      "stock": 7,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "2",
      "specs": {
        "details": [
          "Bloqueo con llave,Acero laminado en frío de alta calidad,Pintura de recubrimiento en polvo electrostático,Impermeable y resistente a la humedad,Muy estable,Capacidad de peso: 125 kgs"
        ],
        "dimensions": "60x30x52",
        "specifications": {}
      } as Product["specs"],
      "images": [
        "cabinet-3drawer-slim-bl/Asset 15.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 20,
        "panama_otro": 20,
        "panama_ciudad": 0,
        "otras_provincias": 20
      },
      "display": true,
      "createdAt": new Date("2022-09-28T23:07:17.000Z"),
      "updatedAt": new Date("2022-09-28T23:07:18.298Z"),
      "createdBy": "lucas@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 75,
      "sku": "chair-tension-bl",
      "skuGroup": "chair-tension",
      "title": "Silla Ergonomica Tension",
      "description": "Silla ergonómica para el home office con soporte lumbar dinámico, malla completa, sólida y altamente ajustable. Diseñado para brindarte el mejor soporte para tu espalda durante largas horas de trabajo. Construido con los mejores materiales, incluida una malla especial transpirable que te mantiene fresco todo el día.",
      "subcategoryId": 19,
      "price": 299,
      "stock": 0,
      "color": "bl",
      "size": null,
      "brand": "",
      "warranty": "4",
      "specs": {
        "details": [
          "Asiento deslizante con altura ajustable,Soporte lumbar dinámico,Ángulo y tensión de inclinación ajustables,Reposabrazos 4D,Reposacabezas ajustable,Malla completa"
        ],
        "dimensions": "",
        "specifications": {}
      } as Product["specs"],
      "images": [
        "chair-tension-bl/CH-233A-QW (3).jpg",
        "chair-tension-bl/CH-233A-QW (4).jpg",
        "chair-tension-bl/assettpapao.jpeg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 20,
        "panama_otro": 20,
        "panama_ciudad": 0,
        "otras_provincias": 20
      },
      "display": true,
      "createdAt": new Date("2022-08-31T17:49:26.000Z"),
      "updatedAt": new Date("2022-12-29T22:53:02.000Z"),
      "createdBy": "lucas@torus-digital.com",
      "updatedBy": "josemiguel@ergonomicadesk.com"
    },
    {
      "id": 76,
      "sku": "top-mela-black-182",
      "skuGroup": "top-mela",
      "title": "Sobre de melamina",
      "description": "El sobre de mesa para tu standing desk. Hecho de MDF hidrófugo de 1 pulgada de grueso con un laminado de melamina de alta calidad.",
      "subcategoryId": 43,
      "price": 115,
      "stock": 0,
      "color": "black",
      "size": "182",
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Durables",
          "Resistente a la humedad",
          "Ligero",
          "Fácil de limpiar",
          "Difícil de rayar",
          "Resistente a  contacto con objetos calientes"
        ],
        "dimensions": "182x75x2.5",
        "specifications": {
          "Espesor": "1 pulgada",
          "Laminado": "Melamina",
          "Material": "MDF",
          "Hidrofóbico": "Si"
        }
      } as Product["specs"],
      "images": [
        "top-mela-black-182/top-mela-black-182-1.jpg"
      ],
      "assembly": 10,
      "shipping": {
        "colon": 20,
        "panama_otro": 20,
        "panama_ciudad": 0,
        "otras_provincias": 20
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-05-20T17:01:07.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "josemiguel@ergonomicadesk.com"
    },
    {
      "id": 77,
      "sku": "hubs-usbc-6in1-1-gr",
      "skuGroup": "hubs-usbc-6in1-1",
      "title": "Hub Tipo C 6 en 1 con PD y HDMI 4K",
      "description": "El hub tipoc C 6en1 funciona con todas las macbooks, ipads y todos los dispositivos más recientes. Expande tu computador con otras conexiones.Cuenta con las siguientes entradas: 1 x 87 W PD cargador /  2 x USB 3.0 / 1 x 4K HDMI / 2 x SD y TF 3.0",
      "subcategoryId": 14,
      "price": 22,
      "stock": 17,
      "color": "gr",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Plug & Play",
          "Transferencia de datos de alta velocidad",
          "Diseño para dispositivos con conexiones tipo C’",
          "Puerto PD para cargar",
          "Carcasa de aluminio"
        ],
        "dimensions": "10.31x16.4x2.2",
        "specifications": {
          "Material": "Aluminio",
          "Resolución": "Hasta 4K y 30hz",
          "Peso_del_producto": "86g",
          "Número_de_puertos": "6"
        }
      } as Product["specs"],
      "images": [
        "hubs-usbc-6in1-1-gr/hubs-usbc-6in1-1-gr-1.jpg",
        "hubs-usbc-6in1-1-gr/hubs-usbc-6in1-1-gr-2.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 78,
      "sku": "top-wood-purple-121",
      "skuGroup": "top-wood",
      "title": "Sobre de madera natural",
      "description": "Sobre de mesa hecho de madera sólida de Nazareno panameño con un acabado semi-mate de poliuretano. El Nazareno o Peltogyne purpure Pittier es una madera dura, densa y pesada de color morado. Es un sobre que te va a durar toda la vida.",
      "subcategoryId": 43,
      "price": 220,
      "stock": 1,
      "color": "purple",
      "size": "121",
      "brand": "Ergonomica",
      "warranty": "2 years",
      "specs": {
        "details": [
          "Madera sólida de Panamá de origen ético",
          "Acabado con 6 capas de poliuretano semi mate",
          "1.5 pulgadas de grosor con bordes biselados"
        ],
        "dimensions": "121x60x2.5",
        "specifications": {
          "Acabado": "6 capas de poliuretano semi mate",
          "Espesor": "1.5 pulgadas",
          "Material": "Madera Tropical dura"
        }
      } as Product["specs"],
      "images": [
        "top-wood-purple-121/top-wood-purple-121-1.jpg"
      ],
      "assembly": 10,
      "shipping": {
        "colon": 20,
        "panama_otro": 20,
        "panama_ciudad": 0,
        "otras_provincias": 20
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-08-26T03:01:27.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 79,
      "sku": "cable-clip-7-bl",
      "skuGroup": "cable-clip-7",
      "title": "Clips para cables",
      "description": "El clip para cables te ayuda a mantener hasta 7 cables organizados.",
      "subcategoryId": 5,
      "price": 4,
      "stock": 85,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Autoadhesivo",
          "Hecho de silicona"
        ],
        "specifications": {
          "Material": "silicona"
        }
      } as Product["specs"],
      "images": [
        "cable-clip-7-bl/cable-clip-7-bl-1.jpg",
        "cable-clip-7-bl/cable-clip-7-bl-2.jpg",
        "cable-clip-7-bl/cable-clip-7-bl-3.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 80,
      "sku": "chair-asci-gr",
      "skuGroup": "chair-asci",
      "title": "Silla Ergonómica Asci",
      "description": "Silla ergonómica para el home office con soporte lumbar dinámico, de malla completa (silla y asiento) y altamente ajustable. Diseñado para brindarte el mejor soporte para tu espalda durante largas horas de trabajo. Construido con los mejores materiales incluyendo una malla especial transpirable que te mantiene fresco todo el día.",
      "subcategoryId": 19,
      "price": 425,
      "stock": 20,
      "color": "gr",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "4",
      "specs": {
        "details": [
          "Altura del respaldar ajustable,Soporte lumbar dinámico,Ángulo de inclinación y tensión ajustables,Asiento deslizante con altura ajustable,Reposacabezas 3D,Apoyabrazos 4D,Asiento y respaldar de malla premium,Base de aluminio"
        ],
        "dimensions": "",
        "specifications": {}
      } as Product["specs"],
      "images": [
        "chair-asci-gr/chair-asci-1_2.png",
        "chair-asci-gr/chair-asci-2.png",
        "chair-asci-gr/chair-asci-3_1.png",
        "chair-asci-gr/chair-asci-4_1.png"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 20,
        "panama_otro": 20,
        "panama_ciudad": 0,
        "otras_provincias": 20
      },
      "display": true,
      "createdAt": new Date("2022-08-14T19:01:51.000Z"),
      "updatedAt": new Date("2023-01-16T22:23:43.000Z"),
      "createdBy": "lucas@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 81,
      "sku": "charge-wireless-3in1tower-bl",
      "skuGroup": "charge-wireless-3in1tower",
      "title": "Estación de carga inalámbrica 3 en 1 ",
      "description": "Una estación de carga inalámbrica para tu celular, reloj y audífonos. Mantén organizados y cargados al mismo tiempo tu iPhone, Airpods y iWatch. ",
      "subcategoryId": 12,
      "price": 39,
      "stock": 18,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Compatibilidad universal con todos los celulares / relojes y audífonos recargables",
          "Se mantiene fresco mientras se carga",
          "Carga rápida",
          "Cable USb de 1m",
          "Distancia de transmisión de 3-6 mm",
          "Funciona con celular con fundas protectoras"
        ],
        "dimensions": "12.5x7.5x14",
        "specifications": {
          "Material": "ABS",
          "Carga_de_iWatch": "3W",
          "Carga_de_celular": "10W , 7.5W and 5W",
          "Peso_del_producto": "192g",
          "Distancia_de_carga": "3-6mm",
          "Carga_de_audifionos": "5W",
          "Certificaciones_de_seguridad": "CE FCC ROHS QI"
        }
      } as Product["specs"],
      "images": [
        "charge-wireless-3in1tower-bl/charge-wireless-3in1tower-bl-1.JPG",
        "charge-wireless-3in1tower-bl/charge-wireless-3in1tower-bl-2.jpg",
        "charge-wireless-3in1tower-bl/charge-wireless-3in1tower-bl-3.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 82,
      "sku": "health-body-roller-bl",
      "skuGroup": "health-body-roller-bl",
      "title": "Eco foam roller",
      "description": "Este Roller está especialmente diseñado para alcanzar los tejidos profundos y aliviar el dolor de espalda. Es un gran complemento para tu estiramientos, rutinas de yoga o pilates.",
      "subcategoryId": 32,
      "price": 24,
      "stock": 8,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Hecho de espuma ultradensa",
          "libre de sustancias nocivas",
          ""
        ],
        "dimensions": "40x7x7",
        "specifications": {
          "Material": "EVA",
          "Peso_del_producto": "500g"
        }
      } as Product["specs"],
      "images": [
        "health-body-roller-bl/health-body-roller-bl-1.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 83,
      "sku": "top-mela-savan-121",
      "skuGroup": "top-mela",
      "title": "Sobre de melamina",
      "description": "El sobre de mesa para tu standing desk. Hecho de MDF hidrófugo de 1 pulgada de grueso con un laminado de melamina de alta calidad.",
      "subcategoryId": 43,
      "price": 65,
      "stock": 9,
      "color": "savan",
      "size": "121",
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Durables",
          "Resistente a la humedad",
          "Ligero",
          "Fácil de limpiar",
          "Difícil de rayar",
          "Resistente a  contacto con objetos calientes"
        ],
        "dimensions": "121x60x2.5",
        "specifications": {
          "Espesor": "1 pulgada",
          "Laminado": "Melamina",
          "Material": "MDF",
          "Hidrofóbico": "Si"
        }
      } as Product["specs"],
      "images": [
        "top-mela-savan-121/top-mela-savan-121-1.jpg"
      ],
      "assembly": 10,
      "shipping": {
        "colon": 15,
        "panama_otro": 15,
        "panama_ciudad": 10,
        "otras_provincias": 15
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-08-14T22:03:12.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 84,
      "sku": "top-mela-pecan-121",
      "skuGroup": "top-mela",
      "title": "Sobre de melamina",
      "description": "El sobre de mesa para tu standing desk. Hecho de MDF hidrófugo de 1 pulgada de grueso con un laminado de melamina de alta calidad.",
      "subcategoryId": 43,
      "price": 65,
      "stock": 10,
      "color": "pecan",
      "size": "121",
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Durables",
          "Resistente a la humedad",
          "Ligero",
          "Fácil de limpiar",
          "Difícil de rayar",
          "Resistente a  contacto con objetos calientes"
        ],
        "dimensions": "121x60x2.5",
        "specifications": {
          "Espesor": "1 pulgada",
          "Laminado": "Melamina",
          "Material": "MDF",
          "Hidrofóbico": "Si"
        }
      } as Product["specs"],
      "images": [
        "top-mela-pecan-121/top-mela-pecan-121-1.jpg"
      ],
      "assembly": 10,
      "shipping": {
        "colon": 15,
        "panama_otro": 15,
        "panama_ciudad": 10,
        "otras_provincias": 15
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-08-14T22:03:05.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 85,
      "sku": "top-mela-walnut-121",
      "skuGroup": "top-mela",
      "title": "Sobre de melamina",
      "description": "El sobre de mesa para tu standing desk. Hecho de MDF hidrófugo de 1 pulgada de grueso con un laminado de melamina de alta calidad.",
      "subcategoryId": 43,
      "price": 65,
      "stock": 10,
      "color": "walnut",
      "size": "121",
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Durables",
          "Resistente a la humedad",
          "Ligero",
          "Fácil de limpiar",
          "Difícil de rayar",
          "Resistente a  contacto con objetos calientes"
        ],
        "dimensions": "121x60x2.5",
        "specifications": {
          "Espesor": "1 pulgada",
          "Laminado": "Melamina",
          "Material": "MDF",
          "Hidrofóbico": "Si"
        }
      } as Product["specs"],
      "images": [
        "top-mela-walnut-121/top-mela-walnut-121-1.jpg"
      ],
      "assembly": 10,
      "shipping": {
        "colon": 15,
        "panama_otro": 15,
        "panama_ciudad": 10,
        "otras_provincias": 15
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-08-14T22:02:56.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 86,
      "sku": "monitor-lg-20mk400h-bl",
      "skuGroup": "monitor-lg-20mk400h",
      "title": "Monitor LG de 20 pulgadas 20MK400H ",
      "description": "El monitor LG de 20 pulgadas es un monitor compacto con muy buena resolución.  Vienen con modo de lectura para proteger tu vista, ofrece estabilidad de imagen.\"\" ",
      "subcategoryId": 23,
      "price": 129.5,
      "stock": 0,
      "color": "bl",
      "size": null,
      "brand": "LG",
      "warranty": "3 years",
      "specs": {
        "details": [
          "Modo De lectura",
          "Tecnología AMD FreeSync",
          "sin parpadeo",
          "Sincronización dinámica de acciones",
          "Estabilizador de negros",
          "Montaje VESA"
        ],
        "specifications": {
          "Brillo": "200_ cd/m2",
          "Tamaño": "19.5in",
          "Frequencia": "75hz",
          "Antireflejo": "si",
          "Resolución": "1366_x_768",
          "Tipo_de_panel": "TN",
          "Ángulo_de_visión": "90/65(CR=10)",
          "Tiempo_de_respuesta": "2ms",
          "Relación_de_contraste": "1000:1"
        }
      } as Product["specs"],
      "images": [
        "monitor-lg-20mk400h-bl/monitor-lg-20mk400h-bl-1.jpg",
        "monitor-lg-20mk400h-bl/monitor-lg-20mk400h-bl-2.jpg",
        "monitor-lg-20mk400h-bl/monitor-lg-20mk400h-bl-3.jpg",
        "monitor-lg-20mk400h-bl/monitor-lg-20mk400h-bl-4.jpg",
        "monitor-lg-20mk400h-bl/monitor-lg-20mk400h-bl-5.jpg",
        "monitor-lg-20mk400h-bl/monitor-lg-20mk400h-bl-6.jpg",
        "monitor-lg-20mk400h-bl/monitor-lg-20mk400h-bl-7.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 20,
        "panama_otro": 20,
        "panama_ciudad": 4,
        "otras_provincias": 20
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 87,
      "sku": "hubs-adap-typectoether-gr",
      "skuGroup": "hubs-adap-typectoether",
      "title": "Conector Ethernet a Tipo C",
      "description": "Conector de Ethernet RJ45 a Tipo C con velocidad de internet hasta de 1GB.  Te permite tener una conexión al internet más rápida y estable a través del puerto tipo c ya que las mayoría de las laptops nuevas no vienen con entrada ethernet.  ",
      "subcategoryId": 22,
      "price": 15,
      "stock": 20,
      "color": "sl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Velocidad de transferencia hasta de 1 Gigabit",
          "Compatibilidad universal",
          "Aumenta la velocidad de tu conexión al Internet"
        ],
        "dimensions": "20.3x8.6x1.6",
        "specifications": {
          "Puertos": "RJ45 y tipo c",
          "Material": "Aluminio",
          "Peso_del_producto": "23g",
          "Velocidad_de_transferencia": "1 gigabit"
        }
      } as Product["specs"],
      "images": [
        "hubs-adap-typectoether-gr/hubs-adap-typectoether-gr-1.jpg",
        "hubs-adap-typectoether-gr/hubs-adap-typectoether-gr-2.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 88,
      "sku": "Chair-positron-gr",
      "skuGroup": "chair-positron",
      "title": "Silla Ergonomica Positron",
      "description": "Silla ergonómica de home office de malla especial (asiento y respaldar), Respladar dinámico que se ajusta a tus movimientos de la espalda. Es muy cómoda y brinda un excelente soporte para toda la espalda. Diseñado especialmente para los profesionales más exigentes. ",
      "subcategoryId": 19,
      "price": 440,
      "stock": 5,
      "color": "gr",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "4",
      "specs": {
        "details": [
          "Mecanismo de Ángulo de inclinación y tensión ajustables,Asiento deslizante con altura ajustable, Reposacabezas ajustable 3D y removible,Apoyabrazos 4D"
        ],
        "dimensions": "",
        "specifications": {}
      } as Product["specs"],
      "images": [
        "Chair-positron-gr/Asset 34.jpg",
        "Chair-positron-gr/Asset 35.jpg",
        "Chair-positron-gr/Asset 36.jpg",
        "Chair-positron-gr/Asset 37.jpg",
        "Chair-positron-gr/Asset 38.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 20,
        "panama_otro": 20,
        "panama_ciudad": 0,
        "otras_provincias": 20
      },
      "display": true,
      "createdAt": new Date("2022-08-31T19:34:21.000Z"),
      "updatedAt": new Date("2022-10-05T17:41:58.000Z"),
      "createdBy": "lucas@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 89,
      "sku": "top-mela-walnut-152",
      "skuGroup": "top-mela",
      "title": "Sobre de melamina",
      "description": "El sobre de mesa para tu standing desk. Hecho de MDF hidrófugo de 1 pulgada de grueso con un laminado de melamina de alta calidad.",
      "subcategoryId": 43,
      "price": 95,
      "stock": 10,
      "color": "walnut",
      "size": "152",
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Durables",
          "Resistente a la humedad",
          "Ligero",
          "Fácil de limpiar",
          "Difícil de rayar",
          "Resistente a  contacto con objetos calientes"
        ],
        "dimensions": "152x75x2.5",
        "specifications": {
          "Espesor": "1 pulgada",
          "Laminado": "Melamina",
          "Material": "MDF",
          "Hidrofóbico": "Si"
        }
      } as Product["specs"],
      "images": [
        "top-mela-walnut-152/top-mela-walnut-152-1.jpg"
      ],
      "assembly": 10,
      "shipping": {
        "colon": 15,
        "panama_otro": 15,
        "panama_ciudad": 10,
        "otras_provincias": 15
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-08-14T22:02:44.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 90,
      "sku": "chair-parser-bl",
      "skuGroup": "chair-parser",
      "title": "Silla Ergonómica Parser",
      "description": "Una elegante silla de oficina ergonómica de malla completa que le brinda un excelente soporte para toda su espalda. Le ayuda a mantener una buena postura mientras está sentado.",
      "subcategoryId": 19,
      "price": 350,
      "stock": 0,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "4 years",
      "specs": {
        "details": [
          "Silla de oficina de malla giratoria con respaldo alto",
          "Respaldo de malla de nailon + estructura de respaldo de nylon + reposacabezas 2D con altura y ángulo ajustable + soporte lumbar ajustable en altura",
          "Asiento de malla de nylon",
          "Apoyabrazos 3D con reposabrazos de PU suave",
          "Mecanismo de lujo con función reclinable y bloqueo en 4 posiciones",
          "con asiento deslizante sobre asiento de plástico"
        ],
        "dimensions": "74x58x66",
        "specifications": {
          "Material": "Marco trasero de nylon + Malla de nylon"
        }
      } as Product["specs"],
      "images": [
        "chair-parser-bl/chair-parser-bl-1.jpg",
        "chair-parser-bl/chair-parser-bl-2.jpg",
        "chair-parser-bl/chair-parser-bl-3.jpg",
        "chair-parser-bl/chair-parser-bl-4.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 20,
        "panama_otro": 20,
        "panama_ciudad": 0,
        "otras_provincias": 20
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-08-17T22:49:45.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 91,
      "sku": "hubs-adap-usbtoether-gr",
      "skuGroup": "hubs-adap-usbtoether",
      "title": "Conector Ethernet a USB ",
      "description": "Conector de Ethernet RJ45 a USB de alta velocidad.  Te permite tener una conexión al internet más rápida y estable a través del puerto USB ya que las mayoría de las laptops nuevas no vienen con entrada ethernet. ",
      "subcategoryId": 22,
      "price": 15,
      "stock": 20,
      "color": "gr",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Velocidad de transferencia hasta de 1 Gigabit",
          "Compatibilidad universal",
          "Aumenta la velocidad de tu conexión al Internet"
        ],
        "dimensions": "20.3x8.6x1.5",
        "specifications": {
          "Puertos": "RJ45 y USB 3.0",
          "Material": "Aluminio",
          "Peso_del_producto": "23g",
          "Velocidad_de_transferencia": "1 gigabit"
        }
      } as Product["specs"],
      "images": [
        "hubs-adap-usbtoether-gr/hubs-adap-usbtoether-gr-1.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 92,
      "sku": "cable-tray-wh",
      "skuGroup": "cable-tray",
      "title": "Bandeja para cables",
      "description": "Organiza todos tus cables con una bandeja debajo del escritorio. Se puede instalar en cualquier sobre de mesa que se pueda atornillar.  Compatible con todos nuestros standing desks.",
      "subcategoryId": 5,
      "price": 25,
      "stock": 40,
      "color": "wh",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Bandeja grande de 50cm,Metál,Fácil de instalar,Se puede usar con cualquier mesa"
        ],
        "dimensions": "50x10x5cm",
        "specifications": {
          "Material": "Metal",
          "Peso_del_producto": "700g"
        }
      } as Product["specs"],
      "images": [
        "cable-tray-wh/IMG_3062.jpeg"
      ],
      "assembly": 10,
      "shipping": {
        "colon": 6,
        "panama_otro": 6,
        "panama_ciudad": 1.5,
        "otras_provincias": 6
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2023-01-16T22:46:44.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 93,
      "sku": "pad-ecoleather-80x40-gr",
      "skuGroup": "pad-ecoleather-80x40",
      "title": "Tapete de cuero eco para escritorios",
      "description": "El desk pad de cuero ecológico con costuras protege tu escritorio de arañazos y proporciona una superficie más agradable para escribir y usar el mouse. Tiene el tamaño ideal de 80x40cm para que puedas colocar el teclado y mouse.",
      "subcategoryId": 31,
      "price": 23,
      "stock": 50,
      "color": "gr",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Material de cuero PU de alta calidad",
          "Libre de químicos nocivos",
          "Resistente al agua y al calor",
          "Duradero",
          "Parte trasera de gamuza antideslizante",
          "Fácil de limpiar",
          "liviano y portátil"
        ],
        "dimensions": "41x5.5x5.5",
        "specifications": {
          "Material": "PU",
          "Peso_del_producto": "500g"
        }
      } as Product["specs"],
      "images": [
        "pad-ecoleather-80x40-gr/pad-ecoleather-80x40-gr-1.jpg",
        "pad-ecoleather-80x40-gr/pad-ecoleather-80x40-gr-2.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-08-14T21:59:58.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 94,
      "sku": "health-air-deskhepa-bl",
      "skuGroup": "health-air-deskhepa-bl",
      "title": "Purificador de Aire HEPA triple etapa",
      "description": "Un purificador de aire compacto para el escritorio, potente y silencioso. Mantiene el aire a tu alrededor fresco y limpio eliminando el 99.95% de todas las partículas del aire incluyendo el polvo, ácaros, virus y bacterias. Funciona muy bien para personas con alergias o para mantenerte protegido del Covid. ",
      "subcategoryId": 11,
      "price": 39,
      "stock": 16,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Filtración de 3 etapas: pre filtro",
          "HEPA 13 y filtro de carbón",
          "Filtro HEPA 13 de grado médico",
          "Elimina el 99",
          "95% de las partículas del aire",
          "Iones negativos",
          "Se incluye 1 filtro de repuesto. El filtro dura de 6 a 12 meses"
        ],
        "dimensions": "16x16x21",
        "specifications": {
          "Material": "ABS, Metal, Silicona",
          "Cubic_feet": "50",
          "Conectividad": "Micro USB",
          "Máximo_poder": "4.5W",
          "Nivel_de_ruido": "<35db",
          "Peso_del_producto": "490g",
          "Área_de_cobertura": "15m2",
          "Tasa_de_suministro_de_aire_limpio": "90m3/h"
        }
      } as Product["specs"],
      "images": [
        "health-air-deskhepa-bl/health-air-deskhepa-bl-1.jpg",
        "health-air-deskhepa-bl/health-air-deskhepa-bl-2.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 95,
      "sku": "top-wood-rose-152",
      "skuGroup": "top-wood",
      "title": "Sobre de madera natural",
      "description": "Sobre de mesa hecho de madera sólida de palo de rosa, Dalbergia, panameño con un acabado semi-mate. Transforma tu standing desk o escritorio en una obra de arte.",
      "subcategoryId": 43,
      "price": 275,
      "stock": 0,
      "color": "rose",
      "size": "152",
      "brand": "Ergonomica",
      "warranty": "2 years",
      "specs": {
        "details": [
          "Madera sólida de Panamá de origen ético",
          "Acabado con 6 capas de poliuretano semi mate",
          "1.5 pulgadas de grosor con bordes biselados"
        ],
        "dimensions": "152x75x2.5",
        "specifications": {
          "Acabado": "6 capas de poliuretano semi mate",
          "Espesor": "1.5 pulgadas",
          "Material": "Madera Tropical dura"
        }
      } as Product["specs"],
      "images": [
        "top-wood-rose-152/top-wood-rose-152-1.jpg"
      ],
      "assembly": 10,
      "shipping": {
        "colon": 20,
        "panama_otro": 20,
        "panama_ciudad": 0,
        "otras_provincias": 20
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-05-31T21:00:12.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 96,
      "sku": "pad-ecoleather-80x40-br",
      "skuGroup": "pad-ecoleather-80x40",
      "title": "Tapete de cuero eco para escritorios",
      "description": "El desk pad de cuero ecológico con costuras protege tu escritorio de arañazos y proporciona una superficie más agradable para escribir y usar el mouse. Tiene el tamaño ideal de 80x40cm para que puedas colocar el teclado y mouse.",
      "subcategoryId": 31,
      "price": 23,
      "stock": 33,
      "color": "br",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Material de cuero PU de alta calidad",
          "Libre de químicos nocivos",
          "Resistente al agua y al calor",
          "Duradero",
          "Parte trasera de gamuza antideslizante",
          "Fácil de limpiar",
          "liviano y portátil"
        ],
        "dimensions": "41x5.5x5.5",
        "specifications": {
          "Material": "PU",
          "Peso_del_producto": "500g"
        }
      } as Product["specs"],
      "images": [
        "pad-ecoleather-80x40-br/pad-ecoleather-80x40-br-1.jpg",
        "pad-ecoleather-80x40-br/pad-ecoleather-80x40-br-2.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-06-09T15:52:49.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 97,
      "sku": "sound-soundbar-speaker28in-bl",
      "skuGroup": "sound-soundbar-speaker28in",
      "title": "Barra de sonido bluetooth de 28\" 2.0",
      "description": "Los altavoces de barra de 28\" te dan un sonido completo y lleno como el de un sistema de cine.  Su diseño compacto te permite ponerlo abajo de tu pantalla o en cualquier lugar con espacio reducido.",
      "subcategoryId": 21,
      "price": 60,
      "stock": 12,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Altavoces 2.0 activos",
          "Bluetooth 5.0",
          "60 W RMS y 120 W peak",
          "2 altavoces de 20 W + 2 de 10 W",
          "Control remoto",
          "Ecualizador ajustable",
          "Entradas ópticas / RCA / AUX / USB y Bluetooth",
          "Compatible con todos los dispositivos"
        ],
        "dimensions": "75x12x12",
        "specifications": {
          "Poder": "60W RMS/ 120 W peak",
          "Bocinas": "20W x 2, 10W x 2",
          "Canales": "2.0",
          "Tamaño": "28 pulgadas",
          "Material": "ABS",
          "Peso_del_producto": "6kg"
        }
      } as Product["specs"],
      "images": [
        "sound-soundbar-speaker28in-bl/sound-soundbar-speaker28in-bl-1.jpg",
        "sound-soundbar-speaker28in-bl/sound-soundbar-speaker28in-bl-2.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-10-05T21:02:55.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 98,
      "sku": "stand-head-desk-sl",
      "skuGroup": "stand-head-desk",
      "title": "Soporte de aluminio para headphones",
      "description": "Soporte de aluminio sólido para tus audífonos.  Exhibe y protege tus headphones con un soporte especial para ellos y al mismo tiempo mantén tu espacio de trabajo organizado.   ",
      "subcategoryId": 3,
      "price": 19,
      "stock": 14,
      "color": "sl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Fabricado en aluminio de alta calidad",
          "Fácil de instalar",
          "Tiene una superficie de silicona para proteger tus artefactos",
          "Utiliza una abrazadera para sujetar fácilmente a cualquier sobre"
        ],
        "dimensions": "15x10x10",
        "specifications": {
          "Material": "Aluminio"
        }
      } as Product["specs"],
      "images": [
        "stand-head-desk-sl/stand-head-desk-sl-1.jpg",
        "stand-head-desk-sl/stand-head-desk-sl-2.jpg",
        "stand-head-desk-sl/stand-head-desk-sl-3.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-08-25T23:26:48.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 99,
      "sku": "pad-ecoleather-80x40-bl",
      "skuGroup": "pad-ecoleather-80x40",
      "title": "Tapete de cuero eco para escritorios",
      "description": "El desk pad de cuero ecológico con costuras protege tu escritorio de arañazos y proporciona una superficie más agradable para escribir y usar el mouse. Tiene el tamaño ideal de 80x40cm para que puedas colocar el teclado y mouse.",
      "subcategoryId": 31,
      "price": 23,
      "stock": 45,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Material de cuero PU de alta calidad",
          "Libre de químicos nocivos",
          "Resistente al agua y al calor",
          "Duradero",
          "Parte trasera de gamuza antideslizante",
          "Fácil de limpiar",
          "liviano y portátil"
        ],
        "dimensions": "41x5.5x5.5",
        "specifications": {
          "Material": "PU",
          "Peso_del_producto": "500g"
        }
      } as Product["specs"],
      "images": [
        "pad-ecoleather-80x40-bl/pad-ecoleather-80x40-bl-1.jpg",
        "pad-ecoleather-80x40-bl/pad-ecoleather-80x40-bl-2.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-08-14T21:59:45.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 100,
      "sku": "hubs-iphone-hdmi-1-wh",
      "skuGroup": "hubs-iphone-hdmi-1",
      "title": "Hub de HDMI para Iphone",
      "description": "Conecte su iphone a cualquier monitor con el adaptador de teléfono a HDMI.",
      "subcategoryId": 10,
      "price": 18,
      "stock": 20,
      "color": "wh",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Admite la duplicación de pantalla",
          "Emite vídeos HD",
          "hasta 1080P HD",
          "Compacto y fácil de llevar"
        ],
        "dimensions": "16.6x10.7x11.05",
        "specifications": {
          "Material": "Aluminio",
          "Peso_del_producto": "9g",
          "Número_de_puertos": "2"
        }
      } as Product["specs"],
      "images": [
        "hubs-iphone-hdmi-1-wh/hubs-iphone-hdmi-1-wh-1.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 101,
      "sku": "hubs-adap-typecusb-gr",
      "skuGroup": "hubs-adap-typecusb",
      "title": "Adaptador Tipo C a USB",
      "description": "Un adaptador tipo C hembra a USB macho. Te permite conectar cualquier periférico como celulares, tablets, discos duros, hubs o cualquier dispositivo con salida typo c a tus laptops, PCs y cargadores USB.  Este adaptador funciona para cargar, sincronizar y transferir data.  No soporta señal de video. ",
      "subcategoryId": 22,
      "price": 5,
      "stock": 50,
      "color": "gr",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Compatibilidad universal",
          "Transferencia de datos a velocidad hasta 10 Gpb",
          "Resistor para carga continua de 3 Amps",
          "Cubierta de aluminio"
        ],
        "dimensions": "1.5x0.7x2.1",
        "specifications": {
          "Material": "Aluminio",
          "Peso_del_producto": "23.2g",
          "Número_de_puertos": "1"
        }
      } as Product["specs"],
      "images": [
        "hubs-adap-typecusb-gr/hubs-adap-typecusb-gr-1.jpg",
        "hubs-adap-typecusb-gr/hubs-adap-typecusb-gr-2.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 102,
      "sku": "chair-syntax-gr",
      "skuGroup": "chair-syntax",
      "title": "Silla Ergonómica Syntax",
      "description": "Silla ergonómica de home office de primera calidad con marco de aluminio y mecanismo de bloqueo avanzado, altamente ajustable con soporte lumbar dinámico que se adapta a tu espalda y acabado de malla completa (asiento y respaldar).  Diseñado para los profesionales más exigentes y ocupados que pasan más de 8 horas al día frente a la computadora. Su diseño centrado en el ser humano brinda un excelente soporte para toda la espalda ayudándote a mantener una postura adecuada. Esta silla se siente igual de bien como se ve.  Construido solo con los mejores materiales disponible para que te dure un largo tiempo.",
      "subcategoryId": 19,
      "price": 670,
      "stock": 5,
      "color": "gr",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "4 years",
      "specs": {
        "details": [
          "Marco de Aluminio",
          "Asiento deslizante con altura ajustable",
          "Respaldar de altura ajustable",
          "ángulo de inclinación y tensión ajustables",
          "Reposabrazos 4D",
          "Reposacabezas 3D",
          "Soporte lumbar dinámico",
          "Base de aluminio",
          "mecanismo de bloqueo avanzado",
          "Asiento y respaldar de malla especial transpirable y elástica"
        ],
        "dimensions": "74x58x66",
        "specifications": {
          "Base": "350mm de aluminum base",
          "Lift": "Class 4 gas lift",
          "Cubiertas": "60mm de cubierta de cromo",
          "Ensamblado": "Requerido",
          "Peso_de_la_silla": "21 kgs",
          "Certificación_BIFMA": "Si",
          "Material_del_asiento": "Malla",
          "Material_del_respaldo": "Malla",
          "Peso_máximo_soportado_(silla)": "125 kgs"
        }
      } as Product["specs"],
      "images": [
        "chair-syntax-gr/chair-syntax-gr-1.JPG",
        "chair-syntax-gr/chair-syntax-gr-2.JPG",
        "chair-syntax-gr/chair-syntax-gr-3.JPG",
        "chair-syntax-gr/chair-syntax-gr-4.JPG",
        "chair-syntax-gr/chair-syntax-gr-5.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 20,
        "panama_otro": 20,
        "panama_ciudad": 0,
        "otras_provincias": 20
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-08-16T21:19:22.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 103,
      "sku": "health-sani-atom-bl",
      "skuGroup": "health-sani-atom-bl",
      "title": "Atomizador inteligente",
      "description": "Un atomizador automático para mantener tus manos limpias y libres de grasa.",
      "subcategoryId": 30,
      "price": 14,
      "stock": 10,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Recargable",
          "Sensor de mano",
          "Spray bien fino"
        ],
        "dimensions": "7.8x7.8x11",
        "specifications": {
          "Material": "ABS+PC+Silicona",
          "Peso_del_producto": "150g"
        }
      } as Product["specs"],
      "images": [
        "health-sani-atom-bl/health-sani-atom-bl-1.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-05-04T16:14:34.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "josemiguel@ergonomicadesk.com"
    },
    {
      "id": 104,
      "sku": "hubs-cables-hdmibraid1_5-go",
      "skuGroup": "hubs-cables-hdmibraid1_5",
      "title": "Cable HDMI de 1.5m",
      "description": "Cable HDMI 4K de alta calidad con conectores chapados en oro.",
      "subcategoryId": 6,
      "price": 9,
      "stock": 20,
      "color": "go",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Conectores HDMI de cobre puro chapado en oro de 24K",
          "Cable trenzado resistente y flexible",
          "1.5 metros de largo"
        ],
        "specifications": {
          "Material": "Nylon + Aluminio",
          "Peso_del_producto": "168g"
        }
      } as Product["specs"],
      "images": [
        "hubs-cables-hdmibraid1_5-go/hubs-cables-hdmibraid1_5-go-1.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 105,
      "sku": "charge-wireless-fastpad-wh",
      "skuGroup": "charge-wireless-fastpad",
      "title": "Cargador Inalambrico rápido pad",
      "description": "Cargador inalámbrico rápido (15 W) de sobremesa para celulares.  Se ve muy bien con un acabado de aluminio con vidrio templado y una luz led indicadora de carga. Funciona con celulares con fundas protectoras. ",
      "subcategoryId": 12,
      "price": 12,
      "stock": 15,
      "color": "wh",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Compatibilidad universal con todos los celulares Iphone / Samsung / Huawei y otros / Carga rápida de hasta 15W",
          "Protección inteligente. Identifica modelo de celular y carga de acuerdo evitando que el equipo se sobrecargue",
          "Parte trasera con puntitos de gomas anti-slip"
        ],
        "dimensions": "10.6x16x2.4",
        "specifications": {
          "Material": "Aluminio y vidrio templado",
          "Peso_del_producto": "120g"
        }
      } as Product["specs"],
      "images": [
        "charge-wireless-fastpad-wh/charge-wireless-fastpad-wh-1.JPG"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 106,
      "sku": "cable-tray-bl",
      "skuGroup": "cable-tray",
      "title": "Bandeja para cables",
      "description": "Organiza todos tus cables con una bandeja debajo del escritorio. Es especial para los standing desks de Ergonomica.  También se puede instalar en cualquier sobre de mesa que se pueda atornillar. ",
      "subcategoryId": 5,
      "price": 25,
      "stock": 39,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Bandeja grande de 50 cm,Fácil de instalar,Se puede usar con cualquier mesa"
        ],
        "dimensions": "50x10x5",
        "specifications": {
          "Material": "Metal",
          "Peso_del_producto": "700g"
        }
      } as Product["specs"],
      "images": [
        "cable-tray-bl/cable tray 2 ergonomica.jpeg",
        "cable-tray-bl/cable tray ergonomica.jpeg",
        "cable-tray-bl/IMG_3727 (1).jpg"
      ],
      "assembly": 10,
      "shipping": {
        "colon": 6,
        "panama_otro": 6,
        "panama_ciudad": 1.5,
        "otras_provincias": 6
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2023-01-16T22:44:21.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 107,
      "sku": "deco-art-frame-24x36-bl",
      "skuGroup": "deco-art-frame",
      "title": "Marco de 24x36 pulgadas para arte",
      "description": "Marco de madera con vidrio para fotos, pinturas, posters, impresiones y cualquier tipo de arte.  Incluye ganchos para colgar el arte de manera vertical o horizontal.  Decora tu espacio de trabajo o home office con tus artes favoritos.\"\" ",
      "subcategoryId": 29,
      "price": 35,
      "stock": 35,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Marco de madera",
          "Vidrio",
          "Ganchos horizontales y verticales",
          "Incluye un borde interior blanco que es removible"
        ],
        "dimensions": "24x36",
        "specifications": {
          "Cubierta_de_vidrio": "Si",
          "Material_del_marco": "madera"
        }
      } as Product["specs"],
      "images": [
        "deco-art-frame-24x36-bl/deco-art-frame-24x36-bl-1.jpg",
        "deco-art-frame-24x36-bl/deco-art-frame-24x36-bl-2.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 10,
        "panama_otro": 10,
        "panama_ciudad": 4,
        "otras_provincias": 10
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 108,
      "sku": "pad-felt-80x40-gr",
      "skuGroup": "pad-felt",
      "title": "Tapete de Felpa 80x40cm",
      "description": "El desk pad de felpa con costuras protege tu escritorio de arañazos y proporciona una superficie más agradable para escribir y usar el mouse. Tiene el tamaño ideal de 80x40cm para que puedas colocar el teclado y mouse.",
      "subcategoryId": 31,
      "price": 21,
      "stock": 49,
      "color": "gr",
      "size": "80x40",
      "brand": "Ergonomica",
      "warranty": "1",
      "specs": {
        "details": [
          "Material de felpa de alta calidad,Libre de químicos nocivos,Resistente al calor,Duradero,Parte trasera antideslizante"
        ],
        "dimensions": "80x40cm",
        "specifications": {
          "Material": "Felpa"
        }
      } as Product["specs"],
      "images": [
        "pad-felt-80x40-gr/ergergergegr.jpg",
        "pad-felt-80x40-gr/Asdrgdfrgheset 4.jpg",
        "pad-felt-80x40-gr/Assdfsdfsdfset 10.PNG"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 6,
        "panama_otro": 6,
        "panama_ciudad": 0,
        "otras_provincias": 6
      },
      "display": true,
      "createdAt": new Date("2022-08-24T21:52:06.000Z"),
      "updatedAt": new Date("2022-08-24T21:52:06.372Z"),
      "createdBy": "lucas@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 109,
      "sku": "monitor-lg-34wn650-w-wh",
      "skuGroup": "monitor-lg-34wn650-w",
      "title": "Monitor LG Ultrawide 34 pulgadas 34WN650-W Full HD IPS",
      "description": "La resolución 21:9 UltraWide™ IPS  (2560 x 1080) ofrece 33% más espacio en pantalla comparado a pantallas con resolución Full HD y con precisión de colores reales en ángulos amplio. Compatible con NVidia G-sync",
      "subcategoryId": 23,
      "price": 406,
      "stock": 0,
      "color": "wh",
      "size": null,
      "brand": "LG",
      "warranty": "3 years",
      "specs": {
        "details": [
          "34 pulgadas UltraWide FHD (2560 x 1080) IPS Display",
          "Diseño Virtualmente Sin Bordes de 3 Caras",
          "Gama de Colores sRGB 99% / VESA Display HDR 400",
          "Color Calibrado",
          "AMD FreeSync™",
          "Brazo Ajustable"
        ],
        "specifications": {
          "Tamaño": "34in",
          "Frequencia": "75hz",
          "Tipo_de_panel": "IPS",
          "Peso_con_soporte": "11.1_kgs",
          "Peso_sin_soporte": "5.9_kgs",
          "Ángulo_de_visión": "178˚(R/L) 178˚(U/D)",
          "Tiempo_de_respuesta": "5ms"
        }
      } as Product["specs"],
      "images": [
        "monitor-lg-34wn650-w-wh/monitor-lg-34wn650-w-wh-1.jpg",
        "monitor-lg-34wn650-w-wh/monitor-lg-34wn650-w-wh-2.jpg",
        "monitor-lg-34wn650-w-wh/monitor-lg-34wn650-w-wh-3.jpg",
        "monitor-lg-34wn650-w-wh/monitor-lg-34wn650-w-wh-4.jpg",
        "monitor-lg-34wn650-w-wh/monitor-lg-34wn650-w-wh-5.jpg",
        "monitor-lg-34wn650-w-wh/monitor-lg-34wn650-w-wh-6.jpg",
        "monitor-lg-34wn650-w-wh/monitor-lg-34wn650-w-wh-7.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 20,
        "panama_otro": 20,
        "panama_ciudad": 4,
        "otras_provincias": 20
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 110,
      "sku": "chair-balast-gr",
      "skuGroup": "chair-balast",
      "title": "Silla Ergonomica Balast",
      "description": "Silla ergonómica con acabado de malla especial (asiento y respaldar), moderna, ajustable y súper cómoda. Brinda buen soporte a la espalda. Reduce la tensión de las piernas con un diseño que permite una mejor circulación. Construido con materiales de alta calidad y una malla transpirable especial que te mantiene fresco todo el día.",
      "subcategoryId": 19,
      "price": 399,
      "stock": 5,
      "color": "gr",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "4",
      "specs": {
        "details": [
          "Ángulo de inclinación ajustable, Reposabrazos 4D, Malla especial transpirable de alta calidad"
        ],
        "dimensions": "",
        "specifications": {}
      } as Product["specs"],
      "images": [
        "chair-balast-gr/Asset 11.jpg",
        "chair-balast-gr/Asset 8.jpg",
        "chair-balast-gr/Asset 9.jpg",
        "chair-balast-gr/EWFWEFWEFWEFWEF.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 20,
        "panama_otro": 20,
        "panama_ciudad": 0,
        "otras_provincias": 20
      },
      "display": true,
      "createdAt": new Date("2022-08-31T18:02:28.000Z"),
      "updatedAt": new Date("2022-10-05T17:43:34.000Z"),
      "createdBy": "lucas@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 111,
      "sku": "frame-1col-wh",
      "skuGroup": "frame-1col",
      "title": "Base de una columna para standing desk",
      "description": "Esta base de para escritorios de altura ajustable de una sola columna es ideal para personas con espacios limitados.",
      "subcategoryId": 15,
      "price": 299,
      "stock": 0,
      "color": "wh",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "5 years",
      "specs": {
        "details": [
          "Tecnología anticolisión: el marco se detiene automáticamente si la mesa choca con un objeto",
          "Pantalla táctil con 3 memorias",
          "El motor está oculto dentro de la pata de la base",
          "Capacidad máxima de peso de 80 kgs",
          "Distancia: 60-125cm",
          "Agregue cualquier tablero de mesa con dimensiones: largo 40-90cm y ancho 40-90cm",
          "Incluye las instrucciones de montaje y todas las herramientas necesarias"
        ],
        "specifications": {
          "Velocidad": "38 mm/s",
          "Peso_máximo": "80kg",
          "Altura_máxima": "125 cm",
          "Altura_mínima": "60 cm",
          "Nivel_de_ruido": "<50dB",
          "Ancho_del_sobre": "58-90cm",
          "Largo_del_sobre": "100-220cm",
          "Peso_del_producto": "20kgs"
        }
      } as Product["specs"],
      "images": [
        "frame-1col-wh/desk-frame-1col-wh-1.jpg",
        "frame-1col-wh/desk-frame-1col-wh-2.jpg"
      ],
      "assembly": 10,
      "shipping": {
        "colon": 20,
        "panama_otro": 20,
        "panama_ciudad": 0,
        "otras_provincias": 20
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 112,
      "sku": "stand-laptop-tilt-sl",
      "skuGroup": "stand-laptop-tilt",
      "title": "Inclinador para laptop",
      "description": "Coloca tu laptop en un ángulo inclinado para que se más cómodo el teclado de la laptop.   Agregale ergonomía a tu configuración de trabajo.",
      "subcategoryId": 27,
      "price": 19,
      "stock": 13,
      "color": "sl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Inclina la laptop para una mejor ergonomía",
          "Aleación de aluminio sólido",
          "Cargue hasta 10 kg de peso en la parte superior",
          "Compatible con todos los tamaños de laptops de 11 a 17 pulgadas"
        ],
        "dimensions": "38.5x13.8x6.5",
        "specifications": {
          "Material": "Alumino+sillicona",
          "Peso_del_producto": "400g"
        }
      } as Product["specs"],
      "images": [
        "stand-laptop-tilt-sl/stand-laptop-tilt-sl-1.jpg",
        "stand-laptop-tilt-sl/stand-laptop-tilt-sl-2.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 113,
      "sku": "pad-real-60x30-bl",
      "skuGroup": "pad-real-60x30",
      "title": "Tapete de cuero real para escritorios",
      "description": "Este desk pad de escritorio está hecho de cuero de vaca de alta calidad. Ayuda a proteger su escritorio de arañazos y proporciona una superficie lisa para el mouse, lo que hace que sea más agradable trabajar.",
      "subcategoryId": 31,
      "price": 35,
      "stock": 3,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Cuero de vaca genuino de alta calidad",
          "Suave",
          "Resistente al agua y al calor",
          "Fácil de limpiar"
        ],
        "dimensions": "30x5x5",
        "specifications": {
          "Material": "Cuero de vaca",
          "Peso_del_producto": "500g"
        }
      } as Product["specs"],
      "images": [
        "pad-real-60x30-bl/pad-real-60x30-bl-1.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 114,
      "sku": "chair-stackx-bl",
      "skuGroup": "chair-stackx",
      "title": "Silla Ergonómica Stack X",
      "description": "Una elegante silla de oficina ergonómica de malla completa con soporte lumbar y respaldar ajustable. La silla se adapta a tu espalda para ayudarte a mejorar la postura y reducir la tensión mientras trabajas largas horas.  ",
      "subcategoryId": 19,
      "price": 399,
      "stock": 18,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "3",
      "specs": {
        "details": [
          "Respaldar con altura ajustable,Asiento deslizante,Asiento y respaldar de malla completo,Mecanismo multifuncional con respaldo reclinable y función de bloqueo de 3 posiciones,Reposacabezas 2D, Base de aluminio de 350 mm con ruedas de nylon PU de 60 mm"
        ],
        "dimensions": "",
        "specifications": {}
      } as Product["specs"],
      "images": [
        "chair-stackx-bl/chair-stackx-1.jpeg",
        "chair-stackx-bl/chair-stackx-2.jpeg",
        "chair-stackx-bl/chair-stackx-3.jpeg",
        "chair-stackx-bl/chair-stackx-4.jpeg",
        "chair-stackx-bl/chair-stackx-5.jpeg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 20,
        "panama_otro": 20,
        "panama_ciudad": 0,
        "otras_provincias": 20
      },
      "display": true,
      "createdAt": new Date("2022-08-14T19:41:34.000Z"),
      "updatedAt": new Date("2023-01-16T22:32:51.000Z"),
      "createdBy": "lucas@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 115,
      "sku": "stand-laptop-clasic-gr",
      "skuGroup": "stand-laptop-clasic",
      "title": "Soporte clásico para laptop",
      "description": "El soporte de laptop eleva tu laptop a la altura y el ángulo ideal. Ayuda a mantener tu escritorio organizado y maximizar su espacio de trabajo. Es el complemento perfecto para la configuración de tu standing desk permitiendote trabajar fluidamente con otros monitores. ",
      "subcategoryId": 27,
      "price": 26,
      "stock": 26,
      "color": "gr",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Aleación de aluminio de alta calidad",
          "Fácil de ensamblar",
          "Universal",
          "Compatible con todas las laptops de 10 a 16 pulgadas",
          "Proporciona una excelente ventilación",
          "Desmontable y portátil"
        ],
        "dimensions": "32x22.5x6.5",
        "specifications": {
          "Material": "Aluminio",
          "Peso_del_producto": "785g",
          "Tamaño_de_la_laptop": "10-16 inches"
        }
      } as Product["specs"],
      "images": [
        "stand-laptop-clasic-gr/stand-laptop-clasic-gr-1.jpg",
        "stand-laptop-clasic-gr/stand-laptop-clasic-gr-2.jpg",
        "stand-laptop-clasic-gr/stand-laptop-clasic-gr-3.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 116,
      "sku": "top-wood-tiger-152",
      "skuGroup": "top-wood",
      "title": "Sobre de madera natural",
      "description": "Sobre de mesa hecho de madera sólida Tigerwood, Goncalo Alves, de Panamá con un acabado semi-mate. Las vetas de esta madera son realmente increíbles. Transforma tu standing desk en una obra de arte única. Esta madera es dura, densa y muy duradera.",
      "subcategoryId": 43,
      "price": 275,
      "stock": 0,
      "color": "tiger",
      "size": "152",
      "brand": "Ergonomica",
      "warranty": "2 years",
      "specs": {
        "details": [
          "Madera sólida de Panamá de origen ético",
          "Acabado con 6 capas de poliuretano semi mate",
          "1.5 pulgadas de grosor con bordes biselados"
        ],
        "dimensions": "152x75x2.5",
        "specifications": {
          "Acabado": "6 capas de poliuretano semi mate",
          "Espesor": "1.5 pulgadas",
          "Material": "Madera Tropical dura"
        }
      } as Product["specs"],
      "images": [
        "top-wood-tiger-152/top-wood-tiger-152-1.jpg"
      ],
      "assembly": 10,
      "shipping": {
        "colon": 20,
        "panama_otro": 20,
        "panama_ciudad": 0,
        "otras_provincias": 20
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-05-31T21:00:31.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 117,
      "sku": "top-mela-savan-152",
      "skuGroup": "top-mela",
      "title": "Sobre de melamina",
      "description": "El sobre de mesa para tu standing desk. Hecho de MDF hidrófugo de 1 pulgada de grueso con un laminado de melamina de alta calidad.",
      "subcategoryId": 43,
      "price": 95,
      "stock": 10,
      "color": "savan",
      "size": "152",
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Durables",
          "Resistente a la humedad",
          "Ligero",
          "Fácil de limpiar",
          "Difícil de rayar",
          "Resistente a  contacto con objetos calientes"
        ],
        "dimensions": "152x75x2.5",
        "specifications": {
          "Espesor": "1 pulgada",
          "Laminado": "Melamina",
          "Material": "MDF",
          "Hidrofóbico": "Si"
        }
      } as Product["specs"],
      "images": [
        "top-mela-savan-152/top-mela-savan-152-1.jpg"
      ],
      "assembly": 10,
      "shipping": {
        "colon": 15,
        "panama_otro": 15,
        "panama_ciudad": 10,
        "otras_provincias": 15
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-11-29T16:58:59.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 118,
      "sku": "hubs-split-usbctodualhdmi-bl",
      "skuGroup": "hubs-split-usbctodualhdmi",
      "title": "Splitter Tipo C a dos salidas de HDMI",
      "description": "Conecte dos monitores diferentes HDMI a tu laptop o tableta a una entrada tipo C.",
      "subcategoryId": 13,
      "price": 28,
      "stock": 20,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Plug & Play,Doble HDMI con resolución 4K,Compatibilidad con Macbook pro / macbook air / ipad / chromebook / Samsung s10 s9 note8 note 9/ Dell XPS"
        ],
        "dimensions": "31.5x6.6x1.5",
        "specifications": {
          "Material": "Aluminio",
          "Peso_del_producto": "54.4g",
          "Número_de_puertos": "2"
        }
      } as Product["specs"],
      "images": [
        "hubs-split-usbctodualhdmi-bl/hubs-split-usbctodualhdmi-bl-1.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-05-30T22:46:39.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 119,
      "sku": "pad-felt-90x30-gr",
      "skuGroup": "pad-felt",
      "title": "Tapete de felpa 90x30",
      "description": "El desk pad de felpa con costuras protege tu escritorio de arañazos y proporciona una superficie más agradable para escribir y usar el mouse. Tiene el tamaño ideal de 90x30cm para que puedas colocar el teclado y mouse y te sobre espacio. ",
      "subcategoryId": 31,
      "price": 21,
      "stock": 48,
      "color": "gr",
      "size": "90x30",
      "brand": "Ergonomica",
      "warranty": "1",
      "specs": {
        "details": [
          "Material de felpa de alta calidad,Libre de químicos nocivos,Resistente al calor,Duradero,Parte trasera antideslizante"
        ],
        "dimensions": "90x30cm",
        "specifications": {
          "Material": "Felpa"
        }
      } as Product["specs"],
      "images": [
        "pad-felt-90x30-gr/erverv.PNG",
        "pad-felt-90x30-gr/felt pad 90x30 key.PNG",
        "pad-felt-90x30-gr/Assdfsdfsdfset 10.PNG"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 6,
        "panama_otro": 6,
        "panama_ciudad": 0,
        "otras_provincias": 6
      },
      "display": true,
      "createdAt": new Date("2022-08-24T21:43:10.000Z"),
      "updatedAt": new Date("2022-08-24T21:48:31.000Z"),
      "createdBy": "lucas@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 120,
      "sku": "chair-operand-bl",
      "skuGroup": "chair-operand",
      "title": "Silla Ergonómica Operand",
      "description": "Silla ergonómica para el home office de malla completa, sólida y altamente ajustable. Diseñado para brindarte el mejor soporte para tu espalda durante largas horas de trabajo. Construido con los mejores materiales, incluida una malla especial transpirable que te mantiene fresco todo el día.",
      "subcategoryId": 19,
      "price": 390,
      "stock": 0,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "4",
      "specs": {
        "details": [
          "Asiento deslizante con altura ajustable,Altura del respaldar ajustable,Ángulo y tensión de inclinación ajustables,Reposabrazos 4D,Reposacabezas ajustable,Soporte lumbar dinámico,Malla completa"
        ],
        "dimensions": "74x58x66",
        "specifications": {
          "Base": "350mm",
          "Lift": "Class 4 gas lift",
          "Ensamblado": "Requerido",
          "Peso_de_la_silla": "20.5 kgs",
          "Certificación_BIFMA": "Si",
          "Material_del_respaldo": "Malla",
          "Peso_máximo_soportado_(silla)": "125 kgs"
        }
      } as Product["specs"],
      "images": [
        "chair-operand-bl/operand-black-1-01.png",
        "chair-operand-bl/operand-black-2-01.png",
        "chair-operand-bl/operand-black-3-01.png"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 20,
        "panama_otro": 20,
        "panama_ciudad": 0,
        "otras_provincias": 20
      },
      "display": true,
      "createdAt": new Date("2022-08-14T00:20:20.000Z"),
      "updatedAt": new Date("2022-12-29T22:56:32.000Z"),
      "createdBy": "lucas@torus-digital.com",
      "updatedBy": "josemiguel@ergonomicadesk.com"
    },
    {
      "id": 121,
      "sku": "top-mela-onyx-121",
      "skuGroup": "top-mela",
      "title": "Sobre de melamina",
      "description": "El sobre de mesa para tu standing desk. Hecho de MDF hidrófugo de 1 pulgada de grueso con un laminado de melamina de alta calidad.",
      "subcategoryId": 43,
      "price": 65,
      "stock": 2,
      "color": "onyx",
      "size": "121",
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Durables",
          "Resistente a la humedad",
          "Ligero",
          "Fácil de limpiar",
          "Difícil de rayar",
          "Resistente a  contacto con objetos calientes"
        ],
        "dimensions": "121x60x2.5",
        "specifications": {
          "Espesor": "1 pulgada",
          "Laminado": "Melamina",
          "Material": "MDF",
          "Hidrofóbico": "Si"
        }
      } as Product["specs"],
      "images": [
        "top-mela-onyx-121/top-mela-onyx-121-1.jpg"
      ],
      "assembly": 10,
      "shipping": {
        "colon": 15,
        "panama_otro": 15,
        "panama_ciudad": 10,
        "otras_provincias": 15
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-08-10T21:51:51.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "josemiguel@ergonomicadesk.com"
    },
    {
      "id": 122,
      "sku": "charge-wireless-fastpad-bl",
      "skuGroup": "charge-wireless-fastpad",
      "title": "Cargador Inalámbrico rápido pad",
      "description": "Cargador inalámbrico rápido (15 W) de sobremesa para celulares.  Se ve muy bien con un acabado de aluminio con vidrio templado y una luz led indicadora de carga. Funciona con celulares con fundas protectoras. ",
      "subcategoryId": 12,
      "price": 12,
      "stock": 15,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Compatibilidad universal con todos los celulares Iphone / Samsung / Huawei y otros / Carga rápida de hasta 15W",
          "Protección inteligente. Identifica modelo de celular y carga de acuerdo evitando que el equipo se sobrecargue",
          "Parte trasera con puntitos de gomas anti-slip"
        ],
        "dimensions": "10.6x16x2.4",
        "specifications": {
          "Material": "Aluminio y vidrio templado",
          "Peso_del_producto": "120g"
        }
      } as Product["specs"],
      "images": [
        "charge-wireless-fastpad-bl/charge-wireless-fastpad-bl-1.JPG",
        "charge-wireless-fastpad-bl/charge-wireless-fastpad-bl-2.jpg",
        "charge-wireless-fastpad-bl/charge-wireless-fastpad-bl-3.jpg",
        "charge-wireless-fastpad-bl/charge-wireless-fastpad-bl-4.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 123,
      "sku": "stand-arm-double-bl",
      "skuGroup": "stand-arm-double",
      "title": "Brazo para doble monitor",
      "description": "El brazo para dos monitores te permite ajustar tus pantallas a la altura, profundidad y ángulo de visión correctos reduciendo la tensión de tu cuello.   El brazo es altamente ajustable y utiliza un mecanismo de resorte neumático de contrapeso dándote la sensación que el monitor estuviera flotando. Solo mueves la pantalla y se queda en el lugar donde lo dejastes. Es el complemento perfecto para la configuración de tu standing desk en el home office. ",
      "subcategoryId": 2,
      "price": 59,
      "stock": 0,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "2 years",
      "specs": {
        "details": [
          "Aplicación universal. Funciona con todas las pantallas VESA de tamaño 13 a 28 pulgadas",
          "Totalmente ajustable. El monitor puede girar 360 grados a orientación vertical y horizontal",
          "mecanismo de resorte de gas de contrapeso",
          "Gestión de cables",
          "Fácil instalación. Todas las herramientas necesarias están incluidas",
          "Dos opciones de montaje: sistema de abrazadera ajustable (clamp on) o con ojal (grommet)"
        ],
        "dimensions": "41x31x17",
        "specifications": {
          "Giro": "180°",
          "Vesa": "7.5x7.5 y 10x10",
          "Material": "Metal",
          "Mecanismo": "Resorte de gas",
          "Rotación": "360°",
          "Inclinación": "+90° to -45°",
          "Altura_Min-max": "16-41cm",
          "Peso_del_producto": "4kg",
          "Capacidad_de_carga": "2-8kg por brazo",
          "Tamaño_de_pantallas": "13-28in",
          "Espesor_del_escritorio": "1-8cm"
        }
      } as Product["specs"],
      "images": [
        "stand-arm-double-bl/stand-arm-double-bl-1.jpg",
        "stand-arm-double-bl/stand-arm-double-bl-2.jpg",
        "stand-arm-double-bl/stand-arm-double-bl-3.jpg",
        "stand-arm-double-bl/stand-arm-double-bl-4.jpg"
      ],
      "assembly": 10,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-12-29T22:50:17.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "josemiguel@ergonomicadesk.com"
    },
    {
      "id": 124,
      "sku": "pad-real-60x30-br",
      "skuGroup": "pad-real-60x30",
      "title": "Tapete de cuero real para escritorios",
      "description": "Este desk pad de escritorio está hecho de cuero de vaca de alta calidad. Ayuda a proteger su escritorio de arañazos y proporciona una superficie lisa para el mouse, lo que hace que sea más agradable trabajar.",
      "subcategoryId": 31,
      "price": 35,
      "stock": 4,
      "color": "br",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Cuero de vaca genuino de alta calidad",
          "Suave",
          "Resistente al agua y al calor",
          "Fácil de limpiar"
        ],
        "dimensions": "30x5x5",
        "specifications": {
          "Material": "Cuero de vaca",
          "Peso_del_producto": "500g"
        }
      } as Product["specs"],
      "images": [
        "pad-real-60x30-br/pad-real-60x30-br-1.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 125,
      "sku": "top-mela-savan-182",
      "skuGroup": "top-mela",
      "title": "Sobre de melamina",
      "description": "El sobre de mesa para tu standing desk. Hecho de MDF hidrófugo de 1 pulgada de grueso con un laminado de melamina de alta calidad.",
      "subcategoryId": 43,
      "price": 115,
      "stock": 1,
      "color": "savan",
      "size": "182",
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Durables",
          "Resistente a la humedad",
          "Ligero",
          "Fácil de limpiar",
          "Difícil de rayar",
          "Resistente a  contacto con objetos calientes"
        ],
        "dimensions": "182x75x2.5",
        "specifications": {
          "Espesor": "1 pulgada",
          "Laminado": "Melamina",
          "Material": "MDF",
          "Hidrofóbico": "Si"
        }
      } as Product["specs"],
      "images": [
        "top-mela-savan-182/top-mela-savan-182-1.jpg"
      ],
      "assembly": 10,
      "shipping": {
        "colon": 20,
        "panama_otro": 20,
        "panama_ciudad": 0,
        "otras_provincias": 20
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-08-10T21:51:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "josemiguel@ergonomicadesk.com"
    },
    {
      "id": 126,
      "sku": "hubs-usb-4port-1-bl",
      "skuGroup": "hubs-usb-4port-1",
      "title": "Hub USB de 4 puertos",
      "description": "El hub USB de aluminio cuenta con cuatro puertos USB 3.0. Simplemente conéctelo y disfrute. Es compatible con todos los MacBooks, Ipad y otros dispositivos. Contiene: 4 x USB 3.0.",
      "subcategoryId": 41,
      "price": 15,
      "stock": 19,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Hecho de aluminio",
          "Diseño delgado",
          "4x 3.0 USB",
          "Plug & play",
          "Compatible con todos los sistemas operativos",
          "Compatible con USB 2.0 y 1.0",
          "Luz led indicador de conexión"
        ],
        "dimensions": "21x5.4x1.5",
        "specifications": {
          "Material": "Aluminio",
          "Peso_del_producto": "48g",
          "Número_de_Puertos": "4"
        }
      } as Product["specs"],
      "images": [
        "hubs-usb-4port-1-bl/hubs-usb-4port-1-bl-1.jpg",
        "hubs-usb-4port-1-bl/hubs-usb-4port-1-bl-2.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 127,
      "sku": "frame-single-bl",
      "skuGroup": "frame-single",
      "title": "Base de un motor para standing desk",
      "description": "La base de altura ajustable de un motor es una solución confiable y poderosa para tu escritorio. Te permite trabajar sentado y parado de manera simultánea incrementando tu productividad y reduciendo los dolores de espalda. La base se adapta a cualquier sobre de mesa que tenga un largo entre 100-190 cm y un ancho de 58-90 cm. Cuenta con una pantalla de 3 memorias, tecnología anticolisión, gran capacidad de peso y 5 años de garantía. Es la mejor inversión que puede hacer para tu salud y el trabajo.",
      "subcategoryId": 15,
      "price": 330,
      "stock": 24,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "5 years",
      "specs": {
        "details": [
          "Tecnología anticolisión: el marco se detiene automáticamente si la mesa choca con un objeto",
          "Pantalla táctil con 3 memorias",
          "Capacidad máxima de peso de 100 kg",
          "Distancia de altura: 70-120 cm",
          "Muy silencioso con niveles de ruido <50dB",
          "Se incluyen las instrucciones de montaje y todas las herramientas necesarias"
        ],
        "dimensions": "106x27.5x19.6",
        "specifications": {
          "Velocidad": "25 mm/s",
          "Peso_máximo": "100kg",
          "Altura_máxima": "120 cm",
          "Altura_mínima": "70 cm",
          "Nivel_de_ruido": "<50dB",
          "Ancho_del_sobre": "58-90cm",
          "Largo_del_sobre": "100-190cm",
          "Peso_del_producto": "25kgs"
        }
      } as Product["specs"],
      "images": [
        "frame-single-bl/frame-single-bl-1.jpg",
        "frame-single-bl/frame-single-bl-2.jpg",
        "frame-single-bl/frame-single-bl-3.jpg",
        "frame-single-bl/frame-single-bl-4.jpg",
        "frame-single-bl/frame-single-bl-5.jpg",
        "frame-single-bl/frame-single-bl-6.jpg"
      ],
      "assembly": 10,
      "shipping": {
        "colon": 20,
        "panama_otro": 20,
        "panama_ciudad": 0,
        "otras_provincias": 20
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-10-18T22:19:27.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "josemiguel@ergonomicadesk.com"
    },
    {
      "id": 128,
      "sku": "chair-schema-bl",
      "skuGroup": "chair-schema",
      "title": "Silla Ergonómica Schema",
      "description": "Silla ergonómica de home office de primera calidad con marco de aluminio y mecanismo de bloqueo avanzado , altamente ajustable con soporte lumbar dinámico que se adapta a tu espalda y acabado de malla completa (asiento y respaldar). Diseñado para los profesionales más exigentes y ocupados que pasan más de 8 horas al día trabajando. Su diseño centrado en el ser humano brinda un excelente soporte para toda la espalda, te ayuda a mantener una postura adecuada, a reducir la tensión en tu cuerpo y te mantiene con energía durante todo el día. Esta silla se siente igual de bien como se ve. ",
      "subcategoryId": 19,
      "price": 550,
      "stock": 0,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "4 years",
      "specs": {
        "details": [
          "Marco trasero de Aluminio",
          "Asiento deslizante con altura ajustable",
          "Respaldar de altura ajustable",
          "ángulo de inclinación y tensión ajustables",
          "Reposabrazos 4D",
          "Reposacabezas 3D",
          "Soporte lumbar dinámico",
          "Base de aluminio",
          "mecanismo de bloqueo avanzado",
          "Asiento y respaldar de malla especial transpirable y elástica",
          "Base de Aluminio"
        ],
        "dimensions": "74x58x66",
        "specifications": {
          "Base": "350mm de aluminum base",
          "Lift": "Class 4 gas lift",
          "Cubiertas": "60mm de cubierta de cromo",
          "Ensamblado": "Requerido",
          "Peso_de_la_silla": "21 kgs",
          "Certificación_BIFMA": "Si",
          "Material_del_asiento": "Malla",
          "Material_del_respaldo": "Malla",
          "Peso_máximo_soportado_(silla)": "125 kgs"
        }
      } as Product["specs"],
      "images": [
        "chair-schema-bl/chair-schema-bl-1.JPG",
        "chair-schema-bl/chair-schema-bl-2.JPG",
        "chair-schema-bl/chair-schema-bl-3.JPG",
        "chair-schema-bl/chair-schema-bl-4.JPG",
        "chair-schema-bl/chair-schema-bl-5.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 20,
        "panama_otro": 20,
        "panama_ciudad": 0,
        "otras_provincias": 20
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-08-17T22:46:09.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 129,
      "sku": "hubs-iphone-camkit-wh",
      "skuGroup": "hubs-iphone-camkit",
      "title": "Hub kit de camara para Iphone",
      "description": "El kit de cámara de Iphone contiene los siguientes puertos: 1x SD Card / 1x TF / 1x Lightning / 1x USB 3.0 / 1x 3.5mm Audio",
      "subcategoryId": 10,
      "price": 19,
      "stock": 19,
      "color": "wh",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Diseñado para la vida diaria",
          "Entrada de audio de 3",
          "5 mm",
          "Transfiera imágenes desde su Iphone y cámaras profesionales sin problemas"
        ],
        "dimensions": "12x6x1",
        "specifications": {
          "Material": "Aluminio",
          "Peso_del_producto": "30.9g",
          "Número_de_puertos": "5"
        }
      } as Product["specs"],
      "images": [
        "hubs-iphone-camkit-wh/hubs-iphone-camkit-wh-1.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 130,
      "sku": "chair-tasker-gr",
      "skuGroup": "chair-tasker",
      "title": "Silla Ergonomica Tasker",
      "description": "  Silla ergonómica para el home office con acabado de malla completa (asiento y respaldar), soporte lumbar ajustable y un diseño moderno. Brinda buen soporte para toda la espalda ayudándote a mantener una buena postura. Reduce la tensión de las piernas con un diseño que permite una mejor circulación. Construido con materiales de alta calidad y una malla especial transpirable y elástica que te mantiene fresco todo el día.",
      "subcategoryId": 19,
      "price": 385,
      "stock": 0,
      "color": "gr",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "4",
      "specs": {
        "details": [
          "Soporte lumbar ajustable,Ángulo de inclinación y tensión ajustables,Asiento deslizante con altura ajustable,Mecanismo de bloqueo de 4 posiciones ,Reposacabezas ajustable, Apoyabrazos 3D, Malla especial transpirable"
        ],
        "dimensions": "",
        "specifications": {}
      } as Product["specs"],
      "images": [
        "chair-tasker-gr/Asset 18.jpg",
        "chair-tasker-gr/Asset 19.jpg",
        "chair-tasker-gr/Asset 20.jpg",
        "chair-tasker-gr/Asset 22.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 20,
        "panama_otro": 20,
        "panama_ciudad": 0,
        "otras_provincias": 20
      },
      "display": true,
      "createdAt": new Date("2022-09-28T22:22:49.000Z"),
      "updatedAt": new Date("2023-01-18T20:29:53.000Z"),
      "createdBy": "lucas@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 131,
      "sku": "stand-phone-clasic-gr",
      "skuGroup": "stand-phone-clasic",
      "title": "Soporte clásico de celular",
      "description": "Soporte de aluminio sólido para tu Iphone o Android. Mantén tu espacio de trabajo organizado y el celular a disposición listo para usar. ",
      "subcategoryId": 28,
      "price": 14,
      "stock": 30,
      "color": "gr",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Hecho de aluminio de alta calidad",
          "Compatible con todos los celulares incluyendo iPhone 12 / iPhone 11 Max Pro / iPhone 11 / iPhone X / iPhone Xs  /  Iphone 8 7 6 5 / Samsung Galaxy note / Galaxy S / Galaxy Z / Galaxy A / Google Pixel / LG Nexus / Huawei P / Huawei nova y otros",
          "Espacio para el cable del cargador",
          "Rotación de 225 grados"
        ],
        "dimensions": "7.2x11.5x7",
        "specifications": {
          "Soporte": "4-13 inch",
          "Material": "Aluminio",
          "Peso_del_producto": "180g"
        }
      } as Product["specs"],
      "images": [
        "stand-phone-clasic-gr/stand-phone-clasic-gr-1.jpg",
        "stand-phone-clasic-gr/stand-phone-clasic-gr-2.jpg",
        "stand-phone-clasic-gr/stand-phone-clasic-gr-3.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 132,
      "sku": "hubs-adap-usbtypec-gr",
      "skuGroup": "hubs-adap-usbtypec",
      "title": "Adaptador USB a Type C",
      "description": "Un adaptador de USB hembra a tipo C macho.  Conecta cualquier periférico o dispositivo con salida de USB como USB hubs, discos duros externos, mouses, teclados, printers, consolas, y otros. Soporta señal de video.",
      "subcategoryId": 22,
      "price": 5,
      "stock": 49,
      "color": "gr",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Compatibilidad universal",
          "Transferencia de datos a alta velocidad",
          "Soporta señal de video",
          "Cubierta de aluminio"
        ],
        "dimensions": "1.5x0.7x2.1",
        "specifications": {
          "Material": "Aluminio",
          "Peso_del_producto": "23.2g",
          "Número_de_puertos": "1"
        }
      } as Product["specs"],
      "images": [
        "hubs-adap-usbtypec-gr/hubs-adap-usbtypec-gr-1.jpg",
        "hubs-adap-usbtypec-gr/hubs-adap-usbtypec-gr-2.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 133,
      "sku": "chair-ajax-gr",
      "skuGroup": "chair-ajax",
      "title": "Silla Ergonómica Ajax",
      "description": "Silla ergonómica de home office de primera calidad para el profesional más exigente. Con su alta capacidad de ajuste / funcionalidad y su diseño centrado en el ser humano; la Ajax proporciona un excelente soporte para toda la espalda ayudándote a mantener una mejor postura, reduce la tensión de tu cuerpo y permite una mejor circulación.  Construida con un marco trasero de aleación de aluminio sólido, materiales ecológicos y una malla transpirable altamente resistente, esta silla te va a durar bastante tiempo. La mejor configuración de oficina no está completa sin la mejor silla.  ",
      "subcategoryId": 19,
      "price": 620,
      "stock": 0,
      "color": "gr",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "4",
      "specs": {
        "details": [
          "Malla especial transpirable y elástica. Altamente ajustable con un sistema de paleta único y 11 funciones ajustables",
          "Soporte lumbar ajustable",
          "Ángulo del respaldo y tensión con 15 posiciones ajustables",
          "Asiento deslizante",
          "Apoyabrazos con control de cable 4D",
          "Marco trasero de aluminio",
          "Mecanismo de bloqueo especial de aluminio"
        ],
        "dimensions": "86x66x55",
        "specifications": {
          "Base": "350mm de aluminum base",
          "Lift": "Class 4 gas lift",
          "Cubiertas": "65mm de cubierta de cromo",
          "Ensamblado": "Requerido",
          "Peso_de_la_silla": "21 kgs",
          "Certificación_BIFMA": "Si",
          "Material_del_asiento": "Malla",
          "Material_del_respaldo": "Malla",
          "Peso_máximo_soportado_(silla)": "130 kgs"
        }
      } as Product["specs"],
      "images": [
        "chair-ajax-gr/chair-ajax-bl-1.jpg",
        "chair-ajax-gr/chair-ajax-bl-2.jpg",
        "chair-ajax-gr/chair-ajax-bl-3.jpg",
        "chair-ajax-gr/chair-ajax-bl-4.jpg",
        "chair-ajax-gr/chair-ajax-bl-5.jpg",
        "chair-ajax-gr/chair-ajax-bl-6.jpg",
        "chair-ajax-gr/chair-ajax-bl-7.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 20,
        "panama_otro": 20,
        "panama_ciudad": 0,
        "otras_provincias": 20
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-03-28T17:21:48.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "gabriel@torus-digital.com"
    },
    {
      "id": 134,
      "sku": "cable-grommet-50-sl",
      "skuGroup": "cable-grommet-50",
      "title": "Grommets 5cm",
      "description": "El ojal de 50 mm es ideal para organizar sus cables. Le ayuda con la gestión de sus cables.",
      "subcategoryId": 5,
      "price": 6,
      "stock": 46,
      "color": "sl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Hecho de metal de zinc",
          "Funciona con cualquier tablero de mesa",
          "Necesita instalación"
        ],
        "dimensions": "5x6x8",
        "specifications": {
          "Material": "Zinc",
          "Peso_del_producto": "200g"
        }
      } as Product["specs"],
      "images": [
        "cable-grommet-50-sl/cable-grommet-50-sl-1.jpg"
      ],
      "assembly": 25,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 135,
      "sku": "sound-head-anchead2-bl",
      "skuGroup": "sound-head-anchead2",
      "title": "Headphones bluetooth ANC 2",
      "description": "Headphones inalámbricos con cancelación de ruido activos.  Estos auriculares tienen un sonido de alta calidad y son muy cómodos al usarlos.",
      "subcategoryId": 25,
      "price": 33,
      "stock": 0,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Bluetooth 5.0",
          "ANC Active Noise Cancelling hasta 20 dbs",
          "28 horas de reproducción y recarga rápida",
          "Orejeras suaves y cómodas"
        ],
        "specifications": {
          "SNR": ">85dB",
          "BT Chip": "JL6955F",
          "Batería": "600mah",
          "BT version": "5.0",
          "Impendancia": "32ohm",
          "Tiempo_de_trabajo": "28hrs",
          "Potencia_de_salida": "90mw",
          "Diámetro_del_altavoz": "40mm",
          "Frecuencia_de_respuesta": "20hz - 20khz",
          "Material_de_las_orejeras": "corteza de albúmina",
          "Sensitividad_del_altavoz": "115dB",
          "Cancelación_activa_de_ruido": "yes",
          "Nivel_de_reducción_de_ruido": "20db"
        }
      } as Product["specs"],
      "images": [
        "sound-head-anchead2-bl/sound-head-anchead2-bl.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 136,
      "sku": "chair-scripter-bl",
      "skuGroup": "chair-scripter-bl",
      "title": "Silla Ergonómica Scripter",
      "description": "Silla ergonómica premium para el home office con acabado de malla completa (asiento y respaldar), altamente ajustable y súper cómoda. Diseñado especialmente para personas que pasan muchas horas trabajando frente a la computadora. Brinda un excelente soporte para toda la espalda ayudándote a mantener una buena postura. Reduce la tensión de las piernas con un diseño que permite una mejor circulación. Construido con materiales de alta calidad y una malla especial transpirable y elástica que te mantiene fresco todo el día.",
      "subcategoryId": 19,
      "price": 530,
      "stock": 0,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "4 years",
      "specs": {
        "details": [
          "Altura del respaldar ajustable con soporte lumbar",
          "Ángulo de inclinación y tensión ajustables",
          "Mecanismo de control de lengüeta lateral de alambre",
          "Asiento deslizante con altura ajustable",
          "Mecanismo de bloqueo de diseño de lujo con conexiones de aluminio al respaldo",
          "Reposacabezas ajustable 3D",
          "Apoyabrazos giratorio con brazo de aluminio 5D"
        ],
        "dimensions": "74x58x66",
        "specifications": {
          "Base": "350mm de aluminum base",
          "Lift": "Class 4 gas lift",
          "Cubiertas": "60mm de cubierta de cromo",
          "Ensamblado": "Requerido",
          "Peso_de_la_silla": "21 kgs",
          "Certificación_BIFMA": "Si",
          "Material_del_asiento": "Malla",
          "Material_del_respaldo": "Malla",
          "Peso_máximo_soportado_(silla)": "125 kgs"
        }
      } as Product["specs"],
      "images": [
        "chair-scripter-bl/chair-scripter-bl-1.JPG",
        "chair-scripter-bl/chair-scripter-bl-2.JPG",
        "chair-scripter-bl/chair-scripter-bl-3.JPG",
        "chair-scripter-bl/chair-scripter-bl-4.JPG",
        "chair-scripter-bl/chair-scripter-bl-5.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 20,
        "panama_otro": 20,
        "panama_ciudad": 0,
        "otras_provincias": 20
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-12-29T22:57:26.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "josemiguel@ergonomicadesk.com"
    },
    {
      "id": 137,
      "sku": "top-mela-white-121",
      "skuGroup": "top-mela",
      "title": "Sobre de melamina",
      "description": "El sobre de mesa para tu standing desk. Hecho de MDF hidrófugo de 1 pulgada de grueso con un laminado de melamina de alta calidad.",
      "subcategoryId": 43,
      "price": 65,
      "stock": 1,
      "color": "white",
      "size": "121",
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Durables",
          "Resistente a la humedad",
          "Ligero",
          "Fácil de limpiar",
          "Difícil de rayar",
          "Resistente a  contacto con objetos calientes"
        ],
        "dimensions": "121x60x2.5",
        "specifications": {
          "Espesor": "1 pulgada",
          "Laminado": "Melamina",
          "Material": "MDF",
          "Hidrofóbico": "Si"
        }
      } as Product["specs"],
      "images": [
        "top-mela-white-121/top-mela-white-121-1.jpg"
      ],
      "assembly": 10,
      "shipping": {
        "colon": 15,
        "panama_otro": 15,
        "panama_ciudad": 10,
        "otras_provincias": 15
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 138,
      "sku": "chair-operand-gr",
      "skuGroup": "chair-operand",
      "title": "Silla Ergonómica Operand",
      "description": "Silla ergonómica para el home office de malla completa, sólida y altamente ajustable. Diseñado para brindarte el mejor soporte para tu espalda durante largas horas de trabajo. Construido con los mejores materiales, incluida una malla especial transpirable que te mantiene fresco todo el día.",
      "subcategoryId": 19,
      "price": 390,
      "stock": 0,
      "color": "gr",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "4",
      "specs": {
        "details": [
          "Asiento deslizante con altura ajustable",
          "Altura del respaldar ajustable",
          "Ángulo y tensión de inclinación ajustables",
          "Reposabrazos 4D",
          "Reposacabezas ajustable",
          "Soporte lumbar dinámico",
          "Malla completa"
        ],
        "dimensions": "74x58x66",
        "specifications": {
          "Base": "350mm de aluminum base",
          "Lift": "Class 4 gas lift",
          "Cubiertas": "60mm de cubierta de cromo",
          "Ensamblado": "Requerido",
          "Peso_de_la_silla": "20.5 kgs",
          "Certificación_BIFMA": "Si",
          "Material_del_asiento": "Malla",
          "Material_del_respaldo": "Malla",
          "Peso_máximo_soportado_(silla)": "125 kgs"
        }
      } as Product["specs"],
      "images": [
        "chair-operand-gr/chair-operand-gr-1.JPG",
        "chair-operand-gr/chair-operand-gr-2.JPG",
        "chair-operand-gr/chair-operand-gr-3.JPG",
        "chair-operand-gr/chair-operand-gr-4.JPG",
        "chair-operand-gr/chair-operand-gr-5.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 20,
        "panama_otro": 20,
        "panama_ciudad": 0,
        "otras_provincias": 20
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-08-17T22:50:29.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 139,
      "sku": "stand-phone-adjus-bl",
      "skuGroup": "stand-phone-adjus",
      "title": "Soporte ajustable de celular",
      "description": "El soporte ajustable para celulares te permite ajustar la altura y el ángulo de visión de tu celular. Mantén tu espacio de trabajo organizado y el celular a disposición listo para usar. ",
      "subcategoryId": 28,
      "price": 15,
      "stock": 29,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Altura ajustable",
          "Hecho de aleación de aluminio de alta calidad",
          "Ángulo de visión de 270 grados",
          "Compatible con todos los celulares incluyendo iPhone 12 / iPhone 11 Max Pro / iPhone 11 / iPhone X / iPhone Xs  /  Iphone 8 7 6 5 / Samsung Galaxy note / Galaxy S / Galaxy Z / Galaxy A / Google Pixel / LG Nexus / Huawei P / Huawei nova y otros"
        ],
        "dimensions": "15x9x5",
        "specifications": {
          "Altura": "12cm-16cm",
          "Material": "Aluminio",
          "Peso_del_producto": "166g"
        }
      } as Product["specs"],
      "images": [
        "stand-phone-adjus-bl/stand-phone-adjus-bl-1.jpg",
        "stand-phone-adjus-bl/stand-phone-adjus-bl-2.jpg",
        "stand-phone-adjus-bl/stand-phone-adjus-bl-3.jpg",
        "stand-phone-adjus-bl/stand-phone-adjus-bl-4.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 140,
      "sku": "sound-bookshelf-BT4in-bl",
      "skuGroup": "sound-bookshelf-BT4in",
      "title": "Altavoces bluetooth de escritorio",
      "description": "Los altavoces bookshelf de Ergonomica tienen un sonido envolvente y super nitido con un bajo poderoso.  No te imaginas que unas bocinas de 4\"\" pueden sonar tan alto manteniendo su calidad de sonido.  Tienen el tamaño perfecto para caber en tu escritorio y un diseño vintage elegante que se ve bien en cualquier lugar.",
      "subcategoryId": 38,
      "price": 110,
      "stock": 12,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Altavoces activos",
          "Bajo de 4 pulgadas y tweeter domo de seda de 1.25 pulgadas de alta calidad",
          "Conexiones múltiples: RCA (Línea 1) / RCA (Línea 2) / Óptica / USB / Bluetooth",
          "Bluetooth 5.0 con rango de 10 metros",
          "Panel con ecualizador para bajos y altos"
        ],
        "dimensions": "48x21x32",
        "specifications": {
          "Bajo": "4 pulgadas",
          "Poder": "50W RMS/100 peak",
          "Altavoz": "1.25 pulgadas domo de seda",
          "Entradas": "Bluetooth 5.0 , RCA, Optical, USB",
          "Peso_del_producto": "5.1kg",
          "Material_de_la_caja": "MDF",
          "Frecuencia_de_respuesta": "40HZ-20KHZ"
        }
      } as Product["specs"],
      "images": [
        "sound-bookshelf-BT4in-bl/sound-bookshelf-BT4in-bl-1.jpg",
        "sound-bookshelf-BT4in-bl/sound-bookshelf-BT4in-bl-2.jpg",
        "sound-bookshelf-BT4in-bl/sound-bookshelf-BT4in-bl-3.jpg",
        "sound-bookshelf-BT4in-bl/sound-bookshelf-BT4in-bl-4.jpg",
        "sound-bookshelf-BT4in-bl/sound-bookshelf-BT4in-bl-5.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 6,
        "panama_otro": 6,
        "panama_ciudad": 1.5,
        "otras_provincias": 6
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 141,
      "sku": "deco-art-frame-11x14-bl",
      "skuGroup": "deco-art-frame",
      "title": "Marco de 11x14 pulgadas para arte",
      "description": "Marco de madera con vidrio para fotos, pinturas, posters, impresiones y cualquier tipo de arte.  Incluye ganchos para colgar el arte de manera vertical o horizontal.  Decora tu espacio de trabajo o home office con tus artes favoritos.\"\" ",
      "subcategoryId": 29,
      "price": 12,
      "stock": 30,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Marco de madera",
          "Vidrio",
          "Ganchos horizontales y verticales",
          "Incluye un borde interior blanco que es removible"
        ],
        "dimensions": "11x14",
        "specifications": {
          "Cubierta_de_vidrio": "Si",
          "Material_del_marco": "madera"
        }
      } as Product["specs"],
      "images": [
        "deco-art-frame-11x14-bl/deco-art-frame-11x14-bl-1.jpg",
        "deco-art-frame-11x14-bl/deco-art-frame-11x14-bl-2.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 142,
      "sku": "footrest-rock-1-bl",
      "skuGroup": "footrest-rock",
      "title": "Reposapiés Ergonómico ",
      "description": "El reposapiés ergonomico tiene una forma especial con llantas para que se balancee y tus pies puedan reposar en un ángulo natural.  Se puede ajustar la altura y ángulo de inclinación.  ",
      "subcategoryId": 35,
      "price": 30,
      "stock": 0,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1",
      "specs": {
        "details": [
          ""
        ],
        "dimensions": "48.5x26.5x19cm",
        "specifications": {}
      } as Product["specs"],
      "images": [
        "footrest-rock-1-bl/footrest-rocking-1.jpg",
        "footrest-rock-1-bl/footrest-rocking-2.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 6,
        "panama_otro": 6,
        "panama_ciudad": 0,
        "otras_provincias": 6
      },
      "display": true,
      "createdAt": new Date("2022-08-14T20:14:59.000Z"),
      "updatedAt": new Date("2022-12-29T22:54:32.000Z"),
      "createdBy": "lucas@torus-digital.com",
      "updatedBy": "josemiguel@ergonomicadesk.com"
    },
    {
      "id": 143,
      "sku": "charge-strip-12outlet-bl",
      "skuGroup": "charge-strip-12outlet",
      "title": "Regleta con 12 tomacorrientes heavy duty",
      "description": "Regleta de aluminio heavy duty de alta resistencia con 12 tomacorrientes. Los enchufes están en posición vertical para que tengas más espacio para los cargadore grandes.  Cuenta con protección de sobretensiones, sobrecargas y fluctuaciones para que todos tus dispositivos estén protegidos. Tiene un diseño de montaje que te permite instalarlo en las paredes o en la parte de abajo de tu escritorio para mantener todos tus cables organizados.",
      "subcategoryId": 34,
      "price": 37,
      "stock": 18,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Interruptor de seguridad",
          "Protección contra sobrevoltaje",
          "Carcasa de aluminio",
          "Adaptadores incluidos para que puedas atornillarlo debajo de la mesa de tu escritorio"
        ],
        "dimensions": "88.26x12.6x5",
        "specifications": {
          "Material": "Aluminio",
          "Peso_del_producto": "1690g",
          "Número_de_puertos": "12"
        }
      } as Product["specs"],
      "images": [
        "charge-strip-12outlet-bl/charge-strip-12outlet-bl-1.JPG"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 144,
      "sku": "chair-tesseract-bl",
      "skuGroup": "chair-tesseract",
      "title": "Silla Ergonómica Tesseract",
      "description": "Silla ergonómica para el home office con acabado de malla completa (asiento y respaldar), moderna, altamente ajustable y súper cómoda. Diseñado especialmente para personas que pasan muchas horas trabajando frente a la computadora. Brinda un excelente soporte para toda la espalda ayudándote a mantener una buena postura. Reduce la tensión de las piernas con un diseño que permite una mejor circulación. Construido con materiales de alta calidad y una mall transpirable especial que te mantiene fresco todo el día.",
      "subcategoryId": 19,
      "price": 390,
      "stock": 0,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "4",
      "specs": {
        "details": [
          "[]"
        ],
        "dimensions": "",
        "specifications": {}
      } as Product["specs"],
      "images": [
        "chair-tesseract-bl/chair-tesseract-1.png",
        "chair-tesseract-bl/chair-tesseract-2.png",
        "chair-tesseract-bl/chair-tesseract-3.png",
        "chair-tesseract-bl/chair-tesseract-4.png"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 20,
        "panama_otro": 20,
        "panama_ciudad": 0,
        "otras_provincias": 20
      },
      "display": true,
      "createdAt": new Date("2022-08-14T19:09:55.000Z"),
      "updatedAt": new Date("2022-12-29T22:55:59.000Z"),
      "createdBy": "lucas@torus-digital.com",
      "updatedBy": "josemiguel@ergonomicadesk.com"
    },
    {
      "id": 145,
      "sku": "frame-3stage-wh",
      "skuGroup": "frame-3stage",
      "title": "Base doble motor X para standing desk",
      "description": "La base de altura ajustable doble motor X es la solución más potente y rápida con un diseño de patas triple etapa que le da mayor funcionalidad. Tiene un rango de movimiento de altura de 60-125 cm, capacidad de peso de hasta 140 kgs y una velocidad de 38 mm/s. Ideal para personas de estatura más baja o alta, para poner sobres grandes de hasta 220cm de largo y sobres pesados de madera sólida.",
      "subcategoryId": 15,
      "price": 465,
      "stock": 10,
      "color": "wh",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "5",
      "specs": {
        "details": [
          "Tecnología anticolisión: el marco se detiene automáticamente si la mesa choca con un objeto,Pantalla táctil con 3 memorias,Se incluyen las instrucciones de montaje y todas las herramientas necesarias,Capacidad máxima de peso de 140 kg,Distancia de altura: 60-125 cm,Muy silencioso con niveles de ruido <48dB"
        ],
        "dimensions": "106x35x19",
        "specifications": {}
      } as Product["specs"],
      "images": [
        "frame-3stage-wh/ergerbe@4x.png",
        "frame-3stage-wh/ergergergergergerg@4x.png",
        "frame-3stage-wh/Assrgergeet 1@4x.png",
        "frame-3stage-wh/dfg.png",
        "frame-3stage-wh/dfgdg.png"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 0,
        "panama_otro": 0,
        "panama_ciudad": 0,
        "otras_provincias": 0
      },
      "display": true,
      "createdAt": new Date("2022-05-16T20:33:48.000Z"),
      "updatedAt": new Date("2022-05-16T20:33:49.401Z"),
      "createdBy": "lucas@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 146,
      "sku": "stand-laptop-vertical-gr",
      "skuGroup": "stand-laptop-vertical",
      "title": "Soporte vertical para laptop",
      "description": "El soporte vertical para laptops permite colocar tu laptop cerrada verticalmente maximizando el espacio de trabajo. Es ideal para configuraciones con pantalla grande, múltiple pantallas o para espacios reducidos.",
      "subcategoryId": 27,
      "price": 24,
      "stock": 38,
      "color": "gr",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Aleación de aluminio sólido de alta calidad",
          "Compatible. Se ajusta para que funcione con todas las laptops",
          "Base de silicona para evitar rayones en el sobre"
        ],
        "dimensions": "17x10x5",
        "specifications": {
          "Material": "Metal",
          "Peso_del_producto": "650g"
        }
      } as Product["specs"],
      "images": [
        "stand-laptop-vertical-gr/stand-laptop-vertical-gr-1.jpg",
        "stand-laptop-vertical-gr/stand-laptop-vertical-gr-2.jpg",
        "stand-laptop-vertical-gr/stand-laptop-vertical-gr-3.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 147,
      "sku": "drawer-under-lock-1",
      "skuGroup": "drawer-under",
      "title": "Gaveta con candado para debajo del escritorio",
      "description": "Esta gaveta de metal con candado se puede instalar fácilmente a cualquier escritorio.  Es la adición perfecta para standing desk con un tamaño de 70x25x5cm para que puedas guardar tu laptop y te sobre espacio para todas tus otras pertenencias.",
      "subcategoryId": 7,
      "price": 53,
      "stock": 14,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1",
      "specs": {
        "details": [
          "Construcción de stainless steel,Trae respuesto de llave,Fácil de instalar"
        ],
        "dimensions": "70x25x5cm",
        "specifications": {}
      } as Product["specs"],
      "images": [
        "drawer-under-lock-1/under-drawer-1.png",
        "drawer-under-lock-1/under-drawer-2.png",
        "drawer-under-lock-1/under-drawer-3.png"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 6,
        "panama_otro": 6,
        "panama_ciudad": 0,
        "otras_provincias": 6
      },
      "display": true,
      "createdAt": new Date("2022-08-14T21:42:32.000Z"),
      "updatedAt": new Date("2022-08-19T01:17:23.000Z"),
      "createdBy": "lucas@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 148,
      "sku": "chair-array-gr",
      "skuGroup": "chair-array",
      "title": "Silla Ergonómica Array",
      "description": "Silla ergonómica para el home office con acabado de malla completa (asiento y respaldar), moderna, altamente ajustable y súper cómoda. Diseñado especialmente para personas que pasan muchas horas trabajando frente a la computadora. Brinda un excelente soporte para toda la espalda ayudándote a mantener una buena postura. Reduce la tensión de las piernas con un diseño que permite una mejor circulación. Construido con materiales de alta calidad y una malla especial transpirable que te mantiene fresco todo el día.",
      "subcategoryId": 19,
      "price": 430,
      "stock": 0,
      "color": "gr",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "4 years",
      "specs": {
        "details": [
          "Respaldar y soporte lumbar de altura ajustable",
          "Ángulo de inclinación y tensión ajustables",
          "Asiento deslizante con altura del asiento ajustable",
          "Panel de control con una manija",
          "Reposacabezas 3D",
          "Reposabrazos 4D"
        ],
        "dimensions": "74x58x66",
        "specifications": {
          "Base": "350mm de aluminum base",
          "Lift": "Class 4 gas lift",
          "Cubiertas": "60mm de cubierta de cromo",
          "Ensamblado": "Requerido",
          "Peso_de_la_silla": "20.5 kgs",
          "Certificación_BIFMA": "Si",
          "Material_del_asiento": "Malla",
          "Material_del_respaldo": "Malla",
          "Peso_máximo_soportado_(silla)": "125 kgs"
        }
      } as Product["specs"],
      "images": [
        "chair-array-gr/chair-array-gr-1.JPG",
        "chair-array-gr/chair-array-gr-2.JPG",
        "chair-array-gr/chair-array-gr-3.JPG",
        "chair-array-gr/chair-array-gr-4.JPG",
        "chair-array-gr/chair-array-gr-5.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 20,
        "panama_otro": 20,
        "panama_ciudad": 0,
        "otras_provincias": 20
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-11-29T16:36:38.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 149,
      "sku": "balance-board-1-bl",
      "skuGroup": "balance-board-1",
      "title": "Tabla de balance para oficina 1",
      "description": "La tabla de equilibrio para oficina es una solución muy buena para mejorar la postura, aliviar los dolores de espalda, reducir la tensión de los pies y fortalecer el core mientras trabajas de pie.",
      "subcategoryId": 17,
      "price": 55,
      "stock": 0,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Reduce la fatiga del pie",
          "Aumenta los músculos centrales",
          "Alivio del estrés laboral",
          "Quemas más calorías mientras trabaja",
          "Antideslizante"
        ],
        "dimensions": "51x35x5.7",
        "specifications": {
          "Material": "PU, Plywood, caucho",
          "Peso_del_producto": "2.2kg"
        }
      } as Product["specs"],
      "images": [
        "balance-board-1-bl/balance-board-1-bl-1.jpg",
        "balance-board-1-bl/balance-board-1-bl-2.jpg",
        "balance-board-1-bl/balance-board-1-bl-3.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-05-07T03:13:22.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 150,
      "sku": "mouse-wireless-1-bl",
      "skuGroup": "mouse-wireless-1",
      "title": "Mouse inalámbrico para oficina",
      "description": "El mouse de oficina de aluminio es inalámbrico, recargable y tiene un diseño delgado y cómodo. Funciona muy bien en cualquier espacio de trabajo.",
      "subcategoryId": 26,
      "price": 15,
      "stock": 18,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Clics silenciosos",
          "Recargable",
          "Fabricado en aluminio y abs",
          "Slim"
        ],
        "dimensions": "11.6x10x3",
        "specifications": {
          "PPP": " 800-1200-1600",
          "Material": "Aluminio",
          "Conectividad": "2.4g Wireless",
          "Peso_del_productot": "60g"
        }
      } as Product["specs"],
      "images": [
        "mouse-wireless-1-bl/mouse-wireless-1-bl-1.jpg",
        "mouse-wireless-1-bl/mouse-wireless-1-bl-2.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 151,
      "sku": "pad-alumi-mouse-sl",
      "skuGroup": "pad-alumi-mouse",
      "title": "Mouse pad de aluminio",
      "description": "La alfombrilla de aluminio para mouse o mouse pad se ve y se siente bien con tu mouse. Ayuda a proteger tu sobre del escritorio.",
      "subcategoryId": 31,
      "price": 11,
      "stock": 16,
      "color": "si",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Aluminio de alta calidad",
          "Esquinas redondeadas",
          "Base con gomas antideslizantes"
        ],
        "dimensions": "30x30x10",
        "specifications": {
          "Material": "Aluminio",
          "Peso_del_producto": "150g"
        }
      } as Product["specs"],
      "images": [
        "pad-alumi-mouse-sl/pad-alumi-mouse-sl-1.jpg",
        "pad-alumi-mouse-sl/pad-alumi-mouse-sl-2.jpg",
        "pad-alumi-mouse-sl/pad-alumi-mouse-sl-3.jpg",
        "pad-alumi-mouse-sl/pad-alumi-mouse-sl-4.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 152,
      "sku": "chair-argon-gr",
      "skuGroup": "chair-argon",
      "title": "Silla Ergonómica Argon",
      "description": "Silla ergonómica de home office con un diseño moderno, respaldar de malla y asiento de espuma moldeada de alta densidad.  Esta silla brinda una comodidad extrema y un excelente soporte para toda la espalda. Diseñado especialmente para profesionales que pasan muchas horas al día sentados frente a una computadora.",
      "subcategoryId": 19,
      "price": 200,
      "stock": 5,
      "color": "gr",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "4",
      "specs": {
        "details": [
          "[Soporte lumbar,Asiento de espuma moldeada de alta densidad,mecanismo de bloqueo syncro tilt con 4 posiciones, reposacabezas,ruedas de nylon,]"
        ],
        "dimensions": "",
        "specifications": {}
      } as Product["specs"],
      "images": [
        "chair-argon-gr/dfhdfhdfhadfh-100 (1).jpg",
        "chair-argon-gr/dfhsdfhedsfh-100 (1).jpg",
        "chair-argon-gr/dfh-100 (1).jpg",
        "chair-argon-gr/dfhdsfhdf-100 (2).jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 0,
        "panama_otro": 0,
        "panama_ciudad": 0,
        "otras_provincias": 0
      },
      "display": true,
      "createdAt": new Date("2023-01-18T23:04:05.000Z"),
      "updatedAt": new Date("2023-01-18T23:04:05.631Z"),
      "createdBy": "lucas@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 153,
      "sku": "top-mela-pecan-152",
      "skuGroup": "top-mela",
      "title": "Sobre de melamina",
      "description": "El sobre de mesa para tu standing desk. Hecho de MDF hidrófugo de 1 pulgada de grueso con un laminado de melamina de alta calidad.",
      "subcategoryId": 43,
      "price": 95,
      "stock": 4,
      "color": "pecan",
      "size": "152",
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Durables",
          "Resistente a la humedad",
          "Ligero",
          "Fácil de limpiar",
          "Difícil de rayar",
          "Resistente a  contacto con objetos calientes"
        ],
        "dimensions": "152x75x2.5",
        "specifications": {
          "Espesor": "1 pulgada",
          "Laminado": "Melamina",
          "Material": "MDF",
          "Hidrofóbico": "Si"
        }
      } as Product["specs"],
      "images": [
        "top-mela-pecan-152/top-mela-pecan-152-1.jpg"
      ],
      "assembly": 10,
      "shipping": {
        "colon": 15,
        "panama_otro": 15,
        "panama_ciudad": 10,
        "otras_provincias": 15
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-11-29T16:57:49.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 154,
      "sku": "stand-head-desk-bl",
      "skuGroup": "stand-head-desk",
      "title": "Soporte de aluminio para headphones",
      "description": "Soporte de aluminio sólido para tus audífonos.  Exhibe y protege tus headphones con un soporte especial para ellos y al mismo tiempo mantén tu espacio de trabajo organizado.   ",
      "subcategoryId": 3,
      "price": 19,
      "stock": 14,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Soporte de aluminio sólido para audífonos",
          "Base pesada para una buena estabilidad",
          "Base con gomas de silicona para evitar rayar la mesa",
          "Universal"
        ],
        "dimensions": "15x10x10",
        "specifications": {
          "Material": "Aluminio"
        }
      } as Product["specs"],
      "images": [
        "stand-head-desk-bl/stand-head-desk-bl-1.jpg",
        "stand-head-desk-bl/stand-head-desk-bl-2.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-10-21T00:54:24.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "josemiguel@ergonomicadesk.com"
    },
    {
      "id": 155,
      "sku": "chair-disruptive-bl",
      "skuGroup": "chair-disruptive",
      "title": "Silla Ergonomica Disruptive",
      "description": "Silla ergonómica avanzada de home office con marco de aluminio y mecanismo de bloqueo avanzado, altamente ajustable con soporte lumbar dinámico que se adapta a tu espalda y acabado de una malla especial (asiento y respaldar).  Diseñado para los profesionales más exigentes y ocupados que pasan más de 8 horas al día frente a la computadora. Su diseño centrado en el ser humano brinda un excelente soporte para toda la espalda ayudándote a mantener una postura adecuada. Esta silla se siente igual de bien como se ve.  Construido solo con los mejores materiales disponible para que te dure un largo tiempo.",
      "subcategoryId": 19,
      "price": 650,
      "stock": 1,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "4",
      "specs": {
        "details": [
          "Marco de Aluminio,Asiento deslizante con altura ajustable,Respaldar de altura ajustable,ángulo de inclinación y tensión ajustables,Reposabrazos 3D,Reposacabezas 3D,Soporte lumbar dinámico,Base de aluminio,mecanismo de bloqueo avanzado,Asiento y respaldar de malla especial transpirable"
        ],
        "dimensions": "",
        "specifications": {}
      } as Product["specs"],
      "images": [
        "chair-disruptive-bl/Asset 21.jpg",
        "chair-disruptive-bl/Asset 5.jpg",
        "chair-disruptive-bl/Asset 6.jpg",
        "chair-disruptive-bl/Asset 7.jpg",
        "chair-disruptive-bl/Asskjlet 2.jpg",
        "chair-disruptive-bl/ddddddd.jpg",
        "chair-disruptive-bl/image (2).jpeg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 20,
        "panama_otro": 20,
        "panama_ciudad": 0,
        "otras_provincias": 20
      },
      "display": true,
      "createdAt": new Date("2022-08-31T16:44:33.000Z"),
      "updatedAt": new Date("2022-12-29T22:53:55.000Z"),
      "createdBy": "lucas@torus-digital.com",
      "updatedBy": "josemiguel@ergonomicadesk.com"
    },
    {
      "id": 156,
      "sku": "top-mela-walnut-182",
      "skuGroup": "top-mela",
      "title": "Sobre de melamina",
      "description": "El sobre de mesa para tu standing desk. Hecho de MDF hidrófugo de 1 pulgada de grueso con un laminado de melamina de alta calidad.",
      "subcategoryId": 43,
      "price": 115,
      "stock": 1,
      "color": "walnut",
      "size": "182",
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Durables",
          "Resistente a la humedad",
          "Ligero",
          "Fácil de limpiar",
          "Difícil de rayar",
          "Resistente a  contacto con objetos calientes"
        ],
        "dimensions": "182x75x2.5",
        "specifications": {
          "Espesor": "1 pulgada",
          "Laminado": "Melamina",
          "Material": "MDF",
          "Hidrofóbico": "Si"
        }
      } as Product["specs"],
      "images": [
        "top-mela-walnut-182/top-mela-walnut-182-1.jpg"
      ],
      "assembly": 10,
      "shipping": {
        "colon": 20,
        "panama_otro": 20,
        "panama_ciudad": 0,
        "otras_provincias": 20
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 157,
      "sku": "frame-double-bl",
      "skuGroup": "frame-double",
      "title": "Base doble motor para standing desk",
      "description": "La base de altura ajustable de doble motor es ideal para una configuración de standing desk con sobre grande de hasta 220cm de largo o sobre pesado de madera sólida.  La base es rápida con una velocidad de 32 mm/s y silenciosa con ruido menor a <48 db.  Se adapta a cualquier sobre de mesa que tenga un largo entre 100-220 cm y un ancho entre 58-90 cm.  Incluye una pantalla con 3 memorias, tecnología anticolisión y 5 años de garantía. Ideal para tu home office of cualquier espacio de trabajo.  Es la mejor inversión que puedes hacer para tu salud y productividad.",
      "subcategoryId": 15,
      "price": 450,
      "stock": 19,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "5 years",
      "specs": {
        "details": [
          "Tecnología anticolisión: el marco se detiene automáticamente si la mesa choca con un objeto",
          "Pantalla táctil con 3 memorias",
          "Los motores están ocultos dentro de las patas de la base",
          "Capacidad máxima de peso de 120 kg",
          "Distancia de altura: 70-120cm",
          "Se adapta a cualquier tablero de mesa con dimensiones: largo 100-220 cm y ancho 58-90 cm",
          "Muy silencioso con niveles de ruido <48dB",
          "Se incluyen las instrucciones de montaje y todas las herramientas necesarias"
        ],
        "dimensions": "106 x 27.5 x 19.6",
        "specifications": {
          "Velocidad": "32mm/s",
          "Peso_máximo": "120kg",
          "Altura_máxima": "120 cm",
          "Altura_mínima": "70 cm",
          "Nivel_de_ruido": "<48dB",
          "Ancho_del_sobre": "58-90cm",
          "Largo_del_sobre": "100-220cm",
          "Peso_del_producto": "27kgs"
        }
      } as Product["specs"],
      "images": [
        "frame-double-bl/frame-double-bl-1.jpg"
      ],
      "assembly": 10,
      "shipping": {
        "colon": 20,
        "panama_otro": 20,
        "panama_ciudad": 0,
        "otras_provincias": 20
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-05-16T20:16:09.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 158,
      "sku": "charge-strip-6outlet-bl",
      "skuGroup": "charge-strip-6outlet",
      "title": "Regleta con 6 tomacorrientes heavy duty",
      "description": "Regleta de aluminio heavy duty de alta resistencia con 6 tomacorrientes y 2 cargadores USB. Los enchufes están en posición vertical para que tengas más espacio para los cargadore grandes.  Cuenta con protección de sobretensiones, sobrecargas y fluctuaciones para que todos tus dispositivos estén protegidos. Tiene un diseño de montaje que te permite instalarlo en las paredes o en la parte de abajo de tu escritorio para mantener todos tus cables organizados.",
      "subcategoryId": 34,
      "price": 28,
      "stock": 13,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Cable de alta resistencia trenzado de 6 pies",
          "Carcasa de aluminio",
          "Protección contra sobretensiones",
          "2 cargadores adicionales USB 5V/2.4A"
        ],
        "dimensions": "31.4x4.8x3",
        "specifications": {
          "Voltage": "125V",
          "Material": "Aluminio",
          "Corriente": "15A",
          "Peso_del_producto": "830g",
          "Número_de_puertos": "6"
        }
      } as Product["specs"],
      "images": [
        "charge-strip-6outlet-bl/charge-strip-6outlet-bl-1.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-05-04T16:13:50.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "josemiguel@ergonomicadesk.com"
    },
    {
      "id": 159,
      "sku": "top-glass-121",
      "skuGroup": "top-glass",
      "title": "Sobre de vidrio templado",
      "description": "Sobre de mesa de vidrio templado de 10mm de grosor.  Es una solución moderna, fina y práctica. Viene con agujeros listos para adaptarse a las bases de standing desks de Ergonomica.  Pedido especial, por favor contactarnos al whatsapp par poner una orden",
      "subcategoryId": 43,
      "price": 150,
      "stock": 0,
      "color": null,
      "size": "121",
      "brand": "Ergonomica",
      "warranty": "2 years",
      "specs": {
        "details": [
          "Vidrio templado claro de 10 mm de espesor con bordes biselados"
        ],
        "dimensions": "121x60x2.5",
        "specifications": {
          "Espesor": "10 mm",
          "Material": "Vidrio templado"
        }
      } as Product["specs"],
      "images": [
        "top-glass-121/top-glass-121-1.jpg"
      ],
      "assembly": 10,
      "shipping": {
        "colon": 20,
        "panama_otro": 20,
        "panama_ciudad": 0,
        "otras_provincias": 20
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 160,
      "sku": "monitor-lg-29wp500-b-bl",
      "skuGroup": "monitor-lg-29wp500-b",
      "title": "Monitor LG Ultrawide de 29 pulgadas 29wp500-b HD IPS",
      "description": "La resolución Full HD UltraWide™ (2560x1080) ofrece un 33% más de espacio de pantalla a lo ancho que el monitor con resolución FHD (1920x1080). El IPS  ofrece una precisión impecable de color. Con un ángulo de visión más amplio, el monitor IPS cuenta con una cobertura del 99% del espectro de colores sRGB.",
      "subcategoryId": 23,
      "price": 252,
      "stock": 0,
      "color": "bl",
      "size": null,
      "brand": "LG",
      "warranty": "3 years",
      "specs": {
        "details": [
          "IPS con sRGB 99%",
          "HDR10",
          "AMD FreeSync",
          "Control en pantalla",
          "Modo de lectura",
          "Sin parpadeo"
        ],
        "specifications": {
          "Brillo": "250_ cd/m2",
          "Tamaño": "29in",
          "Antireflejo": "si",
          "Resolución": "2560_x_1080",
          "Tipo_de_panel": "IPS",
          "Ángulo_de_visión": "178˚(R/L)_78˚(U/D)",
          "Tiempo_de_respuesta": "5ms",
          "Relación_de_contraste": "1000:1"
        }
      } as Product["specs"],
      "images": [
        "monitor-lg-29wp500-b-bl/monitor-lg-29wp500-b-bl-1.jpg",
        "monitor-lg-29wp500-b-bl/monitor-lg-29wp500-b-bl-2.jpg",
        "monitor-lg-29wp500-b-bl/monitor-lg-29wp500-b-bl-3.jpg",
        "monitor-lg-29wp500-b-bl/monitor-lg-29wp500-b-bl-4.jpg",
        "monitor-lg-29wp500-b-bl/monitor-lg-29wp500-b-bl-5.jpg",
        "monitor-lg-29wp500-b-bl/monitor-lg-29wp500-b-bl-6.jpg",
        "monitor-lg-29wp500-b-bl/monitor-lg-29wp500-b-bl-7.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 20,
        "panama_otro": 20,
        "panama_ciudad": 4,
        "otras_provincias": 20
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 161,
      "sku": "stand-head-under-bl",
      "skuGroup": "stand-head-under",
      "title": "Soporte de headphones para debajo del escritorio",
      "description": "Maximiza el espacio de trabajo colgando los headphones abajo del escritorio. También se puede usar para colgar maletines, carteras o cualquier artefacto que gustes.  ",
      "subcategoryId": 3,
      "price": 14,
      "stock": 39,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Fabricado en aluminio de alta calidad",
          "Fácil de instalar",
          "Tiene una superficie de silicona para proteger tus artefactos",
          "Utiliza una abrazadera para sujetar fácilmente a cualquier mesa"
        ],
        "dimensions": "15x10x10",
        "specifications": {
          "Material": "Aluminio",
          "Peso_del_producto": "149g"
        }
      } as Product["specs"],
      "images": [
        "stand-head-under-bl/stand-head-under-bl-1.jpg",
        "stand-head-under-bl/stand-head-under-bl-2.jpg",
        "stand-head-under-bl/stand-head-under-bl-3.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 162,
      "sku": "stand-laptop-clasic-sl",
      "skuGroup": "stand-laptop-clasic",
      "title": "Soporte clásico para laptop",
      "description": "El soporte de laptop eleva tu laptop a la altura y el ángulo ideal. Ayuda a mantener su escritorio organizado y maximizar su espacio de trabajo. Es el complemento perfecto para la configuración de tu standing desk permitiendote trabajar fluidamente con otros monitores. ",
      "subcategoryId": 27,
      "price": 26,
      "stock": 0,
      "color": "sl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Aleación de aluminio de alta calidad",
          "Fácil de ensamblar",
          "Universal",
          "Compatible con todas las laptops de 10 a 16 pulgadas",
          "Proporciona una excelente ventilación",
          "Desmontable y portátil"
        ],
        "dimensions": "32x22.5x6.5",
        "specifications": {
          "Material": "Aluminio",
          "Peso_del_producto": "785g",
          "Tamaño_de_la_laptop": "10-16 inches"
        }
      } as Product["specs"],
      "images": [
        "stand-laptop-clasic-sl/stand-laptop-clasic-gr-1.jpg",
        "stand-laptop-clasic-sl/stand-laptop-clasic-gr-2.jpg",
        "stand-laptop-clasic-sl/stand-laptop-clasic-gr-3.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-12-29T22:52:25.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "josemiguel@ergonomicadesk.com"
    },
    {
      "id": 163,
      "sku": "hubs-adap-thundertohdmi-bl",
      "skuGroup": "hubs-adap-thundertohdmi",
      "title": "Cable Displayport a HDMI de 1.8m",
      "description": "Cable HDMI 4k a thunderbolt de 1.8 m de largo.  Para todos los dispositivos más viejos que vienen con entradas thunderbolt.  ",
      "subcategoryId": 6,
      "price": 7,
      "stock": 19,
      "color": "bl",
      "size": null,
      "brand": null,
      "warranty": "1 year",
      "specs": {
        "details": [
          "4K",
          "plug & play"
        ]
      } as Product["specs"],
      "images": [
        "hubs-adap-thundertohdmi-bl/hubs-adap-thundertohdmi-bl-1.jpg",
        "hubs-adap-thundertohdmi-bl/hubs-adap-thundertohdmi-bl-2.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 164,
      "sku": "stand-riser-monitor-sl",
      "skuGroup": "stand-riser-monitor",
      "title": "Elevador de aluminio para monitor",
      "description": "El soporte de monitor de aluminio eleva tu monitor a la altura ideal. Ayuda a mantener tu escritorio organizado y a maximizar el espacio de trabajo. ",
      "subcategoryId": 42,
      "price": 35,
      "stock": 14,
      "color": "sl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Diseño moderno y elegante",
          "Aleación de aluminio resistente",
          "Soporta dispositivos de hasta 16 kgs",
          "Agrega espacio adicional de almacenamiento debajo del monitor",
          "Universal - se puede usar con cualquier dispositivo como monitores o laptops."
        ],
        "dimensions": "46x38x5",
        "specifications": {
          "Material": "Aluminio",
          "Peso_del_producto": "1000g"
        }
      } as Product["specs"],
      "images": [
        "stand-riser-monitor-sl/stand-riser-monitor-sl-1.jpg",
        "stand-riser-monitor-sl/stand-riser-monitor-sl-2.jpg",
        "stand-riser-monitor-sl/stand-riser-monitor-sl-3.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 165,
      "sku": "deco-art-frame-16x24-bl",
      "skuGroup": "deco-art-frame",
      "title": "Marco de 16x24 pulgadas para arte",
      "description": "Marco de madera con vidrio para fotos, pinturas, posters, impresiones y cualquier tipo de arte.  Incluye ganchos para colgar el arte de manera vertical o horizontal.  Decora tu espacio de trabajo o home office con tus artes favoritos.\"\" ",
      "subcategoryId": 29,
      "price": 19,
      "stock": 35,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Marco de madera",
          "Vidrio",
          "Ganchos horizontales y verticales",
          "Incluye un borde interior blanco que es removible"
        ],
        "dimensions": "16x24",
        "specifications": {
          "Cubierta_de_vidrio": "Si",
          "Material_del_marco": "madera"
        }
      } as Product["specs"],
      "images": [
        "deco-art-frame-16x24-bl/deco-art-frame-16x24-bl-1.jpg",
        "deco-art-frame-16x24-bl/deco-art-frame-16x24-bl-2.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 6,
        "panama_otro": 6,
        "panama_ciudad": 4,
        "otras_provincias": 6
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 166,
      "sku": "cabinet-3drawer-slim-wh",
      "skuGroup": "cabinet-3drawer-slim",
      "title": "Archivador compacto slim de 3 gavetas",
      "description": "El archivador de 3 cajones slim de 30x60x52cm  tiene el tamaño perfecto para caber debajo de tu escritorio. Los dos primeros cajones están hechos para todos sus suministros de oficina. El último armario es para almacenar los archivos.",
      "subcategoryId": 39,
      "price": 155,
      "stock": 7,
      "color": "wh",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "2",
      "specs": {
        "details": [
          "Bloqueo con llave,Acero laminado en frío de alta calidad,Pintura de recubrimiento en polvo electrostático,Impermeable y resistente a la humedad,Muy estable,Capacidad de peso: 125 kgs"
        ],
        "dimensions": "60x30x52",
        "specifications": {}
      } as Product["specs"],
      "images": [
        "cabinet-3drawer-slim-wh/Asset 16ergerh.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 15,
        "panama_otro": 15,
        "panama_ciudad": 0,
        "otras_provincias": 15
      },
      "display": true,
      "createdAt": new Date("2022-09-28T22:55:56.000Z"),
      "updatedAt": new Date("2022-10-14T16:33:39.000Z"),
      "createdBy": "lucas@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 167,
      "sku": "frame-single-wh",
      "skuGroup": "frame-single",
      "title": "Base de un motor para standing desk",
      "description": "La base de altura ajustable de un motor es una solución confiable y poderosa para tu escritorio. Te permite trabajar sentado y parado de manera simultánea incrementando tu productividad y reduciendo los dolores de espalda. La base se adapta a cualquier sobre de mesa que tenga un largo entre 100-190 cm y un ancho de 58-90 cm. Cuenta con una pantalla de 3 memorias, tecnología anticolisión, gran capacidad de peso y 5 años de garantía. Es la mejor inversión que puede hacer para tu salud y el trabajo.",
      "subcategoryId": 15,
      "price": 330,
      "stock": 24,
      "color": "wh",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "5 years",
      "specs": {
        "details": [
          "Tecnología anticolisión: el marco se detiene automáticamente si la mesa choca con un objeto",
          "Pantalla táctil con 3 memorias",
          "Capacidad máxima de peso de 100 kg",
          "Distancia de altura: 70-120 cm",
          "Muy silencioso con niveles de ruido <50dB",
          "Se incluyen las instrucciones de montaje y todas las herramientas necesarias"
        ],
        "dimensions": "106x33x13",
        "specifications": {
          "Velocidad": "25 mm/s",
          "Peso_máximo": "100kg",
          "Altura_máxima": "120 cm",
          "Altura_mínima": "70 cm",
          "Nivel_de_ruido": "<50dB",
          "Largo_del_sobre": "100-190cm",
          "Ancho_del _sobre": "58-90cm",
          "Peso_del_producto": "25kgs"
        }
      } as Product["specs"],
      "images": [
        "frame-single-wh/frame-single-wh-1.jpg",
        "frame-single-wh/frame-single-wh-2.jpg",
        "frame-single-wh/frame-single-wh-3.jpg",
        "frame-single-wh/frame-single-wh-4.jpg",
        "frame-single-wh/frame-single-wh-5.jpg"
      ],
      "assembly": 10,
      "shipping": {
        "colon": 20,
        "panama_otro": 20,
        "panama_ciudad": 0,
        "otras_provincias": 20
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-05-16T20:14:56.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 168,
      "sku": "keyboard-btoffice-us-gr",
      "skuGroup": "keyboard-btoffice-us",
      "title": "Teclado multi bluetooth de aluminio",
      "description": "El teclado de aluminio multidispositivo le permite conectar hasta 2 dispositivos BT diferentes al mismo tiempo. Es ideal para conectar una laptop, iphone, ipad o cualquier dispositivo que uses para trabajar. El teclado está construido de forma sólida y proporciona una agradable experiencia al escribir. ",
      "subcategoryId": 16,
      "price": 39,
      "stock": 0,
      "color": "gr",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Admite dos dispositivos al mismo tiempo",
          "Recargable con una batería de larga duración",
          "Compatible con todos los dispositivos Mac",
          "Windows y Linux"
        ],
        "dimensions": "47x15x2",
        "specifications": {
          "Material": "Aluminio",
          "Connectividad": "Bluetooth 3",
          "Peso_del_producto": "770g",
          "Cantidad_de_dispositivos_conectados": "2"
        }
      } as Product["specs"],
      "images": [
        "keyboard-btoffice-us-gr/keyboard-btoffice-us-gr-1.jpg",
        "keyboard-btoffice-us-gr/keyboard-btoffice-us-gr-2.jpg",
        "keyboard-btoffice-us-gr/keyboard-btoffice-us-gr-3.jpg",
        "keyboard-btoffice-us-gr/keyboard-btoffice-us-gr-4.jpg",
        "keyboard-btoffice-us-gr/keyboard-btoffice-us-gr-5.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-06-06T21:37:20.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "josemiguel@ergonomicadesk.com"
    },
    {
      "id": 169,
      "sku": "top-wood-teak-121",
      "skuGroup": "top-wood",
      "title": "Sobre de madera natural",
      "description": "Sobre de mesa hecho de madera Teca Panameña con acabado de poliuretano semi mate.  La teca es un madera bien fuerte y liviana. Es un sobre que te va a durar toda la vida.",
      "subcategoryId": 43,
      "price": 220,
      "stock": 4,
      "color": "teak",
      "size": "121",
      "brand": "Ergonomica",
      "warranty": "2 years",
      "specs": {
        "details": [
          "Madera sólida de Panamá de origen ético",
          "Acabado con 6 capas de poliuretano semi mate",
          "1.5 pulgadas de grosor con bordes biselados"
        ],
        "dimensions": "121x60x2.5",
        "specifications": {
          "Acabado": "6 capas de poliuretano semi mate",
          "Espesor": "1.5 pulgadas",
          "Material": "Madera Tropical dura"
        }
      } as Product["specs"],
      "images": [
        "top-wood-teak-121/top-wood-teak-121-1.jpg"
      ],
      "assembly": 10,
      "shipping": {
        "colon": 20,
        "panama_otro": 20,
        "panama_ciudad": 0,
        "otras_provincias": 20
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-11-29T16:59:27.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 170,
      "sku": "balance-board-2-bl",
      "skuGroup": "balance-board-2",
      "title": "Tabla de balance para oficina 2",
      "description": "La tabla de equilibrio para oficina es una solución muy buena para mejorar la postura, aliviar los dolores de espalda, reducir la tensión de los pies y fortalecer el core mientras trabajas de pie.",
      "subcategoryId": 17,
      "price": 55,
      "stock": 100,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Reduce la fatiga del pie",
          "Aumenta los músculos centrales",
          "Alivio del estrés laboral",
          "Quemas más calorías mientras trabaja",
          "Antideslizante"
        ],
        "dimensions": "51x35x5.7",
        "specifications": {
          "Material": "PU, Plywood, caucho",
          "Peso_del_producto": "2.2kg"
        }
      } as Product["specs"],
      "images": [
        "balance-board-2-bl/balance-board-2-bl-1.jpg",
        "balance-board-2-bl/balance-board-2-bl-2.jpg",
        "balance-board-2-bl/balance-board-2-bl-3.jpg",
        "balance-board-2-bl/balance-board-2-bl-4.jpg",
        "balance-board-2-bl/balance-board-5.jpeg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-10-05T21:06:31.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 171,
      "sku": "stand-arm-heavy-single-bl",
      "skuGroup": "stand-arm-heavy-single",
      "title": "Brazo Heavy Duty Para Un Monitor",
      "description": "El brazo de aluminio heavy duty para un monitor tiene una capacidad de peso de 15kgs para monitores de hasta 46\".   El brazo te permite ajustar sin problemas la pantalla a la altura, profundidad y ángulo de visión correctos reduciendo la tensión de tu cuello. El brazo es altamente ajustable y utiliza un mecanismo neumático de contrapeso dándote una sensación que el monitor estuviera flotando. Es el complemento perfecto para la configuración de tu standing desk en el home office. ",
      "subcategoryId": 2,
      "price": 99,
      "stock": 71,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "3",
      "specs": {
        "details": [
          "Aplicación universal. Funciona con todas las pantallas VESA de tamaño 13 a 46 pulgadas ultrawide,Totalmente ajustable. El monitor puede girar 360 grados a orientación vertical y horizontal,Nuevo medidor de peso, mecanismo de resorte de gas de contrapeso robusto,Gestión de cables,Fácil instalación. Todas las herramientas necesarias están incluidas,Dos opciones de montaje: sistema de abrazadera ajustable (clamp on) o con ojal (grommet)"
        ],
        "dimensions": "",
        "specifications": {
          "Giro": "360°",
          "Inclinación": "+90° to -90°",
          "Min-max_altura": "19-54cm",
          "Capacidad_de_carga": "2-15kg",
          "Tamaño_de_pantalla": "13-46in"
        }
      } as Product["specs"],
      "images": [
        "stand-arm-heavy-single-bl/arm-heavy-1.png",
        "stand-arm-heavy-single-bl/arm-heavy-2.png",
        "stand-arm-heavy-single-bl/arm-heavy-3.png",
        "stand-arm-heavy-single-bl/arm-heavy-5.png"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 6,
        "panama_otro": 6,
        "panama_ciudad": 0,
        "otras_provincias": 6
      },
      "display": true,
      "createdAt": new Date("2022-08-14T20:52:25.000Z"),
      "updatedAt": new Date("2022-08-31T22:06:48.000Z"),
      "createdBy": "lucas@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 172,
      "sku": "footrest-1-wh",
      "skuGroup": "footrest-1",
      "title": "Reposapiés Ajustable ",
      "description": "Al reposapiés se le puede ajustar la altura y ángulo de inclinación.  ",
      "subcategoryId": 35,
      "price": 27,
      "stock": 23,
      "color": "wh",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1",
      "specs": {
        "details": [
          "[]"
        ],
        "dimensions": "43x32x20cm",
        "specifications": {}
      } as Product["specs"],
      "images": [
        "footrest-1-wh/footrest11.png"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 6,
        "panama_otro": 6,
        "panama_ciudad": 1.5,
        "otras_provincias": 6
      },
      "display": true,
      "createdAt": new Date("2022-08-31T00:47:22.000Z"),
      "updatedAt": new Date("2022-08-31T00:47:22.954Z"),
      "createdBy": "lucas@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 173,
      "sku": "hubs-usbc-10in1-gr",
      "skuGroup": "hubs-usbc-10in1",
      "title": "Hub Tipo C 10 en 1",
      "description": "Amplíe las capacidades de tus dispositivos con puertos adicionales. El hub 10 en 1 viene completo con todos los puertos que puedas necesitar. Contiene los siguientes puertos: 1 x HDMI 4K / 1 x VGA Port - Full HD /  3 x puertos USB 3.0 /1 x SD Card Slot / 1 x TF Card  / 1 x RJ45 Gigabit Ethernet port / 1 x 3.5mm Audio Mic / 1 x PD - Max power output 100W",
      "subcategoryId": 14,
      "price": 49,
      "stock": 18,
      "color": "gr",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Plug & Play",
          "Transferencia de datos de alta velocidad",
          "Compatible con todos los sistemas operativos y dispositivos con conexiones tipo c"
        ],
        "dimensions": "15.6x9x2",
        "specifications": {
          "Material": "Aluminio",
          "Peso_del_producto": "110g",
          "Número_de_puertos": "10"
        }
      } as Product["specs"],
      "images": [
        "hubs-usbc-10in1-gr/hubs-usbc-10in1-gr-1.jpg",
        "hubs-usbc-10in1-gr/hubs-usbc-10in1-gr-2.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 174,
      "sku": "desk-casters-bl",
      "skuGroup": "desk-casters",
      "title": "Ruedas para la base de standing desk",
      "description": "Ruedas especiales para la base de standing desks.  Fácil de instalar, solo tienes que atornillaras a la patas de la base.  ",
      "subcategoryId": 24,
      "price": 21.99,
      "stock": 30,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "5",
      "specs": {
        "details": [
          "[]"
        ],
        "dimensions": "",
        "specifications": {}
      } as Product["specs"],
      "images": [
        "desk-casters-bl/desk caster 2.png",
        "desk-casters-bl/desk caster 1.png",
        "desk-casters-bl/eregrg.png"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 6,
        "panama_otro": 6,
        "panama_ciudad": 1.5,
        "otras_provincias": 6
      },
      "display": true,
      "createdAt": new Date("2022-08-24T23:14:16.000Z"),
      "updatedAt": new Date("2022-08-24T23:14:16.973Z"),
      "createdBy": "lucas@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 175,
      "sku": "chair-asci-bl",
      "skuGroup": "chair-asci",
      "title": "Silla Ergonómica Asci",
      "description": "Silla ergonómica para el home office con soporte lumbar dinámico, de malla completa (silla y asiento) y altamente ajustable. Diseñado para brindarte el mejor soporte para tu espalda durante largas horas de trabajo. Construido con los mejores materiales incluyendo una malla especial transpirable que te mantiene fresco todo el día.",
      "subcategoryId": 19,
      "price": 425,
      "stock": 20,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "4",
      "specs": {
        "details": [
          "Altura del respaldar ajustable,Soporte lumbar dinámico,Ángulo de inclinación y tensión ajustables,Asiento deslizante con altura ajustable,Reposacabezas 3D,Apoyabrazos 4D,Asiento y respaldar de malla premium,Base de aluminio"
        ],
        "dimensions": "",
        "specifications": {}
      } as Product["specs"],
      "images": [
        "chair-asci-bl/16240216947412.jpg",
        "chair-asci-bl/16240216949826.jpg",
        "chair-asci-bl/16240216953792.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 0,
        "panama_otro": 0,
        "panama_ciudad": 0,
        "otras_provincias": 0
      },
      "display": true,
      "createdAt": new Date("2023-01-16T22:30:00.000Z"),
      "updatedAt": new Date("2023-01-16T22:30:01.060Z"),
      "createdBy": "lucas@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 176,
      "sku": "mouse-bt-1-bl",
      "skuGroup": "mouse-bt-1",
      "title": "Mouse bluetooth para oficina",
      "description": "El mouse de oficina de aluminio se conecta con Bluetooth, es recargable y tiene un diseño delgado y cómodo. Funciona muy bien en cualquier espacio de trabajo.",
      "subcategoryId": 26,
      "price": 16,
      "stock": 17,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Clics silenciosos",
          "Recargable",
          "Fabricado en aluminio y abs",
          "Slim",
          "Tres velocidades hasta 1600DPI",
          "Bluetooth"
        ],
        "dimensions": "11.6x10x3",
        "specifications": {
          "PPP": " 800-1200-1600",
          "Material": "Aluminio",
          "Connectividad": "Wireless",
          "Peso_del_producto": "110g"
        }
      } as Product["specs"],
      "images": [
        "mouse-bt-1-bl/mouse-bt-1-bl-1.jpg",
        "mouse-bt-1-bl/mouse-bt-1-bl-2.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 177,
      "sku": "stand-tablet-clasic-gr",
      "skuGroup": "stand-tablet-clasic",
      "title": "Soporte clásico de tablets",
      "description": "Soporte de aluminio sólido para tus tabletas, celulares y consolas de videojuegos portátiles.   Mantén tu espacio de trabajo organizado con tus dispositivos a disposición listos para usar. ",
      "subcategoryId": 33,
      "price": 19,
      "stock": 33,
      "color": "gr",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Universal. Funciona con todas las tabletas de tamaño hasta de 13 pulgadas incluyendo el iPad Pro / iPad Air / iPad mini / Samsung tablet / Nintendo Switch / Kindle E-reader /  iPhone 12 / iPhone 11 Max Pro / Samsung Galaxy  y otros",
          "Ajustable para diferentes ángulos y alturas",
          "Gomillas de silicona antideslizantes y antirayaduras"
        ],
        "dimensions": "19x12x7",
        "specifications": {
          "Material": "Aluminio",
          "Peso_del_producto": "180g",
          "Soporte_de_dispositivo": "4 - 12.9 pulgadas"
        }
      } as Product["specs"],
      "images": [
        "stand-tablet-clasic-gr/stand-tablet-clasic-gr-1.jpg",
        "stand-tablet-clasic-gr/stand-tablet-clasic-gr-2.jpg",
        "stand-tablet-clasic-gr/stand-tablet-clasic-gr-3.jpg",
        "stand-tablet-clasic-gr/stand-tablet-clasic-gr-4.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 178,
      "sku": "wrist-rest-combo-bl",
      "skuGroup": "wrist-rest-combo",
      "title": "Reposamuñeca para teclado y mouse",
      "description": "El reposamuñecas para teclado y mouse de memory foam con forma ergonómica hace que sea más cómodo trabajar y protege tu muñecas del desgaste.",
      "subcategoryId": 8,
      "price": 14,
      "stock": 28,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Hecho de memory foam",
          "Libre de químicos nocivos",
          "Diseño ergonómico",
          "combo reposamuñecas para teclado y mouse",
          "Cubierto de licra para que se mantenga fresco"
        ],
        "dimensions": "15x10x5",
        "specifications": {
          "Material": "Cuero",
          "Peso_del_producto": "300g"
        }
      } as Product["specs"],
      "images": [
        "wrist-rest-combo-bl/wrist-rest-2.jpeg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-08-14T22:12:25.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 179,
      "sku": "hubs-usb-7port-1-gr",
      "skuGroup": "hubs-usb-7port-1",
      "title": "Hub USB de 7 puertos",
      "description": "Un Hub para USB  de siete puertos USB 3.0 de alta velocidad.  Adicionalmente puedes conectarle un cargador 5V 4A (no incluido) si necesita más potencia para ciertos dispositivos.    ",
      "subcategoryId": 41,
      "price": 19,
      "stock": 20,
      "color": "gr",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Hecho de aluminio",
          "Compatibilidad universal",
          "Plug & play",
          "7 puertos USB 3.0",
          "Compatible con USB  2.0 y 1.0",
          "Certificación CE / FCC / RoHS"
        ],
        "dimensions": "10.9x4.4x2.3",
        "specifications": {
          "Material": "Aluminio",
          "Peso_del_producto": "323g",
          "Número_de_puertos": "7"
        }
      } as Product["specs"],
      "images": [
        "hubs-usb-7port-1-gr/hubs-usb-7port-1-gr-1.jpg",
        "hubs-usb-7port-1-gr/hubs-usb-7port-1-gr-2.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 180,
      "sku": "hubs-cables-hdmitousbc1_8-bl",
      "skuGroup": "hubs-cables-hdmitousbc1_8",
      "title": "Cable HDMI a Tipo C de 1.8m",
      "description": "Conecta tus monitores a tu laptop o macbooks que tienen puertos tipo C.",
      "subcategoryId": 6,
      "price": 12.5,
      "stock": 19,
      "color": "bl",
      "size": null,
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "4K",
          "Plug & Play",
          "Cubierta de Aluminio"
        ],
        "dimensions": "14x3.50x23",
        "specifications": {
          "Material": "Aluminio",
          "Peso_del_producto": "119g",
          "Número_de_puertos": "1"
        }
      } as Product["specs"],
      "images": [
        "hubs-cables-hdmitousbc1_8-bl/hubs-cables-hdmitousbc1_8-bl-1.jpg",
        "hubs-cables-hdmitousbc1_8-bl/hubs-cables-hdmitousbc1_8-bl-2.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 3,
        "panama_otro": 3,
        "panama_ciudad": 1.5,
        "otras_provincias": 3
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    },
    {
      "id": 181,
      "sku": "top-mela-black-121",
      "skuGroup": "top-mela",
      "title": "Sobre de melamina",
      "description": "El sobre de mesa para tu standing desk. Hecho de MDF hidrófugo de 1 pulgada de grueso con un laminado de melamina de alta calidad.",
      "subcategoryId": 43,
      "price": 65,
      "stock": 5,
      "color": "black",
      "size": "121",
      "brand": "Ergonomica",
      "warranty": "1 year",
      "specs": {
        "details": [
          "Durables",
          "Resistente a la humedad",
          "Ligero",
          "Fácil de limpiar",
          "Difícil de rayar",
          "Resistente a  contacto con objetos calientes"
        ],
        "dimensions": "121x60x2.5",
        "specifications": {
          "Espesor": "1 pulgada",
          "Laminado": "Melamina",
          "Material": "MDF",
          "Hidrofóbico": "Si"
        }
      } as Product["specs"],
      "images": [
        "top-mela-black-121/top-mela-black-121-1.jpg"
      ],
      "assembly": 10,
      "shipping": {
        "colon": 15,
        "panama_otro": 15,
        "panama_ciudad": 10,
        "otras_provincias": 15
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-11-29T16:37:16.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": "lucas@torus-digital.com"
    },
    {
      "id": 182,
      "sku": "monitor-lg-24mk430h-b-bl",
      "skuGroup": "monitor-lg-24mk430h-b",
      "title": "Monitor LG de 24 pulgadas 24MLK430H LED Full HD IPS ",
      "description": "El monitor LG de 24 pulgadas tiene una alta definición con color preciso.  La resolución 1080p Full HD con IPS ofrece imágenes brillantes que resaltan con detalles vibrantes desde cualquier ángulo de visión. La tecnología AMD FreeSync™ y una frecuencia de actualización dinámica de 75Hz prácticamente evita las imágenes cortadas o que se vean cuadro por cuadro para brindarte un movimiento continuo y fluido durante los juegos de alta resolución y ritmo rápido.",
      "subcategoryId": 23,
      "price": 175,
      "stock": 0,
      "color": "bl",
      "size": null,
      "brand": "LG",
      "warranty": "3 years",
      "specs": {
        "details": [
          "Pantalla 24 pulgadas Full HD IP",
          "Tecnología AMD FreeSync™",
          "Dynamic Action Sync",
          "Black Stabilizer",
          "OnScreen Control",
          "Montaje en Pared"
        ],
        "specifications": {
          "Brillo": "250_ cd/m2",
          "Tamaño": "23.8in",
          "Frequencia": "75hz",
          "Antireflejo": "si",
          "Resolución": "1920_x_1080",
          "Tipo_de_panel": "IPS",
          "Ángulo_de_visión": "178",
          "Tiempo_de_respuesta": "5ms",
          "Relación_de_contraste": "1000:1"
        }
      } as Product["specs"],
      "images": [
        "monitor-lg-24mk430h-b-bl/monitor-lg-24mk430h-b-bl-1.jpg",
        "monitor-lg-24mk430h-b-bl/monitor-lg-24mk430h-b-bl-2.jpg",
        "monitor-lg-24mk430h-b-bl/monitor-lg-24mk430h-b-bl-3.jpg",
        "monitor-lg-24mk430h-b-bl/monitor-lg-24mk430h-b-bl-4.jpg",
        "monitor-lg-24mk430h-b-bl/monitor-lg-24mk430h-b-bl-5.jpg",
        "monitor-lg-24mk430h-b-bl/monitor-lg-24mk430h-b-bl-6.jpg",
        "monitor-lg-24mk430h-b-bl/monitor-lg-24mk430h-b-bl-7.jpg"
      ],
      "assembly": 0,
      "shipping": {
        "colon": 20,
        "panama_otro": 20,
        "panama_ciudad": 4,
        "otras_provincias": 20
      },
      "display": true,
      "createdAt": new Date("2022-02-07T06:04:35.000Z"),
      "updatedAt": new Date("2022-02-07T06:04:35.000Z"),
      "createdBy": "gabriel@torus-digital.com",
      "updatedBy": null
    }
]
export default products