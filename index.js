'use strict';

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

/**
 * @param {Array} array
 * @param {*} item
 * @returns {Array} - New array with the item added or removed.
 */
function toggleArrayItem(array, item) {
    var isItemInArray = array.includes(item);
    if (isItemInArray) {
        return array.filter(function (arrayItem) {
            return arrayItem !== item;
        });
    } else {
        return [].concat(toConsumableArray(array), [item]);
    }
}

module.exports = toggleArrayItem;