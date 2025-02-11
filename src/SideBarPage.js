/**
 *  The class groups related properties and methods
 *  for the side bar
 */
class SideBarPage {
  constructor(page) {
    this.usernameLabel = page.getByText("Tester");
  }
}
export default SideBarPage;
