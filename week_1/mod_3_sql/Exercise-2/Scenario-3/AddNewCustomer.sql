DELIMITER //

CREATE PROCEDURE AddNewCustomer(
    IN p_CustomerID INT,
    IN p_Name VARCHAR(100),
    IN p_DOB DATE,
    IN p_Balance DECIMAL(10,2)
)
BEGIN

    IF EXISTS (
        SELECT *
        FROM Customers
        WHERE CustomerID = p_CustomerID
    ) THEN

        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Customer ID Already Exists';

    ELSE

        INSERT INTO Customers(
            CustomerID,
            Name,
            DOB,
            Balance,
            LastModified
        )
        VALUES(
            p_CustomerID,
            p_Name,
            p_DOB,
            p_Balance,
            CURDATE()
        );

    END IF;

END //

DELIMITER ;