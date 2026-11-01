# Developer Portfolio

En portfoliosida byggd utifrån Pawans färdiga design i Figma.
Live site: https://bryanranchber.github.io/u01-porfolio-bryanranchber-260929/index.html

## Built with: 
- HTML
- CSS (Flexbox and Grid)
- CSS-variabler
- Google Fonts (Poppins and DM Sans)

## Reflektion

### Från skiss till kod
Jag började med att gå igenom Pawans design i Figma för att förstå sidornas struktur, färger, typsnitt, storlekar och avstånd utifrån det som gick att se i skissen. Jag började med att bygga HTML-strukturen för sidorna och lade sedan den gemensamma stylingen i base.css. Där samlade jag sådant som används på alla sidor, som header, nav, footer och färgvariabler, medan varje sida fick sin egen CSS-fil.

Det svåraste var att få desktop-versionen att följa skissen utan att påverka mobillayouten. Jag byggde därför mobile-first och använde en media query vid 1024px. Ett konkret problem var att profilbilden på Home-sidan blev oval när jag bara använde width. Eftersom bilden inte var kvadratisk behövde jag även sätta samma height för att få ett kvadratiskt område. Jag använde sedan object-fit: cover för att bilden skulle fylla området utan att tappa sina proportioner.

### Semantik
För sidornas grundläggande struktur använde jag header, nav, main och footer eftersom de beskriver sidans olika delar och gör strukturen tydligare. I navigationen använder jag ul och li eftersom länkarna till de fem sidorna är en lista av relaterade länkar.

För innehåll som hör ihop och utgör en egen del av sidan använde jag section, eftersom elementet passar för att gruppera relaterat innehåll. På Projects-sidan använde jag article för projektkorten eftersom varje projekt är ett eget innehåll som kan stå för sig själv. Jag använde div där jag behövde gruppera element för layout eller styling och där inget annat semantiskt element passade bättre.

### Layout
Jag använde Flexbox främst i header och navigation eftersom elementen behöver placeras och justeras i förhållande till varandra. Det passade bra för exempelvis logotypen, navigationen och de sociala länkarna, där innehållet främst behöver ordnas i en rad eller kolumn. Jag använde även Flexbox på Projects och About-sidan för att placera och justera innehåll inom olika delar.

På Projects-sidan använde jag Grid eftersom projektkorten ska placeras i ett rutnät. Med Grid blir det enklare att styra hur många kolumner som ska visas och anpassa layouten efter skärmstorleken.

Jag valde 1024px som breakpoint eftersom desktop-layouten behöver betydligt mer utrymme än mobillayouten. Vid den bredden finns det tillräckligt med plats för desktop-layoutens innehåll utan att den blir trång. Jag byggde därför sidan mobile-first och ändrar layouten när skärmen når 1024px.

Jag använde CSS-variabler för färgerna eftersom samma färger används på flera ställen. Det gör att jag kan ändra en färg på ett ställe istället för att behöva ändra varje regel separat. Det gjorde även dark mode enklare att skapa.

### Tillgänglighet

Jag använde alt-text på bilder som innehåller information och alt="" på dekorativa ikoner. Jag testade även tangentbordsnavigeringen med Tab för att se att det går att ta sig mellan länkarna och att fokusmarkeringen syns.

Jag validerade alla fem sidor med W3C:s validator och fixade de fel som hittades, bland annat problem med bildfilnamn som innehöll mellanslag. Efter ändringarna hade alla fem sidor noll valideringsfel.

Jag använde även WAVE för att kontrollera tillgänglighet och kontrast. Testerna visade bland annat problem med vissa gråa texter, footer-texten och den gröna statusmarkeringen. Jag ändrade färgerna och kontrollerade sedan alla sidor igen. Efter ändringarna visade WAVE inga kontrastfel.

Till sist testade jag sidan i Chrome, Firefox och Safari för att kontrollera att den fungerade och såg ut som den skulle i olika webbläsare.

### Styrkor och brister

En styrka tycker jag är att sidan följer Figma-designen nära samtidigt som den fungerar på både mobil och desktop. Uppdelningen mellan base.css och de sidspecifika CSS-filerna gör också projektet enklare att ändra och förstå, eftersom ändringar i en specifik sida inte behöver påverka de andra sidorna.

En annan styrka är att jag använde CSS-variabler för färgerna. Det gjorde det enklare att hålla färgerna konsekventa och att ändra dem när jag behövde förbättra kontrasten.

Med mer tid skulle jag vilja strukturera CSS-koden ännu bättre och göra fler delar återanvändbara. Jag skulle även vilja testa och finjustera layouten för fler skärmstorlekar för att se till att den fungerar bra även mellan mobil och desktop.

### AI-verktyg

Jag använde AI (ChatGPT) under projektet för att få feedback på min kod och för att förstå olika problem jag stötte på. Jag fick bland annat hjälp med CSS, dark mode, Git, GitHub Pages och linear-gradient.

Jag använde också AI för att förstå varför vissa lösningar inte fungerade som jag tänkte och testade sedan själv olika ändringar för att få koden att passa min design.
