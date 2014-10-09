"use strict";

function pager(query, page, pageSize) {
    page = page || 0;
    pageSize = pageSize || 10;
    return query.skip(page * pageSize).limit(pageSize);
}

function sorter(query, sortBy, sortOrder) {
    var sortQuery = {};
    sortBy = sortBy || {};
    sortOrder = sortOrder || 'desc';
    if (sortOrder === 'desc') {
        sortOrder = -1;
    } else {
        sortOrder = 1;
    }

    sortQuery[sortBy] = sortOrder;
    return query.sort(sortQuery);
}

module.exports = function (query, req) {
    if (!query || !req) {
        throw new TypeError("Query and request parameters are required!");
    }

    var pagedQuery = pager(query, req.query.page, req.query.pageSize);
    return sorter(pagedQuery, req.query.sortBy, req.query.sortOrder);
};