# egobaum 1.0

![Logo](/Egobaum_small.png "Logo")

DAS Tool im Internet für tolle Bäume ;-)

Das file egobaum.couch muss im folgenden Verzeichnis abgelegt werden: 
C:\Program Files (x86)\Apache Software Foundation\CouchDB\var\lib\couchdb
couch lokal starten: net start "Apache CouchDb"

startego ID in DB: fdd0e7bc69efb8736e4555873900404f
startego ID im MOC: 0b25d53ddd83594de9a839892c003cfa



---------------------------
TODO:
- Sourcemap

- Initialen Baum aus der DB holen statt aus dem MOCK
    - inkl. Angabe der "Tiefe"

- Eltern (rekursiv) und Geschwister von EGO anzeigen.

- Nachladen von Daten

- npm dev:
    - watch task
    - bei Bedarf auch Server neustarten
    
- Fehlerbehandlung:
    - JSON ungültig
    - Verbindungsprobleme
    - Ungültige Verknüpfung (Rekursion)
    - ...

- "View" weiter trennen. Späterer Wechsel auf Canvas soll erleichtert werden.

- Doku

- Unit-Tests

- Meilenstein 2 definieren