const items = document.querySelectorAll('.item'); //guardo todos los items con la clase item
const destino = document.getElementById('areaDestino'); //guardo el area de drop tomado su id

items.forEach(item => { //como items es una lista con todos los items la itero con forEach
    item.addEventListener('dragstart', e => { //hago que escuche al evento dragstart que es cuando agarro los elemntos, para que me devuelvan su id
        e.dataTransfer.setData('text/plain', e.target.id); //manejo los datos y con set data los contengo en texto plano
        console.log(e.dataTransfer.getData('text/plain')) // ahora con getData obtengo ese id del setData y lo muestro en consola
    });
});

destino.addEventListener('dragover', e => { //escucho al evento dragover que es cuando un elemento esta encima de otro
    e.preventDefault(); // el navegador por defecto no permite que se suelten objetos sobre otros asi que aca y en drop uso preventDefault
    destino.classList.add('over'); // agrego la clase over para que tenga mas feedback visual
});

destino.addEventListener('dragleave', () => { // escucho cuando se va el elemento de arriba del otro asi le quita la clase
    destino.classList.remove('over');          // que le agregue arriba en el over
});


const RenderHistorial = () =>{
    const lista = document.getElementById('listaHistorial'); //guardo la ul que renderizara los li dentro suyo
    lista.innerHTML = ''; //borro lo que ya habia por que si no al hacer appendChild, agrega lo que ya habia mas el nuevo item dropeado al llamar la funcion en el eventlistener
    const historial = JSON.parse(localStorage.getItem('historialDrop')) || []; //busco el historial de drops en el local storage y manejo el caso en el que no existe con un OR

    historial.forEach(e => { //itero el historial, por cada elemento creo un li el cual tendra el id y hora
    const li = document.createElement('li');
    li.textContent = `item: ${e.id} hora: ${e.timestamp}`;
    lista.appendChild(li); // agrego el li a la ul en el html
  });
}

window.addEventListener('DOMContentLoaded', RenderHistorial); //Se ejecuta al cargar el DOM




destino.addEventListener('drop', e => { //ahora si finalmente escucho el drop (cuando suelto el elemento)
    e.preventDefault();
    const id = e.dataTransfer.getData('text/plain'); //obtengo el id del item
    const item = document.getElementById(id);  //guardo el item ubicandolo con el id
    let historial = JSON.parse(localStorage.getItem('historialDrop')) || []; //como en render busco el historial en el LS y manejo logica 
    const timestamp = new Date().toLocaleString(); //guardo la fecha y hora de cuando se suelta del item

    const clon = item.cloneNode(true); //creo una copia del item con cloneNode
    destino.appendChild(clon); //le agrego al area destino el clon del iem que estoy soltando

    
    historial.push({ id, timestamp }); //le agrego al historial el objeto con el id y la fecha
    localStorage.setItem('historialDrop', JSON.stringify(historial)); //guardo el historial en el localstorage con setItem

    RenderHistorial(); //llamo a la funcion renderHistorial para que se actualice cada que se detecta el drop

    destino.classList.remove('over'); //finalmente le quito la clase over para respuesta visual
});
