## Colorss
-Necesitamos una sistema de software que tendra la funcionalidad enfocada en la generacion de paletas de forma automatica tanto como de forma manual con los colores que pueden ser modificados y cada paleta debe poder ser guardada en un usuario que esta registrado en la aplicacion   

-Los usuarios que utilizaran el sistema son las diferentes personas que ingresaran a la aplicacion con la necesidad de generar una paleta de colores  

-Los usuarios utilizaran el sistema como una fuente de obtencion de ideas sobre una paleta de colores, generando tanto automaticamente como de forma manual, los usuarios al ver alguna paleta de su gusto tendra la posibilidad de guardar la paleta seleccionada en su usuario  

-Las paletas de colores deben estar generadas por diferentes categorias por ej: colores complementarios, degradados,etc.  

-El formato de los colores sera HEX y RGB   

-El usuario se debera registrar con un nombre de usuario y una contraseña, todos los usuarios tendran el mismo nivel de acceso en el sistema  
  
-El usuario podra guardar una cantidad maxima de 5 paletas diferentes a cada paleta se puede personalizar su nombre, y pueden ser agrupadas sengun la clasificacion del usuario  

-Los usuarios podran realizar una busqueda con colores que el usuario quiera que esten en la aplicacion  

-Los usuarios tendran la capacidad de exportar en formato PDF, PNG y CSS  

-La aplicacion debe contar con escabilidad para poder agregar mas funcionalidades en el futuro  

-los datos del usuario deben estar encriptados para su mayor proteccion tambien se deben usuar coockies para mayor 


User:

| Methods | Endpoint | Status Code | Error Code | req.body | req.params | Description |
|---------|----------|-------------|------------|----------|------------|-------------|
|POST|/register|201|400|username,email,pasword||Create a user in the color application|
|POST|/login|200|404,401|username,password||Log in the user by logging into the color application|
|POST|/logout|200|400,401|closes the user session from the application color|
|POST|/save|200|400,401|saves a palette to the user, the application needs to be passed a palette|
|DELETE|/delette|200|401,404|removes the user from the colorss application, you need to pass the user through the req.body|
|PUT|/:user/modify/name|200|400,401|Modify the username, the new username needs to be passed to the application via req.body and the user via params|
|PUT|/:user/modify/email|200|400,401|Modify the email, the new email needs to be passed to the application via req.body and the user via params|
|PUT|/:user/modify/password|200|400,401|Modify the password, the new username needs to be passed to the application via req.body and the user via params|
|GET|/:user/palettes|200|400,401|
|GET|/:user/:palette|200|400,401|
|DELETE|/:user/:palette/delete|200|400,404,401|
|PUT|/:user/:palette/modifyName|200|400,401|
|POST|/:user/sendRecoveryEmail|200|400|