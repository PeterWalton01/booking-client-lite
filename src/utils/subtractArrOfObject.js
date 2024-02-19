/* Function Header
 *
 * function to form an un-symmetric difference
 * between to arrays of objects. The difference
 * is forced using a specified key value.
 * @author Peter Walton
 * @param  {UTCDateString}
 * @return {string}
 */
export function getDifference(array1, array2, key) {
  return array1.filter((object1) => {
    return !array2.some((object2) => {
      return object1[key] === object2[key];
    });
  });
}
