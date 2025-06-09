# SHS Online Shop

Dieses Projekt stellt einen einfachen Onlineshop mit Bitcoin-Zahlung dar. Es basiert auf Node.js und Express.

## Installation

1. Node.js installieren
2. Abhängigkeiten installieren:
   ```bash
   npm install
   ```
3. Beispiel-Umgebung kopieren und anpassen:
   ```bash
   cp .env.example .env
   ```
4. Um den Server zu starten:
   ```bash
   npm start
   ```
5. Die Anwendung ist unter `http://localhost:3000` erreichbar.

## Docker

Alternativ kann die Anwendung mit Docker ausgeführt werden:

```bash
docker-compose up --build
```

## Sprachen

Die Übersetzungen befinden sich im Ordner `frontend/locales`. Standardmäßig sind Deutsch und Englisch verfügbar.


## Tests

Zum Ausführen der Tests:
```bash
npm test
```

## Umgebungsvariablen

Kopiere die Datei `.env.example` zu `.env` und passe die Werte bei Bedarf an.


