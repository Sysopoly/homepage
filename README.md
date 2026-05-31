# Sysopoly Homepage

Company website for [Sysopoly](https://sysopoly.com) — built with React, TypeScript, Vite, and Framer Motion.

## Tech Stack

- **React 19** with TypeScript 6
- **Vite 8** for dev/build tooling
- **Framer Motion** for animations
- **i18next** for internationalisation (EN/NO)
- **Lucide React** for icons
- **CSS Modules** for scoped styling

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Type-check & production build |
| `npm run lint` | ESLint |
| `npm run preview` | Preview production build |

## Deployment

The CI pipeline (`.github/workflows/build.yml`) builds a Docker image and pushes to GHCR on every push to `master`.

## License

MIT
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
