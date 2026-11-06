# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## UTILISATION DE VITE & REACT & CHADCN COMMANDES 
## theme chadcn
https://ui.shadcn.com/themes 
# React + Vite + Tailwind CSS + shadcn/ui

Guide d'installation pas à pas, en **JavaScript** ou en **TypeScript**.

## Prérequis

- Node.js 18 ou plus récent

```bash
node -v
npm -v
```

---

## Étapes communes (JS et TS)

### 1. Créer le projet

**JavaScript**

```bash
npm create vite@latest mon-projet -- --template react
```

**TypeScript**

```bash
npm create vite@latest mon-projet -- --template react-ts
```

Puis, dans les deux cas :

```bash
cd mon-projet
npm install
```

### 2. Installer Tailwind CSS

```bash
npm install tailwindcss @tailwindcss/vite
```

Remplacer tout le contenu de `src/index.css` par :

```css
@import "tailwindcss";
```

---

## Version JavaScript

### 3. Créer `jsconfig.json` (à la racine, à côté de `package.json`)

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

> Si la CLI shadcn dit ne pas trouver l'alias `@/`, ajouter `"baseUrl": "."`
> dans `compilerOptions`. L'avertissement de dépréciation de VS Code est inoffensif.

### 4. Configurer `vite.config.js`

Pas besoin de `@types/node`. Le projet utilise les modules ES, donc `__dirname` n'existe pas : on le recrée.

```js
import path from "path"
import { fileURLToPath } from "url"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
```

### 5. Initialiser shadcn/ui

```bash
npx shadcn@latest init
```

Vérifier ensuite que `components.json` contient `"tsx": false`. Sinon, le corriger à la main :

```json
{
  "tsx": false
}
```

---

## Version TypeScript

### 3. Déclarer l'alias dans les deux fichiers tsconfig

**`tsconfig.json`**

```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ],
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

**`tsconfig.app.json`** : ajouter dans `compilerOptions` (garder les autres options) :

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

> Si la CLI shadcn dit ne pas trouver l'alias, ajouter `"baseUrl": "."` dans
> `compilerOptions` des deux fichiers.

### 4. Installer les types Node et configurer `vite.config.ts`

```bash
npm install -D @types/node
```

```ts
import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
```

### 5. Initialiser shadcn/ui

```bash
npx shadcn@latest init
```

---

## Réponses à donner à la CLI (`npx shadcn@latest init`)

Les questions peuvent varier légèrement selon la version de la CLI. Réponses recommandées :

| Question de la CLI | Réponse conseillée |
| --- | --- |
| Which color would you like to use as base color? | **Neutral** (ou Slate / Zinc selon ton goût) |
| Which style would you like to use? (si demandé) | Le style par défaut proposé |
| Would you like to use CSS variables for theming? (si demandé) | **Yes** |
| Confirmation d'écriture des fichiers | **Yes** |

Ce que la CLI crée :

- `components.json` : configuration de shadcn
- `src/lib/utils.js` (ou `utils.ts`) : fonction utilitaire `cn()`
- les variables CSS du thème dans `src/index.css`

---

## Ajouter des composants

```bash
npx shadcn@latest add button
npx shadcn@latest add card input dialog
```

Voir la liste des composants disponibles :

```bash
npx shadcn@latest add
```

Les fichiers sont copiés dans `src/components/ui/` (`.jsx` en JavaScript, `.tsx` en TypeScript).

---

## Utiliser un composant

`src/App.jsx` (ou `App.tsx`) :

```jsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="w-80">
        <CardHeader>
          <CardTitle>Bonjour shadcn</CardTitle>
        </CardHeader>
        <CardContent>
          <Button>Cliquez-moi</Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default App
```

---

## Lancer le projet

```bash
npm run dev
```

Ouvrir `http://localhost:5173`.

---

## Dépannage

| Problème | Solution |
| --- | --- |
| `'__dirname' is not defined` (JS) | Utiliser la version de `vite.config.js` ci-dessus avec `fileURLToPath` |
| Avertissement `baseUrl is deprecated` | Inoffensif ; supprimer `baseUrl` ou le garder si la CLI en a besoin |
| Erreur d'import `@/...` | Vérifier l'alias dans `vite.config` **et** dans `jsconfig.json` / `tsconfig` |
| Fichiers `.tsx` générés en JS | Mettre `"tsx": false` dans `components.json`, puis réajouter le composant |
| Styles absents | Vérifier `@import "tailwindcss";` dans `src/index.css` et son import dans `main.jsx` / `main.tsx` |
| Redémarrer après changement de config | `Ctrl + C` puis `npm run dev` |

La documentation officielle peut évoluer : ui.shadcn.com, section *Installation > Vite*.

