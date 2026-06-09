# 1. React to Vue.js migration

**Migrate** the previous **React** application to **Vue.js**.

The goal of this task is to recreate the **same application using Vue.js**, while preserving the original functionality, structure and user experience.

This task builds directly upon the **React project** completed during the **previous week**.

Unlike the previous React project, **AI-assisted development tools are allowed and encouraged**.

You may use **any AI assistant of your choice** to help you understand and convert the code.

- Examples include:
    - [ChatGPT](https://chatgpt.com/).
    - [Claude](https://claude.ai/).
    - [Gemini](https://gemini.google.com/).

AI should be used as a **learning and productivity tool**.

Do **not blindly copy generated code**.
<br>
You must be able to **understand, explain and validate the Vue.js code** added to your project.

---

- Convert the **React** application into **Vue.js**.
    - The migration must include:
        - The main application structure.
        - Layout components.
        - Section components.
        - Reusable UI components.
        - Card components.
        - Data files.
        - Service files.
        - Dynamic rendering.
        - Conditional rendering.
        - Form state.
        - Form validation.
        - User interactions.

---

- Use **Vue.js syntax** and patterns where appropriate.
    - Pay particular attention to the following React to Vue.js equivalents:
        - `App.jsx` becomes `App.vue`.
        - `main.jsx` becomes `main.js`.
        - JSX templates become Vue templates.
        - `className` becomes `class`.
        - `htmlFor` becomes `for`.
        - React props become Vue props.
        - `useState` becomes Vue reactive state.
        - `useEffect` becomes Vue lifecycle logic.
        - `.map()` rendering becomes `v-for`.
        - Conditional rendering becomes `v-if`, `v-else-if` or `v-else`.
        - React event handlers become Vue event bindings.
        - Controlled form inputs become `v-model`.

---

The final **Vue.js** version must remain **visually and functionally equivalent** to the **React** version.
    - The application must include the same sections as the original project:
        - Header.
        - Hero.
        - About.
        - Features.
        - Insights.
        - Contact.
        - Footer.

---

## Requirements

- The application must **run locally**.
- The project must **build successfully**.
- ESLint checks must pass.
- The project must use **Vue.js** components.
- The project must use **Vue Single File Components** (`.vue` files).
- The project must use `lucide-vue-next` for icons.
- The project must preserve the **same content as the React version**.
- The project must preserve the **same responsive behavior as the React version**.
- The project must preserve the **same interactive behavior as the React version**.
- The project must include all original sections.
- Navigation links must work correctly.
- Dynamic content must be rendered correctly.
- The contact form must behave correctly.
- The project must follow a **clean and maintainable folder structure**.
- The project must **not** introduce a new design.
- The project must **not** remove existing sections.
- The project must **not** use inline styles.
- The visual result **must match the React version as closely as possible**.

**Repo:**

- GitHub repository: `holbertonschool-agentic_ai`.
- Directory: `front_end-frameworks/vue/`.
- File: `src/App.vue`, `src/main.js`, `src/global.css`, `src/components/`, `src/data/`, `src/services/`, `package.json`, `vite.config.js`, `eslint.config.js`.
- Code language: `Vue.js`, `JavaScript`.
