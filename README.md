# Tradera Proxy för Vercel

Detta projekt skapar en serverlös funktion på Vercel för att hämta auktioner från Tradera.

## Så här använder du

### 1. Klona detta projekt till GitHub
- Gå till [https://github.com/new](https://github.com/new) och skapa ett nytt repo (t.ex. tradera-proxy)
- Ladda upp innehållet i denna mapp

### 2. Installera beroenden lokalt (valfritt)

```bash
npm install
```

### 3. Koppla till Vercel

- Gå till [https://vercel.com](https://vercel.com)
- Klicka "Add new project"
- Importera ditt GitHub-repo
- Välj "Other" som framework
- Deploya!

### 4. Använd

Öppna i webbläsare:
```
https://dittprojekt.vercel.app/api/tradera?id=123456789
```

Byt ut ID till en Tradera-annons.

