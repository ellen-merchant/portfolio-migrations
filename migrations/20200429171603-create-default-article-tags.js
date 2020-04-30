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

exports.up = function (db) {
  return db.runSql(
      "INSERT INTO article_tags (article_id, tag_id) VALUES" +
      "(1, 3), (2, 3), (3, 1), (4, 1), (6, 3), (7, 3), (8, 3), (9, 2), (10, 2), (11, 2), (12, 2);"
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
