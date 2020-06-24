-- Create a database if it doesn't exist.
CREATE database IF NOT EXISTS tododb;
-- Use the database we created.
USE tododb;
-- If there's a table that has a foriegn key, 
-- assign to 0. So it can drop parent tables.
SET FOREIGN_KEY_CHECKS=0; 
-- Drop tables if they exist.
DROP TABLE IF EXISTS list;

-- Enable the foriegn keys on the parent tables.
SET FOREIGN_KEY_CHECKS=1;
-- Create Users table.
CREATE TABLE IF NOT EXISTS list (
    id INT(11) NOT NULL AUTO_INCREMENT,
    task VARCHAR(255) DEFAULT NULL,
    PRIMARY KEY (id)
) ENGINE=INNODB;