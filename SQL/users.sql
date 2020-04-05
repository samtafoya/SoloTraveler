USE solotravelertest;
CREATE TABLE users (
	id int(11) NOT NULL AUTO_INCREMENT,

	-- parent_id int(11) NULL,			-- FK

	traits int(32) NOT NULL, /* maybe an array later */
	ratings int(3) NOT NULL,
	friends int(32) NOT NULL,
	group_number int(3) NOT NULL,

	PRIMARY KEY (id)
);
/**/
# INSERT DATA HERE