DELIMITER //

CREATE FUNCTION CalculateMonthlyInstallment(
    principal DECIMAL(10,2),
    rate DECIMAL(5,2),
    years INT
)
RETURNS DECIMAL(10,2)
DETERMINISTIC
BEGIN
    DECLARE r DECIMAL(10,5);
    DECLARE n INT;
    DECLARE emi DECIMAL(10,2);

    SET r = rate / (12 * 100);
    SET n = years * 12;

    SET emi = (principal * r * POWER(1 + r, n)) /
              (POWER(1 + r, n) - 1);

    RETURN emi;
END //

DELIMITER ;