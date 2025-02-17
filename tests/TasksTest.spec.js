import { test, expect } from "@playwright/test";
import LoginPage from "../src/pages/LoginPage";
import SideBarPage from "../src/pages/SideBarPage";
import InboxPage from "../src/pages/InboxPage";
import AddNewTaskFormPage from "../src/pages/AddNewTaskFormPage";
import Utils from "../src/helpers/Utils";
var casual = require("casual");

test.beforeEach(async ({ page }) => {
  await page.goto("https://app.todoist.com/auth/login/");
  const loginPage = new LoginPage(page);
  await loginPage.submitLoginForm(process.env.EMAIL, process.env.PASSWORD);
  const sideBarPage = new SideBarPage(page);
  await expect(sideBarPage.profileSettingsButton).toBeVisible({
    timeout: 10000,
  });
  await page.goto("https://app.todoist.com/app/inbox");
});

test("As an user, I should be able to create a new task", async ({ page }) => {
  const inboxPage = new InboxPage(page);
  await inboxPage.clickOnAddNewTask();
  const addNewTaskFormPage = new AddNewTaskFormPage(page);
  const taskNumberToAdd = 1;
  const taskAddedNames = await addNewTaskFormPage.addNewTask(taskNumberToAdd);
  const taskNames = await inboxPage.getTaskName();
  const utils = new Utils();
  expect(utils.compareTwoArrays(taskAddedNames, taskNames)).toBeTruthy();
});

test("As an user, I should be able to create 10 new tasks", async ({
  page,
}) => {
  const inboxPage = new InboxPage(page);
  await inboxPage.clickOnAddNewTask();
  const addNewTaskFormPage = new AddNewTaskFormPage(page);
  const taskNumberToAdd = 10;
  await addNewTaskFormPage.addNewTask(taskNumberToAdd);
  expect(await inboxPage.taskNameLabel.count()).toEqual(taskNumberToAdd);
});

test.afterEach(async ({ page }) => {
  //The test will mark as complete all the tasks in the inbox dashboards
  const inboxPage = new InboxPage(page);
  await inboxPage.markTaskAsComplete();
});
