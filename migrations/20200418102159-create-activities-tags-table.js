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
    return db.createTable('activities', {
        id: {type: 'int', primaryKey: true, autoIncrement: true},
        title: 'string',
        description: 'string',
        start_date: 'timestamp',
        title_link: 'string',
        display: 'boolean',
        external: 'boolean',
        created_at: {type: 'timestamp', notNull: false},
        updated_at: {type: 'timestamp', notNull: false},
    });
};

exports.down = function (db) {
    return db.dropTable('activities');
};

exports._meta = {
    "version": 1
};
