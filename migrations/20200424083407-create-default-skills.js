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
        "INSERT INTO skills (start_date, description) VALUES" +
        "('2008-08-01', 'PHP 5/PHP 7, MySQL, HTML, CSS/SaSS')," +
        "('2010-06-01', 'Linux/LAMP Stack, JavaScript/JQuery/VueJS')," +
        "('2015-01-01', 'Laravel, Git, PHPUnit');"
    );
};

exports.down = function (db) {
    return db.runSql(
        "DELETE FROM employment WHERE id IN (1, 2, 3, 4, 5);"
    );
};

exports._meta = {
    "version": 1
};
