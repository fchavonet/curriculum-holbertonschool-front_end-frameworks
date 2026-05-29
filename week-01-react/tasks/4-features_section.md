# 4. Features section

Create the features section of the landing page.

The goal of this task is to continue working with dynamic data rendering while **introducing reusable React components and props**.

---

- Create a `Features` component in `src/sections/Features.jsx`.

    - The component must contain:
        - A small introductory badge (eyebrow).
        - A section title (`h2`).
        - A short introduction text.
        - A features grid.

---

- Create a `features.js` file in `src/data/features.js`.

    - The file must import icons from `lucide-react`.
    - The file must export an array of features.
    - Each feature item must contain:
        - An `icon`.
        - A `title`.
        - A `description`.

<details>
<summary><b>Example data structure (click to expand)</b></summary>

```javascript
import { Bot, Workflow, Brain, Database, Wrench, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "Autonomous agents",
    description: "Deploy self-sufficient AI agents that can work 24/7 without supervision."
  },
  {
    icon: Workflow,
    title: "Multi-step planning",
    description: "Break down complex goals into actionable steps with intelligent planning."
  },
  {
    icon: Brain,
    title: "Advanced reasoning",
    description: "Leverage state-of-the-art language models for intelligent decision-making."
  },
  {
    icon: Database,
    title: "Memory & context",
    description: "Persistent memory allows agents to learn and improve over time."
  },
  {
    icon: Wrench,
    title: "Tool integration",
    description: "Connect to thousands of APIs and services seamlessly."
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description: "Bank-level encryption and compliance with SOC2, GDPR, and HIPAA."
  }
];

export default features;
```
</details>

---

- Create a reusable `FeatureCard` component in `src/components/FeatureCard.jsx`.

---

- Import the features data into the `Features` component.

---

- Render the features dynamically using `.map()`.

---

- Pass the feature data to `FeatureCard` using props.

---

- The icon **must also be passed as a prop** and rendered dynamically inside the component.

---

- The features section must match the provided mockup and [style guide](../../design/style-guide.md).

![Features screenshot](../assets/images/screenshots/features-desktop.webp)

---

- Use **semantic HTML**.
  - The section must use a `section` element.

---

- The section must have the following `id`:
  - Example:

```text
features-section
```

---

- Use Tailwind CSS to style the component.

---

- The features section must be responsive.
  - On smaller screens, the layout must remain readable and visually consistent with the mockup.

![Features screenshot](../assets/images/screenshots/features-mobile.webp)

---

- Import and render the `Features` component in `src/App.jsx`.

---

- Build and **deploy your project** with GitHub Pages.

---

## Requirements

- The component must be created in `src/sections/Features.jsx`.
- The reusable card component must be created in `src/components/FeatureCard.jsx`.
- The data file must be created in `src/data/features.js`.
- The features data must be imported into the `Features` component.
- The features must be rendered dynamically with `.map()`.
- Feature data must be passed to `FeatureCard` using props.
- Each feature card must display an `icon`, a `title` and a `description`.
- Icons must be imported from `lucide-react`.
- The component must be imported in `src/App.jsx`.
- The component must be rendered below the `About` component.
- The section must use the `features-section` id.

**Repo:**

- GitHub repository: `holbertonschool-agentic_ai`.
- Directory: `front_end-frameworks/react/`.
- Files: `src/sections/Features.jsx`, `src/components/FeatureCard.jsx`, `src/data/features.js`, `src/App.jsx`.
- Code language: `JavaScript`.