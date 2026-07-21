DELIMITER //

CREATE PROCEDURE GenerateMonthlyStatements()
BEGIN
    DECLARE done INT DEFAULT FALSE;
    DECLARE v_TransactionID INT;
    DECLARE v_AccountID INT;
    DECLARE v_Amount DECIMAL(10,2);

    DECLARE trans_cursor CURSOR FOR
        SELECT TransactionID, AccountID, Amount
        FROM Transactions
        WHERE MONTH(TransactionDate) = MONTH(CURDATE())
        AND YEAR(TransactionDate) = YEAR(CURDATE());

    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;

    OPEN trans_cursor;

    read_loop: LOOP
        FETCH trans_cursor INTO v_TransactionID, v_AccountID, v_Amount;

        IF done THEN
            LEAVE read_loop;
        END IF;

        SELECT CONCAT(
            'Transaction ID: ', v_TransactionID,
            ', Account ID: ', v_AccountID,
            ', Amount: ', v_Amount
        ) AS MonthlyStatement;
    END LOOP;

    CLOSE trans_cursor;
END //

DELIMITER ;