USE BankDB;

SELECT CustomerID,
       Name,
       DOB,
       CalculateAge(DOB) AS Age
FROM Customers;