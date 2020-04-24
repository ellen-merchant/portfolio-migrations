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
        "INSERT INTO tags (id, tag) VALUES (1, 'about me'), (2, 'project'), (3, 'notes');"
    );
};

exports.down = function (db) {
    return db.runSql(
        "DELETE FROM tags WHERE id IN (1, 2, 3);"
    );
};

exports._meta = {
    "version": 1
};
