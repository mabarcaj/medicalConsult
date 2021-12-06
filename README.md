# Sistema para agendar Consultas Médicas

## Contexto

Se ha planteado el desarrollo de un sitio web que contenga un formulario para agendar consultas médicas. Esto con el fin de dar
a los postulantes de la Unidad de Asistencia Técnica un acercamiento de las habilidades técnicas requeridas para cumplir con las labores propias que se brindan en la unidad. Esta actividad está con mayor detalle en el archivo 'ejercicio_web_consultora.pdf'.

## Solución Implementada

La solución implementada, consiste en un formulario que valida los inputs solicitados en el archivo 'ejercicio_web_consultora' (tanto a nivel cliente como servidor). La arquitectura de la solución es la siguiente:

-   Contamos con 3 modelos: Doctor, Horario y Consulta. El modelo doctor guarda información básica con respecto al doctor, para esta iteración solamente se consideró nombre, apellido, sexo y especialidad. El modelo horario guarda una llave foránea que hace referencia al doctor, y adicionalmente guarda el día y hora que mantiene disponible, junto con un estado de disponibilidad que cambiará cada vez que se agende una cita. Se planteó de esa forma para poder subir archivos con los horarios directamente a la base de datos (una feature que se planteará instalar más adelante). Por último el modelo Consulta almacena todos los datos solicitados para el formulario, que fueron especificados en el archivo 'ejercicio_web_consultora'. Cabe señalar que para doctor, el modelo guarda una referencia de los doctores en la base datos, al igual que para el campo fecha_consulta, que mantiene una referencia hacia los horarios disponibles.
-   Adicionalmente a esos modelos, se creó en el mismo archivo (formConsult/models.py) una clase del tipo TextChoices, para facilitar los registro de sexo. Cabe señalar que se consideraron solo tres opciones: Masculino, Femenino y Otro.
-   Las validaciones adicionales que Django no realiza de forma predeterminada, se realizan en el archivo validators.py presente en la django-app llamada formConsult. Estas validaciones son después llamadas en el archivo models.py de la misma djangp-app, para ser utilizadas en el modelo que corresponda.
-   El manejo de las rutas a nivel backend está a cargo de la librería djangorestframework. Para ello se generaron los viewsets correspondientes a cada modelo y posteriormente se añadieron a las rutas, mediante el objeto routers. De esta forma la librería maneja automáticamente las solicitudes que lleguen sin la necesidad de definir funcionalidades para cada solicitud con distintos protocolos.
-   Para conectar el backend de Django con el frontend de React, se utilizó la librería corsheaders. Cabe señalar que además se utilizaron los serializers de django-rest-framework para poder convertir a JSON toda la información que provenga del backend hacia el frontend, y además poder hacer el paso inverso.

### Tecnologías

Tomando en consideración las tecnologías disponibles, se ha decidido hacer uso de las siguientes tecnologías:

-   **Backend:** _Python - Django_

-   **Frontend:** _Javascript - React_

## Instrucciones de Instalación

### Backend

-   Primero tener instalado pipenv. Para ello bastará utilizar el comando 'pip install pipenv'
-   Luego dentro de la carpeta raíz del proyecto (en donde se encuentra el archivo pipfile), utilizar el comando 'pipenv install'. Este comando bajará todas las librerías necesarias para el proyecto.
-   Para ejecutar el servidor de backend, habrá que moverse a la ubicación de manage.py, ubicada dentro de la carpeta backend (debiera ser backend/manage.py). Se ejecuta el comando 'python manage.py runserver' para hacer funcionar el servidor

### Frontend

-   Debemos tener instalado Node primero que todo. Lo podrán encontrar aquí: https://nodejs.org/es/
-   Luego bastará utilizar el comando npm install, para comenzar a bajar las librerías necesarias
-   Posteriormente, bastará utilizar el comando 'yarn start', dentro de la carpeta frontend, en la consola para acceder al servidor de pruebas. Para deployarlo bastará el comando 'yarn build'
