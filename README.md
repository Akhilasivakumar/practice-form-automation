# 🚀 Practice Form Automation Framework

This project is an End-to-End Test Automation Framework built using:

- TypeScript
- Cucumber (BDD)
- Playwright
- Page Object Model (POM)

The framework automates a Practice Form application using a modular and scalable structure.

---

# 📌 Project Overview

This automation framework is designed to:

- Execute BDD test scenarios using Cucumber
- Use TypeScript for better maintainability and type safety
- Implement Page Object Model architecture
- Separate locators, page logic, utilities, and configuration
- Generate structured test execution reports

---

# 📁 Project Structure

```
project-root/
│
├── src/
│   ├── config/
│   │   └── env.ts                # Environment configuration
│   │
│   ├── features/
│   │   └── form.feature          # Cucumber feature file
│   │
│   ├── locators/
│   │   └── FormLocators.ts       # Element locators
│   │
│   ├── pages/
│   │   └── FormPage.ts           # Page Object class
│   │
│   ├── step-definitions/
│   │   └── form.steps.ts         # Step definitions
│   │
│   ├── support/
│   │   ├── hooks.ts              # Before/After hooks
│   │   └── world.ts              # Custom Cucumber world setup
│   │
│   ├── test-data/
│   │   └── sample.png            # Test file for upload validation
│   │
│   └── utils/
│       └── fileUpload.ts         # Utility functions
│
├── test-output/
│   ├── results/                  # Execution results
│   └── reports/
│       ├── cucumber-report.html
│       └── cucumber-report.json
│
├── cucumber.js                   # Cucumber configuration
├── tsconfig.json                 # TypeScript configuration
├── package.json
└── README.md
```

---

# ✅ Features Implemented

- Structured `src` folder architecture
- BDD implementation using Cucumber
- TypeScript-based step definitions
- Page Object Model design pattern
- Separate locator management
- Environment configuration file
- Custom hooks and world configuration
- Utility functions for reusable logic
- File upload testing support
- JSON and HTML report generation
- Local test execution support

---

# ⚙️ Prerequisites

- Node.js (v18 recommended)
- npm

---

# 🔧 Installation

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

# ▶️ Running Tests

Execute all test scenarios:

```bash
npm test
```

---

# 📊 Test Reports

After execution, reports are generated inside:

```
test-output/reports/
```

- `cucumber-report.html`
- `cucumber-report.json`

Open the HTML report in a browser to view detailed execution results.

---

# 🛠 Technology Stack

- Node.js
- TypeScript
- Cucumber
- Playwright

---

