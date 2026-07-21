DELIMITER //

CREATE FUNCTION HasSufficientBalance(
    acc_id INT,
    amt DECIMAL(10,2)
)
RETURNS BOOLEAN
DETERMINISTIC
BEGIN
    DECLARE bal DECIMAL(10,2);

    SELECT Balance INTO bal
    FROM Accounts
    WHERE AccountID = acc_id;

    RETURN bal >= amt;
END //

DELIMITER ;