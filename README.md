
# E-Commerce Microservices Project

Este proyecto es un sistema de e-commerce basado en microservicios, construido con Node.js 18 y MongoDB.

## Estructura del Proyecto

- `gateway/`: Microservicio de Gateway que maneja las rutas y coordina las solicitudes a los microservicios.
- `product-service/`: Microservicio que maneja la gestión de productos.
- `order-service/`: Microservicio que maneja la gestión de órdenes.
- `user-service/`: Microservicio que maneja la autenticación y gestión de usuarios.

## Requisitos Previos

- Node.js 18
- MongoDB
- npm o yarn
- Docker (opcional)

## Configuración

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tuusuario/tu-proyecto.git
   cd tu-proyecto
   ```

2. Instala las dependencias para cada microservicio:

   ```bash
   cd gateway
   npm install
   cd ../product-service
   npm install
   # Repite para los demás microservicios
   ```

3. Configura las variables de entorno:

   Crea un archivo `.env` en cada directorio de microservicio y define las variables necesarias (por ejemplo, puerto, base de datos, secretos, etc.).

   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/ecommerce
   JWT_SECRET=mysecretkey
   ```

4. Ejecuta cada microservicio:

   ```bash
   cd gateway
   npm start
   cd ../product-service
   npm start
   # Repite para los demás microservicios
   ```

## Uso

- Accede al Gateway en http://localhost:3000 para interactuar con la aplicación.
- Cada microservicio tiene sus propias rutas y funcionalidades específicas.

## Contribuciones

Si deseas contribuir al proyecto, sigue los pasos habituales de fork y pull requests.

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## Configuración local del servicio de productos

Copiá `PRODUCTS-NODE/.env.example` a `PRODUCTS-NODE/.env` y completá los valores de tu entorno. La plantilla usa una conexión MongoDB local de ejemplo y deja `JWT_SECRET` vacío para que generes tu propio secreto. No subas archivos `.env` a Git.

Si usaste credenciales de versiones anteriores, revocalas o rotalas: reemplazar el archivo no elimina los valores del historial de Git.
