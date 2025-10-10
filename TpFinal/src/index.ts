
 type Rol = "Administrador" | "Editor" | "Lector";

interface Usuario {
    nombre: string,
    email: string,
    rol: Rol
 }


// agregar usuario
const containers = document.querySelectorAll('.dropzone')
const agregarUsuario = (Nombre: string, Email: string) => { 
    const usuario: Usuario = {
        nombre: Nombre,
        email: Email,
        rol: "Lector"
    }
    // Mostrar en pantalla
    renderUsuarios(usuario);

    // Guardar en localStorage
    
    const datos = localStorage.getItem('usuarios'); //obtengo los datos aparte para que sea estricto con los tipos
    const usuarios: Usuario[] = datos ? JSON.parse(datos) : []; // usuarios es un array de Usuarios si hay datos, los parseam si no ess un array vacio
    usuarios.push(usuario) //agrego el usuario al array
    localStorage.setItem('usuarios', JSON.stringify(usuarios)) //actualizo el local storage con el nuevo usuario
};



document.getElementById('userForm')?.addEventListener('submit', e => {
        e.preventDefault()
        const nombre = (document.getElementById('name') as HTMLInputElement).value.trim()
        const email = (document.getElementById('email') as HTMLInputElement).value.trim()
        agregarUsuario(nombre, email)
    });
 
// renderizar usuarios
const renderUsuarios = (usuario: Usuario) => { 
    const tarjeta = document.createElement('div')
    tarjeta.className = 'user-card'
    tarjeta.setAttribute('draggable', 'true')
    // Contenido de la tarjeta
    tarjeta.innerHTML = `
        <strong>${usuario.nombre}</strong>
        <small>${usuario.email}</small>
        <small>Rol: ${usuario.rol}</small>
    `
    // Agregar al contenedor
    containers.forEach( c => {
        if(usuario.rol == c.id){
            c.appendChild(tarjeta)
        }
    })
}
// controlar usuarios en local storage
const getUsuarios = () => { 
        const datos = localStorage.getItem('usuarios')
    if (datos) {
        const usuarios: Usuario[] = JSON.parse(datos)
        usuarios.forEach(usuario => renderUsuarios(usuario))
    }
}

document.querySelectorAll('.user-card').forEach(card => {
  card.addEventListener('dragstart', e => {
    (e.target as HTMLElement).style.opacity = '0.5';
  });
})

containers.forEach(container => {
    container.addEventListener('drop', e => {
        
    })
})



// formulario
// tomar el formulario y agregar el evento submit
// validar los datos
// crear el usuario
// guardar el usuario
// renderizar los usuarios

// drag and drop
// tomar los elementos drag and drop
// agregar los eventos necesarios
// controlar el drag and drop

// inicializar la app
//renderizar los usuarios
getUsuarios()
console.log("Aplicación de gestión de usuarios iniciada");
console.log("Funcionalidades de agregar, listar y drag-and-drop de usuarios están en desarrollo.");
console.log("¡Pronto estará disponible!");