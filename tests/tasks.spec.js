// @ts-check
import { test, expect } from "@playwright/test";
import LoginPage from "../src/LoginPage";
import SideBarPage from "../src/SideBarPage";
import InboxPage from "../src/InboxPage";
import AddNewTaskFormPage from "../src/AddNewTaskFormPage";
var casual = require("casual");

test.beforeEach(async ({ page }) => {
  await page.goto("https://app.todoist.com/auth/login/");
  const loginPage = new LoginPage(page);
  await loginPage.submitLoginForm(process.env.EMAIL, process.env.PASSWORD);
  const sideBarPage = new SideBarPage(page);
  await expect(sideBarPage.profileSettingsButton).toBeVisible({
    timeout: 30000,
  });
  await page.goto("https://app.todoist.com/app/inbox");
});

test("As an user, I should be able to create a new task", async ({ page }) => {
  const inboxPage = new InboxPage(page);
  await inboxPage.clickOnAddNewTask();
  const addNewTaskFormPage = new AddNewTaskFormPage(page);
  let taskName = casual.title;
  let taskDescription = casual.description;
  await addNewTaskFormPage.fillNewTaskForm(taskName, taskDescription);
  expect(await inboxPage.taskNameLabel.textContent()).toEqual(taskName);
});

test.afterEach(async ({ page }) => {
  const inboxPage = new InboxPage(page);
  await inboxPage.markTaskAsComplete();
});
