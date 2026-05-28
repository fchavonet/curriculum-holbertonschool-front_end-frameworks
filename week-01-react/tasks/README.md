# Front-end - Frameworks : React

## Description

This project introduces modern frontend development using React and the JavaScript ecosystem.

You will progressively build a responsive landing page inspired by modern interfaces while learning the fundamentals of component-based frontend architecture.

The project is intentionally centered around a single-page application in order to focus on frontend architecture, UI composition and modern development workflows without the additional complexity of backend systems or multi-page application logic.

This project will also serve as the foundation for future framework comparison exercises.
<br>
Later in the curriculum, the same interface will be adapted to other frontend frameworks in order to better understand the differences between modern component-based ecosystems and development approaches.

## Resources

### Read or watch:

- [React documentation](https://react.dev/learn)
- [Vite documentation](https://vite.dev/guide/)
- [Tailwind CSS documentation](https://tailwindcss.com/docs/installation/using-vite)
- [Lucide React documentation](https://lucide.dev/guide/react/)
- [ESLint documentation](https://eslint.org/docs/latest/)
- [GitHub Pages documentation](https://docs.github.com/en/pages)
- [Build a React project cleanly and quickly (FR)](https://github.com/fchavonet/holbertonschool-concepts/blob/main/react/001-monter_un_projet_react_proprement_et_rapidement.md)
- [How to deploy a Vite + React project on GitHub Pages]()

### Mockups

- [Figma]()
- [Style guide](../../design/style-guide.md)
- [Live preview](https://fchavonet.github.io/curriculum-holbertonschool-front_end-frameworks/)

<table align="center" width="100%">
    <tr>
        <th width="45%" align="center">Desktop view</th>
        <th width="30%" align="center">Tablet view</th>
        <th width="25%" align="center">Mobile view</th>
    </tr>
    <tr valign="top">
        <td width="40%" align="center">
            <img width="100%" src="../../design/mockup-desktop.webp" alt="Desktop Screenshot">
        </td>
        <td width="35%" align="center">
            <img width="100%" src="../../design/mockup-tablet.webp" alt="Tablet Screenshot">
        </td>
        <td width="25%" align="center">
            <img width="100%" src="../../design/mockup-mobile.webp" alt="Mobile Screenshot">
        </td>
    </tr>
</table>

## Learning objectives

At the end of this project, you are expected to be able to [explain to anyone](https://fs.blog/feynman-learning-technique/), without the help of Google:

### General

- What is Vite.
- What is React.
- What is a frontend build tool.
- What is a frontend component.
- What is component-based architecture.
- Why reusable components matter.
- Why frontend architecture matters.
- What is a production build.
- What is GitHub Pages.

### React

- What is JSX.
- What is a prop in React.
- What is state in React.
- What is reactive rendering.
- What is conditional rendering.
- What is dynamic rendering.
- How to organize a React project.
- How to create React components.
- How to structure reusable UI elements.
- How to pass data with props.
- How to manage state.
- How to render dynamic content.
- How to handle user interactions.

### UI and Accessibility

- What is semantic HTML.
- What is responsive design.
- What is accessibility.

### Tailwind CSS

- How utility-first CSS works.
- How to style components with Tailwind CSS.
- How to structure layouts with Flexbox and Grid.
- How responsive utility classes work.

### API Consumption

- How asynchronous requests work.
- How to fetch external data.
- How to display dynamic content from an API.
- How to manage loading states.

## Requirements

- All your files will be interpreted on Ubuntu 22.04 LTS.
- A `README.md` file is mandatory at the root of the repository.
- Your project must use React with Vite.
- Your project must use JavaScript.
- Your project must use Tailwind CSS.
- Your project must use Lucide React.
- No external CSS framework allowed except Tailwind CSS.
- Your code must be properly indented.
- All files should end with a new line.
- No inline styles allowed.
- All components must be reusable when relevant.
- The application must follow the provided mockups and style guide.
- The application must be responsive.
- Your project must run locally.
- Your project must build successfully.
- Your project must be deployable using GitHub Pages.

## More information

### Folder structure

During the project, you will progressively organize the application into reusable components.
<br>
Below is an example of the final folder structure for the project:

```
project/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ui
│   │   ├── cards
│   │   ├── layout
│   │   └── sections
│   ├── data/
│   ├── services/
│   ├── global.css
│   ├── App.jsx
│   └── main.jsx
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── vite.config.js
├── .gitignore
└── README.md
```