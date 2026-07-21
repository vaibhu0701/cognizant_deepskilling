DELIMITER //

CREATE PROCEDURE TransferFunds(
    IN from_acc INT,
    IN to_acc INT,
    IN amount DECIMAL(10,2)
)
BEGIN
    DECLARE source_balance DECIMAL(10,2);

    SELECT Balance
    INTO source_balance
    FROM Accounts
    WHERE AccountID = from_acc;

    IF source_balance >= amount THEN

        UPDATE Accounts
        SET Balance = Balance - amount
        WHERE AccountID = from_acc;

        UPDATE Accounts
        SET Balance = Balance + amount
        WHERE AccountID = to_acc;

    ELSE

        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Insufficient Balance';

    END IF;
END //

DELIMITER ;