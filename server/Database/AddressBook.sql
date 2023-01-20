CREATE DATABASE AddressBook;

USE AddressBook;

CREATE TABLE contacts (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(50) NOT NULL,
    secondName VARCHAR(50) NOT NULL,
    phone1 VARCHAR(20) NOT NULL,
    phone2 VARCHAR(20),
    email VARCHAR(50) NOT NULL,
    date DATE NOT NULL DEFAULT CURRENT_DATE,
    company VARCHAR(50)
);


/*STORED PROCEDURES TO MANIPULATE THE DATABASE*/

/*Search across phone1, phone2, firstName, csecondName*/
DELIMITER //
CREATE PROCEDURE search_contacts(IN searchTerm VARCHAR(50))
BEGIN
    SELECT * FROM contacts
    WHERE firstName LIKE CONCAT('%', searchTerm, '%') OR 
          secondName LIKE CONCAT('%', searchTerm, '%') OR 
          phone1 LIKE CONCAT('%', searchTerm, '%') OR 
          phone2 LIKE CONCAT('%', searchTerm, '%');
END //
DELIMITER ;

CALL search_contacts('John');

/*Add a new contact*/
DELIMITER //
CREATE PROCEDURE insert_contact(IN firstName VARCHAR(50), IN secondName VARCHAR(50), IN phone1 VARCHAR(20), IN phone2 VARCHAR(20), IN email VARCHAR(50), IN company VARCHAR(50))
BEGIN
    INSERT INTO contacts (firstName, secondName, phone1, phone2, email, company)
    VALUES (firstName, secondName, phone1, phone2, email, company);
END //
DELIMITER ;

CALL insert_contact('John', 'Doe', '555-555-5555', '555-555-5556', 'john.doe@example.com', 'Acme Inc.');

/*Update a contact*/
DELIMITER //
CREATE PROCEDURE update_contact(IN id INT, IN firstName VARCHAR(50), IN secondName VARCHAR(50), IN phone1 VARCHAR(20), IN phone2 VARCHAR(20), IN email VARCHAR(50), IN company VARCHAR(50))
BEGIN
    UPDATE contacts
    SET firstName = firstName, secondName = secondName, phone1 = phone1, phone2 = phone2, email = email, company = company
    WHERE id = id;
END //
DELIMITER ;

CALL update_contact(1, 'Jane', 'Doe', '555-555-5555', '555-555-5556', 'jane.doe@example.com', 'Acme Inc.');

/*Delete a contact*/

DELIMITER //
CREATE PROCEDURE delete_contact(IN contact_id INT)
BEGIN
    DELETE FROM contacts
    WHERE id = contact_id;
END //
DELIMITER ;


CALL delete_contact(1);

/*Get all contacts*/
DELIMITER //
CREATE PROCEDURE get_all_contacts()
BEGIN
    SELECT * FROM contacts;
END //
DELIMITER ;

CALL get_all_contacts();

/*Get a contact by id*/
DELIMITER //
CREATE PROCEDURE get_contact_by_id(IN in_id INT)
BEGIN
    SELECT * FROM contacts
    WHERE id = in_id;
END //
DELIMITER ;

CALL get_contact_by_id(1);




