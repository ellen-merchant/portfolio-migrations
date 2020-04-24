'use strict';

var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function (options, seedLink) {
    dbm = options.dbmigrate;
    type = dbm.dataType;
    seed = seedLink;
};

exports.up = function (db) {
    return db.runSql(
        "INSERT INTO books (id, title) VALUES(1, 'Pandy Goes Home'), (2, 'Evie''s Book of Unusual Animals');"
    );
};

exports.down = function (db) {
    return db.runSql(
        "DELETE FROM books WHERE id IN (1, 2);"
    );
};

exports._meta = {
    "version": 1
};
