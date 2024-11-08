// Vérifier les réponses du quiz
function verifierReponses() {
    let score = 0;

    const reponsesCorrectes = {
        q1: 'Bleu',
        q2: '4',
        q3: 'Baleine Bleue' // Défaut : Réponse "Baleine Bleue" manquante
    };

    const formulaire = document.forms['quiz-form'];

    if (formulaire.q1.value === reponsesCorrectes.q1) score++;
    if (formulaire.q2.value === reponsesCorrectes.q2) score++;
    if (formulaire.q3.value === reponsesCorrectes.q3) score++;

    const resultat = document.getElementById('resultat');
    resultat.style.transition = "all 0.3s ease-in-out";

    if (score === 3) {
        resultat.textContent = "Félicitations ! Vous avez répondu correctement à toutes les questions.";
        resultat.classList.remove("error-animation");
        resultat.style.color = "green";
    } else {
        resultat.textContent = `Vous avez ${score} réponse(s) correcte(s) sur 3.`;
        resultat.classList.add("error-animation");
        resultat.style.color = "red";
    }
}

// Tester l'addition avec un défaut
function testerAddition() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultat = document.getElementById('addition-resultat');

    if (isNaN(num1) || isNaN(num2)) {
        resultat.textContent = "Veuillez entrer des nombres valides.";
        resultat.className = "error";
    } else {
        // Défaut : Ajoute +1 au résultat final pour simuler une erreur
        resultat.textContent = `Résultat de l'addition : ${num1 + num2 + 1}`;
        resultat.className = "correct";
    }
}
function submitTestWithErrors() {
    const name = document.getElementById('name').value.trim();
    const age = document.getElementById('age').value.trim();
    const email = document.getElementById('email').value.trim();
    const result = document.getElementById('test-result');

    let message = "";
    let hasError = false;

    // Vérification du nom
    if (!name) {
        hasError = true;
        message += "Erreur : Le champ 'Nom' est vide.\n";
        document.getElementById('name').classList.add('error');
    } else {
        document.getElementById('name').classList.remove('error');
    }

    // Vérification de l'âge
    if (!age || isNaN(age) || age <= 0) {
        hasError = true;
        message += "Erreur : L'âge doit être un nombre valide supérieur à 0.\n";
        document.getElementById('age').classList.add('error');
    } else {
        document.getElementById('age').classList.remove('error');
    }

    // Vérification de l'email
    if (!email.includes("@")) {
        hasError = true;
        message += "Erreur : L'email est incorrect.\n";
        document.getElementById('email').classList.add('error');
    } else {
        document.getElementById('email').classList.remove('error');
    }

    // Affichage du résultat
    if (hasError) {
        result.textContent = message;
        result.className = "error";
    } else {
        result.textContent = "Formulaire soumis avec succès !";
        result.className = "correct";
    }

    // Alerte pédagogique
    alert("Souvenez-vous : tester toutes les combinaisons possibles est impossible !");
}
function submitDefectiveForm() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('form-error-message');

    // Réinitialiser les styles des champs
    document.getElementById('username').classList.remove('error');
    document.getElementById('password').classList.remove('error');

    // Vérification des champs
    if (!username || !password) {
        // Afficher une erreur si des champs sont vides
        errorMessage.style.display = 'block';
        errorMessage.textContent = "Erreur : Certains champs sont obligatoires.";
        if (!username) document.getElementById('username').classList.add('error');
        if (!password) document.getElementById('password').classList.add('error');
    } else {
        // Afficher un message de succès
        errorMessage.style.display = 'none';
        alert(`Formulaire soumis avec succès !\nNom d'utilisateur : ${username}\nMot de passe : ${password}`);
    }
}
// Vérifier si l'utilisateur a scrollé jusqu'en bas de la page
function isPageScrolledToBottom() {
    return window.innerHeight + window.scrollY >= document.body.offsetHeight;
}

// Mettre en évidence les défauts dans la section problématique
function highlightDefects() {
    const defectiveRows = document.querySelectorAll('.text-danger');
    defectiveRows.forEach(row => {
        row.classList.add('highlight'); // Ajout d'une animation pour les défauts
    });
    alert("Remarquez que les défauts sont regroupés dans certaines parties du tableau. Ces zones nécessitent des tests approfondis.");
}

// Ajouter l'événement pour exécuter highlightDefects lorsque la page est complètement affichée et que le scroll est en bas
function initHighlightDefectsOnScroll() {
    let hasRun = false; // Pour empêcher l'exécution multiple de la fonction

    // Détecter lorsque l'utilisateur a atteint le bas de la page
    window.addEventListener('scroll', () => {
        if (!hasRun && isPageScrolledToBottom()) {
            highlightDefects();
            hasRun = true; // Empêche la fonction de se relancer
        }
    });
}

// Attendre que la page soit entièrement chargée avant d'ajouter l'écouteur de scroll
window.addEventListener('load', initHighlightDefectsOnScroll);
