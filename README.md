# Bryan Ranchber – Portfolio (U02)

A portfolio website built from Pawan's Figma design using HTML, CSS, and JavaScript. The website has been made dynamic by loading CV information from a JSON file and projects from GitHub's API.

**Live site:** https://bryanranchber.github.io/u02-portfolio-bryanranchber-261101/

## Built with

- HTML and CSS (Flexbox and Grid)
- JavaScript (ES2024+)
- JSON (`data/cv.json`)
- GitHub REST API
- Google Fonts (Poppins and DM Sans)

## Reflektion

### Datans väg

I `projects.js` använder jag `fetch()` för att skicka en HTTP GET-förfrågan till GitHubs API och hämta mina publika repositories. GitHub svarar med en HTTP-statuskod och data i JSON-format som innehåller information om projekten, exempelvis namn, beskrivning och länkar. Jag kontrollerar först `response.ok` för att se om anropet lyckades. Om det lyckas använder jag `await response.json()` för att omvandla JSON-svaret till JavaScript-objekt.

Jag hämtar även grupprojektet U03 genom ett separat API-anrop och lägger till det i projektlistan med `push()`. Därefter går jag igenom projekten med en `for...of`-loop. För varje projekt hämtas även programmeringsspråken genom ett ytterligare API-anrop. Med hjälp av `document.createElement()` skapar jag sedan projektkort med bild, titel, beskrivning, tekniker och länkar. Elementen läggs till i DOM:en med `append()`, så att projekten visas på sidan.

### Två datakällor

Mitt CV hämtas från en lokal JSON-fil, `cv.json`, medan projekten hämtas från GitHubs API. Den största skillnaden är att jag själv kontrollerar innehållet och strukturen i JSON-filen, medan GitHub är en extern datakälla som jag inte kan påverka.

Båda hämtas med `fetch()` och behandlas med `response.json()`, men GitHub kan exempelvis returnera fel, sakna beskrivningar eller begränsa antalet API-anrop. Därför använder jag `response.ok` och `try...catch` för felhantering. Jag har även lagt till felhantering i `cv.js`, så att besökaren får ett tydligt meddelande om JSON-filen inte kan laddas.

### DOM och händelser

Istället för att skriva CV-poster och projektkort direkt i HTML skapar jag innehållet dynamiskt med JavaScript. I `cv.js` använder jag funktionen `renderCV()` för både arbetserfarenheter och utbildningar. Jag valde att återanvända samma funktion eftersom båda typerna av information har samma struktur. Det minskar upprepad kod och gör den enklare att underhålla.

I `projects.js` skapas projektkorten med `createElement()`, medan `textContent` används för att lägga in informationen som vanlig text istället för att tolka den som HTML. Jag använder `classList.add()` för att tilldela CSS-klasser och `append()` för att placera elementen på sidan. Jag använder också `addEventListener()` i `theme.js` och `menu.js`. Händelserna kopplas direkt till respektive knapp eftersom det är dessa element som användaren ska kunna interagera med.

### Markup du inte skrivit för hand

Jag har behållit samma semantiska HTML-struktur i det innehåll som genereras med JavaScript som i resten av portfolion. Varje CV-post skapas som ett `<article>` med en `<h3>`-rubrik. Rubrikerna för arbetserfarenhet och utbildning ligger redan i HTML som `<h2>`, vilket ger en logisk rubrikhierarki. Projektkorten skapas också som `<article>` med `<h2>` för projektnamnen. 

Länkar använder riktiga `<a>`-element och interaktiva knappar använder `<button>`. Bilderna har `alt`-attribut. Dekorativa ikoner använder `alt=""`, eftersom den tillhörande texten redan förklarar deras funktion. Projektbilderna får en beskrivning utifrån projektets namn. Jag använder även `aria-label` på meny- och temaknappen samt `aria-expanded` för att visa om mobilmenyn är öppen eller stängd.

### Temaväxling

Jag byggde temaväxlingen med CSS-variabler i `base.css`. När användaren klickar på lampknappen använder JavaScript `classList.toggle()` för att lägga till eller ta bort klassen `dark-mode` på HTML-elementet. De olika färgerna definieras i `:root` och `:root.dark-mode`, vilket innebär att JavaScript inte behöver ändra färgerna direkt.

Jag valde den här lösningen eftersom det gör koden enklare att underhålla. Om jag vill ändra en färg behöver jag bara ändra en CSS-variabel istället för flera olika element. Jag använder också `localStorage` för att spara användarens temaval, så att inställningen finns kvar vid omladdning och när användaren byter sida.

### Felhantering

I `projects.js` visar jag meddelandet `Loading projects...` medan GitHub-anropen pågår. På så sätt ser besökaren att innehållet håller på att laddas. Om GitHub returnerar ett fel, exempelvis HTTP 403 när API-gränsen nås, visas `Unable to load projects. Please try again later.`. Om projektlistan är tom visas istället `No projects available.`.

Jag har också lagt ett separat `try...catch` runt anropet till U03-projektet. Det innebär att mina egna projekt fortfarande kan visas om grupprojektet inte kan hämtas. Om programmeringsspråken inte kan hämtas använder jag en reservtext istället för att avbryta hela sidan.

Jag testade felhanteringen genom att tillfälligt använda felaktiga API-adresser. En begränsning är att jag inte har någon timeout, vilket innebär att laddningsmeddelandet kan ligga kvar länge om GitHub svarar långsamt.

### Styrkor och brister

Jag är nöjd med att portfolion är dynamisk och att koden är tydlig och lätt att förstå. En lösning jag är särskilt nöjd med är `renderCV()`, eftersom samma funktion kan generera både utbildningar och arbetserfarenheter utan att jag behöver skriva samma kod flera gånger.

Med mer tid skulle jag förbättra GitHub-integrationen. Just nu görs flera API-anrop, bland annat ett extra anrop per projekt för att hämta programmeringsspråken. Det gjorde att jag under utvecklingen ibland nådde GitHubs gräns för antal anrop och fick HTTP 403. Med mer tid skulle jag använda `sessionStorage` för att minska antalet API-anrop och lägga till en timeout för långsamma svar.

### AI-verktyg

Jag använde AI som stöd för att förstå JavaScript, felsöka problem och diskutera olika lösningar. Jag försökte arbeta stegvis och förstå vad koden gjorde istället för att bara kopiera färdiga lösningar. AI hjälpte mig bland annat att förstå `fetch()`, `async/await`, DOM-manipulation och felhantering samt att förbättra sidans responsivitet och färgkontraster.

Jag granskade förslagen, anpassade dem till min egen kod och testade funktionerna i webbläsaren. Ett konkret exempel var felhanteringen för U03, där jag tillfälligt ändrade API-adressen och kontrollerade att mina andra projekt fortfarande visades.

## Tillgänglighet och testning

Jag testade portfolion med enbart tangentbordet för att kontrollera att länkar och knappar gick att nå i en logisk ordning med synlig fokusmarkering. Jag kontrollerade även att temaknappen och hamburgermenyn fungerade med Enter och mellanslag. Jag testade samtliga fem sidor vid olika skärmbredder, bland annat 375px, 768px, 1024px och 1200px. Under testningen upptäckte jag att vissa element inte fick plats vid mindre desktopbredder. Därför justerade jag flera CSS-breakpoints från 1024px till 1200px.

Jag använde WebAIM Contrast Checker för att kontrollera färgkontraster enligt WCAG AA. Vissa gradientfärger hade för låg kontrast mot den vita bakgrunden, så jag skapade separata CSS-variabler med mörkare färger för text i ljust läge. Jag validerade samtliga fem HTML-sidor med W3C Validator och fick noll fel. Jag kontrollerade också webbläsarens konsol och såg inga fel vid normal användning.