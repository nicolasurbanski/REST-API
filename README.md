# REST-API
REST API básica con las respectivas operaciones CRUD, se puede tanto consultar los productos y buscar por nombre sin restricciones, sin embargo para eliminar, crear o actualizar estos mismos será necesario de un usuario,  el cual se podrá crear para obtener el token de autorización luego de iniciar sesión.
#health
http://localhost:3000/health
#Productos
http://localhost:3000/api/v1/products/ // getAllProducts
"                                  "/s // getByName
"                                 "/ // createOne
"                                "/:id // deleteOne
"                               "/:id // updateOne
#Usuarios
http://localhost:3000/api/v1/users/register // registerUser
"                               "/login // login
