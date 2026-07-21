SELECT EmployeeID,
       Name,
       Salary,
       CalculateAnnualSalary(EmployeeID) AS AnnualSalary
FROM Employees;