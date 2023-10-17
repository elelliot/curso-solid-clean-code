//Si tenemos controladores como estas funciones, hay que seguir la convencion y mantener los nombramientos uniformes
const createProduct = () => {};
const updateProduct = () => {};
const deleteProduct = () => {};

//...por ejemplo, si necesitamos mas controladores... NO ROMPER LA UNIFORMIDAD
//Esto esta mal por que no mantiene la convencion de los primeros (suponiendo que asi es como se quieren)
const createNewUser = () => {};
const modifyUser = () => {};
const removeUser = () => {};

//... lo correcto seria crearlos asi:
const createUser = () => {};
const updateUser = () => {};
const deleteUser = () => {};
//-----------------------------------------------------------------------

//Lo mismo aplica con la estructura de archivos/directorios o la indentacion

/*
Ejemplo:
-Si tenemos un directorio:
    *components
        *product-list
            *product-list.html
            *product-list.ts
        *product-item.ts
Lo ideal seria poner a product-item.ts en su propio folder para mantener la uniformidad
    *components
        *product-list
            *product-list.html
            *product-list.ts
        *product-item
            *product-item.ts
*/
