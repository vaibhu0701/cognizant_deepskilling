DELIMITER //

CREATE PROCEDURE UpdateSalary(
    IN emp_id INT,
    IN percentage DECIMAL(5,2)
)
BEGIN
    IF EXISTS (
        SELECT *
        FROM Employees
        WHERE EmployeeID = emp_id
    ) THEN

        UPDATE Employees
        SET Salary = Salary + (Salary * percentage / 100)
        WHERE EmployeeID = emp_id;

    ELSE
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Employee ID Not Found';
    END IF;
END //

DELIMITER ;