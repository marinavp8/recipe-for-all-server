## Auth API routes
Base URL: `/api/auth`

| METHOD | PATH                     | DESCRIPTION                                    | 
|--------|--------------------------|------------------------------------------------|
| POST    |`/signup`       | Página para registro                           | 
| POST    |`/login`        | Página para inicio sesión                      | 
| GET     |`/verify`       | Página verificar sesión                        | 
| GET     |`/profile/`     | Página para ver perfil                         | 
| POST    |`/profile/edit` | Página para editar perfil                      | 


## Menu API routes
Base URL: `/api/menu`

| METHOD | PATH                     | DESCRIPTION                                    | 
|--------|--------------------------|------------------------------------------------|
| GET    |`/`               | Lista de menús creados                         | 
| POST   |`/create`        | Crear menú                                     | 
| GET    |`/:id`           | Ver detalles del menú                          | 
| POST   |`/:id/edit`      | Editar menú                                    | 
| POST   |`/:id/delete`    | Eliminar menú                                  | 


## Edamam API routes
Base URL: `/api/edamam`

| METHOD | PATH                     | DESCRIPTION                                    | 
|--------|--------------------------|------------------------------------------------|
| GET    |`/search`          | Buscador por ingrediente                       | 
| GET    |`/recipes/:id`     | Resultados búsqueda                            | 
| GET    |`/diet/      `     | Filtrado por tipo dieta                        | 
| GET    |`/mealtype/  `     | Filtrado por tipo de comida                    | 