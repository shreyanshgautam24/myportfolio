# SHREYANSH GAUTAM: Full-Stack Developer Portfolio

This is a professional full-stack developer portfolio built using React, TypeScript, and Vite, with deployment managed via the `gh-pages` package.

---

## 🚀 Getting Started

### Prerequisites

* Node.js (v18 or higher)
* npm (or yarn/pnpm)
* Git

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/shreyanshgautam24/full-stack-portfolio.git](https://github.com/shreyanshgautam24/full-stack-portfolio.git)
    cd full-stack-portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

---

## 💻 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the local development server (usually at `http://localhost:5173`). |
| `npm run build` | Compiles the project into static files in the `/dist` directory. This runs before deployment. |
| `npm run deploy` | **(The Key Command)** Executes the build and pushes the static `/dist` content to the `gh-pages` branch on GitHub for live hosting. |

---

## 🌐 Deployment & Custom Domain

### 1. Custom Domain Configuration

To connect your project to a custom domain (e.g., `shreyanshgautam.com`), you must include a file named `CNAME` in your deployment.

**❗️ IMPORTANT:** Replace `yourdomain.com` with your actual purchased domain in the command below.

#### **Commands to Set Up Your Domain:**

1.  **Create/Update the CNAME file:**
    *(This command creates the file with only your domain name in the project root.)*
    ```bash
    echo 'yourdomain.com' > CNAME
    ```

2.  **Commit and Push the CNAME file:**
    ```bash
    git add CNAME
    git commit -m "feat: Add CNAME file for custom domain"
    git push origin main
    ```

3.  **Deploy to Update GitHub Pages:**
    *(This command copies the `CNAME` file to the live `gh-pages` branch.)*
    ```bash
    npm run deploy
    ```

### 2. DNS Setup (Registrar)

After deploying the `CNAME` file, you must log into your domain registrar (GoDaddy, Namecheap, etc.) and add the following records to point your domain to your GitHub Pages URL (`shreyanshgautam24.github.io`).

| Type | Name | Value | Purpose |
| :--- | :--- | :--- | :--- |
| **A** | `@` or leave blank | `185.199.108.153` | Points the root domain (shreyanshgautam.com) to GitHub. |
| **A** | `@` or leave blank | `185.199.109.153` | |
| **A** | `@` or leave blank | `185.199.110.153` | |
| **A** | `@` or leave blank | `185.199.111.153` | |
| **CNAME** | `www` | `shreyanshgautam24.github.io` | Points the 'www' subdomain to GitHub. |

---

## 👤 Portfolio Content & Technologies

The data powering this portfolio is based on the professional experience of **SHREYANSH GAUTAM**, Senior Software Engineer, focusing on Python, Angular, Django/Flask, and robust DevOps practices.

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
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

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
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
