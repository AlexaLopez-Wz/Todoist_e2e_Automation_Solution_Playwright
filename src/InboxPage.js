/**
 *  The class groups related properties and methods
 *  for the Inbox web page
 */
class InboxPage {
  constructor(page) {
    this.addTask = page.locator(".plus_add_button");
    this.taskNameLabel = page.locator(".task_content");
    this.markAsCompleteCheckbox = page.locator(
      "//*[@aria-label='Mark task as complete']"
    );
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
    await this.markAsCompleteCheckbox.click();
  }

  /**
   *  Creates an array with the task name
   */
  async getTaskName() {
    let taskNames = [];
    for (let i = 0; i < this.taskNameLabel.count(); i++) {
      taskNames.push(await this.taskNameLabel.nth(i).innerText());
      console.log(await this.taskNameLabel.nth(i).innerText());
      console.log(taskNames);
    }
    console.log(taskNames);
    return taskNames;
  }
}
export default InboxPage;
