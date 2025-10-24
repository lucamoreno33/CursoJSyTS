type Rol = "Administrador" | "Editor" | "Lector"  //creo tipo Rol que solo puede ser una de las 3 opciones
const containers = document.querySelectorAll('.dropzone') as NodeListOf<HTMLElement> //llamo a la nodeList de containers en los que harre el drag and drop
interface Usuario { //creo una interfaz para los usuarios que son su propio tipo de objeto
    nombre: string,
    email: string,
    rol: Rol
 }
// agregar usuario
const agregarUsuario = (Nombre: string, Email: string) => { 
    const usuario: Usuario = {
        nombre: Nombre,
        email: Email,
        rol: "Lector",
    }
    renderUsuarios(usuario);// renderizo para que se actualice en lo visual
    const datos = localStorage.getItem('usuarios'); //obtengo los datos (la lista de usuario del localStorage) aparte para que sea estricto con los tipos
    const usuarios: Usuario[] = datos ? JSON.parse(datos) : [] // usuarios es un array de Usuarios si hay datos, los parsea, si no es un array vacio
    usuarios.push(usuario) //agrego el usuario al array
    localStorage.setItem('usuarios', JSON.stringify(usuarios)) //actualizo el local storage con el nuevo usuario
};
// Eliminar usuario
const eliminarUsuario = (email: string) => {
    const datos = localStorage.getItem('usuarios')
        const usuarios: Usuario[] = datos ? JSON.parse(datos) : []; // todo simil a agregarUsuario para el tipado
        const usuariosActualizados = usuarios.filter(user => user.email !== email) //reago la lista pero ignorando al elemento que tenga el mismo email que llegara a la funcion por parametro
        localStorage.setItem('usuarios', JSON.stringify(usuariosActualizados)) //actualizo la lista de usuarios que no tendra al usuario del email marcado
}
// Actualizar rol de usuario
const actualizarRolUsuario = (email: string, nuevoRol: Rol) => { //uso el tipo rol para que no acepte un string distinto a los del tipo
    const datos = localStorage.getItem('usuarios')
    const usuarios: Usuario[] = datos ? JSON.parse(datos) : []
    const usuario = usuarios.find(user => user.email === email) //busco con find en el array de usuarios al usuario con el mismo email al parametro
    if (!usuario) return //verifico que exisra el usuario antes de proceder
    usuario.rol = nuevoRol; // Asigna el nuevo rol que estara atado al container
    localStorage.setItem('usuarios', JSON.stringify(usuarios)); // Guardo los cambios  
}
// obtener y renderizar los usuarios
const getUsuarios = () => { 
        const datos = localStorage.getItem('usuarios') //obtengo la lista del LS
    if (datos) {
        const usuarios: Usuario[] = JSON.parse(datos)    //Si estan los datos, los parseo y y renderizo todos
        usuarios.forEach(usuario => renderUsuarios(usuario))
    }
}
//Logica del submit del formularrio
document.getElementById('userForm')?.addEventListener('submit', e => {   //obtengo el formulario del dom y si existe le agrego evento
        e.preventDefault()
        const nombre = (document.getElementById('name') as HTMLInputElement).value.trim() //capturo los imputs y los limpio con trim
        const email = (document.getElementById('email') as HTMLInputElement).value.trim()
        if (nombre && email) {
        // Verificar si el email y nombre ya existen
            const datos = localStorage.getItem('usuarios')//simil a actualizar/agregar/eliminar usuarios
            const usuarios: Usuario[] = datos ? JSON.parse(datos) : []
            const usuarioExistente = usuarios.find(user => user.email === email) //busco el match entre el email formulario y el email de cada usuario registrado
            if (usuarioExistente) {
                alert('El email ya está registrado')//manejo el error
                return;
            }
            agregarUsuario(nombre, email)
        }
    });
// renderizar usuarios
const renderUsuarios = (usuario: Usuario) => { 
    const tarjeta = document.createElement('div')
    tarjeta.className = 'user-card'
    tarjeta.setAttribute('draggable', 'true')
    tarjeta.dataset.email = usuario.email; // Usa el email como key para el drop
    // Contenido de la tarjeta
    tarjeta.innerHTML = `
        <h4>${usuario.nombre}</h4>
        <p>${usuario.email}</p>
        <p>Rol: ${usuario.rol}</p>`
    // Eventos de drag para las tarjetas  
    tarjeta.addEventListener('dragstart', (e: DragEvent) => {  //especifico el tipo de evento para acceder a sus propiedades
        if (e.dataTransfer) { //verifico que no sea none para el contro estricto
            tarjeta.classList.add('dragging') // agrego un estilo para feedback visual
            e.dataTransfer.setData('text/plain', tarjeta.dataset.email || '') // toma en el data transfer a la tarjeta mediante la key que es el email
        }
    });
    tarjeta.addEventListener('dragend', (e) => tarjeta.classList.remove('dragging')); //remuevo el estilo agregado en el dragstart
    // Agregar al contenedor correcto (sin lógica de eventos)
    containers.forEach(container => {  //el bucle busca la coincidencia entre el rol del usuario y el id del container que es igual a un rol
        if (usuario.rol === container.id) {
            container.appendChild(tarjeta); //se agrega la tarjeta al contenedor correcto
        }
    })

}
const configurarEventosDrop = () => { //creo una funcion para inicializar los drops para ejecutarla una vez que ya estan los usuarios renderizados en los containers
    containers.forEach(container => {
        container.addEventListener('dragover', (e: DragEvent) => {
            e.preventDefault(); 
        })
        container.addEventListener('dragleave', (e: DragEvent) => {
            e.preventDefault(); 
        })
        container.addEventListener('drop', (e: DragEvent) => {
            e.preventDefault();
            const email = e.dataTransfer?.getData('text/plain')// obtengo el email de la tarjeta soltada verifico que exista
            if (!email) return
            const tarjeta = document.querySelector(`[data-email="${email}"]`) as HTMLElement; //usando el email como key obtengo al div de la tarjeta
            if (!tarjeta) return
            if (container.id === 'papelera') { // Si el contenedor es la papelera, elimina el usuario
                if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
                    eliminarUsuario(email);
                    tarjeta.remove();
                }
            } else {// si no es la papelera muevo la tarjeta al container
                container.appendChild(tarjeta)
                const nuevoRol = container.id as Rol // Actualizar el rol del usuario
                actualizarRolUsuario(email, nuevoRol)
                const elementosp = tarjeta.querySelectorAll('p') // Actualizo el texto del segundo <p> donde se visualiza el rol
                if (elementosp.length >= 2) { //verifico que este todo bien
                    elementosp[1].textContent = `Rol: ${nuevoRol}`; // le cambio el texto al segungo p
                }
            }
        });
    });
};

getUsuarios()
configurarEventosDrop()//ejecuto luego de renderizar los usuarios
