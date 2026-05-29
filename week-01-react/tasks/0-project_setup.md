# 0. Project setup

Set up the initial **React** application using **Vite**.

The goal of this task is to create a **clean project foundation** that will be used for all the following tasks.

---

- Create a **React** project with **Vite** in the `front_end-frameworks/react/` directory.
    - Use the **React** framework and the **JavaScript** variant during the project initialization.

<table align="center">
    <tr valign="top">
        <td align="center">
            <img width="100%" src="https://raw.githubusercontent.com/fchavonet/holbertonschool-concepts/refs/heads/main/assets/images/react/monter_un_projet_react_proprement_et_rapidement-003.webp" alt="Desktop Screenshot">
        </td>
        <td align="center">
            <img width="100%" src="https://raw.githubusercontent.com/fchavonet/holbertonschool-concepts/refs/heads/main/assets/images/react/monter_un_projet_react_proprement_et_rapidement-004.webp" alt="Tablet Screenshot">
        </td>
    </tr>
</table>

_You can refer to [this documentation](https://tailwindcss.com/docs/installation/using-vite) to properly configure React and Tailwind CSS with Vite._

---

- Configure the project with the **required tools and packages** for the rest of the curriculum.
    - The project must include:
        - Tailwind CSS.
        - Lucide React.
        - ESLint.
        - GitHub Pages (`gh-pages`).

_You can refer to [this documentation]() to properly deploy a Vite + React project on GitHub Pages._

---

- Clean the default **Vite** files and **remove unused assets**.

---

- The final project configuration must allow:
    - The application to run on port `3000`.
    - The development server to use the host `0.0.0.0`.
    - Tailwind CSS to work correctly.
    - Lucide React to be used inside components.
    - ESLint checks to pass correctly.
    - The project to build for production.
    - Deployment using GitHub Pages.

---

- Create a **temporary homepage** in `src/App.jsx`.
    - The homepage must contain:
        - A main title (`h1`).
        - A short subtitle (`h2`).
        - At least one Lucide React icon.
        - Basic styling with Tailwind CSS.

_This temporary homepage is only used to verify that the project is correctly configured._

---

## Requirements:

- Remove unused default assets.
- The project must contain a `src/global.css` file.
- The project must import `global.css` in `src/main.jsx`.
- The project must include working `dev`, `lint`, `fix`, `build`, `preview` and `deploy` scripts.
- The project must include a valid `base` configuration for GitHub Pages.
- The deployment must publish the `dist` folder to a dedicated GitHub Pages branch.
- The deployed temporary homepage must be accessible online.

---

**Repo:**

- GitHub repository: `holbertonschool-agentic_ai`.
- Directory: `front_end-frameworks/react/`.
- Files: `src/global.css`, `src/App.jsx`, `src/main.jsx`, `eslint.config.js`, `index.html`, `package.json`, `vite.config.js`, `.gitignore`, `README.md`.
- Code language: `React, JavaScript`.