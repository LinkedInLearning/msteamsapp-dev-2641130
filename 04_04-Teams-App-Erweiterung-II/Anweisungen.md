## Dateien im Ordner components organisieren
   - Ordner TeamAssistant im Ordner components erstellen
   - Alle drei Dateien aus dem Ordner components in den neuen Unterordner verschieben

## Interface für Teammitglieder anlegen
   - Ordner TeamMembers im Ordner components erstellen
   - Alle drei Dateien aus dem Ordner TeamMembers kopieren und im Projekt im Ordner TeamMembers einfügen

## Anpassungen an der Komponente TeamAssistant vornehmen
   - ITeamAssistantProps.ts um eine Eigenschaft context erweitern (siehe ITeamMembersProps.ts)
   - In der Rückgabe anstatt der E-Mail-Adresse nun die Komponente TeamMembers ausgeben

## Kontext aus dem WebPart an die Komponente TeamAssistant übergeben
   - Zeile 33 mit einem Komma abschließen und eine neue Zeile einfügen
```
context: this.context
```
