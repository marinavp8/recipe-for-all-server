AUTH
| METHOD | PATH                     | DESCRIPTION                                    | 
|--------|--------------------------|------------------------------------------------|
| POST    |`/api/auth/signup`       | Página para registro                           | 
| POST    |`/api/auth/login`        | Página para inicio sesión                      | 
| GET     |`/api/auth/verify`       | Página verificar sesión                        | 
| GET     |`/api/auth/profile/`     | Página para ver perfil                         | 
| POST    |`/api/auth/profile/edit` | Página para editar perfil                      | 

CRUD
| METHOD | PATH                     | DESCRIPTION                                    | 
|--------|--------------------------|------------------------------------------------|
| GET    |`/api/menu`               | Lista de menús creados                         | 
| POST   |`/api/menu/create`        | Crear menú                                     | 
| GET    |`/api/menu/:id`           | Ver detalles del menú                          | 
| POST   |`/api/menu/:id/edit`      | Editar menú                                    | 
| POST   |`/api/menu/:id/delete`    | Eliminar menú                                  | 


CRUD
| METHOD | PATH                     | DESCRIPTION                                    | 
|--------|--------------------------|------------------------------------------------|
| GET    |`/edamam/search`          | Buscador por ingrediente                       | 
| GET    |`/edamam/recipes/:id`     | Resultados búsqueda                            | 
| GET    |`/edamam/diet/      `     | Filtrado por tipo dieta                        | 
| GET    |`/edamam/mealtype/  `     | Filtrado por tipo de comida                    | 