'use strict';

const plain = arr => arr.reduce(function (prev, curr) {
    if (Array.isArray(curr)) {
        prev.push(...plain(curr));
    } else {
        prev.push(curr);
    }
    return prev;
}, []);
