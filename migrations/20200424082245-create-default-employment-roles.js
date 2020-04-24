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
        "INSERT INTO employment_roles (employment_id, title, start_date, finish_date) VALUES" +
        "(1, 'Software Developer - Web Services', '2018-09-01 00:00:00', null)," +
        "(2, 'Software Team Lead', '2018-03-01 00:00:00', '2018-09-01 00:00:00')," +
        "(2, 'Business Continuity Manager', '2017-06-01 00:00:00', '2018-09-01 00:00:00')," +
        "(2, 'Developer', '2010-06-01 00:00:00', '2018-03-01 00:00:00')," +
        "(3, 'Web Developer', '2008-06-01 00:00:00', '2009-06-01 00:00:00')," +
        "(4, 'Line Worker', '2006-03-01 00:00:00', '2006-09-01 00:00:00')," +
        "(5, 'Shop Assistant', '2003-04-01 00:00:00', '2005-11-01 00:00:00');"
    );
};

exports.down = function (db) {
    return db.runSql(
        "DELETE FROM employment_roles WHERE employment_id IN (1, 2, 3, 4, 5);"
    );
};

exports._meta = {
    "version": 1
};
