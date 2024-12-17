# Sistema de Generación de Paletas de Colores - COLORSS

Bienvenido a nuestro sistema de generación de paletas de colores. Esta aplicación ofrece una variedad de funcionalidades para crear, modificar y almacenar paletas de colores de manera eficiente.

## Funcionalidades

- **Generación Automática de Paletas**: Permite la generación automática de paletas de colores, así como la opción de modificar y personalizar dichas paletas.
- **Almacenamiento en Base de Datos**: Los usuarios pueden almacenar sus paletas de colores en una base de datos, facilitando el acceso y la gestión.
- **Relleno Automático de Canvas**: Automáticamente llena un canvas con una paleta de colores seleccionada, con la opción de elegir una paleta aleatoria.
- **Categorías de Colores**: Las paletas se pueden categorizar para un mejor manejo y organización.
- **Soporte para HEX y RGB**: Los usuarios pueden elegir colores en formatos HEX y RGB.
- **Saturación y Variación**: Permite la elección de paletas de colores según su saturación y variaciones.
- **Límite de Paletas Guardadas**: Los usuarios pueden guardar hasta 5 paletas diferentes, cada una con configuraciones personalizadas.
- **Exportación de Paletas**: Exporta las paletas en formatos PDF, PNG y SVG.
- **Paletas Predefinidas**: El sistema ofrece paletas predefinidas para facilitar la elección.
- **Acceso Restringido**: Los usuarios tienen datos de acceso restringidos para mayor seguridad.

## Endpoints de la API

Aquí se detalla la lista de endpoints disponibles en la API, junto con sus métodos, códigos de estado y descripciones.

### Autenticación

| Método | Endpoint     | Código de Estado | Código de Error | `req.body`               | `req.params` | Descripción                                                      |
|--------|--------------|------------------|-----------------|--------------------------|--------------|------------------------------------------------------------------|
| POST   | `/register`  | 200              | 400             | `username`, `email`, `password` |              | Crea un nuevo usuario en la aplicación                           |
| POST   | `/login`     | 200              | 400, 401        | `username`, `password`   |              | Inicia sesión del usuario en la aplicación                       |
| POST   | `/logout`    | 200              | 400             |                          |              | Cierra sesión del usuario en la aplicación                       |

### Gestión de Paletas

| Método | Endpoint                       | Código de Estado | Código de Error | `req.body`       | `req.params` | Descripción                                                            |
|--------|--------------------------------|------------------|-----------------|------------------|--------------|------------------------------------------------------------------------|
| POST   | `/save/palette`                | 200              | 400, 401        | `palette`        | `user`       | Guarda una paleta de colores en la base de datos del usuario           |
| DELETE | `/delete`                      | 200              | 400, 404        |                  | `user`       | Elimina una paleta de colores de la base de datos del usuario          |
| PUT    | `/save/modify/name`            | 200              | 400, 401        | `new name`       | `user`       | Modifica el nombre de una paleta de colores en la base de datos        |
| PUT    | `/save/modify/personal`        | 200              | 400, 401        | `new name`       | `user`       | Modifica detalles personalizados de una paleta en la base de datos     |
| GET    | `/save`                        | 200              | 400, 401        |                  | `user`       | Obtiene todas las paletas de colores guardadas en la base de datos     |
| GET    | `/save/palette`                | 200              | 400, 401        |                  | `user`       | Obtiene una paleta de colores específica guardada en la base de datos  |
| DELETE | `/save/palette/delete`         | 200              | 400, 404        |                  | `user`       | Elimina una paleta de colores específica guardada en la base de datos  |
| PUT    | `/save/palette/modify/name`    | 200              | 400, 401        | `new name`       | `user`       | Modifica el nombre de una paleta específica guardada en la base de datos |
| PUT    | `/save/palette/modify/personal`| 200              | 400, 401        | `new name`       | `user`       | Modifica detalles personalizados de una paleta guardada en la base de datos |
| POST   | `/save/send/occupy/email`      | 200              | 400             | `email`          | `user`       | Envía una paleta de colores guardada por correo electrónico            |

### Gestión de Paletas Adicional

| Método | Endpoint        | Código de Estado | Código de Error | `req.body`          | `req.params` | Descripción                                                         |
|--------|-----------------|------------------|-----------------|---------------------|--------------|---------------------------------------------------------------------|
| GET    | `/palettes`     | 200              | 400             | `amount`            |              | Obtiene paletas de colores aleatorias                               |
| GET    | `/paletteEmpty` | 200              | 400             |                     |              | Obtiene una paleta de colores vacía                                 |
| GET    | `/paletteSearch`| 200              | 400             | `color`, `amount`, `category` |    | Realiza una búsqueda de paletas de colores por categoría           |
| PUT    | `/modifyPalette`| 200              | 400             | `color`, `palette`  |              | Modifica una paleta de colores                                      |
| POST   | `/paletteCreated`| 200             | 400             | `colors list`       |              | Crea una paleta de colores a partir de una lista de colores         |

## Instalación

Para instalar y configurar el sistema, sigue estos pasos:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/LucasHerreraNieto/api-colorss.git
