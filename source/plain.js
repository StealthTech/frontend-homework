'use strict';

const plain = function (arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(plain(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }

    return result;
};
