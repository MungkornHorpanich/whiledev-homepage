# Learning React with TypeScript

## Introduction

React is a JavaScript library for building user interfaces, and TypeScript is a superset of JavaScript that adds static types. Together, they allow you to build maintainable and type-safe applications.

In this guide, we will explore the basics of React and how to use it with TypeScript. We will cover:

- Setting up a React project with TypeScript
- Creating React components
- Using props and state
- Handling events
- Conditional rendering
- Working with lists and keys
- Form handling in React

Let's dive in!

---

## Table of Contents

- [Setting Up React with TypeScript](#setting-up-react-with-typescript)
- [Creating a Simple React Component](#creating-a-simple-react-component)
- [Using Props and State](#using-props-and-state)
- [Handling Events](#handling-events)
- [Conditional Rendering](#conditional-rendering)
- [Lists and Keys](#lists-and-keys)
- [Form Handling](#form-handling)
- [Conclusion](#conclusion)

---

## Setting Up React with TypeScript

To get started with React and TypeScript, we can use `create-react-app` with the TypeScript template.

Run the following command to create a new React project with TypeScript:

```bash
npx create-react-app my-app --template typescript
cd my-app
npm start
```

In this code:

- We define a functional component `MyComponent` using `React.FC`. The `FC` (Functional Component) type provides type safety and ensures the correct structure of our component.
- The component simply renders an `h1` element with the text "Hello, World!".

Now, let's use this component in the `App` component:

```tsx
import React from "react";
import MyComponent from "./MyComponent";

const App: React.FC = () => {
  return (
    <div>
      <MyComponent />
    </div>
  );
};
```

## Now we are learning about receiving props

```tsx
import React from "react";
import MyComponent from "./MyComponent";

interface AppProps {
  title: string;
  description: string;
  good: boolean;
}

const App: React.FC<AppProps> = ({ title, description, good }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <h1>Is this good chatgpt?: {good}</h1>
    </div>
  );
};
```
