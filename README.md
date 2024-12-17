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
|POST|/register|201|400|username, email, pasword||Create a user in the color application|
|POST|/login|200|404,401|username, password||Log in the user by logging into the color application|
|POST|/logout|200|400,401|||closes the user session from the application color|
|POST|/:user/save|200|400,401|palette|user|saves a palette to the user|
|DELETE|/delette|200|401,404||user|removes the user from the colorss application|
|PUT|/:user/modify/name|200|400,401|new username|user|Modify the username|
|PUT|/:user/modify/email|200|400,401|new email|user|Modify the email|
|PUT|/:user/modify/password|200|400,401|new password|user|Modify the password|
|GET|/:user/palettes|200|400,401||user|Gets the palettes saved in the user|
|GET|/:user/:palette|200|400,401|palette|user|Get a specific palette|
|DELETE|/:user/:palette/delete|200|400,404,401||user, palette|Delete a palette in the user|
|PUT|/:user/:palette/modifyName|200|400,401|new palette name|user, palette|Modifies the name of a palette saved in the user|
|POST|/:user/sendRecoveryEmail|200|400||user|send a recovery email|

Palette:

| Methods | Endpoint | Status Code | Error Code | req.body | req.params | Description |
|---------|----------|-------------|------------|----------|------------|-------------|
|GET|/palettes|200|400|amount||get random color palettes|
|GET|/paletteEmpty|200|400|||get empty color palette|
|GET|/paletteSearch|200|400|color, amount, category||perform a search for color palettes by category|
|PUT|/modifyPalette|200|400|color, palette||modify a palette|
|POST|/paletteCreated|200|400|colors list||create a color palette from a list of colors|