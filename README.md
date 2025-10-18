# RoryComponents

A collection of reusable Vue 3 components, built with TypeScript and styled with Tailwind CSS.

## Description

RoryComponents is a lightweight and modern component library designed to be easily integrated into any Vue 3 project. It provides a set of common UI elements that are accessible, customizable, and easy to use.

This project is bundled as an npm package and serves as a live component workshop using Storybook.

## Installation

To install the component library in your project, use npm:

```bash
npm install rory-components
```

## Usage

You can import any component directly from the library and use it in your Vue templates.

```vue
<script setup>
import { Button, Card } from 'rory-components';
</script>

<template>
  <Card>
    <h2>This is a Card</h2>
    <p>It can contain any content you like.</p>
    <Button>Click Me</Button>
  </Card>
</template>
```

## Available Components

This library currently includes the following components:

**Atoms:**
*   `Badge`
*   `Button`
*   `Caption`
*   `Error`
*   `GlowDivider`
*   `GlowImage`
*   `Header`
*   `Input`
*   `Paragraph`
*   `ScrollIndicator`

**Molecules:**
*   `Card`
*   `Dropdown`

**Organisms:**
*   `ConnectCard`

## Development & Contributing

To contribute to the development of these components, clone the repository and install the dependencies:

```bash
git clone https://github.com/your-username/rory-components.git
cd rory-components
npm install
```

### Running Storybook

This project uses Storybook for component development and visualization. To start the Storybook server, run:

```bash
npm run storybook
```

This will open a new browser tab where you can view, interact with, and test all the components in isolation.

### Building the Library

To build the distributable library files, run:

```bash
npm run build
```

The output will be generated in the `dist` directory.