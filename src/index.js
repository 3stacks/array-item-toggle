/**
 * @param {Array} array
 * @param {*} item
 * @returns {Array} - New array with the item added or removed.
 */
export default function(array, item) {
    const isItemInArray = array.includes(item);
    if (isItemInArray) {
        return array.filter(arrayItem => arrayItem !== item);
    } else {
        return [
            ...array,
            item
        ]
    }
}