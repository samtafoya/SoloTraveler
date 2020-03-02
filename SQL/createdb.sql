#create the database

-- 								CHANGE NAME HERE
-- 									\/
DROP SCHEMA solotravelertest;
CREATE DATABASE solotravelertest CHARACTER SET utf8;

-- -- -- -- -- -- --
-- I guess this stuff isn't necessary (esp since it fails)
# Create user - run only once per DB
-- CREATE USER 'root'@'localhost' IDENTIFIED BY 'root';
-- #CREATE USER 'ifsadmin'@`%` IDENTIFIED BY 'ifsadmin';
 
#give user permissions to db (probably not a great idea to GRANT ALL unless you really have to)
# (replace django.* with [mydatabasename].*)
#GRANT ALL ON django.* TO 'root'@'localhost';
-- -- -- -- -- -- --

-- DEV:
-- GRANT all privileges on solotravelertest.* to `root`@`localhost` -- IDENTIFIED BY 'root' WITH GRANT OPTION;
-- SHOW GRANTS FOR 'root'@'localhost';

-- STAGING:
-- GRANT all privileges on ifightsportsstaging.* to 'ifsadmin'@'localhost' IDENTIFIED BY 'ifsadmin' WITH GRANT OPTION;
-- SHOW GRANTS FOR 'ifsadmin'@'localhost';

-- PRODUCTION:
-- GRANT all on ifightsports.* to 'ifsadmin'@`%`; -- IDENTIFIED BY 'ifsadmin' WITH GRANT OPTION; -- http://www.fidian.com/problems-only-tyler-has/using-grant-all-with-amazons-mysql-rds
-- SHOW GRANTS FOR 'ifsadmin'@`%`;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
