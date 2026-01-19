##Pokedéx OO (Pokedex-API)

En este proyecto se trabajo colaborativamente para la implementación de una aplicación web que funcionase como una pokédex. Para ello la aplicación utiliza información importada desde la PokeAPI(https://pokeapi.co/). La aplicación permite buscar un Pokémon por nombre o ID y muestra la tarjeta con su información. Esto se hizo por medio del método fetch (api.js), el cual utiliza la clase Pokemon (clase-pokemon.js), esta información es gestionada por ui.js, siendo el modulo que se conecta directamente con el html.

El estilo se hizo por medio de la implementación de Bootstrap y css.

###Asignación de roles:
| Rol | Descripción | Desarrollador | Archivos |
| :--- | :--- | :--- | :--- |
| Diseñador de UI | Controla el DOM y eventos. Diseño web. | Alonso Soto | ui.js index.html estilo.css|
| Ingeniero de datos | Gestiona los fetch a la API | Alonso Soto | api.js |
| Arquitecto POO | Procesa los datos del JSON | Sofía Valenzuela | clase-pokemon |
| Auxiliar | Logica export-import js y github | Sofía Valenzuela | https://github.com/SophVZ/Pokedex-API |

Para clonar el proyecto:
1. Clona el repositorio
Abre una terminal y ejecuta el siguiente comando en bash:
git clone https://github.com

2. Accede a la carpeta en bash:
cd Pokedex-API

3. Ejecuta el proyecto:
Debido a que el proyecto utiliza Módulos de JavaScript, es necesario abrirlo a través de un servidor local para evitar errores de CORS. Opciones:
- Con VS Code: Instala la extensión "Live Server", haz clic derecho sobre index.html y selecciona "Open with Live Server".

- Con Python: ejecuta en la terminal "python -m http.server 8000" y luego abre el navegador en http://localhost:8000.

####Estructura del proyecto:
| Ruta relativa | Archivo	| Función |
| :--- | :--- | :--- |
| README.md | README.md | Descripción del proyecto, cargos y método de clonación. |
| index.html | index.html	| Estructura principal de la PokéDex y carga del módulo ui.js. |
| assets/CSS/estilo.css | estilo.css | Da estilo personalizado a la web. |
| assets/JS/api.js | api.js | Gestiona las peticiones a la PokeAPI y coordina la lógica. |
| assets/JS/clase.js | clase.js | Contiene la clase encargada de procesar y limpiar el JSON de la API. |
| assets/JS/ui.js | ui.js | Maneja toda la interacción con el usuario (botones, inputs) y el DOM. |

####Tecnologías utilizadas:
- JavaScript (ES6 Modules)
- Bootstrap 5 (para el diseño y spinners)
- Fetch API

Alonso Soto: https://github.com/Malebologia 
Sofía Valenzuela: https://github.com/SophVZ
