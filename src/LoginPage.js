/**
 *  The class groups related properties and methods
 *  for the logn web page
 */
class LoginPage {
  constructor(page) {
    this.emailInput = page.locator("#element-0");
    this.passwordInput = page.locator("#element-2");
    this.loginSubmitButton = page.getByRole("button", { name: "Log in" });
  }

  /**
   * The function fil the form inputs and
   * clicks on the login button
   * @param {env} email
   * @param {env} password
   */
  async submitLoginForm(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginSubmitButton.click();
  }
}
export default LoginPage;
