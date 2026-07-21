DELIMITER //

CREATE PROCEDURE AddCustomer(
    IN p_CustomerID INT,
    IN p_Name VARCHAR(100),
    IN p_DOB DATE,
    IN p_Balance DECIMAL(10,2)
)
BEGIN
    INSERT INTO Customers
    VALUES (p_CustomerID, p_Name, p_DOB, p_Balance, CURDATE());
END //

CREATE PROCEDURE UpdateCustomer(
    IN p_CustomerID INT,
    IN p_Balance DECIMAL(10,2)
)
BEGIN
    UPDATE Customers
    SET Balance = p_Balance
    WHERE CustomerID = p_CustomerID;
END //

CREATE FUNCTION GetCustomerBalance(
    p_CustomerID INT
)
RETURNS DECIMAL(10,2)
DETERMINISTIC
BEGIN
    DECLARE bal DECIMAL(10,2);

    SELECT Balance INTO bal
    FROM Customers
    WHERE CustomerID = p_CustomerID;

    RETURN bal;
END //

DELIMITER ;