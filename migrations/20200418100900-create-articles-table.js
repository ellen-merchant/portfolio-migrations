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
    return db.createTable('articles', {
        id: {type: 'int', primaryKey: true, autoIncrement: true},
        title: {type: 'string', unique: true},
        section: {type: 'text'},
        image: 'text',
        created_at: 'timestamp',
        updated_at: 'timestamp',
    });
};

exports.down = function (db) {
    return db.dropTable('articles');
};

exports._meta = {
    "version": 1
};
