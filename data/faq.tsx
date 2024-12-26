export type FaqDataKeys = 'compras_y_pagos' | 'manejo_de_mi_orden' | 'delivery' | 'ensamblado' | 'faqs_de_los_productos' | 'soluciones_para_errores_comunes' | 'ventas_al_por_mayor_o_corporativas' | 'garantias' | 'devoluciones'

export const faqData = [
    {
        id: "compras_y_pagos",
        title: "Compras y Pagos",
        items:[
            {
                question: "¿Dónde puedo comprar los Ergonomica Standing Desks?",
                answerJsx: <p>Puedes comprarlos en nuestra tienda online <a href='https://ergonomicadesk.com'>www.ergonomicadesk.com</a> o contactandonos directamente en nuestros canales de comunicación.</p>,
                answerText: "Puedes comprarlos en nuestra tienda online www.ergonomicadesk.com   o contactandonos directamente en nuestros canales de comunicación." 
            },
            {
                question: "¿Tienen un showroom para probar los productos?",
                answerJsx: <p>Sí, tenemos un local en Mega Storage de San Francisco. Debe contactarnos para programar una cita, en la que pueda ver y probar los productos que tenemos.</p>,
                answerText: "Sí, tenemos un local en Mega Storage de San Francisco. Debe contactarnos para programar una cita, en la que pueda ver y probar los productos que tenemos."
            },
            {
                question: "¿Cómo hago si deseo un pedido personalizado?",
                answerJsx: <p>Puedes contactarnos directo a nuestro email o whatsapp con tus especificaciones  para recibir una cotización.</p>,
                answerText: "Puedes contactarnos directo a nuestro email o whatsapp con tus especificaciones para recibir una cotización."
            },
            {
                question: "¿Cómo les puedo pagar?",
                answerJsx: <div>
                    <p className="pb-3">Aceptamos 4 métodos de pago; Tarjeta de crédito, Yappy, efectivo o transferencia bancaria.</p>
                    <ul className="list-square ml-4 pb-3">
                        <li>
                            <span className="font-bold">Tarjeta de crédito: </span> 
                            Puede pagar a través de nuestro ecommerce o solicitar un enlace de pago para tarjeta por whatsapp, redes sociales o email.  Aceptamos Visa y Mastercard. Procesamos nuestros pagos con Credicorp Bank para asegurar que su tarjeta esté segura.
                        </li>
                        <li>
                            <span className="font-bold">Yappy: </span> 
                            Salimos en el directorio de Yappy comercial como Ergonomicadesk
                        </li>
                        <li>
                            <span className="font-bold">Transferencia bancaria: </span> 
                            Aceptamos efectivo contra entrega. Solo asegúrate de tener el monto exacto porque no tenemos cambio.
                        </li>
                        <li>
                            <span className="font-bold">Efectivo: </span>
                            Puedes realizarla a nuestra cuenta en Banco General. Los datos están listados abajo. Acuérdate de enviarnos la confirmación de la transferencia a nuestro whatsapp, o correo.  Una vez recibamos tu transferencia procedemos con la orden y entrega.  Las de Banco General son inmediatas. Si es de un banco local puede demorar de 1-2 días en llegar. 
                        </li>
                    </ul>
                    <div className="bg-gray-200 py-3 px-5 w-max">
                        <div>BANCO GENERAL</div>
                        <div>TORUS S.A.</div>
                        <div>CUENTA CORRIENTE</div>
                        <div>03-05-01-123507-6</div>
                    </div>  
                </div>,
                answerText: `Aceptamos 4 métodos de pago; Tarjeta de crédito, Yappy, efectivo o transferencia bancaria. 
                Tarjeta de crédito:  puede pagar a través de nuestro ecommerce o solicitar un enlace de pago para tarjeta por whatsapp, redes sociales o email.  Aceptamos Visa y Mastercard. Procesamos nuestros pagos con Credicorp Bank para asegurar que su tarjeta esté segura.
                Yappy: Salimos en el directorio de Yappy comercial como Ergonomicadesk
                Efectivo: Aceptamos efectivo contra entrega.  Solo asegúrate de tener el monto perfecto porque no tenemos cambio.  
                Transferencia bancaria: Puedes realizarla a nuestra cuenta en Banco General. Los datos están listados abajo. Acuérdate de enviarnos la confirmación de la transferencia a nuestro whatsapp, o correo.  Una vez recibamos tu transferencia procedemos con la orden y entrega.  Las de Banco General son inmediatas. Si es de un banco local puede demorar de 1-2 días en llegar.

                BANCO GENERAL
                TORUS S.A.
                CUENTA CORRIENTE
                03-05-01-123507-6
                `
            },
            {
                question: "¿Hacen envíos internacionales?",
                answerJsx: <p>Ergonómica realiza envíos a todos los lugares del mundo. Escribenos para poder cotizarte el envío.</p>,
                answerText: "Ergonómica realiza envíos a todos los lugares del mundo.  Escribenos para poder cotizarte el envío."
            },
            {
                question: "¿Hacen envíos al interior del país?",
                answerJsx: <p>Si, realizamos envíos al interior del país. Al realizar su compra, tendrá la opción de elegir a dónde será entregado el producto, y cuál es el costo por el envío.</p>,
                answerText: "Si, realizamos envíos al interior del país. Al realizar su compra, tendrá la opción de elegir a dónde será entregado el producto, y cuál es el costo por el envío."
            },
            {
                question: "¿Puedo pagar contra entrega?",
                answerJsx: <p>Si desea pagar contra entrega debe hacerlo por tarjeta de crédito, transferencia de Banco General, Yappy o en efectivo. No se podrá pagar contra entrega en transferencias desde otro banco.</p>,
                answerText: "Si desea pagar contra entrega debe hacerlo por tarjeta de crédito, transferencia de Banco General, Yappy o en efectivo. No se podrá pagar contra entrega en transferencias desde otro banco."
            }
        ],
    },
    {
        id: "manejo_de_mi_orden",
        title: "Manejo de mi Orden",
        items:[
            {
                question: "¿Cómo cambio o cancelo un pedido que ya he pagado pero no han entregado?",
                answerJsx: <p>Puedes contactarnos directamente al correo o whatsapp. En el mensaje nos envías el número de orden y que quieres realizar un cambio en tu pedido o cancelarlo. En caso de cancelar, se le realizará la devolución del dinero en un periodo máximo de 7 días hábiles.</p>,
                answerText: "Puedes contactarnos directamente al correo o whatsapp. En el mensaje nos envías el número de orden y que quieres realizar un cambio en tu pedido o cancelarlo. En caso de cancelar, se le realizará la devolución del dinero en un periodo máximo de 7 días hábiles."
            },
            {
                question: "¿Cómo verifico el estado de mi pedido?",
                answerJsx: <p>Nosotros te estaremos contactando al día siguiente con la horas del delivery.</p>,
                answerText: "Nosotros te estaremos contactando al día siguiente con la horas del delivery."
            }
        ],
    },
    {
        id: "delivery",
        title: "delivery",
        items:[
            {
                question: "¿Cómo funciona el delivery?",
                answerJsx: <p>Cuando hagas la compra nos pondremos en contacto contigo por whatsapp para confirmar la dirección y tiempo de entrega del pedido.</p>,
                answerText: "Cuando hagas la compra nos pondremos en contacto contigo por whatsapp para confirmar la dirección y tiempo de entrega del pedido."}
            ,
            {
                question: "¿Cuánto es el tiempo de entrega?",
                answerJsx: <p>Realizamos las entregas en un periodo de 24 horas dentro de la ciudad de panama. Entregas a otras provincias pueden durar hasta 48 horas. Si deseas la entrega en un dia/hora especifico contactanos para coordinar.</p>,
                answerText: "Realizamos las entregas en un periodo de 24 horas dentro de la ciudad de panama. Entregas a otras provincias pueden durar hasta 48 horas. Si deseas la entrega en un dia/hora especifico contactanos para coordinar."}
            ,
            {
                question: "¿Ofrecen envío rápido?",
                answerJsx: <p>Todos nuestros pedidos los enviamos en un periodo máximo de 24 horas. En caso de necesitar el pedido el mismo día, puedes contactarnos para coordinar la recogida en nuestro local.</p>,
                answerText: "Todos nuestros pedidos los enviamos en un periodo máximo de 24 horas.  En caso de necesitar el pedido el mismo día, puedes contactarnos para coordinar la recogida en nuestro local."}
            ,
            {
                question: "¿Qué sucede con el envío internacional?",
                answerJsx: <p>Una vez realice su pedido internacional, nosotros le contactaremos y le informaremos acerca del estado de su pedido.</p>,
                answerText: "Una vez realice su pedido internacional, nosotros le contactaremos y le informaremos acerca del estado de su pedido."}
            ,
            {
                question: "¿Qué hago si mis artículos llegan dañados?",
                answerJsx: <p>Debe comunicarse de inmediato con nosotros. Es importante revisar los productos una vez se le entregan.</p>,
                answerText: "Debe comunicarse de inmediato con nosotros. Es importante revisar los productos una vez se le entregan."}
            ,
            {
                question: "¿Cuánto cuesta la entrega?",
                answerJsx: <p>Los deliveries en áreas de la ciudad de Panamá son gratis si el pedido es mayor a $100.</p>,
                answerText: "Los deliveries en áreas de la ciudad de Panamá son gratis si el pedido es mayor a $100."}
            ,
            {
                question: "¿Cuáles son sus horarios de entrega?",
                answerJsx: <p>Ergonomica realiza entrega todos los días, a partir de las 10 A.M hasta las 7:00 P. M.</p>,
                answerText: "Ergonomica realiza entrega todos los días, a partir de las 10 A.M hasta las 7:00 P. M."}
            ,
            {
                question: "¿Qué pasa si no hay nadie en casa que pueda recibir la mercancía?",
                answerJsx: <p>Usted podrá reagendar la entrega, para un momento en donde se pueda recibir. También podemos dejar el pedido en la recepción de su edificio si así lo solicitan.   En caso que se pierda el producto luego de ser entregado, no nos podemos hacer responsables de la pérdida.</p>,
                answerText: "Usted podrá reagendar la entrega, para un momento en donde se pueda recibir. También podemos dejar el pedido en la recepción de su edificio si así lo solicitan.   En caso que se pierda el producto luego de ser entregado, no nos podemos hacer responsables de la pérdida."}
            ,
            {
                question: "¿Puedo pasar a retirar el pedido?",
                answerJsx: <p>Sí, para retirar el producto debe realizar una cita previa para poder ir a nuestro local, ubicado en Mega Storage de San Francisco.</p>,
                answerText: "Sí, para retirar el producto debe realizar una cita previa para poder ir a nuestro local, ubicado en Mega Storage de San Francisco."
            }
        ]
    },
    {
        id: "ensamblado",
        title: "Ensamblado",
        items:[
            {
                question: "¿Cuánto cuesta el ensamblado?",
                answerJsx: <div>
                    <p>El ensamblado es gratis en áreas del centro de la Ciudad de Panamá cuando la orden es mayor a $100 sin incluir itbms.</p>
                    <p>Solo hacemos ensamblado en el área de la Ciudad de Panamá.</p>
                </div>,
                answerText: "El ensamblado es gratis en áreas del centro de la Ciudad de Panamá cuando la orden es mayor a $100 sin incluir itbms. Solo hacemos ensamblado en el área de la Ciudad de Panamá."
            },
            {
                question: "¿Cómo armo mi escritorio?",
                answerJsx: <p>Armar un escritorio Ergonómica es sencillo, Las instrucciones están incluidas en el escritorio y de igual manera las puedes descargar aquí. Solo necesitarás un destornillador estrella y un drill para hacer los huecos en el sobre. En caso no tengas un drill, puedes escribirnos para ayuda.</p>,
                answerText: "Armar un escritorio Ergonómica es sencillo, Las instrucciones están incluidas en el escritorio y de igual manera las puedes descargar aquí. Solo necesitarás un destornillador estrella y un drill para hacer los huecos en el sobre. En caso no tengas un drill, puedes escribirnos para ayuda."
            },
            {
                question: "¿Dónde puedo encontrar las instrucciones para armar mi producto?",
                answerJsx: <p>Todos los productos vienen con sus propias instrucciones. También puedes encontrar las instrucciones en nuestra página web.</p>,
                answerText: "Todos los productos vienen con sus propias instrucciones. También puedes encontrar las instrucciones en nuestra página web."
            },
            {
                question: "¿Qué herramientas serán necesarias para armar mi escritorio?",
                answerJsx: <p>Todos los productos que requieren ensamblaje incluyen herramientas.</p>,
                answerText: "Todos los productos que requieren ensamblaje incluyen herramientas."
            },
            {
                question: "¿Cuánto tiempo debería tomar armar el escritorio?",
                answerJsx: <p>El armado del escritorio se puede lograr en un rango de 30 minutos a 1 hora.</p>,
                answerText: "El armado del escritorio se puede lograr en un rango de 30 minutos a 1 hora"
            },
            {
                question: "Estoy teniendo problemas ensamblando el producto. Que puedo hacer?",
                answerJsx: <p>Cualquier duda que tengas puedes contactarnos al servicio al cliente y te ayudaremos a guiarte paso por paso hasta que armes el producto.</p>,
                answerText: "Cualquier duda que tengas puedes contactarnos al servicio al cliente y te ayudaremos a guiarte paso por paso hasta que armes el producto."
            }
        ],
    },
    {
        id: "faqs_de_los_productos",
        title: "FAQs de los Productos",
        items:[
            {
                question: "¿Qué es un standing desk?",
                answerJsx: <div>
                    <p>Es básicamente un escritorio que permite ponerse de pie cómodamente mientras se trabaja.</p>
                    <p>Consisten de una base motorizada y un sobre. En Ergonomica tenemos diferentes tipos de Standings Desk.  Puedes escoger el estilo, tamaño y color del sobre.</p>
                </div>,
                answerText: "Es básicamente un escritorio que permite ponerse de pie cómodamente mientras se trabaja. Consisten de una base motorizada y un sobre. En Ergonomica tenemos diferentes tipos de Standings Desk.  Puedes escoger el estilo, tamaño y color del sobre."    
            },
            {
                question: "¿Para qué se usan los standing desks?",
                answerJsx: <p>Todos los escritorios de pie siguen la misma idea básica: te dejan trabajar mientras estás de pie. Los que son de altura fija se mantienen a la altura de la persona que está de pie. Los escritorios elevables suben y bajan para que puedas sentarte o estar de pie cuando quieras. Los escritorios eléctricos de pie y sentado suben con solo pulsar un botón.</p>,
                answerText: "Todos los escritorios de pie siguen la misma idea básica: te dejan trabajar mientras estás de pie. Los que son de altura fija se mantienen a la altura de la persona que está de pie. Los escritorios elevables suben y bajan para que puedas sentarte o estar de pie cuando quieras. Los escritorios eléctricos de pie y sentado suben con solo pulsar un botón."
            },
            {
                question: "¿Como usar un standing desk?",
                answerJsx: <p>Las mejoras en la salud física, metabólica y mental pueden impactar tu vida de maneras que nunca pensaste que fuera posible. Por eso, sentarse menos y estar más tiempo de pie es un cambio tan importante en el estilo de vida. Si planeas comenzar a usar un escritorio elevable o standing desk, en Ergonomica te recomendamos que dividas tu tiempo 50-50 entre estar de pie y sentarse.</p>,
                answerText: "Las mejoras en la salud física, metabólica y mental pueden impactar tu vida de maneras que nunca pensaste que fuera posible. Por eso, sentarse menos y estar más tiempo de pie es un cambio tan importante en el estilo de vida. Si planeas comenzar a usar un escritorio elevable o standing desk, en Ergonomica te recomendamos que dividas tu tiempo 50-50 entre estar de pie y sentarse."
            },
            {
                question: "¿Puedo pedir un sobre de mayor dimensión?",
                answerJsx: <p>En Ergonomica puedes realizar pedidos personalizados, los mismos tienen un costo diferente a los productos del catálogo.</p>,
                answerText: "En Ergonomica puedes realizar pedidos personalizados, los mismos tienen un costo diferente a los productos del catálogo."
            },
            {
                question: "¿El Standing Desk necesita algún tipo de mantenimiento?",
                answerJsx: <p>Los Standing Desk no necesitan mantenimiento. Si tiene algún problema con el suyo, puede contactarnos para ayudarle.</p>,
                answerText: "Los Standing Desk no necesitan mantenimiento. Si tiene algún problema con el suyo, puede contactarnos para ayudarle."
            },
            {
                question: "¿Cuál es la diferencia entre el modelo de bases single y double engine?",
                answerJsx: <div>
                    <p className="pb-3">En Ergonomica tenemos diferentes tipos de Standing Desk. Estos tienen una propiedades específicas dependiendo del modelo.</p>
                    <p className="pb-5">Usted podrá elegir mejor el tipo de escritorio que desee, viendo la siguiente comparativa entre los tres modelos que tenemos:</p>
                    <div className="px-2">
                        <table className="table-auto order-table w-full text-lg">
                            <thead className="border-b-2 border-gray-200 text-left">
                                <tr>
                                    <th>Propiedad</th>
                                    <th>Single</th>
                                    <th>Double</th>
                                    <th>Double X</th>
                                </tr>
                            </thead>
                            <tbody className="border-b border-gray-200 text-left">
                                <tr>
                                    <th>Capacidad de carga</th>
                                    <td>100 Kg</td>
                                    <td>120 Kg</td>
                                    <td>140 Kg</td>
                                </tr>
                                <tr>
                                    <th>Velocidad</th>
                                    <td>25 mm/s</td>
                                    <td>37 mm/s</td>
                                    <td>37 mm/s</td>
                                </tr>
                                <tr>
                                    <th>Altura Minima</th>
                                    <td>70 cm</td>
                                    <td>70 cm</td>
                                    <td>60 cm</td>
                                </tr>
                                <tr>
                                    <th>Altura Maxima</th>
                                    <td>120 cm</td>
                                    <td>120 cm</td>
                                    <td>125 cm</td>
                                </tr>
                                <tr>
                                    <th>Largo Minimo</th>
                                    <td>100 cm</td>
                                    <td>100 cm</td>
                                    <td>100 cm</td>
                                </tr>
                                <tr>
                                    <th>Largo Maximo</th>
                                    <td>160 cm</td>
                                    <td>180 cm</td>
                                    <td>180 cm</td>
                                </tr>
                                <tr>
                                    <th>Ancho del Sobre</th>
                                    <td>58-90 cm</td>
                                    <td>58-90 cm</td>
                                    <td>58-90 cm</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>,
                answerText: "En Ergonomica tenemos diferentes tipos de Standing Desk. Estos tienen una propiedades específicas dependiendo del modelo. Usted podrá elegir mejor el tipo de escritorio que desee, viendo la siguiente comparativa entre los tres modelos que tenemos."    
            },
            {
                question: "¿Hay escritorios para personas de baja estatura?",
                answerJsx: <p>Nuestros escritorios son ajustables para cualquier estatura.</p>,
                answerText: "Nuestros escritorios son ajustables para cualquier estatura."
            },
            {
                question: "¿Hay algún lugar donde pueda ver el escritorio?",
                answerJsx: <p>Si, tenemos un depósito ubicado en Mega Storage de San Francisco. Ponte en contacto con nosotros para coordinar la visita y poder atenderte.</p>,
                answerText: "Si, tenemos un depósito ubicado en Mega Storage de San Francisco. Ponte en contacto con nosotros para coordinar la visita y poder atenderte."
            },
            {
                question: "¿Qué es la tecnología anti colisión?",
                answerJsx: <p>Todos los escritorios Ergonomica vienen con esta tecnología donde si la mesa choca con un objeto, esta se para de una vez para evitar cualquier daño.</p>,
                answerText: "Todos los escritorios Ergonomica vienen con esta tecnología donde si la mesa choca con un objeto, esta se para de una vez para evitar cualquier daño."
            },
            {
                question: "¿Cuál  es la altura máxima y mínima del standing desk?",
                answerJsx: <div>
                    <p>Los marcos tienen una altura variable de 700 a 1200 cm y un ancho variable de 1000 a 1600 cm.</p>
                    <p>Tenemos un modelo especial con altura máxima y mínima de 60-125cm.</p>
                </div>,
                answerText: "Los marcos tienen una altura variable de 700 a 1200 cm y un ancho variable de 1000 a 1600 cm. Tenemos un modelo especial con altura máxima y mínima de"    
            },
            {
                question: "¿Qué tamaño de sobres se le pueden poner a las bases?",
                answerJsx: <p>Sobres con un tamaño a partir de los 100 cm hasta 189 cm.</p>,
                answerText: "Sobres con un tamaño a partir de los 100 cm hasta 189 cm."
            }
        ],
        soluciones_para_errores_comunes:[
            {
                question: "¿Que debo hacer cuando me sale 'res' en la pantalla de mis escritorio?",
                answerJsx: <p>apretar en la pantalla la flecha de abajo hasta que se quite el mensaje.</p>,
                answerText: "apretar en la pantalla la flecha de abajo hasta que se quite el mensaje."
            },
            {
                question: "¿Que debo hacer cuando me sale 'loc' en la pantalla de mis escritorio?",
                answerJsx: <p>Este mensaje significa Child lock. Para quitar o poner dejar apretado las flecha de arriba y abajo hasta que se quite el mensaje.</p>,
                answerText: "Este mensaje significa Child lock. Para quitar o poner dejar apretado las flecha de arriba y abajo hasta que se quite el mensaje."
            }
        ],
    },
    {
        id: "ventas_al_por_mayor_o_corporativas",
        title: "Ventas al por Mayor o Corporativas",
        items:[
            {
                question: "¿Cómo realizo un pedido al por mayor o corporativo?",
                answerJsx: <p>Escribenos al whatsapp o un correo a <a className="link text-blue-300" href="mailto:ventas@ergonomicadesk.com">ventas@ergonomicadesk.com</a></p>,
                answerText: "Escribenos al whatsapp o un correo a ventas@ergonomicadesk.com"
            }
        ],
    },
    {
        id: "garantias",
        title: "Garantías",
        items:[
            {
                question: "¿Cómo funciona la garantía?",
                answerJsx: <p>La garantía varía por producto. Para todos nuestros standing desks, la garantía dura 5 años desde el día de la compra y cubre todos los daños al motor que sean por defectos de fábrica siempre y cuando se cumplan los parámetros recomendados de peso máximo y tiempo de uso continuo.</p>,
                answerText: "La garantía varía por producto. Para todos nuestros standing desks, la garantía dura 5 años desde el día de la compra y cubre todos los daños al motor que sean por defectos de fábrica siempre y cuando se cumplan los parámetros recomendados de peso máximo y tiempo de uso continuo."
            },
            {
                question: "¿Qué tipo de problemas cubre la garantía?",
                answerJsx: <p>todos los daños al motor que sean por defectos de fábrica siempre y cuando se cumplan los parámetros recomendados de peso máximo y tiempo de uso continuo.</p>,
                answerText: "todos los daños al motor que sean por defectos de fábrica siempre y cuando se cumplan los parámetros recomendados de peso máximo y tiempo de uso continuo."
            }
        ],
    },
    {
        id: "devoluciones",
        title: "Devoluciones",
        items:[
            {
                question: "¿Cómo realizar una devolución?",
                answerJsx: <p>Para realizar una devolución o cambio deberá presentar la Solicitud de Devolución que se encuentra en nuestra Políticas de Devoluciones y Garantía. En la misma se detalla cuándo y cómo se harán las devoluciones o cambios.</p>,
                answerText: "Para realizar una devolución o cambio deberá presentar la Solicitud de Devolución que se encuentra en nuestra Políticas de Devoluciones y Garantía. En la misma se detalla cuándo y cómo se harán las devoluciones o cambios."
            }
        ],
    }
] as {
    id: string
    title: string
    items: Array<{question: string, answerJsx: JSX.Element, answerText: string}>
}[]