import toggleArrayItem from '../../../src/index';

const array = [
    1,
    2,
    3,
    4,
    5,
    6
];

const itemNotExist = 9;
const itemExist = 1;

console.log(toggleArrayItem(array, itemExist));
console.log(toggleArrayItem(array, itemNotExist));