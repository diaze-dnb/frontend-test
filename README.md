 # Prueba técnica Frontend
 
   **Objetivos:** 
 - Comprensión de lectura.
 - Solución de Problemas.
 - Conexión entre diferente sistemas.
 - Conceptos básicos de Html, Css, Javascript
 - Manejo del tiempo.
 - Diseño amigable y estilo de la página.
 - Uso de librerías y/o Frameworks.
 - Utilización de comandos git


# Mi tiendecita

La Federación Nacional de Comerciantes, **FENALCO**, desea digitalizar el proceso de compra y venta de productos para sus asociados. Para ellos se desea implementar una primera fase de digitalización, la cuál consiste en que los tenderos puedan **ingresar, editar, listar y eliminar** los productos que manejan en sus tiendas a través de un API REST. 

# Frontend
Se debe crear cada una de las vistas que consuman cada los servicios REST para la creación, edición, listado y eliminación de productos. 

Los productos además de listarse (mostrar imagen , código, nombre y precio), deben tener una vista de detalle. A continuación se lista cada uno de los endPoints para hacer un CRUD de la entidad producto. MI_ID es un id numérico entregado al momento de hacer la prueba.

**baseUrl:** api/v1/

## Listar
   **url:** stores/{MI_ID}/products
   **method:** GET  
   **Content-Type:**  application/json
 
## Obtener
   **url:** stores/{MI_ID}/products/{ID_PRODUCTO}
   **method:** GET  
   **Content-Type:**  application/json
   
## Crear
   **url:** stores/{MI_ID}/products
   **method:** POST 
   **Content-Type:**  multipart/form-data
   **Input**  code (String), name (String), description (String), image (file*), price (double) 
   
## Actualizar
   **url:** stores/{MI_ID}/products/{ID_PRODUCTO}
   **method:** PUT 
   **Content-Type:**  multipart/form-data
   **Input**  code (String), name (String), description (String), image (file*), price (double) 
  
## Eliminar
   **url:** stores/{MI_ID}/products/{ID_PRODUCTO}
   **method:** DELETE  

# Bonus

## Auth

Agregar Funcionalidad para registrarse e ingreso utilizando email y contraseña.  Además las tiendas deben estar asociadas a un usuario. 

### SignUp
   **url:** /signup
   **method:** POST 
   **Content-Type:**  application/json
   **Input**  email (String), password (String), name (String) 
### LogIn
   **url:** /login
   **method:** POST 
   **Content-Type:**  application/json
   **Input**  email (String), password (String) 

