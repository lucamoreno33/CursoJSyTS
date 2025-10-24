Gestión de Usuarios con Drag and Drop
Este proyecto es una aplicación web simple para gestionar usuarios con roles asignados, utilizando drag and drop para cambiar roles o eliminar usuarios. Está escrito en TypeScript y usa localStorage para persistir los datos. Ideal para aprender manipulación del DOM, eventos de drag and drop y tipado fuerte.

Descripción
La aplicación permite:

Agregar usuarios: Mediante un formulario con nombre y email. Los nuevos usuarios se asignan automáticamente el rol "Lector".
Visualizar usuarios: Cada usuario se muestra en una tarjeta dentro de contenedores según su rol (Administrador, Editor, Lector).
Cambiar roles: Arrastra y suelta tarjetas entre contenedores para actualizar el rol del usuario.
Eliminar usuarios: Arrastra una tarjeta a la "papelera" para eliminarla (con confirmación).
Persistencia: Los datos se guardan en localStorage, sobreviviendo recargas de página.
El código usa TypeScript para tipado fuerte, interfaces y tipos personalizados, asegurando robustez y evitando errores comunes.

Tecnologías Utilizadas
TypeScript: Para tipado estático y mejor desarrollo (compilado a ES6 con CommonJS).
HTML/CSS: Para la estructura y estilos (no incluidos en el código, pero referenciados).
JavaScript (DOM API): Manipulación del DOM, eventos y localStorage.
Drag and Drop API: Eventos nativos del navegador para arrastrar y soltar elementos.
Node.js/npm: Para gestión de dependencias y compilación.
Instalación
Requisitos:

Node.js (versión 14 o superior) y npm instalados.
Un navegador moderno (Chrome, Firefox, etc.) con soporte para Drag and Drop y localStorage.
Pasos:

Clona o descarga el repositorio.
Navega al directorio del proyecto: cd tpfinal.
Instala dependencias: npm install (aunque el proyecto no tiene dependencias externas, esto asegura que npm esté listo).
Compila el código TypeScript: npm run build. Esto genera archivos JavaScript en la carpeta dist/ a partir de los archivos en src/.
Abre index.html (o el archivo HTML principal) en tu navegador. Asegúrate de que incluya el script compilado (ej. <script src="dist/app.js"></script>).
Estructura de archivos:

src/: Código fuente TypeScript (ej. app.ts).
dist/: Archivos compilados (generados por npm run build).
package.json: Configuración del proyecto y scripts.
tsconfig.json: Configuración de TypeScript (target ES6, módulo CommonJS, salida en dist/, modo estricto activado).
Uso
Agregar un usuario:

Llena el formulario con nombre y email.
Haz clic en "Submit". Si el email ya existe, verás una alerta.
Cambiar rol:

Arrastra una tarjeta de usuario a otro contenedor (Administrador, Editor, Lector).
El rol se actualiza automáticamente en localStorage y en la UI.
Eliminar usuario:

Arrastra la tarjeta a la "papelera".
Confirma la eliminación en el popup.
Recargar página:

Los usuarios se cargan desde localStorage al iniciar.
Estructura del Código
El código está organizado en funciones modulares dentro de src/app.ts (o similar):

Tipos e Interfaces:

type Rol: Define los roles posibles ("Administrador", "Editor", "Lector").
interface Usuario: Estructura de un usuario (nombre, email, rol).
Funciones Principales:

agregarUsuario(Nombre, Email): Crea y guarda un nuevo usuario.
eliminarUsuario(email): Elimina un usuario por email.
actualizarRolUsuario(email, nuevoRol): Cambia el rol de un usuario.
getUsuarios(): Carga y renderiza usuarios desde localStorage.
renderUsuarios(usuario): Crea y muestra una tarjeta HTML para un usuario.
configurarEventosDrop(): Configura eventos de drag and drop en los contenedores.
Eventos:

Formulario: Valida y agrega usuarios.
Drag and Drop: Maneja dragstart, dragover, drop para mover/eliminar tarjetas.
Flujo General:

Al cargar: getUsuarios() renderiza tarjetas; configurarEventosDrop() activa drag.
Interacciones: Actualizan localStorage y UI en tiempo real.
Estructura HTML Requerida
Asegúrate de que tu index.html (en la raíz o en dist/) incluya estos elementos (ajusta IDs y clases según tu CSS). Incluye el script compilado al final del <body>:

html
22 lines
Copy code
Download code
Click to expand
<!DOCTYPE html>
<html lang="es">
...
Contenedores: Deben tener clase .dropzone e IDs que coincidan con los roles (o "papelera").
Estilos CSS: Agrega clases como .user-card, .dragging para feedback visual (ej. cursor: grab, opacity).
Scripts Disponibles
npm run build: Compila TypeScript a JavaScript usando la configuración en tsconfig.json.
npm test: Placeholder para tests (actualmente no implementado; puedes agregar Jest o similar).
Consideraciones Técnicas
localStorage: Almacena datos como JSON. Limita a ~5MB; no es seguro para datos sensibles.
Drag and Drop: Funciona en navegadores modernos. Si falla, verifica que draggable="true" esté en las tarjetas y que no haya CSS bloqueante (como user-select: none).
Validación: El código verifica emails duplicados y campos vacíos, pero no valida formato de email (puedes agregar con regex).
Errores: Incluye logs en consola para debug. Maneja casos como localStorage vacío o elementos DOM faltantes.
TypeScript Config: Modo estricto activado para mayor robustez. Si encuentras errores de compilación, revisa tsconfig.json.
Mejoras Futuras: Agrega paginación si hay muchos usuarios, o integra con una API para persistencia real.
Contribución
Si encuentras bugs o mejoras, abre un issue o pull request.
Asegúrate de que los cambios mantengan el tipado TypeScript y la funcionalidad de drag and drop.
Autor
Luca Nahuel Moreno (tp final js/ts avanzado).
Licencia
Este proyecto está bajo la licencia ISC. Úsalo libremente para aprendizaje o proyectos personales. No incluye garantía de ningún tipo.