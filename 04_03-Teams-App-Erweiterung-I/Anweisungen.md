## Interface für Teammitglieder anlegen
   - Ordner models im Ordner src erstellen
   - Neue Datei IUser.ts im Ordner models erstellen 

export interface IUser {
    id: string;
    displayName: string;
    mail: string;
    userPrincipalName: string;
    profilePicture: string;
}

## Eigenschaft aus dem WebPart an die Komponente übergeben
   - Ordner services im Ordner src erstellen
   - TeamService.ts in den Ordner services kopieren