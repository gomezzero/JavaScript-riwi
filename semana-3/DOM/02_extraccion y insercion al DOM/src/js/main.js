const header = document.querySelector("header");

const titulo = document.createElement("h1");

titulo.textContent = "Galeria de perros"; // el .textContent agreca contenido a lo que le indiquemos
titulo.id = "titulo-principal"; // hace lo mismo que .setAttribute() pero mucho mas sencillo y moderno (.setAttribute() agraga el si id class o name)

titulo.classList.add("text-light", "text-center", "bg-dark","pb-5"); // agrega un color medianrte clase de Bootstrap
//(bg-)color de fondo,  todo lo que sea (text-) afecta al texto, (pb-) es el pading siendo la (b) abajo (x) a los lado (s)a la izquieda (e) derecha (arriba) 

titulo.classList.remove("pb-5"); // elimina lo que se espesifique

header.appendChild(titulo); // El .appendChild() agrega un hijo al header (o a lo que se especifique)


const main = document.querySelector("main");


// imprime 70 perros
for (let i = 0; i < 70; i++) {
    main.innerHTML += `
    <article class="card tect-capitaliza" style="width: 18rem;">
        <img src="./public/img/neron.webp" class="card-img-top" alt="...">
        <div class="card-body">
            <h3 class="card-title text-center">Neron</h3>
            <span class="fw-bold">Raza: </span> <span class="card-text">Rottweiler americano</span>
            <br>
            <span class="fw-bold">Edad: </span> <span class="card-text">5 meses</span>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci quo numquam temporibus.
            </p>
            <div class="d-flex justify-content-center">
                <button class="btn btn-primary " type="button">Quiereme</button>
            </div>
        </div>
    </article>
    `
}