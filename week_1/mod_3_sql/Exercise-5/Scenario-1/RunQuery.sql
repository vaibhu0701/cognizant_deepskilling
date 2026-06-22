USE BankDB;

UPDATE Customers
SET Balance = Balance + 100
WHERE CustomerID = 1;

SELECT CustomerID, Name, Balance, LastModified
FROM Customers;