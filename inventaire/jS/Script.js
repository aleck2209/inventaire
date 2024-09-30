function changeContent(page) {
    const contentDivs = document.querySelectorAll('.content');
    const navbarItems = document.querySelectorAll('.navbar li');

    // Masquer tous les contenus
    contentDivs.forEach(div => {
        div.style.display = 'none';
    });

    // Retirer la classe active de tous les éléments de la navbar
    navbarItems.forEach(item => {
        item.classList.remove('active');
    });

    // Afficher le contenu de la page sélectionnée
    const activeContent = document.getElementById(page);
    if (activeContent) {
        activeContent.style.display = 'block';
    }

    // Ajouter la classe active à l'élément cliqué
    const activeItem = Array.from(navbarItems).find(item => item.textContent.trim().toLowerCase() === page);
    if (activeItem) {
        activeItem.classList.add('active');
    }
}

// Afficher la page d'accueil par défaut au chargement
document.addEventListener('DOMContentLoaded', () => {
    changeContent('home');
});
