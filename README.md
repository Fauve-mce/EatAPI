# 🍴 EatAPI

## 📋 Vue d'ensemble du projet
Bienvenue sur **EatAPI**, une application dédiée à la découverte de recettes !  
Avec EatAPI, vous pouvez rechercher des recettes par ingrédient, visualiser les résultats dans une grille élégante et consulter les détails d'une recette dans une fenêtre modale.  
L'application propose une interface moderne, simple et responsive, idéale pour explorer et s'inspirer de nouvelles recettes.

## 📱 Fonctionnalités

- **Recherche de recettes** : Entrez un ingrédient et appuyez sur "Entrée" pour lancer une recherche.
- **Affichage en grille** : Les recettes s'affichent dans une grille à 3 colonnes avec une image et un titre.
- **Détails de la recette** : Cliquez sur une recette pour ouvrir une modale affichant :
  - L'image de couverture.
  - Le titre.
  - La liste des ingrédients et leurs quantités.
  - Une description détaillée de la préparation.
- **Gestion des erreurs** : Affichage de messages conviviaux en cas de recherche vide ou d'absence de résultat.
- **Interface responsive** : Adaptée à tous les types d'écrans.

## 📸 Aperçu du projet

![image-EatAPI](./demoEatAPI.png)

![image-EatAPI](./demo2EatAPI.png)

## 📂 Structure du projet

## 🚀 Technologies utilisées

- **HTML5** pour la structure sémantique.
- **CSS3** (avec Grid et Flexbox) pour le design et la mise en page.
- **JavaScript (Vanilla)** pour les fonctionnalités dynamiques.
- **TheMealDB API** pour récupérer les données des recettes.
- **Google Fonts** pour une typographie moderne.

## ⚙️ Comment lancer le projet

Pour exécuter EatAPI localement :

1. **Clonez le dépôt** :
   ```bash
   git clone https://github.com/votre-username/EatAPI.git
   cd EatAPI
   ```
2. Ouvrez le fichier index.html dans votre navigateur préféré.

## 🔑 Configuration de l'API

EatAPI utilise l'API TheMealDB pour récupérer les recettes.

Note : L'API TheMealDB est publique et ne nécessite pas de clé d'API pour la recherche de recettes de base.
Pour en savoir plus, consultez la documentation de TheMealDB.

## 💡 Leçons apprises

Pendant le développement d'EatAPI, plusieurs points ont été abordés :

- Gestion des requêtes asynchrones : Utilisation d'async/await et de try/catch pour les appels à l'API.
- Manipulation du DOM : Création dynamique d'éléments HTML pour afficher les résultats.
- Design responsive : Mise en place d'une grille flexible en CSS pour une meilleure expérience sur mobile et desktop.
- Validation des entrées : Vérification de la saisie utilisateur pour éviter les recherches vides et améliorer l'expérience.

**Défis rencontrés**
Empêcher l'affichage de toutes les recettes lors d'une recherche vide.
Gérer les cas où l'API ne renvoie aucun résultat et afficher un message d'information.
**Solutions apportées**
Ajout d'une condition pour vérifier que l'utilisateur a saisi un ingrédient avant d'appeler l'API.
Implémentation d'une vérification dans displayResults pour afficher "Aucun résultat trouvé" en cas d'absence de données.

## 🖼️ Logo

Voici le logo de l'application EatAPI : ![EatAPI](./logo-EatAPI-2.svg)

## 🌐 Démo en ligne

Essayez la version déployée ici : [EatAPI](https://fauve-mce.github.io/EatAPI/)





