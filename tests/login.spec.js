// @ts-check
import { test, expect } from "@playwright/test";
import LoginPage from "../src/LoginPage";
import SideBarPage from "../src/SideBarPage";

test.beforeEach(async ({ page }) => {
  await page.goto("https://app.todoist.com/auth/login/");
});

test("As an user, I should be able to log in successfully by providing valid credentials", async ({
  page,
}) => {
  const loginPage = new LoginPage(page);
  await loginPage.submitLoginForm(process.env.EMAIL, process.env.PASSWORD);
  const sideBarPage = new SideBarPage(page);
  await expect(sideBarPage.profileSettingsButton).toBeVisible({
    timeout: 10000,
  });
});

test("As an user, I should not be able to login by providing a wrong password", async ({
  page,
}) => {
  const loginPage = new LoginPage(page);
  await loginPage.submitLoginForm(process.env.EMAIL, "wrong password");
  await expect(loginPage.errorMessageText).toBeVisible();
});

test("As an user, I should not be able to login by providing a wrong email", async ({
  page,
}) => {
  const loginPage = new LoginPage(page);
  await loginPage.submitLoginForm("wrong@email.com", process.env.PASSWORD);
  await expect(loginPage.errorMessageText).toBeVisible();
});
