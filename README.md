# Xconsulting


Informacion sobre el sitio web:

Nombre de la empresa : Xconsulting 
¿para que es? : solutions for leading & disruptive companies 


¿Quién eres y cuál es tu misión?

Xconsulting, es una consultora enfocada en la experiencia humana, generamos servicios y soluciones multiindustria . Vamos de la estrategia a la operación. Creamos Customer Journeys Maps, Path- to –purchase, loyalty , con un enfoque omnicanal. 



---------
crud

Crear (Create): Puedes añadir una nueva dirección de correo electrónico a tu base de datos enviando una petición POST a /notifications con el campo email en el cuerpo de la petición.

Ejemplo con curl:

bash
Copy code
curl -X POST -H "Content-Type: application/json" -d '{"email":"example@email.com"}' http://localhost:3000/notifications
Leer (Read): Puedes obtener todas las direcciones de correo electrónico almacenadas enviando una petición GET a /notifications.

Ejemplo con curl:

bash
Copy code
curl -X GET http://localhost:3000/notifications
Eliminar (Delete): Puedes eliminar una dirección de correo electrónico específica enviando una petición DELETE a /notifications/:id, donde :id es el identificador único de MongoDB para el documento que deseas eliminar.

Ejemplo con curl:

bash
Copy code
curl -X DELETE http://localhost:3000/notifications/60d3eed39f4267a0ac5267a9
Para que este código funcione, asegúrate de tener MongoDB corriendo en tu máquina y accesible en mongodb://localhost:27017/notificationDB.

Una vez que tengas todo configurado, puedes iniciar tu aplicación con node app.js, y luego utilizar Postman, curl o cualquier otra herramienta de pruebas de API para interactuar con tu API.

