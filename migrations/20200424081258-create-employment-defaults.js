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
        "INSERT INTO employment (id, name, location, content) VALUES" +
        "(1, 'Censornet', 'Bristol', '')," +
        "(2, 'Mainstream Digital', 'Cirencester, Gloucestershire', 'During my time at the company I have gained a lot of experience creating high quality public and internal web portals as well as developing backend micro services and RESTful APIs. I have developed various systems while working at the company, including developing new products to sell to our customers and automating in house procedures. Within the first year of working at the company I had established the company’s Intranet, which improved the day to day working for all members of staff. More recently I have developed a public web portal for our customers where they configure and monitor the different products and services they have with the company. Although the company was fully established when I joined, my team was treated as a start up, therefore, I have been able to influence high level decisions such as programming techniques and tools and vastly expanding the company data centre infrastructure, showing I am motivated and proactive.\nSince learning the Laravel framework three years ago, I feel my skills in Object Orientated coding and automated testing have greatly improved, as well as my knowledge of design principles such as SOLID and DRY. Over this time I have also built several PHP packages, which provide reusable code and a foundation for programming in both our internal and external web platforms. I have also enhanced my skills by using VueJS, a JavaScript framework and the CSS extension language, SaSS, which I compile using NodeJS.\nIn recent months I have been learning Android, I can now add and enhance features on an existing Android application. This shows I have the ability to adapt to new challenges and that I have a strong programming foundation.\nAdditionally, I have established my skills in DevOps and networking, which involves deploying and maintaining Linux servers. I have experience using the Linux command line as well as installing and configuring the operation system and the services. With my expanded role I became instrumental in ensuring connectivity, security and performance of these servers and the underlying data centres.\nAfter being promoted to Software Team Lead, I have implemented several improvements within the team, including adopting the Kanban methodology, implementing an improved software life cycle and assuring design principles are utilised. I am instrumental in designing the software architecture behind all software projects and draw on my knowledge in DevOps to plan and integrate solutions in to the wider system architecture. I additionally ensure software is prioritised and achieved at a high standard within tight deadlines. Another big part of the role is to mentor other team members and pass on my experience of delivering high quality solutions, while encouraging them to keep abreast of the latest best practices and technologies. My role has given me increased responsibility and management skills.\nLast year I earned the role of Business Continuity Manager, which involves identifying risks, developing new policies and procedures and then implementing them across the entire company. This shows I have excellent organisational and communication skills. I gained the ISO 22301:2012 in Business Continuity accreditation for the company in May 2018.')," +
        "(3, 'Axiell', 'Ferndown, Dorset', 'The job at Axiell was part of my University placement year. They initially contracted me for 40 weeks which was then extended to 52 weeks after the company acknowledged the high quality work I was producing. My core duty was to create well designed maintainable interface using HTML and CSS. The project also required frequent validation, accessibility and usability testing, which I volunteered to take on and ultimately became my responsibility. Working for the company involved managing a large workload, good communication skills and team work in addition to excellent technical skills in HTML and CSS.')," +
        "(4, 'Pall', 'Ilfracombe, Devon', 'This job involved working to daily targets and working within regulations as well as correctly filling in paperwork and forms correctly and efficiently. The skills I obtained from this job were communication, team work and time management.')," +
        "(5, 'Combe Martin Wildlife Park', 'Combe Martin, Devon', 'While still in full time education I worked as a shop assistant. The skills I gained working within this role was time management, communication, money handling, customer service and team work.');"
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
