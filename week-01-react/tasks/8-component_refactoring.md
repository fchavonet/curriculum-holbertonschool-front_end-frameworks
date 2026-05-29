# 8. Component refactoring

Refactor the project architecture into a more maintainable component structure.

The goal of this task is to reorganize the application into clear component categories, reduce duplication and improve code maintainability without changing the final visual result.

---

- Reorganize the `src/components` folder using the following structure:

```text
src/
├── components/
│   ├── cards/
│   │   ├── FeatureCard.jsx
│   │   ├── InsightCard.jsx
│   │   └── StatCard.jsx
│   ├── layout/
│   │   ├── Footer.jsx
│   │   └── Header.jsx
│   ├── sections/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Features.jsx
│   │   ├── Hero.jsx
│   │   └── Insights.jsx
│   └── ui/
│       ├── Brand.jsx
│       ├── Button.jsx
│       ├── SectionBadge.jsx
│       ├── SectionTitle.jsx
│       └── SocialLink.jsx
├── data/
├── services/
├── App.jsx
├── global.css
└── main.jsx
```

---

- Move the existing components into the appropriate folders.
    - Layout components must be placed in `src/components/layout/`.
    - Section components must be placed in `src/components/sections/`.
    - Card components must be placed in `src/components/cards/`.
    - Small reusable UI components must be placed in `src/components/ui/`.

---

- Create reusable UI components when relevant.
    - The project must include:
        - A reusable `Brand` component.
        - A reusable `Button` component.
        - A reusable `SectionBadge` component.
        - A reusable `SectionTitle` component.
        - A reusable `SocialLink` component.

---

- Use props to make reusable components flexible.
    - Reusable components must receive dynamic content through props when relevant.
    - For example:
        - Button text.
        - Button URL.
        - Section badge text.
        - Section title content.
        - Social link URL.
        - Social link label.
        - Card data.

---

- Update all imports after moving files.

---

- The final page must remain visually identical to the previous task.

    This task is a refactoring task.
    It must improve the code structure without changing the interface.

---

- The application must still match the provided mockups and [style guide](../../design/style-guide.md).

<table align="center">
    <tr>
        <th align="center" style="text-align: center;">Desktop view</th>
        <th align="center" style="text-align: center;">Tablet view</th>
        <th align="center" style="text-align: center;">Mobile view</th>
    </tr>
    <tr valign="top">
        <td align="center">
            <img width="100%" src="../../design/mockup-desktop.webp" alt="Desktop Screenshot">
        </td>
        <td align="center">
            <img width="100%" src="../../design/mockup-tablet.webp" alt="Tablet Screenshot">
        </td>
        <td align="center">
            <img width="100%" src="../../design/mockup-mobile.webp" alt="Mobile Screenshot">
        </td>
    </tr>
</table>

---

## Requirements

- The project must use the required folder structure.
- `Header.jsx` must be located in `src/components/layout/`.
- `Footer.jsx` must be located in `src/components/layout/`.
- Section components must be located in `src/components/sections/`.
- Card components must be located in `src/components/cards/`.
- Reusable UI components must be located in `src/components/ui/`.
- The project must include a reusable `Brand` component.
- The project must include a reusable `Button` component.
- The project must include a reusable `SectionBadge` component.
- The project must include a reusable `SectionTitle` component.
- The project must include a reusable `SocialLink` component.
- Reusable components must use props where relevant.
- All imports must be updated after moving files.
- The final page must keep the same visual result.
- The component hierarchy must remain clear and readable.
- The component must be imported in `src/App.jsx`.

**Repo:**

- GitHub repository: `holbertonschool-agentic_ai`.
- Directory: `front_end-frameworks/react/`.
- Files: `src/components/cards/FeatureCard.jsx`, `src/components/cards/InsightCard.jsx`, `src/components/cards/StatCard.jsx`, `src/components/layout/Footer.jsx`, `src/components/layout/Header.jsx`, `src/components/sections/About.jsx`, `src/components/sections/Contact.jsx`, `src/components/sections/Features.jsx`, `src/components/sections/Hero.jsx`, `src/components/sections/Insights.jsx`, `src/components/ui/Brand.jsx`, `src/components/ui/Button.jsx`, `src/components/ui/SectionBadge.jsx`, `src/components/ui/SectionTitle.jsx`, `src/components/ui/SocialLink.jsx`, `src/data/features.js`, `src/data/insights.js`, `src/data/steps.js`, `src/services/insightsService.js`, `src/App.jsx`.
- Code language: `JavaScript`.