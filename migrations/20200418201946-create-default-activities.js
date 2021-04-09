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
        "INSERT INTO activities (id, title, description, start_date, title_link, display, external) VALUES" +
        "(1, 'Chatbot', 'Started following a tutorial on how to build a chatbot in PHP using Laravel and Botman.', '2018-06-06', 'https://github.com/slipperthepanda/chatbot', true, true)," +
        "(2, 'Scalable Microservices with Kubernetes', 'Free Udacity Course, learning to containerise applications with Docker and Kubernetes.', '2018-06-10', 'https://eu.udacity.com/course/scalable-microservices-with-kubernetes--ud615', true, true), " +
        "(3, 'Automated Testing', 'Researching and implementing automated testing. So writing loads unit, feature and browser tests for my personal website.', '2018-06-21', 'https://github.com/slipperthepanda/personal-website', true, true), " +
        "(4, 'Continuous Integration', 'Now I''ve lots of automated tests I am now researching and implementing continuous integration and deployment(CI and CD).', '2018-08-01', '/articles/9', true, false)," +
        "(5, 'Travis CI (Part 1)', 'Implemented Travis CI on my personal website.', '2018-10-11', 'https://travis-ci.com/slipperthepanda/personal-website', true, true), " +
        "(6, 'Travis CI (Part 2)', 'Managed to implement Browser tests using Travis CI on my personal website. Also added Travis CI to my other repositories.', '2018-11-01', 'https://travis-ci.com/slipperthepanda', true, true)," +
        "(7, 'Added Chatbot to Personal Website', 'Using the BotMan plugin I created a chatbot that tells my visitors some jokes.', '2018-11-16', '/articles/11', true, false)," +
        "(8, 'React Bootcamp', 'Following Tyler McGinnis React Bootcamp.', '2019-01-26', '/articles/10', true, false)," +
        "(9, 'VueJS Portfolio', 'I have rewritten my personal website. It is now a static VueJS multi-page app.', '2019-04-19', '/articles/12', true, false)," +
        "(10, 'VueJS Testing', 'Following a Laracasts tutorial on how to test VueJS apps: https://laracasts.com/series/testing-vue', '2019-06-13', 'https://github.com/slipperthepanda/testing-vue', true, true);"
    );
};

exports.down = function (db) {
    return db.runSql(
        "DELETE FROM activities WHERE id IN (1, 2, 3, 4, 5, 6, 7, 8, 9, 10);"
    );
};

exports._meta = {
    "version": 1
};
