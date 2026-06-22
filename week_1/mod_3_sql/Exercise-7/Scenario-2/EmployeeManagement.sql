DELIMITER //

CREATE PROCEDURE HireEmployee(
    IN p_EmpID INT,
    IN p_Name VARCHAR(100),
    IN p_Salary DECIMAL(10,2)
)
BEGIN
    INSERT INTO Employees(EmployeeID, Name, Salary)
    VALUES(p_EmpID, p_Name, p_Salary);
END //

CREATE PROCEDURE UpdateEmployee(
    IN p_EmpID INT,
    IN p_Salary DECIMAL(10,2)
)
BEGIN
    UPDATE Employees
    SET Salary = p_Salary
    WHERE EmployeeID = p_EmpID;
END //

CREATE FUNCTION CalculateAnnualSalary(
    p_EmpID INT
)
RETURNS DECIMAL(10,2)
DETERMINISTIC
BEGIN
    DECLARE annualSalary DECIMAL(10,2);

    SELECT Salary * 12
    INTO annualSalary
    FROM Employees
    WHERE EmployeeID = p_EmpID;

    RETURN annualSalary;
END //

DELIMITER ;