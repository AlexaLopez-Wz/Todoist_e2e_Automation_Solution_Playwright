/**
 *  The class groups related properties and methods
 *  for the side bar
 */
class SideBarPage {
  constructor(page) {
    this.profileSettingsButton = page.getByRole("button", { name: "Settings" });
    this.inboxButton = page.getByRole("listitem").filter({ hasText: "Inbox" });
  }
}
export default SideBarPage;
