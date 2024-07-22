const user = document.getElementById('username'); // input de user name
const pass = document.getElementById('password'); // input de password

const submiLogin = document.getElementById('submit-login');// boton de login

const formLogin = document.querySelector('.from-login'); // formulario


// evaneto para escuchar el click
submiLogin.addEventListener('click', (e) =>{    
    e.preventDefault()

    const username = user.value; // traemos el valor de cada uno de los input (lo que el usuario puso en usuario)
    const password = pass.value; // traemos el valor de cada uno de los input (lo que el usuario puso en password)

    formLogin.reset(); // reseteamos el form
    validarCredenciales(username, password); // llamamos a la funcion validarCredenciales que la cremoas unas lineas mas abajo. 
})


//funcion para comparar el usuario con la base de datos.
async function validarCredenciales(username, password) {
    const pregunta = await fetch ('http://localhost:3000/users'); // vamos a la base de datos y traemos los datos
    const data = await pregunta.json(); // convertimos la base de datos. 

    const user = data.find(user => user.username === username && user.password === password); 

        if(user){
            localStorage.setItem('aut', 'true');

            //redirigir a otra pagina
            window.location.href = '/src/pages/admin/admin.html';
        } else {
            console.log('credenciales incorrectas');
        }
}
