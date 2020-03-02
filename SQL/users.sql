USE solotravelertest;
CREATE TABLE traits (
	id int(11) NOT NULL AUTO_INCREMENT,

	-- parent_id int(11) NULL,			-- FK

	first_name varchar(32) NOT NULL,
	last_account varchar(3) NOT NULL,
	category varchar(32) NOT NULL,
	category_id int(3) NOT NULL,

	PRIMARY KEY (id)
);
/**/
# INSERT DATA HERE