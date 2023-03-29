## Eigenschaften der Komponente erweitern
   - ITeamAssistantProps.ts im Ordner src/components öffnen
   - nach Zeile 6 eine neue Zeile einfügen
   - userEmailAddress : string;

## Eigenschaft aus dem WebPart an die Komponente übergeben
   - TeamAssistantWebPart.ts im Ordner src öffnen
   - Zeile 32 mit einem Komma abschließen und nach Zeile 32 eine neue Zeile einfügen
   - userEmailAddress: this.context.pageContext.user.email

## E-Mail-Adresse aus der neuen Eigenschaft in der Komponente anzeigen
   - TeamAssistant.tsx im Ordner src/components öffnen
   - Zeile 13 mit einem Komma abschließen und nach Zeile 13 eine neue Zeile einfügen
   - userEmailAddress
   - Zeile 25 bis 40 entfernen
   - Zeile 20, 22 und 23 entfernen
   - Nach Zeile 20 eine neue Zeile einfügen
   - <h3>Your email address is {escape(userEmailAddress)}</h3>
   - Zeile 9 bis 11 entfernen