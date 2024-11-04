
//⛔🚧
// En JavaScript, les fonctions peuvent être déclarées dans n'importe quel ordre, 
// tant que la fonction est déclarée avant d'être appelée 
// (ceci est vrai pour les déclarations de fonction, mais pas pour les expressions de fonction ou les fonctions fléchées).
//🚧⛔








// getElementById  sélectionne l'élément HTML avec l'ID searchInput.( c'est le champ de saisie de texte)
// .addEventListener écouteur d'événement.
// 'keypress' = touche appuyée dans le champ de saisie, fonction entre les accolades { ... } s'exécute.

// (e) représente event de la touche. Celui qui porte l'info de la touche pressée.
// e.key = contient le nom de la touche pressée qui est comparer avec la chaine de caractère "Enter".

// this.value fait référence au texte saisi dans notre champ de saisie.
// this = l'élément searchInput. 

// la valeur est stocker dans une variable appelée query comme ca on peut l'utiliser dans la fonction suivante.
// La fonction fetchMeals prend query comme argument. = Elle vas utiliser le texte de saisi par l'utilisateur pour effectuer une action (recherche de recettes basées sur les ingrédient)
// trim retire les espaces inutile.


document.getElementById('searchInput').addEventListener('keypress', function (e){

    if (e.key === 'Enter') {
        const query = this.value.trim();
        if (query){
        fetchMeals(query);
        }else {
            document.getElementById('results').innerHTML = '<p>Veuillez entrer un ingrédient pour rechercher des recettes.</p>';
        }
    }
});

document.getElementById('submitbtn').addEventListener('click', function (e){

    if (e.type === 'click') {
        const query = searchInput.value.trim();
        if (query){
        fetchMeals(query);
        }else {
            document.getElementById('results').innerHTML = '<p>Veuillez entrer un ingrédient pour rechercher des recettes.</p>';
        }
    }
});


// n'a pas fonctionner pourquoi ?
// document.getElementById('searchInput', 'submitbtn').addEventListener('keypress', 'click', function (e){

//     if (e.key === 'Enter' || e.type === 'click') {
//         const query = searchInput.value.trim();
//         if (query){
//         fetchMeals(query);
//         }else {
//             document.getElementById('results').innerHTML = '<p>Veuillez entrer un ingrédient pour rechercher des recettes.</p>';
//         }
//     }
// });


// On déclare la fonction asynchrone.
// async permet d'tiliser await à l'intérieur de la fonction pour gérer des opérations asynchrones.

// On utilise le block try pour q'il exécute le code qui pourrait potentiellement générer des erreurs car l'API pourrait être hors ligne (c'est un appel réseau) On encapsule tout ca.
// await fait attendre la ligne jusqu'à ce que l'appel fetch soit terminé. Donc response aura une valeur que lorsque les données de l'API sera récupérer.
// fetch envoie une requête HTTP à l'URL.
// Attention! l'URL est construite en fonction de query. ${query} donc si query = chicken l'URL prend chicken après le égal.

// response.ok = indicateur de succès. True si la reuête à réussi (statut HTTP 200).
// Ici throw sert à déclancher une exception, sa interrompt le code en cours pour passer directement dans le block catch.
// new Error('') crée un nouvel object d'erreur qui contient un msg précis.
// statusText = une propriété de response.( c'est la description du statut HTTP) ex: 404 = "Not Found"
// On introduit une template Literals dans la chaine de caractère Erreur.
// ${response.statusText} est l'expression dont on veut récupérer la valeur.

// await response.json() = convertit la réponse en JSON (format de données lisible).
// data = contiendra toutes les données renvoyées par l’API.
// On appelle la fonction displayResults, en lui passant data.meals
// meals est le tableau de propriété d'object JSON de recettes retournées par l'API.
// Donc data.meals =  tableau de repas que on passe à displayResults. 
// console.error(...) affiche un message d'erreur dans la console, utile pour nous.
// document.getElementById('results').innerHTML = ... utile pour indiquer à l'utilisateur qu'il y a un problème.

// resume: La fonction fetchMeals envoie une requête à une API, vérifie que la réponse est correcte, transforme les données en JSON et affiche les résultats.
// Le bloc try/catch gère les erreurs possibles et empêche le plantage de l’application.
async function fetchMeals(query) {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        if (!response.ok) {
            throw new Error(`Erreur: ${response.statusText}`);
        }
        const data = await response.json();
        displayResults(data.meals);
    } catch (error) {
        console.error("Erreur lors de la récupération des repas:", error);
        document.getElementById('results').innerHTML = `<h6>Une erreur est survenue. Veuillez réessayer plus tard.</h6>`;
    }
}


// Ici on vas gérer l'affichage des résultats d'une recherche de recettes, en les organisant dans une grille avec un titre, 
// ou en affichant un message "Aucun résultat trouvé" si la recherche n'a rien retourné.
function displayResults(meals) {
    // Permet d'effacer les résultats d'une recherche précédente pour n'afficher que les résultats actuels.
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (meals && meals.length > 0) { // Vérification  où l’API ne trouve aucune recette correspondant à la recherche.
        // Créer un titre h2 pour les résultats de recherche
        const resultsTitle = document.createElement('h2');
        resultsTitle.innerText = `Results for "${document.getElementById('searchInput').value}"`;

        resultsDiv.appendChild(resultsTitle); // Ajouter le titre au conteneur des résultats

        // Création d'un conteneur pour la grille des repas
        const gridDiv = document.createElement('div');
        gridDiv.className = 'grid';

        // Boucle forEach pour Parcourir et Afficher Chaque Recette
        meals.forEach(meal => {
            const mealDiv = document.createElement('div');
            mealDiv.className = 'meal';
            mealDiv.innerHTML = `
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}" style="width:100%; border-radius: 5px; margin-bottom: 0px;">
                <h3>${meal.strMeal}</h3>
                <h4 >${meal.strCategory}</h4>
                <h4 style="margin-top: 10px;"> -${meal.strArea}- </h4>
            `;
            mealDiv.addEventListener('click', () => openModal(meal));
            gridDiv.appendChild(mealDiv);
        });

        resultsDiv.appendChild(gridDiv); // Ajouter la grille au conteneur des résultats
    } else {
        resultsDiv.innerHTML = '<h6>Aucun résultat trouvé.</h6>';
    }
}

function getIngredients(meal) {
    let ingredientsList = '';
    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];
        if (ingredient) {
            ingredientsList += `<li style ="margin-left:20px; margin-top:10px">${measure} ${ingredient}</li>`;
        }
    }
    return ingredientsList;
}

function openModal(meal) {
    document.getElementById('modalTitle').innerText = meal.strMeal;
    document.getElementById('modalImage').src = meal.strMealThumb;
    document.getElementById('modalIngredients').innerHTML = getIngredients(meal);
    document.getElementById('modalDescription').innerText = meal.strInstructions;

    document.getElementById('modal').style.display = 'block';
}

document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

// Fermer la modale en cliquant à l'extérieur
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
