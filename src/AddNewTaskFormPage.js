/**
 *  The class groups related properties and methods
 *  for the Add new task form that is used in several pages
 */

import { test, expect } from "@playwright/test";

class AddNewTaskFormPage {
  constructor(page) {
    this.taskNameInput = page.locator("//*[@data-placeholder='Task name']");
    this.taskDescriptionInput = page.locator(
      "//*[@data-placeholder='Description']",
    );
    this.addNewTaskFormButton = page.locator(
      "//*[@data-testid='task-editor-submit-button']",
    );
  }

  /**
   *  Method to fill and sumbit the new task form
   *  @param {string} taskName
   *  @param {string} taskDescription
   */
  async fillNewTaskForm(taskName, taskDescription) {
    await this.taskNameInput.fill(taskName);
    await this.taskDescriptionInput.click();
    await this.taskDescriptionInput.fill(taskDescription);
    await this.addNewTaskFormButton.click();
  }
}
export default AddNewTaskFormPage;
