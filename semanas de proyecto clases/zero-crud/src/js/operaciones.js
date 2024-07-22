// crea a los coders por orden gracias a los id
export function withForEach(coders, tbody) {

    tbody.innerHTML = ""

    coders.forEach(coder => {
        tbody.innerHTML += `
        <tr>
            <th scope="row">${coder.id}</th>
            <td>${coder.name}</td>
            <td>${coder.lastName}</td>
            <td class="text-lowercase ">${coder.email}</td>
            <td>
                <button type="button" data-id=${coder.id} class="btn btn-primary">details</button>
                <button type="button" data-id=${coder.id} class="btn btn-warning">edit</button>
                <button type="button" data-id=${coder.id} class="btn btn-danger">delete</button>
            </td>
        </tr>
        `
    });
}

// crea un nuevo coder con id aleatorio con el id: DataTransfer.now()
export function create(name, lastName, email, coders) {
    const nuwCoders = {
        id: Date.now(),
        name: name.value,
        lastName: lastName.value,
        email: email.value
    }

    coders.push(nuwCoders)
}

// elimina un coder

export function coderDelet(idParaEliminar, coders) {
    // este forEach recorre el array de coders y busca el coder al cual se va a eliminar 
    coders.forEach((coder, withForEach) => {
        if (coder.id == idParaEliminar) {
            coders.splice(withForEach, 1)
        }
    })
}

// actualiza un coder de la lista
export function coderEditar(name, lastName, email, idParaActualizar, coders) {
    for (const coder of coders) {
        if (coder.id == idParaActualizar) {
            coder.name = name.value
            coder.lastName = lastName.value
            coder.email = email.value
        }
    }
}