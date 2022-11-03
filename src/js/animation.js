
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