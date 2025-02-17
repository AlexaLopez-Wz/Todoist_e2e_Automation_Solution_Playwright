![image](https://user-images.githubusercontent.com/92478365/138358383-120b04b1-77ce-4380-9a05-3bf2c15bf4eb.png)

<!-- ABOUT THE PROJECT -->

## About The Project

Todoist is a simple yet powerful to-do list app that will help organize life and work.

<!-- ABOUT THE AUTOMATION -->

## Automated Solution

### Built With

Frameworks and libraries used:

- NPM @11.1.0
- Playwright @1.50.1
- Prettier @3.5.1
- ESLint
- Casual @1.6.2
- Dotenv @16.4.7
- playwright-slack-report @1.1.89

Programming language:

- JavaScript

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- [x] An IDE installed (Recommended: Visual studio code)
- [x] NPM installed
- [x] Chrome and FireFox browsers installed

### Installation

- Clone the repository : https://github.com/AlexaLopez-Wz/Todoist_e2e_Automation_Solution_Playwright.git
- Install Playwright using the terminal
  ```
  npm install playwright@latest
  ```
- Install Casual using the terminal
  ```
  npm install casual
  ```
- Install playwright-slack-report using the terminal
  ```
  npm i playwright-slack-report
  ```
- Install ESLint using the terminal
  ```
  npm install eslint
  ```
- Install Dotenv using the terminal
  ```
  npm install dotenv --save
  ```
- Create .env file: (To run the scripts the .env file must be created, where the login information will be located)
  1.  In the main folder add one new file using the following name:
      ```
      .env
      ```
  2.  Add the following information to the file :
      - EMAIL = myemail@email.com
      - PASSWORD = password
  3.  Save the file

### Solution Structure:

    TodoistAutomatedSolution
    ├── README.md
    ├── Reporter
    │   ├── FullRegressionReports
    │   │   └── file.html
    │   └── SmokeReports
    │       └── file.html
    ├── package-lock.json
    ├── package.json
    └── src
        ├── helpers
        │   └── Utils.js
        ├── pages
        │   ├── AddNewTaskFormPage.js
        │   ├── LoginPage.js
        │   ├── SideBarPage.js
        │   └── InboxPage.js
        └── tests
            ├── LoginTest.spec.js
            └── TasksTest.spec.js

Description:

- src:
  - HELPERS : here you can find the common data and javascript methods used by tests and classes.
  - PAGES : the files simulate each page in the website, here the elements are declared and used to perform actions.
    - TESTS: test cases are created here, assertions are used to validate that the actions were performed correctly.
- Reporter: here the reports with the status of the test cases executed are saved in html format (open it using any browser).

<!-- EXECUTING SCRIPTS  -->

## Execute scripts

Copy & paste the following code into the terminal

- Run all the test cases
  ```
  npx playwright test
  ```
