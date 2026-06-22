DELIMITER //

CREATE PROCEDURE ApplyAnnualFee()
BEGIN
    DECLARE done INT DEFAULT FALSE;
    DECLARE v_AccountID INT;

    DECLARE acc_cursor CURSOR FOR
        SELECT AccountID
        FROM Accounts;

    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;

    OPEN acc_cursor;

    fee_loop: LOOP
        FETCH acc_cursor INTO v_AccountID;

        IF done THEN
            LEAVE fee_loop;
        END IF;

        UPDATE Accounts
        SET Balance = Balance - 100
        WHERE AccountID = v_AccountID;
    END LOOP;

    CLOSE acc_cursor;
END //

DELIMITER ;