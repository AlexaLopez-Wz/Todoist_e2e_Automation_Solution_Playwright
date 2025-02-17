class Utils {
  /**
   * Compare two arrays
   */
  compareTwoArrays(firstArray, secondArray) {
    if (JSON.stringify(firstArray) === JSON.stringify(secondArray)) {
      return true;
    } else {
      return false;
    }
  }
}
export default Utils;
