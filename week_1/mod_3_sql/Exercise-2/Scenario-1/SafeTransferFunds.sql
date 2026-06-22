DELIMITER //

CREATE PROCEDURE SafeTransferFunds(
    IN from_acc INT,
    IN to_acc INT,
    IN amount DECIMAL(10,2)
)
BEGIN
    DECLARE from_balance DECIMAL(10,2);

    SELECT Balance
    INTO from_balance
    FROM Accounts
    WHERE AccountID = from_acc;

    IF from_balance < amount THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Insufficient Funds';
    ELSE
        UPDATE Accounts
        SET Balance = Balance - amount
        WHERE AccountID = from_acc;

        UPDATE Accounts
        SET Balance = Balance + amount
        WHERE AccountID = to_acc;
    END IF;
END //

DELIMITER ;