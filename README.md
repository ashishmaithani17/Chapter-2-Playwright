# 🎭 Chapter 2: Playwright Fundamentals & UI Interactions

Welcome to **Chapter 2** of my Playwright learning journey! This repository contains automated test scripts demonstrating how to interact with various web elements and perform complex user actions using Playwright and TypeScript.

## 🚀 Scripts Included

Here's an overview of the concepts covered in this chapter:

- **Locators (`locators.spec.ts`)**: Mastering Playwright's built-in locators (by Role, Label, Text, etc.) to target elements reliably across web pages.
- **Handling Dropdowns (`handledropdown.spec.ts`)**: Techniques for interacting with standard `<select>` dropdowns as well as custom UI dropdown elements (like Facebook's signup form).
- **Mouse Actions (`mouseactions.spec.ts`)**: Scripting different mouse clicks (Left, Right, Double), hovering over elements, and handling external constraints like Bot Detectors/Captchas.
- **Keyboard Actions (`keyboardactions.spec.ts`)**: Automating text entry, pressing specific keyboard keys (like Enter, Tab), and executing shortcuts (like Ctrl+A, Delete).
- **iFrames and Drag & Drop (`framedragdrop.spec.ts`)**: Learning how to pierce the `<iframe>` boundary using `frameLocator` and executing drag-and-drop actions between elements.
- **Date Pickers (`datepicker.spec.ts`)**: Strategies for interacting with calendar widgets and successfully picking specific dates.

## 🛠️ Setup & Execution

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation
Clone this repository and install the necessary dependencies:

```bash
# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

### Running Tests

To execute all tests in headless mode:
```bash
npx playwright test
```

To run a specific test file:
```bash
npx playwright test test/mouseactions.spec.ts
```

To view the Playwright UI mode for debugging:
```bash
npx playwright test --ui
```

---
*Happy Testing!* ✅