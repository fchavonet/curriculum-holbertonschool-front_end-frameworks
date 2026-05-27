# 2. Hero section

Create the hero section of the landing page.

The goal of this task is to build the main introduction section of the interface and start using external data from the project structure.

- Create a `Hero.jsx` component in `src/sections/Hero.jsx`.

    - The component must contain:
        - A small introductory badge (eyebrown).
        - A main title (`h1`).
        - A short description.
        - A primary call-to-action link.
        - A secondary call-to-action link.
        - A stats area.

- Create a `stats.js` file in `src/data/stats.js`.

    - The file must export an array of stats.
    - Each stat item must contain:
        - A `value`.
        - A `label`.

<details>
<summary>Example data structure (click to expand)</summary>

```javascript
const stats = [
  {
    value: "10K+",
    label: "Active agents"
  },
  {
    value: "99.9%",
    label: "Uptime"
  },
  {
    value: "50M+",
    label: "Tasks automated"
  },
  {
    value: "24/7",
    label: "Support"
  }
];

export default stats;
```
</details>

- Import the stats data into the `Hero.jsx` component.

- Render the stats dynamically using `.map()`.

- The hero section must match the provided mockup and [style guide](../../design/style-guide.md).

![Hero screenshot](../assets/images/screenshots/hero-desktop.webp)

- Use semantic HTML.

    - The section must use a `section` element.

- The section must have the following id:

    - Example:

        ```text
        hero-section
        ```

- Use Tailwind CSS to style the component.

- The hero section must be responsive.

    - On smaller screens, the layout must remain readable and visually consistent with the mockup.

![Hero screenshot](../assets/images/screenshots/hero-mobile.webp)

- Import and render the `Hero.jsx` component in `src/App.jsx`.

- Build and deploy your project with GitHub Pages.

## Requirements

- The component must be created in `src/sections/Hero.jsx`.
- The data file must be created in `src/data/stats.js`.
- The stats data must be imported into `Hero.jsx`.
- The stats must be rendered dynamically with `.map()`.
- Each stat item must display a `value` and a `label`.
- The component must be imported in `src/App.jsx`.
- The component must be rendered below the `Header.jsx` component.
- The section must use the `hero-section` id.
- The primary and secondary call-to-action links must be visually identifiable.

**Repo:**

- GitHub repository: `holbertonschool-agentic_ai`.
- Directory: `front_end-frameworks/react/`.
- Files: `src/sections/Hero.jsx`, `src/data/stats.js`, `src/App.jsx`.
- Code language: `JavaScript`.