# 2. Hero section

Create the hero section of the landing page.

The goal of this task is to create a complete static React section before introducing external data rendering in the next tasks.

- Create a `Hero` component in `src/sections/Hero.jsx`.

    - The component must contain:
        - A small introductory badge (eyebrow).
        - A main title (`h1`).
        - A short description.
        - A primary call-to-action link.
        - A secondary call-to-action link.
        - A stats area.

- The stats area must contain the following information:
    - `10K+` / `Active agents`.
    - `99.9%` / `Uptime`.
    - `50M+` / `Tasks automated`.
    - `24/7` / `Support`.

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

- Import and render the `Hero` component in `src/App.jsx`.

- Build and deploy your project with GitHub Pages.

## Requirements

- The component must be created in `src/sections/Hero.jsx`.
- The component must be imported in `src/App.jsx`.
- The component must be rendered below the `Hero` component.
- The section must use the `hero-section` id.
- The section must contain a main title using an `h1` element.
- The primary and secondary call-to-action links must be visually identifiable.
- The stats area must display all four required stats.

**Repo:**

- GitHub repository: `holbertonschool-agentic_ai`.
- Directory: `front_end-frameworks/react/`.
- Files: `src/sections/Hero.jsx`, `src/App.jsx`.
- Code language: `JavaScript`.