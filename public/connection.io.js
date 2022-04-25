const socket = io()
const realTime = document.querySelector('#reelTime')

socket.on('newUser', (data) => {
    if(data) {
        realTime.innerHTML += 
        `
        <div>
            <h5>Nouveau utilisateur ajouté</h5>
            <p>${data.firstname} ${data.name}</p>
            <a href="/admin/users">Voir ici</a>
        </div>
        `
    } else {
        realTime.innerHTML = "<p>Aucune activitée</p>"
    }
})

socket.on('newPizza', (data) => {
    if(data) {
        realTime.innerHTML += 
        `
        <div>
            <h5>Nouvelle pizza ajouté</h5>
            <p>${data.name}</p>
            <a href="/admin/pizza">Voir ici</a>
        </div>
        `
    } else {
        realTime.innerHTML = "<p>Aucune activitée</p>"
    }
})

socket.on('newIngredient', (data) => {
    if(data) {
        realTime.innerHTML += 
        `
        <div>
            <h5>Nouveau ingrédient ajouté</h5>
            <p>${data.name}</p>
            <a href="/admin/ingredient">Voir ici</a>
        </div>
        `
    } else {
        realTime.innerHTML = "<p>Aucune activitée</p>"
    }
})