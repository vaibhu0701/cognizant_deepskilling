DELIMITER //

CREATE PROCEDURE UpdateLoanInterestRates()
BEGIN
    DECLARE done INT DEFAULT FALSE;
    DECLARE v_LoanID INT;

    DECLARE loan_cursor CURSOR FOR
        SELECT LoanID
        FROM Loans;

    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;

    OPEN loan_cursor;

    loan_loop: LOOP
        FETCH loan_cursor INTO v_LoanID;

        IF done THEN
            LEAVE loan_loop;
        END IF;

        UPDATE Loans
        SET InterestRate = InterestRate + 0.5
        WHERE LoanID = v_LoanID;
    END LOOP;

    CLOSE loan_cursor;
END //

DELIMITER ;