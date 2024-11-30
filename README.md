# Manjaría-Ecommerce

Este es un proyecto de e-commerce para la repostería Manjaría, desarrollado utilizando la pila **MERN** (MongoDB, Express, React, Node.js) y PostgreSQL, con fines educativos y prácticos.

Este proyecto fue desarrollado como parte del proyecto final para el módulo “Lenguaje de programación I” pero cambió de requisitos y alcance por otros contratiempos; sin embargo, aún seguirá en desarrollo hasta cumplir con todos los requisitos planteados inicialmente.

### Objetivo

El objetivo de este proyecto es ofrecer una plataforma en línea donde los clientes puedan explorar y comprar una variedad de productos de repostería, incluyendo tortas, pasteles, galletas y productos de panadería.

### Funcionalidades (WIP)

- Autenticación de usuarios (registro e inicio de sesión)
- Gestión (CRUD solo Endpoints) y visualización de productos en general, filtrado y específicos.
- ~~Carrito de compras~~ 
- ~~Procesamiento de pedidos~~

### Tecnologías Utilizadas

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Bases de Datos:** PostgreSQL para la gestión de usuarios y MongoDB para todo lo demás como productos, órdenes, carritos, etc.
- **Autenticación:** JSON Web Tokens (JWT)
- **Estado de la Aplicación:** Context API

## Requisitos

- [Node.js](https://nodejs.org/) - Entorno de ejecución de JavaScript
- [MongoDB](https://www.mongodb.com/) - Base de datos NoSQL
- [PostgreSQL](https://www.postgresql.org/) - Base de datos

## Instalación y Configuración

1. Clona el repositorio:
   ```bash
   git clone https://github.com/JDSCast/ecommerce.git
   cd ecommerce
   ```
2. Instala las dependencias de las carpetas de back-end y front-end:

   ```bash
   npm install
   ```

3. Configura las variables de entorno: Modifica los archivos `.env` en las carpetas backend y frontend del proyecto y define las siguientes variables (predeterminadas encontrarás estas):

   => Backend

   ```bash
      PORT = 5000
      MONGO_URL = mongodb://localhost:27017/ecommerce
      POSTGRES_USER = 'postgres'
      POSTGRES_HOST = 'localhost'
      POSTGRES_DB = 'ecommerce_postgres'
      POSTGRES_PASSWORD = 'admin'
      POSTGRES_PORT = 5432 
   ```


    **Nota:** recuerda crear en la base de datos de PostgresSQL con el mismo nombre de POSTGRES_DB

    => Frontend

    ```bash
      REACT_APP_API_URL = 'http://localhost:5000/api/'
      ```

## Ejecución
1. Inicia el servidor en la carpeta backend:
   ```bash
   cd backend
   npx nodemon servidor.js
   ```
    Una vez inicializado, el proyecto buscará crear automáticamente toda la estructura de datos para las bases de datos tanto en MongoDB como en PostgreSQL. Además, si las bases de datos están vacías, precarga registros de usuarios, productos y categorías para demostrar el funcionamiento de sí mismo y tener información a visualizar en el Fontend.

2. Inicia la interfaz del proyecto en la carpeta frontend:
   ```bash
   cd frontend
   npm start
   ```
    El proyecto abrirá automáticamente una ventana del navegador predeterminado accediendo a la interfaz. Es posible crear un nuevo usuario para iniciar sesión mediante el formulario de registro, aunque se puede utilizar uno de los usuarios generados al iniciar el Backend:
    ```bash
    correo: pedro.sanchez@example.com
    password: password131415
    ```

## Endpoints del Backend
Rutas de Usuario

    POST /api/usuarios/registro - <Registra a un nuevo usuario, requiere un body>

    POST /api/usuarios/iniciarsesion - <Inicia sesión de un usuario existente, requiere un body>

    GET /api/usuarios/perfil - <Obtiene el perfil del usuario autenticado, requiere un token>

    PUT /api/usuarios/perfil - <Actualiza el perfil del usuario autenticado, requiere un token>

  Rutas de Productos

    POST /api/productos/ - <Crea un nuevo producto, requiere un body>

    GET /api/productos/ - <Obtiene todos los productos>

    GET /api/productos/:id - <Obtiene un producto por su ID>

    PUT /api/productos/:id - <Actualiza un producto por su ID, requiere un body>

    DELETE /api/productos/:id - <Elimina un producto por su ID>

Rutas de Categorías

    POST /api/categorias/ - <Crea una nueva categoría, requiere un body>

    GET /api/categorias/ - <Obtiene todas las categorías>

    GET /api/categorias/:id - <Obtiene un categorías por su ID >

    PUT /api/categorias/:id - <Actualiza una categoría por su ID, requiere un body>

    DELETE /api/categorias/:id - <Elimina una categoría por su ID>

Rutas de Carrito

    POST /api/carrito/crear - <Crea un nuevo carrito para el usuario, requiere un body>

    GET /api/carrito/:usuarioId - <Obtiene el carrito del usuario por su ID>

    PUT /api/carrito/actualizar - <Actualiza el carrito del usuario, requiere un body>

    DELETE /api/carrito/vaciar/:usuarioId - <Vacía el carrito del usuario por su ID>

Rutas de Órdenes

    POST /api/ordenes/:usuarioId/crear - <Crea una nueva orden para el usuario, no requiere un body, toma los datos actuales del carrito>

    GET /api/ordenes/:usuarioId/orden/:ordenId - <Obtiene una orden específica del usuario por su ID de orden>

    GET /api/ordenes/:usuarioId - <Obtiene todas las órdenes del usuario por su ID>

  ### Evidencia de endpoints
  Demostración de los endpoints para el CRUD de categorías

  ![Prueba de endpoints de las rutas Categorías](/evidencias/Postman.png)

  ### Evidencia de la interfaz 
  Evidencias de funcionamiento de la interfaz
  ![Demostración de la interfaz visual](/evidencias/FrontCollage.png)

**Nota:** las imágenes se encuentran con mayor resolución en la carpeta de evidencias.