const app = document.querySelector('.app');
const btnVerTrabajos = document.getElementById('btn-ver-trabajos');
const btnAgregarTrabajo = document.getElementById('agregar');
const btnFiltrar = document.getElementById('btn-filtrar');


// events
btnVerTrabajos.addEventListener('click', () => {

    if(app.style.display === 'none' || app.innerHTML === ''){
        app.style.display = 'block';
        imprimirTrabajos();
    } else {
        app.style.display = 'none';
    };

});

btnAgregarTrabajo.addEventListener('click', agregar);

btnFiltrar.addEventListener('click', buscarFiltros );

// funcion imprimir trabajos
async function imprimirTrabajos() {
    const respuesta = await fetch('http://localhost:3000/trabajos');
    const data = await respuesta.json();

    //limpiar los trabajos obtenidos
    app.innerHTML = '';

    data.forEach(element => {
        const trabajoHTML = `
        <div data-id="${element.id}">
            <div class = "jop-txt">
                <h2>${element.titulo}</h2>
                <p>${element.descripcion}</p>
            </div>
            <div class ="btns">
                <button class="delete">Eliminar</button>
                <button class="actualizar">Actualizar</button>
            </div>
        </div>
        `;

        // lo que hacemos es meter en una posicion especifica con insetAdjacentHTML.  
        // bedoreedn es la poscicion donde lo vamos a meter 
        app.insertAdjacentHTML('beforeend',trabajoHTML ); 
    });

    const btnEliminar = document.querySelectorAll('.delete');
    const btnEditar = document.querySelectorAll('.actualizar');

    console.log(btnEliminar);
    btnEliminar.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // closest busca el primer padre hacia arriba que conincida con el atributo buscado
            const trabajoId = e.target.closest('[data-id]').getAttribute('data-id'); 
            eliminar(trabajoId);
        })
    });

    btnEditar.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // closest busca el primer padre hacia arriba que conincida con el atributo buscado
            const trabajoId = e.target.closest('[data-id]').getAttribute('  '); 
            editar(trabajoId);
        })
    });
}

// funcion de elimianr
async  function eliminar(trabajoId) {
    const  respuesta = await fetch (`http://localhost:3000/trabajos/${trabajoId}`, {
        method: 'DELETE'
    });

    if (respuesta.ok) {
        alert('eliminaste lo deseado');
    }else{
        alert('error al eliminar')
    }
}

//funcion para agregar nuevo
async function agregar() {
    const formContainer = document.createElement('section');

    const form = `
        <form class="form">
            <p class="title">Crear Trabajo</p>
            <label>
                <input class="input-titulo" type="text" placeholder="Título" required>
            </label> 
            <label>
                <textarea class="input-descripcion" placeholder="Descripción" required></textarea>
            </label>
            <label>
                <select class="input-modalidad" required>
                    <option value="" disabled selected>Selecciona modalidad</option>
                    <option value="Tiempo completo">Tiempo completo</option>
                    <option value="Medio tiempo">Medio tiempo</option>
                    <option value="Prácticas">Prácticas</option>
                </select>
                <span>Modalidad</span>
            </label>
            <button class="submit-new-job">Crear</button>
            <p class="signin">Already have an account? <a href="#">Sign in</a></p>
        </form>
    `
    formContainer.innerHTML = form;
    app.appendChild(formContainer);

    const btnAgregarTrabajoNew = document.querySelector('.submit-new-job');
    
    btnAgregarTrabajoNew.addEventListener('click', async (e) => {
        e.preventDefault();

        const titulo = document.querySelector('.input-titulo').value; // el valor de lo que el ususario ponga en el input
        const descripcion = document.querySelector('.input-descripcion').value; // el valor de lo que el ususario ponga en el input
        const modalidad = document.querySelector('.input-modalidad').value; // el valor de lo que el ususario ponga en el input

        //creamos el objeto del nuevo trabajao para agregar
        const nuevoTrabajo = {
            titulo: titulo,
            descripcion: descripcion,
            modalidad: modalidad
        };

        console.log('Nuevo trabajo:', nuevoTrabajo);

        const repuesta = await fetch ('http://localhost:3000/trabajos',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevoTrabajo)
        });

        if (repuesta.ok) {
            console.log('todo correcto');
        } else {
            console.log('Error al agregar trabajo');
        }
    });
}

//funcion para busqueda por barra de busqueda
async function buscarFiltros() {
    const busqueda = document.getElementById('busqueda').value;

        const respuesta = await fetch(`http://localhost:3000/trabajos`);

        const trabajos = await respuesta.json();

        // diltrar los trabajos en el cliente 
        const trabajosFiltrados = trabajos.filter(trabajo => trabajo.titulo.includes(busqueda));

        //limpiar la interfaz
        app.innerHTML = ''

        //imprimir los trabajos diltrados
        trabajosFiltrados.forEach(element => {
            const trabajoHTML = `
            <div data-id="${element.id}">
                <div class = "jop-txt">
                    <h2>${element.titulo}</h2>
                    <p>${element.descripcion}</p>
                </div>
                <div class ="btns">
                    <button class="delete">Eliminar</button>
                    <button class="actualizar">Actualizar</button>
                </div>
            </div>
            `;

            // lo que hacemos es meter en una posicion especifica con insetAdjacentHTML.  
            // bedoreedn es la poscicion donde lo vamos a meter 
            app.insertAdjacentHTML('beforeend',trabajoHTML ); 
        });

        const btnEliminar = document.querySelectorAll('.delete');

        btnEliminar.forEach(btn => {
            btn.addEventListener('click', (e) => {
                // closest busca el primer padre hacia arriba que conincida con el atributo buscado
                const trabajoId = e.target.closest('[data-id]').getAttribute('data-id'); 
                eliminar(trabajoId);
            })
        });
}

//funcion para editar
async function editar(trabajaId) {
    // obtenemos referenvias  al formulario de actualizacion.
    const fromEditar = document.querySelector('.form-actualizar');
    fromEditar.style.display = 'flex'; // mostrar el formulario de la actualizacion proque el inicio esta escondido. 

    // obtener referencia al boton de actualizar 
    const btnActualizar = document.querySelector('#btn-actulaizar'); // corregir la id del boton

    //event listener para el boton de actualizar
    btnActualizar.addEventListener('click', async (e) => {    
        e.preventDefault(); // prevenir que se recargue la pagina

        //obtener valores del formulario
        const titulo = document.getElementById('titulo').value;
        const descripcion = document.getElementById('descripcion').value;

        //obtener los datos del trabajo que se desea editar
        const response = await fetch(`http://localhost:3000/trabajos/${trabajaId}`);
        const trabajo = await response.json();

        //actualizar los datos de trabajo con los valores de los campos
        trabajo.titulo = titulo;
        trabajo.descripcion = descripcion;

        //Enviar una solicitud PUT para actualizar los datos del trabajo en el servidor 
        const actualizar = await fetch (`http://localhost:3000/trabajos/${trabajaId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(trabajo)
        });
        console.log(actualizar);
        fromEditar.style.display = 'none';
    });
}