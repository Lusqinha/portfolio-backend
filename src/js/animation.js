
const sr = ScrollReveal();

const cards = document.querySelectorAll('.cards');
for (let i = 0; i < cards.length; i++) {
    sr.reveal(cards[i], {
        origin: 'top',
        distance: '30px',
        duration: 800,
        delay: 400 * i,
    });
}



const projects = document.querySelectorAll('.projeto')
for (let i = 0; i < projects.length; i++) {
    sr.reveal(projects[i], {
        delay: 100 * i,
        origin: 'top',
        distance: '20px',
        duration: 2000
    })
}

const nave = document.querySelectorAll('.nave')
// make a diagonal animation
for (let i = 0; i < nave.length; i++) {
    sr.reveal(nave[i], {
        delay: 100 * i,
        origin: 'top',
        distance: '150px',
        duration: 3000
    })
}

const cards_i = document.querySelectorAll('.cards i')

for (let i = 0; i < cards_i.length; i++) {
    sr.reveal(cards_i[i], {
        delay: 100 * i,
        origin: 'top',
        distance: '150px',
        duration: 3000,
        reset: true
    })
}

const cards_tec = document.querySelectorAll('.cards')

for (let i = 0; i < cards_tec.length; i++) {
    cards_tec[i].addEventListener('mouseover', function () {
        tecnologia = cards_tec[i].getAttribute('data-tech')
        mostrarDescricao(tecnologia)
    })
}

