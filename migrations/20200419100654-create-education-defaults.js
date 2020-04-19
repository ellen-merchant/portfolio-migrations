'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return db.runSql(
      "INSERT INTO education (id, name, location) VALUES(1, 'Bournemouth University', 'Bournemouth, Dorset'), (2, 'Ilfracombe College', 'Ilfracombe, Devon');"
  );
};

exports.down = function(db) {
  return db.runSql(
      "DELETE FROM education WHERE id IN (1, 2);"
  );
};

exports._meta = {
  "version": 1
};
