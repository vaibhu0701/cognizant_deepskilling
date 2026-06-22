DELIMITER //

CREATE TRIGGER CheckTransactionRules
BEFORE INSERT ON Transactions
FOR EACH ROW
BEGIN
    DECLARE bal DECIMAL(10,2);

    SELECT Balance
    INTO bal
    FROM Accounts
    WHERE AccountID = NEW.AccountID;

    IF NEW.Amount <= 0 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Deposit amount must be positive';

    ELSEIF NEW.TransactionType = 'WITHDRAW'
       AND NEW.Amount > bal THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Insufficient Balance';
    END IF;
END //

DELIMITER ;