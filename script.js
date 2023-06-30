
// Sélectionnez tous les éléments li 
const accordionItems = document.querySelectorAll('.accordion-image');
const buttonItems = document.querySelectorAll('.button-section li.button');


// Parcourez les éléments et ajoutez un gestionnaire d'événements
accordionItems.forEach(item => {
    item.addEventListener('click', toggleAccordion);
});

// Fonction pour basculer l'accordéon
function toggleAccordion(event) {
    const currentItem = event.currentTarget.parentNode;
    const isActive = currentItem.classList.contains('active');

    // Fermez tous les éléments li actifs
    const activeItems = document.querySelectorAll('li.active');
    activeItems.forEach(item => {
        item.classList.remove('active');
    });

    // Ouvrez l'élément li correspondant à l'image cliquée
    if (!isActive) {
        currentItem.classList.add('active');
    }
}



// Parcourez les éléments et ajoutez un gestionnaire d'événements aux boutons
buttonItems.forEach(item => {
    item.addEventListener('click', navigateToActress);
});

// Fonction pour naviguer vers l'actrice correspondante
function navigateToActress(event) {
    const button = event.currentTarget;
    const actressIndex = button.getAttribute('data-index');

    // Fermez tous les éléments li actifs
    const activeItems = document.querySelectorAll('li.active');
    activeItems.forEach(item => {
        item.classList.remove('active');
    });

    // Ouvrez l'élément li correspondant à l'actrice cliquée
    const actressItem = document.querySelector(`.accordion-image[id="${actressIndex}"]`);
    if (actressItem) {
        const parentItem = actressItem.parentNode;
        parentItem.classList.add('active');
    }
}
