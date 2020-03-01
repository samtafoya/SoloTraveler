USE solotravelertest;
CREATE TABLE traits (
	id int(11) NOT NULL AUTO_INCREMENT,

	-- parent_id int(11) NULL,			-- FK

	trait varchar(32) NOT NULL,
	trait_id varchar(3) NOT NULL,
	category varchar(32) NOT NULL,
	category_id int(3) NOT NULL,

	PRIMARY KEY (id)
);
/**/
# INSERT DATA HERE