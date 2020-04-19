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
      "INSERT INTO book_images (book_id, src) VALUES" +
      "(1, '01/01.png'), (1, '01/02.png'), (1, '01/03.png'), (1, '01/04.png'), (1, '01/05.png'), (1, '01/06.png')," +
      "(1, '01/07.png'), (1, '01/08.png'), (1, '01/09.png'), (1, '01/10.png'), (1, '01/11.png'), (1, '01/12.png')," +
      "(1, '01/14.png'), (1, '01/14.png'), (2, '02/01.png'), (2, '02/02.png'), (2, '02/03.png'), (2, '02/04.png')," +
      "(2, '02/05.png'), (2, '02/06.png'), (2, '02/07.png'), (2, '02/08.png');"
  );
};

exports.down = function(db) {
  return db.runSql(
      "DELETE FROM book_images WHERE book_id IN (1, 2);"
  );
};

exports._meta = {
  "version": 1
};
