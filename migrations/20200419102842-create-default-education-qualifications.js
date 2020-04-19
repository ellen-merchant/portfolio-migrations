'use strict';

var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.up = function (db) {
    return db.runSql(
        "INSERT INTO education_qualifications (education_id, name, content) VALUES" +
        "(1, '2:1 BSc (Hons) Computing', '[{\"desc\": \"Final Year Modules:\"},{\"desc\": \"Web Systems\"},{\"desc\": \"Software Systems Modelling\"},{\"desc\": \"Digital Media and Games\"},{\"desc\": \"Final year dissertation and project\"}]')," +
        "(2, 'A Levels', '[{\"desc\": \"A-Level Information Technology (A)\"},{\"desc\": \"A-Level Maths (D)\"},{\"desc\": \"AS-Level Media Studies (C)\"},{\"desc\": \"AS-Level Geography (D)\"}]')," +
        "(2, 'GCSEs', '[{\"desc\": \"10 GCSEs A - C including Maths, Science and English\"}]');"
    );
};

exports.down = function (db) {
    return db.runSql(
        "DELETE FROM education_qualifications WHERE education_id IN (1, 2);"
    );
};

exports._meta = {
    "version": 1
};
