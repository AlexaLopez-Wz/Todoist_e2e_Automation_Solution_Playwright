/**
 *  The class groups related properties and methods
 *  for the Inbox web page
 */
class InboxPage {
  constructor(page) {
    this.addTask = page.locator(".plus_add_button");
    this.taskNameLabel = page.locator(".task_content");
    this.markAsCompleteCheckbox = page.locator(
      "//*[@aria-label='Mark task as complete']",
    );
    this.page = page;
  }

  /**
   *  Clicks on the Add new task button
   */
  async clickOnAddNewTask() {
    await this.addTask.click();
  }

  /**
   *  Clicks on the task checkbox to complete it
   */
  async markTaskAsComplete() {
    let tasksNumber = (await this.markAsCompleteCheckbox.count()) - 1;
    await this.page.waitForTimeout(2000);
    for (let i = 0; i <= tasksNumber; i++) {
      await this.markAsCompleteCheckbox.nth(0).click();
      await this.page.waitForTimeout(900);
    }
  }

  /**
   *  Creates an array with the task names
   */
  async getTaskName() {
    let taskNames = [];
    for (let i = 0; i < (await this.taskNameLabel.count()); i++) {
      taskNames.push(await this.taskNameLabel.nth(i).innerText());
    }
    return taskNames;
  }
}
export default InboxPage;
