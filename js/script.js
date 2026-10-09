// ============================================================
// JavaScript – Byg din interaktive frugtliste
// PRØV SELV FØRST. Brug kun AI som vejleder, hvis du går i stå.
// ✏️ = Du skriver selv. ✅ = Kode, du får udleveret.
// Du kan teste ét STEP ad gangen. Starterfilen har gyldig syntaks.
// ============================================================

// ------------------------------------------------------------
// STEP 0: Forbind JavaScript og HTML
// ------------------------------------------------------------
// ✏️ Indsæt et script-tag i <head> i index.html.
//    Link til js/script.js, og husk defer.
// ✅ use strict er skrevet for dig.
"use strict";

// ------------------------------------------------------------
// STEP 1: Opret et array med frugtobjekter
// ------------------------------------------------------------
// ✏️ Opret et array med variabelnavnet fruits (brug const).
//    Arrayet skal indeholde fem objekter med properties:
//    name, emoji og color. Alle værdier er strings.
//
//    name        | emoji | color
//    Apple       | 🍎    | Red
//    Banana      | 🍌    | Yellow
//    Orange      | 🍊    | Orange
//    Strawberry  | 🍓    | Red
//    Kiwi        | 🥝    | Green
//
// Hint: Arrayet bruger [ ], hvert objekt bruger { }.
// Husk komma mellem objekterne, og stav propertynavnene præcist.
// ✏️ Skriv dit array her ↓


// 💬 Forklar forskellen mellem et array og et objekt.

// ------------------------------------------------------------
// STEP 2: Hent elementer fra HTML
// ------------------------------------------------------------
// ✏️ Hent elementerne med document.getElementById().
//    Brug const og PRÆCIS disse variabelnavne:
//
//    HTML-id        | JavaScript-variabel
//    fruit-list     | fruitListElement
//    toggle-fruits  | toggleButtonElement
//    status-message | statusMessageElement
//
// ✏️ Skriv dine tre variabler her ↓


// ------------------------------------------------------------
// STEP 3: Byg frugtlisten med forEach og template literals
// ------------------------------------------------------------
// Eksempel med BØGER (brug mønsteret til frugterne):
//
// const books = ["Harry Potter", "Hobbitten"];
// books.forEach(function (book) {
//     console.log(book);
// });
//
// ✏️ A. Start en forEach på arrayet fruits.
//       Brug parameteren fruit (præcis det navn).
// ✏️ B. Indsæt HTML med fruitListElement.innerHTML += ...
//       Brug en template literal (backticks) med et <li>-element.
// ✏️ C. Giv <li> CSS-klassen "fruit-item" direkte i HTML'en.
// ✏️ D. Vis fruit.emoji, fruit.name og fruit.color med ${...}.
//       For eksempel: 🍎 Apple - Red
//
// Hint: En template literal bruger backticks (`) og ${...}.
//       += bevarer de elementer, du allerede har indsat.
// ✏️ Skriv din forEach og template literal her ↓


// 💬 Hvorfor bruger vi += og ikke kun =?

// ------------------------------------------------------------
// STEP 4: Funktion til at vise og skjule listen
// ------------------------------------------------------------
// ✅ Udleveret: En almindelig funktion til timeren.
// Den fjerner statusbeskeden, når der er gået 2 sekunder.
function clearStatusMessage() {
    statusMessageElement.textContent = "";
}

// ✅ Funktionshovedet er udleveret, så du kan teste efter hvert STEP.
// Læg mærke til syntaksen: function, funktionsnavn og parenteser.
function toggleFruitList() {

    // ✅ Udleveret: Skift CSS-klassen og gem resultatet (true/false).
    const isVisible = fruitListElement.classList.toggle("show");

    // ✏️ Skriv et if/else-statement, der bruger isVisible.
    //       isVisible er true, når listen vises, og false, når den skjules.
    //       Hvis true:
    //       - toggleButtonElement skal vise "Close fruit list"
    //       - statusMessageElement skal vise "Fruit list is open"
    //       Ellers:
    //       - toggleButtonElement skal vise "Show fruit list"
    //       - statusMessageElement skal vise "Fruit list is closed"
    //       Hint: Skift tekst med .textContent.
    // ✏️ Skriv if/else her ↓


    // ✅ Udleveret: Skjul statusbeskeden efter 2 sekunder.
    // Du skal IKKE skrive eller ændre denne del.
    setTimeout(clearStatusMessage, 2000);

}

// 💬 Forklar, hvorfor isVisible kan bruges som betingelse.

// ------------------------------------------------------------
// STEP 5: Kobl knappen til funktionen
// ------------------------------------------------------------
// ✏️ Tilføj en click-eventlistener til toggleButtonElement.
//       Ved klik skal toggleFruitList bruges som callback.
//       Hint: Brug addEventListener og funktionsnavnet UDEN ().
// ✏️ Skriv din kode her ↓


// ------------------------------------------------------------
// SLUTTJEK
// ------------------------------------------------------------
// ☐ index.html linker til js/script.js med defer
// ☐ fruits indeholder fem objekter
// ☐ Alle tre DOM-elementer er hentet
// ☐ forEach opbygger fem <li>-elementer med template literals
// ☐ Listen er skjult ved start og kan åbnes/lukkes
// ☐ Knappens tekst og statusbesked skifter korrekt
// ☐ Den udleverede timer fjerner statusbeskeden efter 2 sekunder
// ☐ Ingen røde fejl i Console, når opgaven er færdig
// ☐ Dit arbejde er committet og pushet til GitHub
// 💬 Forklar: array → forEach → innerHTML → click → classList
