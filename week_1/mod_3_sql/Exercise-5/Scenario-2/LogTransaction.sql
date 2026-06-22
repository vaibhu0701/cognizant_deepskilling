DELIMITER //

CREATE TRIGGER LogTransaction
AFTER INSERT ON Transactions
FOR EACH ROW
BEGIN
    INSERT INTO AuditLog(TransactionID, Action, Amount)
    VALUES (NEW.TransactionID, 'INSERT', NEW.Amount);
END //

DELIMITER ;