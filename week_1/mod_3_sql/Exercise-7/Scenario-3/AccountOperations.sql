DELIMITER //

CREATE PROCEDURE OpenAccount(
    IN p_AccountID INT,
    IN p_CustomerID INT,
    IN p_Balance DECIMAL(10,2)
)
BEGIN
    INSERT INTO Accounts(AccountID, CustomerID, Balance)
    VALUES(p_AccountID, p_CustomerID, p_Balance);
END //

CREATE PROCEDURE CloseAccount(
    IN p_AccountID INT
)
BEGIN
    DELETE FROM Accounts
    WHERE AccountID = p_AccountID;
END //

CREATE FUNCTION GetTotalBalance(
    p_CustomerID INT
)
RETURNS DECIMAL(10,2)
DETERMINISTIC
BEGIN
    DECLARE totalBal DECIMAL(10,2);

    SELECT SUM(Balance)
    INTO totalBal
    FROM Accounts
    WHERE CustomerID = p_CustomerID;

    RETURN IFNULL(totalBal,0);
END //

DELIMITER ;