# JavaScript – Byg din interaktive frugtliste

## Selvstændig opgave – prøv selv først, brug derefter AI som vejleder

I denne opgave arbejder du videre med **JavaScript arrays, arrays af objekter, forEach, template literals, almindelige funktioner, DOM, events og classList**.

Du skal bygge en **frugtliste med JavaScript**. Frugterne findes først kun som data i et array. Ved hjælp af en **forEach-løkke** og **template literals** skal du selv opbygge HTML-listen med `innerHTML +=`.

Listen er skjult, når siden åbnes. En knap skal kunne skifte mellem **Show fruit list** og **Close fruit list**, og du skal bruge `classList` til at vise og skjule listen.

HTML og CSS er næsten klar. Du skal selv forbinde `index.html` med `js/script.js` og skrive JavaScript-koden ved at følge kommentarerne i `js/script.js` fra **STEP 0**.

**Prøv altid selv først.** Hvis du går i stå, kan du bruge **ChatGPT som vejleder**. AI må kun hjælpe med ét spørgsmål eller et lille hint ad gangen – ikke med færdig kode. Læs [Sådan bruger du ChatGPT som vejleder](#4-sådan-bruger-du-chatgpt-som-vejleder).

---

# Fremgangsmåde – sådan kommer du i gang med projektet

I denne opgave skal du bruge **GitHub Template-metoden**.

Du skal derfor **ikke downloade projektet som ZIP og ikke bruge Fork**.

Følg denne rækkefølge:

```text
GitHub Template
↓
Dit eget repository på GitHub.com
↓
GitHub Desktop
↓
Visual Studio Code
↓
Arbejd selv med opgaven STEP for STEP
↓
Hvis du går i stå: Start en ny chat med vejlederprompten
↓
Commit
↓
Push
```

> Følg punkterne **ét ad gangen og i den viste rækkefølge**.

---

## 1. Opret dit eget repository på GitHub.com

Åbn det udleverede **template-repository** på GitHub.com.

Du skal være logget ind på din egen GitHub-konto.

Klik på:

**Use this template**

Vælg derefter:

**Create a new repository**

Vælg din egen GitHub-konto som ejer, og brug repository-navnet:

```text
js-fruit-list-starter
```

Klik derefter på:

**Create repository**

Vent et øjeblik, mens GitHub opretter dit nye repository.

### Kontrollér, at du er i dit eget repository

Når repositoryet er oprettet, skal du kontrollere navnet øverst på siden.

Det skal være **dit eget GitHub-brugernavn**, der står foran repositoryets navn.

Det kan fx se sådan ud:

```text
dit-brugernavn/js-fruit-list-starter
```

> **Stop her og kontrollér dette, før du går videre.**

---

## 2. Hent dit repository ned på din computer

Nu ligger projektet på **GitHub.com**, men du skal også have det ned på din egen computer.

Åbn **GitHub Desktop**.

Vælg:

**File → Clone repository...**

Vælg fanebladet **GitHub.com**, og find det repository, du netop har oprettet.

Hvis repositoryet ikke vises, kan du i stedet vælge fanebladet **URL** og indsætte adressen til dit repository fra GitHub.com.

### Vælg, hvor projektet skal gemmes

I feltet **Local path** vælger du, hvor projektet skal ligge på din computer.

> **Local path** betyder den mappe på din computer, hvor projektets filer bliver gemt.

Klik derefter på:

**Clone**

Vent, mens GitHub Desktop henter projektet ned på din computer.

---

## 3. Åbn projektet i Visual Studio Code

Når projektet er klonet, vælg:

**Open in Visual Studio Code**

Du skal arbejde direkte i den projektmappe, som GitHub Desktop har klonet.

Kontrollér, at projektet har denne struktur:

```text
js-fruit-list-starter/
│
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── README.md
```

---

## 4. Sådan bruger du ChatGPT som vejleder

### Prøv selv først – AI er din hjælp, når du går i stå

Læs først STEP'et i `js/script.js`, undersøg eksemplet og hintsene, og **skriv og test selv koden**. Brug browserens **Console** og **Elements** til at undersøge, hvad din kode gør.

Du behøver **ikke** bruge generativ AI, hvis du selv kan løse opgaven. Hvis du sidder fast efter et reelt forsøg, kan ChatGPT hjælpe dig videre som **vejleder**.

| Du | ChatGPT som vejleder |
| --- | --- |
| Forsøger selv og tester din kode først | Hjælper kun, når du beder om det |
| Deler din egen kode, fejl og dit forsøg | Giver ét spørgsmål eller et lille hint ad gangen |
| Retter selv og tester igen | Venter på dit svar eller rettelsesforsøg |
| Arbejder videre i VS Code | Giver ikke en færdig løsning eller en fejlliste |

### 4.1 Start en ny chat, hvis du går i stå

Åbn ChatGPT, og start en **ny chat**. Brug denne startprompt som din første besked – **ordret**:

```text
Jeg er nybegynder i JavaScript. Vær min vejleder. Hjælp mig med én fejl ad gangen. Giv ét spørgsmål eller et lille hint, og vent på mit svar eller rettelsesforsøg. Giv ikke en fejlliste, rettede kodelinjer eller en færdig løsning. Forklar begreber, hvis jeg går i stå. Jeg skal selv finde og skrive rettelsen.
```

Indsæt derefter den relevante del af din `js/script.js` (eller upload filen) og forklar, **hvad du prøvede, hvad du forventede, og hvad der skete**. Du kan også dele `index.html`, hvis fejlen handler om HTML-elementerne.

### 4.2 Arbejdsgangen i hvert STEP

```text
1. Læs STEP'et og dets hints
↓
2. Planlæg løsningen selv
↓
3. Skriv kode i VS Code
↓
4. Test i browseren, Console og Elements
↓
5. Virker det? Gå videre til næste STEP
   Går du i stå? Brug AI som vejleder med din egen kode
↓
6. Svar på ét spørgsmål / afprøv ét hint
↓
7. Ret selv og test igen
```

### 4.3 Eksempler på spørgsmål, hvis du sidder fast

| ✅ Godt – viser dit forsøg | ❌ Undgå |
| --- | --- |
| "Her er min forEach. Den viser kun én frugt. Jeg tror, jeg har brugt = i stedet for +=." | "Skriv min forEach." |
| "Min if/else ændrer ikke knapteksten. Her er min kode og mit gæt på hvorfor." | "Lav min if/else." |
| "Jeg får en fejl i Console på linje 32. Jeg tror, jeg har stavet variabelnavnet forkert." | "Ret alle fejl i min kode." |

### 4.4 Når du får en fejl

1. Læs fejlbeskeden og find linjen i Console.
2. Undersøg din egen kode og formulér et gæt.
3. Hvis du stadig sidder fast, så del **koden, fejlbeskeden og dit gæt** med AI-vejlederen.
4. Svar på vejlederens spørgsmål, og skriv selv rettelsen.

### 4.5 Hvis ChatGPT alligevel skriver løsningen

**Kopiér ikke løsningen.** Skriv i stedet:

```text
Husk din rolle som vejleder. Giv ikke kode eller en fejlliste. Stil mig ét spørgsmål eller giv ét lille hint, og vent på mit forsøg.
```

Test altid AI's råd i browseren. AI kan tage fejl. **Målet er, at du selv forstår og kan skrive koden.**

---

## 5. Arbejd med opgaven

Åbn `js/script.js`, og følg kommentarerne fra **STEP 0** til **STEP 5**:

| STEP   | Indhold                                                         |
| ------ | --------------------------------------------------------------- |
| STEP 0 | Forbind `index.html` med `js/script.js` (`use strict` er udleveret)   |
| STEP 1 | Lav et array med objekter med frugternes data                    |
| STEP 2 | Hent listen, knappen og statusfeltet fra HTML'en                 |
| STEP 3 | Brug `forEach` til selv at opbygge frugtlisten                   |
| STEP 4 | Udfyld `if/else` i den udleverede funktion, der viser og skjuler listen          |
| STEP 5 | Tilføj et click-event til knappen                                |


Du skal kun skrive kode, hvor der står **✏️**. **Starterfilen har gyldig syntaks fra begyndelsen, så du kan teste efter hvert STEP.** Følg **de præcise variabelnavne** i `js/script.js`, så de forskellige STEPs hænger sammen. HTML-strukturen og CSS-stylingen er lavet for dig.

**Start med dit eget forsøg.** Eksemplet på en `forEach` i STEP 3 handler om bøger: Brug det til at forstå strukturen, men tilpas selv løkken til frugtlisten. I STEP 4 får du både funktionshovedet og `const isVisible = fruitListElement.classList.toggle("show");` udleveret, men du skal selv skrive `if/else`. **Timer-funktionen og `setTimeout()` er også udleveret** og fjerner automatisk statusbeskeden efter 2 sekunder. Den kode skal du ikke skrive eller ændre.

> **Tip:** Lav et **commit** efter hvert STEP, der virker. Så kan du altid gå tilbage til en version, der fungerede.

---

## 6. Commit og push dit arbejde

Når du har gemt dine filer i VS Code, skal du gemme dit arbejde i Git og sende det op til GitHub.com.

Åbn **GitHub Desktop**.

I venstre side kan du se de filer, du har ændret.

Skriv en kort beskrivelse i feltet **Summary**, fx:

```text
STEP 3: Build fruit list with forEach
```

Klik derefter på:

**Commit to main**

Klik til sidst på:

**Push origin**

Kontrollér på GitHub.com, at dine ændringer er kommet op i dit repository.

---

## 7. Sluttjek

Gennemgå listen, før du afleverer:

- [ ] Script-tagget med `defer` står i `<head>` i `index.html`
- [ ] `use strict` står i toppen af `js/script.js` (udleveret)
- [ ] `fruits` er et array med fem objekter
- [ ] `forEach` bygger ét listeelement for hver frugt med `innerHTML +=`
- [ ] Alle frugter vises med emoji, navn og farve
- [ ] Frugtlisten er skjult, når siden indlæses
- [ ] Knappen viser og skjuler frugtlisten
- [ ] Knappens tekst skifter mellem **Show fruit list** og **Close fruit list**
- [ ] Der er ingen røde fejl i Console
- [ ] Du har prøvet selv først og kun brugt AI som vejleder, hvis du gik i stå
- [ ] Du har brugt de præcise variabelnavne fra `js/script.js`
- [ ] Dit arbejde er committet og pushet til GitHub.com
- [ ] Den udleverede timer sørger for, at statusbeskeden forsvinder igen efter 2 sekunder

### Afsluttende refleksion

Forklar til sidst ChatGPT hele forløbet med dine egne ord:

```text
array → forEach → template literal → innerHTML → click → classList
```

Forklar sammenhængen selv. Hvis du går i stå, kan du bede AI-vejlederen stille dig ét spørgsmål, der hjælper dig videre.

> **Husk:** Prøv selv først. Hvis du sidder fast: Prompt dig klogere – ikke hurtigere.
