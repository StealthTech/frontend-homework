'use strict';

const plain = arr => arr.reduce(function (acc, cur) {
    if (Array.isArray(cur)) {
        acc.push(...plain(cur));
    } else {
        acc.push(cur);
    }
    return acc;
}, []);
