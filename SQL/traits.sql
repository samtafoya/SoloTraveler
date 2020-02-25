USE solotravelertest;
/*CREATE TABLE traits (
	id int(11) NOT NULL AUTO_INCREMENT,

	-- parent_id int(11) NULL,			-- FK

	trait varchar(32) NOT NULL,
	trait_id varchar(3) NOT NULL,
	category varchar(32) NOT NULL,
	category_id int(3) NOT NULL,

	PRIMARY KEY (id)
); */
/**/
# INSERT DATA HERE

SET @tr = 'travel';
SET @tid = '1';
SET @cg = 'travel';
SET @cid = '1';
INSERT INTO traits
	(trait, trait_id, category, category_id) 
	VALUES
    (@tr,    @tid, 	  @cg,		@cid);
    
SET @tr = 'stay';
SET @tid = '2';
SET @cg = 'travel';
SET @cid = '1';
INSERT INTO traits
	(trait, trait_id, category, category_id) 
	VALUES
    (@tr,    @tid, 	  @cg,		@cid);

    