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
  return db.createTable('book_images', {
    id: {type: 'int', primaryKey: true, autoIncrement: true},
    book_id: {
      type: 'int', foreignKey: {
        name: 'book_images_book_id_fk',
        table: 'books',
        rules: {
          onDelete: 'CASCADE'
        },
        mapping: 'id'
      }
    },
    src: 'string'
  });
};

exports.down = function(db) {
  return db.dropTable('book_images');
};

exports._meta = {
  "version": 1
};
