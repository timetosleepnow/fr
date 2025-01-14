// Récupérer l'heure actuelle
const now = new Date();
const hours = now.getHours();

// Définir les heures de sommeil (par exemple 22h00 à 6h00)
const isSleepTime = hours >= 22 || hours < 6;

// Modifier la réponse en fonction de l'heure
const responseElement = document.getElementById("response");

if (isSleepTime) {
    responseElement.textContent = "Oui, il est temps d'aller dormir ! 😴";
} else {
    const nextSleep = hours < 22 ? "à partir de 22h 🌙" : "demain soir 🌙";
    responseElement.textContent = `Non... Peut-être ${nextSleep}`;
}
