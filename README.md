# REST-API
REST API básica con las respectivas operaciones CRUD, se puede tanto consultar los productos y buscar por nombre sin restricciones, sin embargo para eliminar, crear o actualizar estos mismos será necesario de un usuario,  el cual se podrá crear para obtener el token de autorización luego de iniciar sesión.
# COMANDOS #
#health
http://localhost:3000/health //getHealth
#usuarios
"                  "/api/v1/users/register // registerUser
"                               "/login // login
#productos
"                        "/productos // getAll
"                        "/s?name="" // getByName
"                        "/ // createOne
"                        "/:id // deleteOne
"                        "/:id // updateOne

