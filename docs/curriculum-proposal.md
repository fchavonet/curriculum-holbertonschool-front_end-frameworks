<img height="50" align="right" src="https://raw.githubusercontent.com/fchavonet/fchavonet/refs/heads/main/assets/images/logo-holberton_school.webp" alt="Holberton School logo">

# Curriculum proposal

## Context

As part of the new Agentic AI track, this project will provide a practical introduction to several modern frontend frameworks from the JavaScript ecosystem:

- React
- Vue.js
- Svelte

The module will take the form of an intensive two-week curriculum focused on hands-on practice and technology comparison.

## Educational approach

The curriculum will rely on a comparative approach between frameworks.

Students will reproduce the same interface in order to work on:

- Frontend application structure.
- Component-based architecture.
- Data and interaction management.
- Frontend API consumption.
- Responsive design.
- Accessibility.
- Tailwind CSS.

The first week will intentionally minimize AI usage in order to reinforce technical fundamentals.

The second week will encourage the use of AI-assisted code generation tools to progressively adapt the React project to Vue.js and Svelte, while introducing practical topics related to migration workflows and AI collaboration.

## Project

The curriculum will therefore be based on a single responsive landing page project.

The project is intentionally kept simple (first project of the curriculum) and primarily aims to help students understand the fundamentals of modern frontend frameworks.

Students will develop the following sections:

- Header
- Hero
- About
- Features
- Dynamic gallery powered by an API
- CTA (Call To Action)
- Footer

The Gallery section will use a public external API in order to introduce:

- HTTP requests.
- `fetch()`.
- Loading states.
- Error handling.
- Dynamic data rendering.

The objective of this section is to keep the project simple and accessible while introducing a first realistic approach to frontend API consumption.

## Technical stack

### Frameworks

- React
- Vue 3
- Svelte

### Shared tooling

- Vite
- JavaScript
- Tailwind CSS

> TypeScript will not be introduced in this first version of the curriculum in order to allow students to strengthen their JavaScript fundamentals before moving on to more advanced concepts related to typing and the TypeScript ecosystem.

## Curriculum organization

### Week 1: React

- Initializing a React project with Vite.
- Cleaning and organizing the default project structure.
- Understanding the architecture of a modern React application.
- Installing and configuring Tailwind CSS.
- Structuring the project using reusable components.
- Creating the different sections of the landing page using a component-based approach.
- Understanding component composition and file organization.
- Passing data between components with `props`.
- Managing user interactions and events.
- Introducing state management with useState.
- Working with conditional rendering.
- Rendering dynamic lists of data.
- Consuming data from a public API using `fetch()`.
- Managing loading states and API error handling.
- Building the interface with a mobile-first responsive approach.
- Introducing frontend accessibility best practices.
- Organizing and refining the final frontend integration.

### Week 2: Vue.js & Svelte

During the second week, students will discover Vue.js and Svelte using the React project built during the first week as a foundation.

Students will progressively adapt the project in order to compare:

- Syntaxes.
- Reactivity systems.
- Component systems.
- Development approaches.

The use of AI tools will be encouraged during this phase in order to introduce practical challenges related to migration workflows and code adaptation.

### Final day: framework comparison

A day will be dedicated to a comparative analysis of the technologies explored during the curriculum.

| Concept    | React        | Vue            | Svelte             |
| -----------| -------------| ---------------| ------------------ |
| Components | JSX          | `.vue`         | `.svelte`          |
| Reactivity | `useState`   | `ref/reactive` | reactive variables |
| Conditions | `&&`         | `v-if`         | `{#if}`            |
| Loops      | `map()`      | `v-for`        | `{#each}`          |
| Events     | `onClick`    | `@click`       | `on:click`         |
| Styling    | Tailwind CSS | Tailwind CSS.  | Tailwind CSS       |

## Typical project architecture

```
project/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── data/
│   ├── services/
│   ├── global.css
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── vite.config.js
```

## GitHub repository structure

```
curriculum-holbertonschool-front_end-frameworks/
├── README.md
├── docs/
│   ├── curriculum-proposal.md
├── design/
│   ├── mockup-desktop.webp
│   ├── mockup-tablet.webp
│   ├── mockup-mobile.webp
│   ├── style-guide.md
│   └── assets/
│       ├── images/
│
├── week-01-react/
│   ├── README.md
│   ├── tasks/
│   └── project/
│
├── week-02-vue/
│   ├── README.md
│   ├── tasks/
│   └── project/
│
└── week-02-svelte/
    ├── README.md
    ├── tasks/
    └── project/
```

## Expected deliverables

### For the Curriculum (what I will need to provide)

- A structured GitHub repository.
- Desktop and mobile mockups.
- A style guide.
- Progressive task-based instructions following the Holberton methodology.
- A list of good resources to help students.
- At minimum, a complete React reference project (correction).

### For Students

- A functional React project.
- A Vue version of the project.
- A Svelte version of the project.
- A first comparative analysis of modern frontend frameworks (comparison table or quiz ?).

## Educational value for the Agentic AI program

This module will also introduce:

- Adaptation to different technical environments.
- The use of AI tools in a development context.
- Code migration between frameworks.
- Comparison of technical solutions.

## Additional resources

I have already produced several educational resources that could support the curriculum, including a React-oriented live coding session.

- https://github.com/fchavonet/live_coding-react_and_daisy
- https://fchavonet.github.io/live_coding-react_and_daisy/
- https://www.youtube.com/watch?v=gn10dyt3KEA
<br><br>
- https://github.com/fchavonet/holbertonschool-concepts/blob/main/react/001-monter_un_projet_react_proprement_et_rapidement.md