// @ts-check
import { test, expect } from "@playwright/test";
import LoginPage from "../src/LoginPage";
import SideBarPage from "../src/SideBarPage";

test.beforeEach(async ({ page }) => {
  await page.goto("https://app.todoist.com/auth/login/");
});

test("Successful login", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.submitLoginForm(process.env.EMAIL, process.env.PASSWORD);
  const sideBarPage = new SideBarPage(page);
  await expect(sideBarPage.usernameLabel).toBeVisible({ timeout: 10000 });
});
