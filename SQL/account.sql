USE solotravelertest;

/*
DROP TABLE IF EXISTS person;

CREATE TABLE account (
	id int(11) NOT NULL AUTO_INCREMENT,

	-- parent_id int(11) NULL,			-- FK

	first_name varchar(32) NOT NULL,
	last_name varchar(32) NOT NULL,
	email varchar(254) NOT NULL,
	age int(3) NOT NULL,
    
    pass_word varchar(32) NOT NULL,
    
    create_time DATETIME DEFAULT CURRENT_TIMESTAMP,

	PRIMARY KEY (id)
);
*/

# INSERT DATA HERE

SET @fn = 'Sammi';
SET @ln = 'Tafoya';
INSERT INTO account
	(first_name, last_name, email, 				age, pass_word, create_time) 
	VALUES
    (@fn, 		 @ln, 		'sammit@live.com',  21,  'asdfasdf', NOW()  );
    
SET @fn = 'Sammi';
SET @ln = 'Tafoya';
SET @email = 'sammit@live.com';
SET @age = 21;
SET @pwd = 'asdfasdf';
INSERT INTO account (first_name, last_name, email, age, pass_word, create_time) VALUES
    (@fn, @ln, @email, @age, @pwd, NOW());

SET @fn = 'Dante';
SET @ln = 'Tafoya';
SET @email = 'dantet@live.com';
SET @age = 19;
SET @pwd = 'fdsfieif';
INSERT INTO account (first_name, last_name, email, age, pass_word, create_time) VALUES
    (@fn, @ln, @email, @age, @pwd, NOW());

