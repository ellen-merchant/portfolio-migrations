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
    return db.createTable('employment_roles', {
        id: {type: 'int', primaryKey: true, autoIncrement: true},
        employment_id: {
            type: 'int', foreignKey: {
                name: 'employment_roles_employment_id_fk',
                table: 'employment',
                rules: {
                    onDelete: 'CASCADE'
                },
                mapping: 'id'
            }
        },
        title: 'string',
        start_date: 'timestamp',
        finish_date: 'timestamp',
    });
};

exports.down = function (db) {
    return db.dropTable('employment_roles');
};

exports._meta = {
    "version": 1
};
