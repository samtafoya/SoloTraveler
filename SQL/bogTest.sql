USE solotravelertest;
CREATE TABLE blogsTest (
	id int(11) NOT NULL AUTO_INCREMENT,

	-- parent_id int(11) NULL,			-- FK

	user varchar(32) NOT NULL,
	name varchar(32) NOT NULL,
	body varchar(100) NOT NULL,
    number int(5) NOT NULL,

	PRIMARY KEY (id)
);