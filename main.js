// Descrizione
// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:

// Milestone 1 -
// Creiamo il nostro array di oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: - id del post, numero progressivo da 1 a n - nome autore, - foto autore, - data in formato americano (mm-gg-yyyy), - testo del post, - immagine (non tutti i post devono avere una immagine), - numero di likes. Non è necessario creare date casualiPer le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)
// [Qui come abbiam visto in realtà vi arriva gratis, ma dategli un occhio per capirlo e vedete se tutto combacia e torna :innocente:]

// Milestone 2 -
// Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.

// Milestone 3 -
// Se clicchiamo sul tasto “Mi Piace” cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
// Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.

// BONUS
// Formattare le date in formato italiano (gg/mm/aaaa)
// Gestire l’assenza dell’immagine profilo con un elemento di fallback che contiene le iniziali dell’utente (es. Luca Formicola > LF).
// Al click su un pulsante “Mi Piace” di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.

const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/300/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/600/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/300/300?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/600/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/300/300?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/600/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/300/300?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/300/300?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/600/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


posts.forEach(elementPosts => {
    document.getElementById("container").innerHTML += `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${elementPosts.media}" alt="${elementPosts.author.name}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${elementPosts.author.name}</div>
                        <div class="post-meta__time">${elementPosts.created}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${elementPosts.content}</div>
            <div class="post__image">
                <img src="${elementPosts.author.image}" alt="${elementPosts.author.name}">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" data-postid="${elementPosts.id}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-${elementPosts.id}" class="js-likes-counter">${elementPosts.likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>`;
});

const likeButton = document.getElementsByClassName("like-button");

const changeDate = document.getElementsByClassName("post-meta__time");

const postImage = document.getElementsByClassName("post__image");

let counter = 0;

// Faccio i controlli su tutti i post con forEach
posts.forEach((element, index) => {

    // Assegno a date la data del post che è contenuta in created
    const date = element.created;

    // Creo la nuova data invertendo giorno e anno
    const newDate = date.split("-").reverse().join("-");

    // La aggiungo all'html
    changeDate[index].innerHTML = newDate;

    // Assegno a name il nome del creatore del post
    const name = element.author.name;

    // Sostituisco tutte le lettere minuscole compreso lo spazio che c'è tra nome e cognome con una stringa vuota
    const newName = name.replace(/[a-z\s]/g, "");

    // Assegno a image l'immagine del post
    const image = element.author.image;

    // Se l'immagine è uguale a null allora sostituisco il contenuto con newName
    if (image === null) {
        postImage[index].innerHTML = newName;
    }

    // Al click del tasto mi piace
    likeButton[index].addEventListener("click",

        function() {

            // Aggiungo la nuova classe per il cambio colore
            likeButton[index].classList.toggle("like-button--liked");

            // Se il bottone è cliccato allora incremento counter altrimenti lo decremento (per il numero di like)
            if(likeButton[index].classList.contains("like-button--liked")) {
                counter++;
            }
            else {
                counter--;
            }

            // Assegno il nuovo valore all'html
            document.getElementById(`like-counter-${element.id}`).innerHTML = element.likes+counter;

            const idArray = [];

            idArray.push(element.id);

            console.log(idArray);
 
        }
    );
    
});