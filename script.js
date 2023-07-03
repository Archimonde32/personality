const accordionItems = document.querySelectorAll('.accordion-image');
const buttonItems = document.querySelectorAll('.button-section li.button');

accordionItems.forEach(item => {
    item.addEventListener('click', toggleAccordion);
});

function toggleAccordion(event) {
    const currentItem = event.currentTarget.parentNode;
    const local = event.currentTarget;
    const location = local.getAttribute('data-location');
    currentItem.classList.toggle('active');

    const pointer = document.querySelector('.pointer');
    pointer.style.top = calculatePointerTop(location);
    pointer.style.left = calculatePointerLeft(location);

    const activeItems = document.querySelectorAll('li.active');
    activeItems.forEach(item => {
        if (item !== currentItem) {
            item.classList.remove('active');
        }
    });
}

buttonItems.forEach(item => {
    item.addEventListener('click', navigateToActress);
});

function navigateToActress(event) {
    const button = event.currentTarget;
    const actressIndex = button.getAttribute('data-index');
    const local = event.currentTarget;
    const location = local.getAttribute('data-location');
    const actressItem = document.querySelector(`.accordion-image[id="${actressIndex}"]`);

    const pointer = document.querySelector('.pointer');
    pointer.style.top = calculatePointerTop(location);
    pointer.style.left = calculatePointerLeft(location);

    const parentItem = actressItem.parentNode;
    parentItem.classList.add('active');
    const activeItems = document.querySelectorAll('li.active');
    activeItems.forEach(item => {
        if (item !== parentItem) {
            item.classList.remove('active');
        }
    });
}


function calculatePointerTop(location) {
    // Calculer la valeur top en fonction de l'emplacement
    // Retourner la valeur en pixels
    if (location === 'location1' ) {
        return '120px';
    } else if (location === 'location2') {
        return '120px';
    } else if (location === 'location3') {
        return '110px';
    }else if (location === 'location4') {
        return '120px';
    }else if (location === 'location5' ) {
        return '110px';
    }
}

function calculatePointerLeft(location) {
    // Calculer la valeur left en fonction de l'emplacement
    // Retourner la valeur en pixels
    if (location === 'location1') {
        return '60px';
    } else if (location === 'location2' ) {
        return '60px';
    } else if (location === 'location3') {
        return '192px';
    }else if (location === 'location4' ) {
        return '60px';
    }else if (location === 'location5' ) {
        return '192px';
    }
}



