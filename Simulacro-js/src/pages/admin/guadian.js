function checkAuthentication() {
    const isAuthenticated  = localStorage.getItem('aut');

    if (isAuthenticated !== 'true') {

        window.location.href = '/'
    }
}


// llamar a la funcion para la verificar la autenticacion al cargar la pagina 
document.addEventListener('DOMContentLoaded', checkAuthentication);