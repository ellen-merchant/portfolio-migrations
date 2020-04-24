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
    return db.createTable('article_tags', {
        article_id: {
            type: 'int', foreignKey: {
                name: 'article_tags_article_id_fk',
                table: 'articles',
                rules: {
                    onDelete: 'CASCADE'
                },
                mapping: 'id'
            }
        },
        tag_id: {
            type: 'int', foreignKey: {
                name: 'article_tags_tag_id_fk',
                table: 'tags',
                rules: {
                    onDelete: 'CASCADE'
                },
                mapping: 'id'
            }
        }
    });
};

exports.down = function (db) {
    return db.dropTable('article_tags');
};

exports._meta = {
    "version": 1
};
