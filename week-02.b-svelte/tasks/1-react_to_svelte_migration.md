# 1. React to Svelte migration

**Migrate** the previous **React** application to **Svelte**.

The goal of this task is to recreate the **same application using Svelte**, while preserving the original functionality, structure and user experience.

This task builds directly upon the **React project** completed during the first frontend framework project.

It also follows the same migration logic used during the previous **Vue.js** project, but this time you will adapt the application to the **Svelte** ecosystem.

Unlike the first React project, **AI-assisted development tools are allowed and encouraged**.

You may use **any AI assistant of your choice** to help you understand and convert the code.

- Examples include:
    - [ChatGPT](https://chatgpt.com/).
    - [Claude](https://claude.ai/).
    - [Gemini](https://gemini.google.com/).

AI should be used as a **learning and productivity tool**.

Do **not blindly copy generated code**.
<br>
You must be able to **understand, explain and validate the Svelte code** added to your project.

---

- Convert the **React** application into **Svelte**.
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

- Use **Svelte syntax** and patterns where appropriate.
    - Pay particular attention to the following React to Svelte equivalents:
        - `App.jsx` becomes `App.svelte`.
        - `main.jsx` becomes `main.js`.
        - JSX templates become Svelte templates.
        - `className` becomes `class`.
        - `htmlFor` becomes `for`.
        - React props become Svelte props.
        - `useState` becomes Svelte reactive state.
        - `useEffect` becomes Svelte lifecycle logic.
        - `.map()` rendering becomes `{#each}` blocks.
        - Conditional rendering becomes `{#if}`, `{:else if}` or `{:else}` blocks.
        - React event handlers become Svelte event bindings.
        - Controlled form inputs become Svelte bindings such as `bind:value`.

---

- Use **Svelte component files** where appropriate.
    - Components must be written as `.svelte` files.
    - Each component should keep a clear responsibility.
    - Reusable UI elements should remain separated from layout, section and card components.
    - Data and service files should remain separated from UI components when relevant.

---

The final **Svelte** version must remain **visually and functionally equivalent** to the **React** and **Vue.js** versions.
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
- The project must use **Svelte** components.
- The project must use `.svelte` component files.
- The project must use `@lucide/svelte` for icons.
- The project must preserve the **same content as the React version**.
- The project must preserve the **same responsive behavior as the React version**.
- The project must preserve the **same interactive behavior as the React version**.
- The project must include all original sections.
- Navigation links must work correctly.
- Dynamic content must be rendered correctly.
- Conditional content must be rendered correctly.
- The contact form must behave correctly.
- Form state and validation must be handled using Svelte patterns.
- The project must follow a **clean and maintainable folder structure**.
- The project must **not** introduce a new design.
- The project must **not** remove existing sections.
- The project must **not** use inline styles.
- The visual result **must match the React and Vue.js versions as closely as possible**.

**Repo:**

* GitHub repository: `holbertonschool-agentic_ai`.
* Directory: `front_end-frameworks/svelte/`.
* File: `src/App.svelte`, `src/main.js`, `src/global.css`, `src/components/`, `src/data/`, `src/services/`, `package.json`, `vite.config.js`, `eslint.config.js`.
* Code language: `Svelte`, `JavaScript`.
